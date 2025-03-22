const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Figma API 配置
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = '7195MMVyz58KNWDWorr5xi';

// GitHub 配置
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'LivYao';
const REPO_NAME = 'annual-report-h5';

// 获取 Figma 文件信息
async function getFigmaFile() {
  try {
    console.log('正在获取 Figma 文件...');
    const response = await axios.get(`https://api.figma.com/v1/files/${FILE_KEY}`, {
      headers: {
        'X-Figma-Access-Token': FIGMA_ACCESS_TOKEN
      }
    });
    console.log('成功获取 Figma 文件！');
    return response.data;
  } catch (error) {
    console.error('获取 Figma 文件失败:', error.response?.data || error.message);
    throw error;
  }
}

// 获取组件信息
async function getStyles() {
  try {
    console.log('正在获取样式...');
    const response = await axios.get(`https://api.figma.com/v1/files/${FILE_KEY}/styles`, {
      headers: {
        'X-Figma-Access-Token': FIGMA_ACCESS_TOKEN
      }
    });
    console.log('成功获取样式！');
    return response.data.meta.styles;
  } catch (error) {
    console.error('获取样式失败:', error.response?.data || error.message);
    throw error;
  }
}

// 导出图片
async function exportFrame(frameId) {
  try {
    console.log(`正在导出框架 ${frameId}...`);
    const response = await axios.get(
      `https://api.figma.com/v1/images/${FILE_KEY}?ids=${frameId}&format=svg`,
      {
        headers: {
          'X-Figma-Access-Token': FIGMA_ACCESS_TOKEN
        }
      }
    );
    console.log(`成功导出框架 ${frameId}！`);
    return response.data.images[frameId];
  } catch (error) {
    console.error('导出框架失败:', error.response?.data || error.message);
    throw error;
  }
}

// 生成 HTML 和 CSS
function generateReactComponent(node, styles) {
  let imports = new Set(['React']);
  let jsx = '';
  let css = '';

  function processNode(node, parentClass = '') {
    const className = node.name.toLowerCase().replace(/\s+/g, '-');
    const fullClassName = parentClass ? `${parentClass}__${className}` : className;

    if (node.type === 'FRAME' || node.type === 'GROUP' || node.type === 'COMPONENT') {
      jsx += `<div className="${fullClassName}">\n`;
      css += `.${fullClassName} {\n`;
      css += `  position: relative;\n`;
      if (node.absoluteBoundingBox) {
        css += `  width: ${node.absoluteBoundingBox.width}px;\n`;
        css += `  height: ${node.absoluteBoundingBox.height}px;\n`;
      }
      css += '}\n\n';

      if (node.children) {
        node.children.forEach(child => processNode(child, fullClassName));
      }
      jsx += '</div>\n';
    } else if (node.type === 'TEXT') {
      jsx += `<p className="${fullClassName}">${node.characters}</p>\n`;
      css += `.${fullClassName} {\n`;
      css += `  font-family: ${node.style.fontFamily};\n`;
      css += `  font-size: ${node.style.fontSize}px;\n`;
      if (node.style.fontWeight) css += `  font-weight: ${node.style.fontWeight};\n`;
      if (node.fills && node.fills[0]) {
        const color = node.fills[0].color;
        css += `  color: rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${color.a});\n`;
      }
      css += '}\n\n';
    }
  }

  processNode(node);

  const componentName = node.name.replace(/\s+/g, '');
  const componentCode = `
import React from 'react';
import styles from './${componentName}.module.css';

export const ${componentName} = () => {
  return (
    ${jsx}
  );
};
`;

  return {
    componentCode,
    css,
    imports: Array.from(imports)
  };
}

// 更新本地文件
async function updateLocalFiles(figmaData) {
  // 生成 HTML 和 CSS
  const { html, css } = generateCode(figmaData.document);
  
  // 更新 HTML 文件
  fs.writeFileSync('app/components/FigmaDesign.tsx', `
import React from 'react';
import styles from './FigmaDesign.module.css';

export default function FigmaDesign() {
  return (
    ${html}
  );
}
  `);
  
  // 更新 CSS 文件
  fs.writeFileSync('app/components/FigmaDesign.module.css', css);
}

async function downloadImage(url, filename) {
  const response = await axios({
    url,
    responseType: 'stream'
  });
  
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(`image/${filename}`))
      .on('finish', resolve)
      .on('error', reject);
  });
}

async function updateGitHub(imagePath, imageBuffer) {
  try {
    const content = imageBuffer.toString('base64');
    await axios.put(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${imagePath}`,
      {
        message: `Update image from Figma: ${imagePath}`,
        content: content,
        branch: 'main'
      },
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('更新 GitHub 失败:', error.message);
    throw error;
  }
}

// 主函数
async function main() {
  try {
    const figmaData = await getFigmaFile();
    const styles = await getStyles();

    // 处理每个页面的框架
    for (const page of figmaData.document.children) {
      if (page.children) {
        for (const frame of page.children) {
          const { componentCode, css } = generateReactComponent(frame, styles);
          
          // 创建组件目录
          const componentDir = path.join('app', 'components', frame.name.replace(/\s+/g, ''));
          if (!fs.existsSync(componentDir)) {
            fs.mkdirSync(componentDir, { recursive: true });
          }

          // 写入 React 组件
          fs.writeFileSync(
            path.join(componentDir, 'index.tsx'),
            componentCode
          );

          // 写入 CSS 模块
          fs.writeFileSync(
            path.join(componentDir, `${frame.name.replace(/\s+/g, '')}.module.css`),
            css
          );

          // 导出并保存 SVG
          const svgUrl = await exportFrame(frame.id);
          if (svgUrl) {
            const svgResponse = await axios.get(svgUrl, { responseType: 'text' });
            fs.writeFileSync(
              path.join(componentDir, `${frame.name.replace(/\s+/g, '')}.svg`),
              svgResponse.data
            );
          }
        }
      }
    }

    console.log('同步完成！');
  } catch (error) {
    console.error('同步过程出错:', error);
  }
}

// 监听文件变化
fs.watch('app/components', { recursive: true }, (eventType, filename) => {
  if (filename) {
    console.log(`检测到文件变化: ${filename}`);
    main();
  }
});

main(); 