'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const sections = [
    {
      image: '/images/image1.jpg',
      title: 'READEME.MD',
      subtitle: '快速认识我',
    },
    {
      image: '/images/image2.jpg',
      title: 'LIFE, DANCE',
      subtitle: '我的生活',
    },
    {
      image: '/images/image3.jpg',
      title: 'STAR ME',
      subtitle: '精神领袖',
    },
    {
      image: '/images/image4.jpg',
      title: 'PERFECT PROJECTS',
      subtitle: '我做过的项目',
    },
    {
      image: '/images/image5.jpg',
      title: 'MY GIRLFRIENDS',
      subtitle: '我的女朋友们',
    },
    {
      image: '/images/image5.jpg',
      title: 'WHAT AM I DOING?',
      subtitle: '我最近在干啥？',
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="relative w-full h-screen"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" /> {/* 图片暗色叠加层 */}
          
          {/* 文字容器 */}
          <motion.div 
            className="absolute bottom-20 left-20 z-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.h3 
              className="text-sm font-light tracking-[0.2em] mb-2 text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {section.title}
            </motion.h3>
            
            <motion.h2 
              className="text-5xl font-bold tracking-wide"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {section.subtitle}
            </motion.h2>

            <motion.div 
              className="h-[2px] w-0 bg-white mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </motion.div>

          {/* 滚动提示 (只在第一屏显示) */}
          {index === 0 && (
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="mb-2">向下滚动</span>
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          )}
        </motion.div>
      ))}
    </main>
  );
}
