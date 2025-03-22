
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
    <title>年度回顾 - 预览版</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* 布局尺寸 */
            --phone-width: 393px;
            --phone-height: 852px;
            --phone-border-radius: 48px;
            --safe-area-top: 59px;
            --safe-area-bottom: 34px;
            
            /* 主色调 Primary Colors */
            --text-color: #000000;    /* 黑色：所有文字 */
            --primary-dark: #000000;    
            --primary-blue: #000000;    
            --primary-light: #000000;   
            --primary-orange: #ff9166;  /* 保持橙色：CTA、高亮 */
            --primary-gray: #000000;    
            --primary-beige: #000000;   
            
            /* 辅助色 Secondary Colors */
            --secondary-warm-1: #cd7f3c; /* 暖色：数据可视化 */
            --secondary-warm-2: #ffc0f;  /* 暖色：数据可视化 */
            --secondary-warm-3: #fff0ba; /* 暖色：警告背景 */
            --secondary-warm-4: #872837; /* 深红色：警告、错误 */
            
            --secondary-cool-1: #536359; /* 冷色：背景 */
            --secondary-cool-2: #80bf75; /* 绿色：成功状态 */
            --secondary-cool-3: #c2d16b; /* 黄绿色：正向数据 */
            --secondary-cool-4: #bad9ff; /* 浅蓝：信息框 */
            
            --secondary-neutral-1: #8f8269; /* 中性色：背景 */
            --secondary-neutral-2: #d1b580; /* 中性色：分割线 */

            /* 中性色 */
            --neutral-400: #000000;
            --neutral-600: #000000;
            --neutral-700: #000000;
            --neutral-800: #000000;
            --neutral-900: #000000;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: #ffffff;
            color: var(--primary-blue);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }

        .dashboard {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 20px;
            background: #ffffff;
        }

        .content {
            display: flex;
            gap: 40px;
            padding: 20px;
            background: #ffffff;
        }

        .preview-section {
            display: flex;
            gap: 40px;
            background: #ffffff;
        }

        .page-section {
            position: relative;
            display: block !important;
            opacity: 1 !important;
            transform: none !important;
            padding-top: 30px;
        }

        .phone-frame {
            width: var(--phone-width);
            height: var(--phone-height);
            position: relative;
            background: #ffffff;
            border-radius: var(--phone-border-radius);
            box-shadow: none;
            overflow: hidden;
            flex-shrink: 0;
            border: 2px solid #000;
            margin: 0;
            transform: scale(0.85);
            transform-origin: center center;
            margin-top: 0;
        }

        /* 从 index.html 复制必要的样式 */
        .page {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
            position: relative;
            overflow-y: auto;
            overflow-x: hidden;
            padding: calc(var(--safe-area-top) + 44px) 12px var(--safe-area-bottom);
            background: #ffffff;
            -webkit-overflow-scrolling: touch;
        }

        .notch {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: var(--safe-area-top);
            background: transparent;
            border: 2px solid #000;
            border-top: none;
            border-bottom-left-radius: 24px;
            border-bottom-right-radius: 24px;
            z-index: 1000;
        }

        .home-indicator {
            position: absolute;
            bottom: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 140px;
            height: 5px;
            background: #000;
            border-radius: 3px;
            z-index: 1000;
        }

        /* 页面标题 */
        .page-label {
            position: absolute;
            top: -40px;
            left: 0;
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: var(--text-color);
            padding: 8px 0;
        }

        /* 从 index.html 复制其他必要的样式 */
        .title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-dark);
            margin-bottom: 1.5rem;
            animation: fadeInUp 0.8s ease-out;
        }

        .subtitle {
            font-size: 1.125rem;
            color: var(--primary-light);
            margin-bottom: 2.5rem;
            animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .data-circles {
            position: relative;
            z-index: 2;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            padding: 16px;
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
        }

        .data-circle, .notification-btn {
            width: 100px;
            height: 100px;
            padding: 8px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(5px);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            animation: fadeInUp 0.6s ease-out;
            transition: transform 0.3s ease;
            border: 1px solid var(--secondary-neutral-2);
        }

        .data-circle .value {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 4px;
            color: var(--primary-dark);
        }

        .data-circle .label {
            font-size: 0.875rem;
            color: var(--primary-gray);
            text-align: center;
        }

        .page-title {
            position: relative;
            z-index: 2;
            font-size: 1.25rem;
            margin: 12px 0;
            padding: 0 16px;
            text-align: center;
            color: var(--neutral-900);
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(5px);
            border-radius: 12px;
            padding: 8px 16px;
        }

        .summary-card {
            width: 100%;
            max-width: 360px;
            margin: 16px auto;
            padding: 20px;
            background: white;
            border-radius: 16px;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .summary-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }

        .summary-item {
            padding: 8px;
            text-align: center;
            animation: fadeInUp 0.4s ease-out;
            transition: transform 0.3s ease;
        }

        .blur-circle {
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.2;
            animation: floatCircle 6s ease-in-out infinite;
        }

        .blur-circle-1 {
            top: -100px;
            right: -100px;
            background: var(--secondary-warm-1);
        }

        .blur-circle-2 {
            bottom: -100px;
            left: -100px;
            background: var(--secondary-cool-4);
        }

        /* 状态栏样式 */
        .status-bar {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 44px;
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--text-color);
            font-size: 0.75rem;
            z-index: 1001;
            background: #ffffff;
            backdrop-filter: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        /* 页面头部样式 */
        .page-header {
            position: absolute;
            top: 44px;
            left: 0;
            right: 0;
            height: 44px;
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            backdrop-filter: none;
            z-index: 1001;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .header-title {
            font-size: 1.125rem;
            font-weight: 500;
        }

        .header-back, .header-close {
            font-size: 1.25rem;
            color: var(--neutral-800);
            position: absolute;
        }

        .header-back {
            left: 15px;
        }

        .header-close {
            right: 15px;
        }

        /* 滚动条样式 */
        .dashboard::-webkit-scrollbar {
            height: 8px;
        }

        .dashboard::-webkit-scrollbar-track {
            background: var(--neutral-100);
            border-radius: 4px;
        }

        .dashboard::-webkit-scrollbar-thumb {
            background: var(--neutral-300);
            border-radius: 4px;
        }

        .dashboard::-webkit-scrollbar-thumb:hover {
            background: var(--neutral-400);
        }

        /* 品牌占比样式 */
        .brand-stats {
            width: 100%;
            max-width: 360px;
            margin: 16px auto;
            padding: 20px;
            background: white;
            border-radius: 16px;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .brand-bars {
            width: 100%;
            height: 200px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin: 20px 0;
            padding: 0 10px;
        }

        .brand-bar {
            width: 60px;
            border-radius: 8px 8px 0 0;
            transition: height 0.3s ease;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.875rem;
            text-align: center;
            padding: 8px 4px;
            animation: fadeInUp 0.6s ease-out;
            transition: all 0.3s ease;
        }

        .brand-bar .brand-name {
            margin-bottom: 4px;
            font-weight: 500;
        }

        .brand-bar .brand-percent {
            font-size: 0.75rem;
            opacity: 0.9;
        }

        .brand-legend {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }

        .brand-item {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
        }

        .brand-color {
            width: 16px;
            height: 16px;
            border-radius: 4px;
            margin-right: 8px;
        }

        /* 礼品图片区域样式 */
        .gift-image-container {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background: white;
            margin: 24px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
            animation: pulseScale 2s ease-in-out infinite;
        }

        .gift-image-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--neutral-400);
            background: var(--neutral-50);
        }

        .gift-image-placeholder i {
            font-size: 2rem;
            margin-bottom: 8px;
        }

        .gift-image-placeholder span {
            font-size: 0.875rem;
            text-align: center;
            padding: 0 16px;
        }

        /* 更新酒瓶网格样式 */
        .bottles-grid {
            width: 100%;
            max-width: 360px;
            margin: 16px auto;
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            gap: 4px;
            padding: 12px;
        }

        .bottle-icon {
            width: 100%;
            padding-bottom: 100%;
            position: relative;
            animation: fadeInUp 0.4s ease-out;
            transition: transform 0.3s ease;
        }

        .bottle-icon svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 2px;
        }

        .bottle-icon svg path {
            fill: var(--primary-gray);
            transition: fill 0.3s ease;
        }

        .bottle-icon:hover {
            transform: translateY(-5px);
        }

        .bottle-icon:hover svg path {
            fill: var(--primary-dark);
        }

        /* 隐藏物理引擎相关元素 */
        .bottle-background {
            display: none;
        }

        /* 优化页面布局 */
        .data-circles {
            gap: 12px;
            padding: 12px;
        }

        .data-circle {
            width: 100px;
            height: 100px;
            padding: 8px;
        }

        /* 头像样式 */
        .avatar-container {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background: white;
            margin: 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: none;
            position: relative;
            overflow: hidden;
            border: 2px solid #000;
        }

        .avatar-container i {
            font-size: 80px;
            color: var(--text-color);
        }

        .avatar-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .avatar-container:hover .avatar-image {
            transform: scale(1.05);
        }

        .summary-layout {
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
            position: relative;
            padding: 0 20px;
        }

        .summary-circle-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin: 20px 0;
        }

        .summary-circle {
            width: 100px;
            height: 100px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(5px);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
            animation: fadeInUp 0.4s ease-out;
            transition: transform 0.3s ease;
        }

        .summary-circle:hover {
            transform: scale(1.05);
        }

        .summary-circle .label {
            font-size: 0.875rem;
            color: var(--primary-gray);
            text-align: center;
            margin-bottom: 4px;
        }

        .summary-circle .value {
            font-size: 1.125rem;
            font-weight: 500;
            color: var(--primary-dark);
        }

        /* 活动列表样式 */
        .activity-lists {
            width: 100%;
            max-width: 360px;
            margin: 16px auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .activity-section {
            background: white;
            border-radius: 16px;
            padding: 16px;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .activity-section-title {
            font-size: 1rem;
            font-weight: 500;
            color: var(--text-color);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .activity-section-title i {
            font-size: 1.125rem;
            color: var(--neutral-600);
        }

        .activity-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .activity-item {
            display: flex;
            align-items: center;
            padding: 8px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            font-size: 0.875rem;
            animation: slideIn 0.4s ease-out;
            transition: transform 0.3s ease;
        }

        .activity-item .activity-date {
            color: var(--text-color);
            font-size: 0.75rem;
            margin-left: auto;
        }

        .activity-item.success {
            background: var(--secondary-cool-2);
            color: white;
        }

        .activity-item.missed {
            background: #ffffff;
            color: var(--text-color);
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        /* 动画效果 */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes floatCircle {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }

        @keyframes pulseScale {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* 应用动画 */
        .data-circle:hover {
            transform: scale(1.05);
        }

        .brand-bar:hover {
            transform: translateY(-5px);
        }

        .activity-item:hover {
            transform: translateX(5px);
        }

        .gift-image-container {
            animation: pulseScale 2s ease-in-out infinite;
        }

        .summary-item:hover {
            transform: scale(1.05);
        }

        /* 为不同的数据圈添加不同的动画延迟 */
        .data-circles .data-circle:nth-child(1) { animation-delay: 0s; }
        .data-circles .data-circle:nth-child(2) { animation-delay: 0.2s; }
        .data-circles .data-circle:nth-child(3) { animation-delay: 0.4s; }

        /* 为不同的品牌柱形添加不同的动画延迟 */
        .brand-bars .brand-bar:nth-child(1) { animation-delay: 0s; }
        .brand-bars .brand-bar:nth-child(2) { animation-delay: 0.1s; }
        .brand-bars .brand-bar:nth-child(3) { animation-delay: 0.2s; }
        .brand-bars .brand-bar:nth-child(4) { animation-delay: 0.3s; }
        .brand-bars .brand-bar:nth-child(5) { animation-delay: 0.4s; }

        /* 为活动列表项添加不同的动画延迟 */
        .activity-list .activity-item:nth-child(1) { animation-delay: 0s; }
        .activity-list .activity-item:nth-child(2) { animation-delay: 0.1s; }
        .activity-list .activity-item:nth-child(3) { animation-delay: 0.2s; }
        .activity-list .activity-item:nth-child(4) { animation-delay: 0.3s; }

        /* 为总结页的数据项添加不同的动画延迟 */
        .summary-grid .summary-item:nth-child(1) { animation-delay: 0s; }
        .summary-grid .summary-item:nth-child(2) { animation-delay: 0.1s; }
        .summary-grid .summary-item:nth-child(3) { animation-delay: 0.2s; }
        .summary-grid .summary-item:nth-child(4) { animation-delay: 0.3s; }
        .summary-grid .summary-item:nth-child(5) { animation-delay: 0.4s; }
        .summary-grid .summary-item:nth-child(6) { animation-delay: 0.5s; }

        /* 更新品牌柱状图样式 */
        .brand-bar:nth-child(1) { background: var(--secondary-warm-1); }
        .brand-bar:nth-child(2) { background: var(--secondary-cool-2); }
        .brand-bar:nth-child(3) { background: var(--secondary-cool-4); }
        .brand-bar:nth-child(4) { background: var(--secondary-cool-3); }
        .brand-bar:nth-child(5) { background: var(--secondary-warm-3); }

        /* 更新活动状态样式 */
        .activity-item.success {
            background: var(--secondary-cool-2);
            color: white;
        }

        .activity-item.missed {
            background: #ffffff;
            color: var(--text-color);
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        /* 更新卡片样式 */
        .summary-card {
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        /* 更新导航样式 */
        .nav-item {
            color: var(--primary-dark);
        }

        .nav-item:hover {
            background: rgba(255, 255, 255, 0.8);
            color: var(--primary-dark);
            transform: translateX(5px);
        }

        .nav-item.active {
            background: var(--primary-dark);
            color: white;
            transform: translateX(5px);
        }

        /* 更新货券统计页的样式 */
        .page {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
            position: relative;
            overflow-y: auto;
            overflow-x: hidden;
            padding: calc(var(--safe-area-top) + 44px) 12px var(--safe-area-bottom);
            background: #ffffff;
            -webkit-overflow-scrolling: touch;
        }

        /* 更新深色模式 */
        @media (prefers-color-scheme: dark) {
            :root {
                --text-color: #000000;
                --primary-dark: #000000;
                --primary-blue: #000000;
                --primary-light: #000000;
                --primary-gray: #000000;
                --primary-beige: #000000;
                --neutral-400: #000000;
                --neutral-600: #000000;
                --neutral-700: #000000;
                --neutral-800: #000000;
                --neutral-900: #000000;
            }
            
            body, .phone-frame, .page, .dashboard, .sidebar {
                background: #ffffff;
            }
            
            .status-bar, .page-header {
                background: #ffffff;
            }

            .activity-item {
                background: #ffffff;
                border-color: var(--secondary-neutral-2);
            }

            .sidebar {
                background: var(--secondary-neutral-1);
            }

            .nav-item {
                background: rgba(0, 0, 0, 0.2);
                color: var(--primary-beige);
            }

            .nav-item:hover {
                background: rgba(0, 0, 0, 0.4);
                color: white;
            }

            .nav-item.active {
                background: var(--primary-dark);
                color: white;
            }

            .description-section,
            .requirement-item,
            .requirement-item::before {
                color: var(--primary-beige);
            }

            .description-title {
                color: white;
            }
        }

        /* 账单统计样式 */
        .bill-stats {
            width: 100%;
            max-width: 360px;
            margin: 16px auto;
            padding: 20px;
            background: white;
            border-radius: 16px;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .bill-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 16px;
        }

        .bill-item {
            padding: 16px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            text-align: center;
            animation: fadeInUp 0.4s ease-out;
            transition: transform 0.3s ease;
        }

        .bill-item:hover {
            transform: translateY(-5px);
        }

        .bill-month {
            font-size: 1rem;
            color: var(--primary-gray);
            margin-bottom: 8px;
        }

        .bill-amount {
            font-size: 1.25rem;
            font-weight: bold;
            color: var(--primary-dark);
        }

        .bill-amount::before {
            content: "¥";
            font-size: 0.875rem;
            margin-right: 2px;
        }

        /* 移除原有的酒瓶相关样式 */
        .bottles-grid, .bottle-icon, .bottle-background {
            display: none;
        }

        /* 日历组件样式 */
        .calendar-card {
            width: 100%;
            max-width: 360px;
            margin: 16px auto;
            padding: 20px;
            background: white;
            border-radius: 16px;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .calendar-header {
            text-align: center;
            margin-bottom: 16px;
            color: var(--primary-dark);
            font-size: 1.125rem;
            font-weight: 500;
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 4px;
        }

        .calendar-weekday {
            text-align: center;
            font-size: 0.75rem;
            color: var(--primary-gray);
            padding: 4px;
        }

        .calendar-day {
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            color: var(--text-color);
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .calendar-day.highlight {
            background: var(--primary-orange);
            color: white;
            font-weight: 500;
            animation: pulseScale 2s ease-in-out infinite;
        }

        .calendar-day.other-month {
            opacity: 0.3;
        }

        /* 添加通知按钮样式 */
        .notification-btn {
            width: 120px;
            height: 120px;
            padding: 12px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(5px);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }

        .notification-btn:hover {
            transform: scale(1.05);
        }

        .notification-btn .icon {
            width: 40px;
            height: 40px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .notification-btn .icon i {
            font-size: 1.5rem;
            color: var(--primary-orange);
        }

        .notification-btn .text {
            text-align: center;
        }

        .notification-btn .title {
            font-size: 0.875rem;
            color: var(--primary-gray);
            margin-bottom: 4px;
        }

        .user-info {
            text-align: center;
            margin: 12px 0 20px;
            animation: fadeInUp 0.4s ease-out;
        }

        .user-name {
            font-size: 1.25rem;
            font-weight: 500;
            color: var(--primary-dark);
            margin-bottom: 4px;
        }

        .user-id {
            font-size: 0.875rem;
            color: var(--primary-gray);
        }

        /* 添加按钮组样式 */
        .action-buttons {
            width: 100%;
            max-width: 360px;
            margin: 16px auto;
            display: flex;
            gap: 12px;
            padding: 0 20px;
        }

        .action-btn {
            flex: 1;
            padding: 12px 20px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: fadeInUp 0.4s ease-out;
        }

        .action-btn i {
            font-size: 1.25rem;
        }

        .action-btn.primary {
            background: var(--primary-orange);
            color: white;
            box-shadow: none;
            border: 1px solid var(--primary-orange);
        }

        .action-btn.primary:hover {
            transform: translateY(-2px);
        }

        .action-btn.secondary {
            background: white;
            color: var(--primary-dark);
            box-shadow: none;
        }

        .action-btn.secondary:hover {
            transform: translateY(-2px);
        }

        .action-btn:hover {
            box-shadow: none !important;
        }

        /* 页面序号样式 */
        .page-number {
            position: absolute;
            top: -30px;
            left: 0;
            background: #000;
            color: #fff;
            padding: 6px 12px;
            font-size: 14px;
            font-weight: 500;
            z-index: 1002;
            border-radius: 0;
            min-width: 40px;
            text-align: center;
        }

        /* 移除手机内部的页面序号 */
        .page .page-number {
            display: none;
        }

        /* 更新所有文字颜色 */
        .title,
        .subtitle,
        .page-title,
        .data-circle .value,
        .data-circle .label,
        .calendar-header,
        .calendar-weekday,
        .calendar-day,
        .brand-name,
        .brand-percent,
        .bill-month,
        .bill-amount,
        .activity-name,
        .activity-date,
        .user-name,
        .user-id,
        .header-title,
        .header-back,
        .header-close {
            color: var(--text-color);
        }

        /* 保持序号样式不变 */
        .page-number {
            color: #fff;
        }

        /* 保持特殊状态的样式 */
        .calendar-day.highlight {
            color: white;
        }

        .activity-item.success,
        .activity-item.missed {
            color: white;
        }

        .action-btn.primary {
            color: white;
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="content">
            <div class="preview-section">
                <div class="page-section" id="cover">
                    <div class="page-number">01</div>
                    <div class="phone-frame">
                        <div class="page-label">1 · 封面页</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <div class="blur-circle blur-circle-1"></div>
                            <div class="blur-circle blur-circle-2"></div>
                            <h1 class="title">2025上半年度报告</h1>
                            <div class="subtitle"> </div>
                        </div>
                    </div>
                </div>
                <div class="page-section" id="join">
                    <div class="page-number">02</div>
                    <div class="phone-frame">
                        <div class="page-label">2 · 加入天数页</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <h2 class="page-title">你的乐加会之旅</h2>
                            <div class="data-circles">
                                <div class="data-circle">
                                    <div class="value">2023-11-12</div>
                                    <div class="label">是我们相遇的第一天</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">180</div>
                                    <div class="label">一转眼已经X天</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">120</div>
                                    <div class="label">今年共计扫码X天</div>
                                </div>
                            </div>
                            <div class="calendar-card">
                                <div class="calendar-header">2023年11月</div>
                                <div class="calendar-grid">
                                    <div class="calendar-weekday">日</div>
                                    <div class="calendar-weekday">一</div>
                                    <div class="calendar-weekday">二</div>
                                    <div class="calendar-weekday">三</div>
                                    <div class="calendar-weekday">四</div>
                                    <div class="calendar-weekday">五</div>
                                    <div class="calendar-weekday">六</div>
                                    
                                    <div class="calendar-day other-month">29</div>
                                    <div class="calendar-day other-month">30</div>
                                    <div class="calendar-day other-month">31</div>
                                    <div class="calendar-day">1</div>
                                    <div class="calendar-day">2</div>
                                    <div class="calendar-day">3</div>
                                    <div class="calendar-day">4</div>
                                    <div class="calendar-day">5</div>
                                    <div class="calendar-day">6</div>
                                    <div class="calendar-day">7</div>
                                    <div class="calendar-day">8</div>
                                    <div class="calendar-day">9</div>
                                    <div class="calendar-day">10</div>
                                    <div class="calendar-day">11</div>
                                    <div class="calendar-day highlight">12</div>
                                    <div class="calendar-day">13</div>
                                    <div class="calendar-day">14</div>
                                    <div class="calendar-day">15</div>
                                    <div class="calendar-day">16</div>
                                    <div class="calendar-day">17</div>
                                    <div class="calendar-day">18</div>
                                    <div class="calendar-day">19</div>
                                    <div class="calendar-day">20</div>
                                    <div class="calendar-day">21</div>
                                    <div class="calendar-day">22</div>
                                    <div class="calendar-day">23</div>
                                    <div class="calendar-day">24</div>
                                    <div class="calendar-day">25</div>
                                    <div class="calendar-day">26</div>
                                    <div class="calendar-day">27</div>
                                    <div class="calendar-day">28</div>
                                    <div class="calendar-day">29</div>
                                    <div class="calendar-day">30</div>
                                    <div class="calendar-day other-month">1</div>
                                    <div class="calendar-day other-month">2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section" id="purchase">
                    <div class="page-number">03</div>
                    <div class="phone-frame">
                        <div class="page-label">3 · 进货统计页（品牌分布）</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <h2 class="page-title">今年最喜欢的品牌是...</h2>
                            <div class="data-circles">
                                <div class="data-circle">
                                    <div class="value">1280</div>
                                    <div class="label">进货x瓶</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">5</div>
                                    <div class="label">覆盖品牌x个</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">品牌A</div>
                                    <div class="label">最爱的品牌是</div>
                                </div>
                            </div>
                            <div class="brand-stats">
                                <div class="brand-bars">
                                    <div class="brand-bar" style="height: 180px; background: #FF6B6B;">
                                        <div class="brand-name">品牌A</div>
                                        <div class="brand-percent">35%</div>
                                    </div>
                                    <div class="brand-bar" style="height: 140px; background: #4ECDC4;">
                                        <div class="brand-name">品牌B</div>
                                        <div class="brand-percent">25%</div>
                                    </div>
                                    <div class="brand-bar" style="height: 100px; background: #45B7D1;">
                                        <div class="brand-name">品牌C</div>
                                        <div class="brand-percent">20%</div>
                                    </div>
                                    <div class="brand-bar" style="height: 60px; background: #96CEB4;">
                                        <div class="brand-name">品牌D</div>
                                        <div class="brand-percent">15%</div>
                                    </div>
                                    <div class="brand-bar" style="height: 20px; background: #FFEEAD;">
                                        <div class="brand-name">其他</div>
                                        <div class="brand-percent">5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section" id="purchase-simple">
                    <div class="page-number">04</div>
                    <div class="phone-frame">
                        <div class="page-label">4 · 进货统计页</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <h2 class="page-title">今年进货...</h2>
                            <div class="summary-circle-grid" style="grid-template-columns: 1fr; margin-top: 40px;">
                                <div class="summary-circle" style="width: 200px; height: 200px; margin: 0 auto;">
                                    <div class="label">进货总量</div>
                                    <div class="value" style="font-size: 3rem;">0瓶</div>
                                </div>
                            </div>
                            <div style="text-align: center; margin-top: 40px; color: var(--primary-gray); font-size: 1.125rem; animation: fadeInUp 0.6s ease-out;">
                                立即扫一扫开启乐加会会员之旅吧
                            </div>
                            <div class="action-buttons" style="margin-top: 20px;">
                                <div class="action-btn primary" style="width: 160px; margin: 0 auto;">
                                    <i class="fas fa-qrcode"></i>
                                    <span>立即扫码</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section" id="activity">
                    <div class="page-number">05</div>
                    <div class="phone-frame">
                        <div class="page-label">5 · 活动参与页</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <h2 class="page-title">今年参与了...</h2>
                            <div class="data-circles">
                                <div class="data-circle">
                                    <div class="value">6</div>
                                    <div class="label">参与活动X次</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">4</div>
                                    <div class="label">获得奖励X次</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">2</div>
                                    <div class="label">错过活动X次</div>
                                </div>
                            </div>
                            <div class="notification-btn">
                                <div class="icon">
                                    <i class="fas fa-bell"></i>
                                </div>
                                <div class="text">
                                    <div class="title">开启通知</div>
                                </div>
                            </div>
                            <div class="activity-lists">
                                <div class="activity-section">
                                    <div class="activity-section-title">
                                        <i class="fas fa-check-circle"></i>
                                        已参与活动
                                    </div>
                                    <div class="activity-list">
                                        <div class="activity-item">
                                            <span class="activity-name">尊美醇12赠1</span>
                                            <span class="activity-date">1月</span>
                                        </div>
                                        <div class="activity-item">
                                            <span class="activity-name">尊美醇12赠1</span>
                                            <span class="activity-date">2月</span>
                                        </div>
                                        <div class="activity-item">
                                            <span class="activity-name">单一麦芽</span>
                                            <span class="activity-date">2月</span>
                                        </div>
                                        <div class="activity-item">
                                            <span class="activity-name">高端白烈</span>
                                            <span class="activity-date">3月</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="activity-section">
                                    <div class="activity-section-title">
                                        <i class="fas fa-times-circle"></i>
                                        错过的活动
                                    </div>
                                    <div class="activity-list">
                                        <div class="activity-item missed">
                                            <span class="activity-name">双11狂欢节</span>
                                            <span class="activity-date">1月</span>
                                        </div>
                                        <div class="activity-item missed">
                                            <span class="activity-name">圣诞特惠</span>
                                            <span class="activity-date">2月</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section" id="points-unused">
                    <div class="page-number">06</div>
                    <div class="phone-frame">
                        <div class="page-label">6 · 积分统计页（未使用）</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <h2 class="page-title">今年获得...</h2>
                            <div class="data-circles">
                                <div class="data-circle">
                                    <div class="value">12800</div>
                                    <div class="label">累计获得X分</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">0</div>
                                    <div class="label">兑换礼品X次</div>
                                </div>
                            </div>
                            <div class="summary-card">
                                <div style="text-align: center; padding: 20px;">
                                    <i class="fas fa-gift" style="font-size: 3rem; color: var(--neutral-400); margin-bottom: 16px;"></i>
                                    <div style="font-size: 1.125rem; color: var(--neutral-700); margin-bottom: 8px;">还未兑换过礼品</div>
                                    <div style="font-size: 0.875rem; color: var(--neutral-600);">常去积分商城看看吧～</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section" id="points">
                    <div class="page-number">07</div>
                    <div class="phone-frame">
                        <div class="page-label">7 · 积分统计页</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <h2 class="page-title">今年获得...</h2>
                            <div class="gift-image-container">
                                <div class="gift-image-placeholder">
                                    <i class="fas fa-gift"></i>
                                    <span>礼品图片展示</span>
                                </div>
                            </div>
                            <div class="data-circles">
                                <div class="data-circle">
                                    <div class="value">12800</div>
                                    <div class="label">累计获得X分</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">1</div>
                                    <div class="label">兑换礼品X次</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">酒具</div>
                                    <div class="label">最爱兑换的礼品是</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section" id="coupon">
                    <div class="page-number">08</div>
                    <div class="phone-frame">
                        <div class="page-label">8 · 货券统计页</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <h2 class="page-title">今年获得...</h2>
                            <div class="data-circles">
                                <div class="data-circle">
                                    <div class="value">6</div>
                                    <div class="label">统计月数</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">12800</div>
                                    <div class="label">累计金额</div>
                                </div>
                                <div class="data-circle">
                                    <div class="value">35</div>
                                    <div class="label">相当于几瓶</div>
                                </div>
                            </div>
                            <div class="bill-stats">
                                <div class="bill-grid">
                                    <div class="bill-item">
                                        <div class="bill-month">1月</div>
                                        <div class="bill-amount">1800</div>
                                    </div>
                                    <div class="bill-item">
                                        <div class="bill-month">2月</div>
                                        <div class="bill-amount">2200</div>
                                    </div>
                                    <div class="bill-item">
                                        <div class="bill-month">3月</div>
                                        <div class="bill-amount">2500</div>
                                    </div>
                                    <div class="bill-item">
                                        <div class="bill-month">4月</div>
                                        <div class="bill-amount">1900</div>
                                    </div>
                                    <div class="bill-item">
                                        <div class="bill-month">5月</div>
                                        <div class="bill-amount">2600</div>
                                    </div>
                                    <div class="bill-item">
                                        <div class="bill-month">6月</div>
                                        <div class="bill-amount">1800</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section" id="summary">
                    <div class="page-number">09</div>
                    <div class="phone-frame">
                        <div class="page-label">9 · 年度总结页</div>
                        <div class="notch"></div>
                        <div class="home-indicator"></div>
                        <div class="status-bar"></div>
                        <div class="page-header">
                            <div class="header-back"><i class="fas fa-chevron-left"></i></div>
                            <div class="header-title">年度报告</div>
                            <div class="header-close"><i class="fas fa-xmark"></i></div>
                        </div>
                        <div class="page">
                            <h2 class="page-title">你的年度形象是...</h2>
                            <div class="summary-layout">
                                <div class="avatar-container">
                                    <i class="fas fa-martini-glass-citrus"></i>
                                </div>
                                <div class="user-info">
                                    <div class="user-name">乐加会员</div>
                                    <div class="user-id">NO.888888</div>
                                </div>
                                <div class="summary-circle-grid">
                                    <div class="summary-circle">
                                        <div class="label">加入天数</div>
                                        <div class="value">180天</div>
                                    </div>
                                    <div class="summary-circle">
                                        <div class="label">进货总量</div>
                                        <div class="value">1280瓶</div>
                                    </div>
                                    <div class="summary-circle">
                                        <div class="label">活动参与</div>
                                        <div class="value">6次</div>
                                    </div>
                                    <div class="summary-circle">
                                        <div class="label">最爱品牌</div>
                                        <div class="value">品牌A</div>
                                    </div>
                                    <div class="summary-circle">
                                        <div class="label">累计积分</div>
                                        <div class="value">12800</div>
                                    </div>
                                    <div class="summary-circle">
                                        <div class="label">货券抵扣</div>
                                        <div class="value">￥12800</div>
                                    </div>
                                </div>
                                <div class="action-buttons">
                                    <div class="action-btn secondary">
                                        <i class="fas fa-download"></i>
                                        <span>保存图片</span>
                                    </div>
                                    <div class="action-btn primary">
                                        <i class="fas fa-gift"></i>
                                        <span>领取奖励</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html> 
    </div>
  );
}
