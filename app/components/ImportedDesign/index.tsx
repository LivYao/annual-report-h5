
import React from 'react';
import styles from './ImportedDesign.module.css';

export default function ImportedDesign() {
  return (
    <div className={styles.container}>
      <!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Annual Report H5</title>
    <style>
        /* 基础样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.5;
            background-color: #f5f5f5;
        }

        /* 容器样式 */
        .container {
            max-width: 414px;
            margin: 0 auto;
            min-height: 100vh;
            background: #fff;
            border-radius: 40px;
            overflow: hidden;
            position: relative;
        }

        /* 页面样式 */
        .page {
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
        }

        /* 标题样式 */
        .title {
            font-size: 24px;
            font-weight: bold;
            margin: 20px;
            color: #333;
        }

        /* 内容区域 */
        .content {
            padding: 20px;
        }

        /* 按钮样式 */
        .button {
            display: inline-block;
            padding: 12px 24px;
            background: #000;
            color: #fff;
            border-radius: 8px;
            text-decoration: none;
            margin: 10px;
            font-weight: 500;
        }

        /* 图片样式 */
        .image {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 20px;
        }

        /* 导航栏 */
        .nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
            padding: 15px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }

        /* 动画效果 */
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- 示例页面 1 -->
        <div class="page fade-in">
            <div class="content">
                <h1 class="title">年度回顾</h1>
                <img src="image/gift.png" alt="封面图片" class="image">
                <p class="description">2023年，我们一起创造了无数精彩时刻</p>
                <a href="#" class="button">开始浏览</a>
            </div>
        </div>

        <!-- 示例页面 2 -->
        <div class="page">
            <div class="content">
                <h2 class="title">重要时刻</h2>
                <div class="timeline">
                    <!-- 时间线内容 -->
                </div>
            </div>
        </div>

        <!-- 导航栏 -->
        <nav class="nav">
            <a href="#" class="nav-item">首页</a>
            <a href="#" class="nav-item">回顾</a>
            <a href="#" class="nav-item">分享</a>
        </nav>
    </div>
</body>
</html> 
    </div>
  );
}
