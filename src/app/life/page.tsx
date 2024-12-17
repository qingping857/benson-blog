'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LifePage() {
  const lifeContent = [
    {
      image: '/images/image7.jpg',
      text: '喜欢看日落',
      align: 'right', // 控制文字位置
    },
    {
      image: '/images/image8.jpg',
      text: '一个人吃火锅',
      align: 'left',
    },
    {
      image: '/images/image9.jpg',
      text: '拜访雷军楼',
      align: 'right',
    },
    {
      image: '/images/image10.jpg',
      text: '连夜来北京参加活动',
      align: 'left',
    },
    {
      image: '/images/image11.jpg',
      text: '大哥带我们蹦迪',
      align: 'right',
    },
    {
      image: '/images/image12.jpg',
      text: '浪前见面会',
      align: 'left',
    },
    {
      image: '/images/image13.jpg',
      text: '小酒馆',
      align: 'right',
    },
    {
      image: '/images/image14.jpg',
      text: '还是见面会',
      align: 'left',
    },
    {
      image: '/images/image15.jpg',
      text: '喜欢看古典舞',
      align: 'right',
    },
    {
      image: '/images/image16.jpg',
      text: '氛围感满满',
      align: 'left',
    },
  ];

  return (
    <main className="bg-black min-h-screen pt-20 pb-40">
      {/* 页面标题 */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          我的生活
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4" />
      </motion.div>

      {/* 内容区域 */}
      <div className="max-w-7xl mx-auto px-4">
        {lifeContent.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-40 group"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* 图片容器 */}
            <motion.div
              className="relative w-full h-[70vh] overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              {/* ���片暗色叠加层 */}
              <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/20 transition-all duration-500" />
              
              {/* 图片 */}
              <Image
                src={item.image}
                alt={item.text}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />

              {/* 文字容器 */}
              <motion.div 
                className={`absolute bottom-20 ${item.align === 'left' ? 'left-20' : 'right-20'} z-20`}
                initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* 文字背景 */}
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-black/60 backdrop-blur-sm rounded-lg -z-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                  
                  {/* 文字内容 */}
                  <h2 className="text-4xl font-bold text-white">
                    {item.text}
                  </h2>
                </div>

                {/* 装饰线条 */}
                <motion.div 
                  className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 返回按钮 */}
      <motion.div
        className="fixed bottom-10 right-10 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a
          href="/"
          className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
        >
          <span className="text-white">返回首页</span>
          <svg
            className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </motion.div>
    </main>
  );
} 