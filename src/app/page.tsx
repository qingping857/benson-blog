'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // 添加打字动画的状态
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false); // 添加控制弹窗的状态
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
      overlay: 'bg-black/60',
      showTypingText: true,
    },
    {
      image: '/images/image2.png',
      title: 'LIFE, DANCE',
      subtitle: '我的生活',
      overlay: 'bg-black/30',
      link: '/life',
    },
    {
      image: '/images/image3.jpg',
      title: 'STAR ME',
      subtitle: '精神领袖',
      overlay: 'bg-black/30',
      link: '/star',
    },
    {
      image: '/images/image4.jpg',
      title: 'PERFECT PROJECTS',
      subtitle: '我做过的项目',
      overlay: 'bg-black/30',
      link: '/projects',
    },
    {
      image: '/images/image5.jpg',
      title: 'MY GIRLFRIENDS',
      subtitle: '亲密关系',
      overlay: 'bg-black/50',
      link: '/relationships',
    },
    {
      image: '/images/image6.jpg',
      title: 'WHAT AM I DOING?',
      subtitle: '我最近在干啥？',
      overlay: 'bg-black/50',
      link: '/current',
    },
  ];

  // 联系方式数据
  const contactInfo = [
    {
      type: "微信",
      value: "yundingzhiyifpv",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm6.636 3.343c-1.777-.066-3.534.396-4.944 1.543-1.367 1.107-2.132 2.644-2.165 4.242 0 3.37 3.19 6.103 7.116 6.103.848 0 1.675-.108 2.44-.308a.718.718 0 0 1 .597.086l1.629.955a.277.277 0 0 0 .14.047c.139 0 .25-.114.25-.253 0-.062-.023-.122-.042-.182l-.336-1.272a.512.512 0 0 1 .184-.572c1.567-1.157 2.517-2.836 2.517-4.698 0-3.370-3.19-6.103-7.116-6.103h-.27zm-2.213 2.92c.55 0 .995.453.995 1.01 0 .558-.445 1.01-.995 1.01-.55 0-.995-.452-.995-1.01 0-.557.445-1.01.995-1.01zm4.55 0c.55 0 .996.453.996 1.01 0 .558-.445 1.01-.995 1.01-.55 0-.995-.452-.995-1.01 0-.557.445-1.01.995-1.01z"/>
        </svg>
      ),
    },
    {
      type: "电话",
      value: "13419923655",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      type: "邮箱",
      value: "benson@magicap.net",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
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
                  className="text-2xl text-gray-300 font-light tracking-wider mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {subText}
                </motion.p>
                
                {/* 联系我按钮 */}
                <motion.button
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full 
                           border border-white/20 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  whileHover={{ y: -3 }}
                >
                  联系我
                </motion.button>
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
          
          {/* 文字容器和按钮 - 只在非视频部分显示 */}
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
              <div className="flex items-end gap-8">
                <div>
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
                </div>

                {/* 添加跳转按钮 */}
                <Link href={section.link}>
                  <motion.button
                    className="group relative px-8 py-3 bg-transparent border-2 border-white rounded-full overflow-hidden hover:text-black transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* 按钮背景动画 */}
                    <span className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                    {/* 按钮文字 */}
                    <span className="relative">了解更多</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}

          {/* 滚动提示 (在除最后一张外的所有部分显示) */}
          {index !== sections.length - 1 && (
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

      {/* 联系方式弹窗 */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
            >
              {/* 弹窗内容 */}
              <motion.div
                className="w-full max-w-md bg-gradient-to-br from-gray-900 to-black 
                         p-8 rounded-2xl border border-white/10 z-50
                         shadow-2xl shadow-purple-500/10"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()} // 防止点击弹窗内容时关闭
              >
                <div className="relative">
                  {/* 关闭按钮 */}
                  <button
                    onClick={() => setIsContactOpen(false)}
                    className="absolute -top-4 -right-4 p-2 bg-white/10 rounded-full
                             hover:bg-white/20 transition-colors duration-200
                             border border-white/10 backdrop-blur-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* 标题 */}
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 
                             text-transparent bg-clip-text text-center">联系方式</h2>

                  {/* 联系方式列表 */}
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl
                               hover:bg-white/10 transition-colors duration-200
                               border border-white/5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-purple-400">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-400">{info.type}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
