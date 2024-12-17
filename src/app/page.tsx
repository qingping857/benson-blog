'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  // 添加打字动画的状态
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");
  const fullText = "Benson的个人博客";
  const fullSubText = "Benson's Personal Blog";
  
  // 打字动画效果
  useEffect(() => {
    let currentIndex = 0;
    let currentSubIndex = 0;
    
    const mainTextInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(mainTextInterval);
      }
    }, 150);

    // 延迟1秒后开始显示英文
    setTimeout(() => {
      const subTextInterval = setInterval(() => {
        if (currentSubIndex <= fullSubText.length) {
          setSubText(fullSubText.slice(0, currentSubIndex));
          currentSubIndex++;
        } else {
          clearInterval(subTextInterval);
        }
      }, 100);

      return () => clearInterval(subTextInterval);
    }, 1000);

    return () => clearInterval(mainTextInterval);
  }, []);

  const sections = [
    {
      video: '/videos/video1.mp4',
      isVideo: true,
      overlay: 'bg-black/30',
      showTypingText: true, // 新增标识符
    },
    {
      image: '/images/image2.png',
      title: 'LIFE, DANCE',
      subtitle: '我的生活',
      overlay: 'bg-black/30',
    },
    {
      image: '/images/image3.jpg',
      title: 'STAR ME',
      subtitle: '精神领袖',
      overlay: 'bg-black/30',
    },
    {
      image: '/images/image4.jpg',
      title: 'PERFECT PROJECTS',
      subtitle: '我做过的项目',
      overlay: 'bg-black/30',
    },
    {
      image: '/images/image5.jpg',
      title: 'MY GIRLFRIENDS',
      subtitle: '亲密关系',
      overlay: 'bg-black/50',
    },
    {
      image: '/images/image6.jpg',
      title: 'WHAT AM I DOING?',
      subtitle: '我最近在干啥？',
      overlay: 'bg-black/50',
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
          {section.isVideo ? (
            <>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ zIndex: 0 }}
              >
                <source src={section.video} type="video/mp4" />
                你的浏览器不支持视频标签
              </video>
              {/* 视频上的打字文字 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <motion.h1 
                  className="text-6xl font-bold mb-4 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {text}
                </motion.h1>
                <motion.p 
                  className="text-2xl text-gray-300 font-light tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {subText}
                </motion.p>
              </div>
            </>
          ) : (
            <Image
              src={section.image}
              alt={section.title || ''}
              fill
              className="object-cover"
              priority={index === 0}
            />
          )}
          
          <div className={`absolute inset-0 ${section.overlay}`} />
          
          {/* 文字容器 - 只在非视频部分显示 */}
          {!section.isVideo && (
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
          )}

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
