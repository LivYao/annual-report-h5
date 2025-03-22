const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// 监听 HTML 文件变化
fs.watch('preview.html', (eventType, filename) => {
  if (eventType === 'change') {
    console.log('检测到 HTML 文件变化，正在更新组件...');
    
    // 运行导入脚本
    exec('node html-import.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`执行出错: ${error}`);
        return;
      }
      console.log(stdout);
      
      // 提交更改到 Git
      exec('git add . && git commit -m "更新 HTML 设计" && git push', (error, stdout, stderr) => {
        if (error) {
          console.error(`Git 操作出错: ${error}`);
          return;
        }
        console.log('更改已提交到 Git');
      });
    });
  }
}); 