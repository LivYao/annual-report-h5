const fs = require('fs');
const path = require('path');

// 读取 HTML 文件
function importHtml(htmlPath) {
  try {
    const html = fs.readFileSync(htmlPath, 'utf8');
    return html;
  } catch (error) {
    console.error('读取 HTML 失败:', error);
    throw error;
  }
}

// 生成 React 组件
function generateReactComponent(html, componentName) {
  const componentCode = `
import React from 'react';
import styles from './${componentName}.module.css';

export default function ${componentName}() {
  return (
    <div className={styles.container}>
      ${html}
    </div>
  );
}
`;
  return componentCode;
}

// 主函数
function main() {
  try {
    // 读取 HTML
    const html = importHtml('preview.html');
    
    // 创建组件目录
    const componentDir = path.join('app', 'components', 'ImportedDesign');
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }
    
    // 生成并保存 React 组件
    const componentCode = generateReactComponent(html, 'ImportedDesign');
    fs.writeFileSync(
      path.join(componentDir, 'index.tsx'),
      componentCode
    );
    
    // 创建基础样式
    const css = `
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
`;
    fs.writeFileSync(
      path.join(componentDir, 'ImportedDesign.module.css'),
      css
    );
    
    console.log('HTML 导入完成！');
  } catch (error) {
    console.error('导入过程出错:', error);
  }
}

main(); 