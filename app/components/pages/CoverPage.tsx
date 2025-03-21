'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CoverPage() {
  return (
    <div className="relative h-full w-full bg-primary-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          2023年度回顾
        </h1>
        <p className="text-primary-200 text-lg">
          乐加会 · 与你共同成长
        </p>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mt-12 text-primary-300"
        >
          ↓ 向上滑动查看更多
        </motion.div>
      </motion.div>
      
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 bg-primary-700/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
} 