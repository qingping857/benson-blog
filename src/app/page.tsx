'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('basic');

  const personalInfo = {
    basic: {
      name: "王博升 (Benson)",
      age: "19岁",
      mbti: "ENTJ-A",
      tags: ["情绪稳定", "极度理性", "work like hell", "超越同龄人的认知", "疯狂项目人", "灵感迸发的创新者"],
      values: ["改变世界", "颠覆行业"],
      research: ["大语言模型", "具身智能"]
    },
    experience: [
      "认知系统不断迭代——坚持每天读书，坚持每周约谈一位能力比自己出众的人",
      "掌握向上社交——零专业技能下，成为清华大学某大模型项目组核心成员",
      "每月1号更新自己的价值观，目标明确，从不迷茫",
      "work like hell——每天14小时，连续投入一个月",
      "连续389天5点早起（截止2024年11月21日）",
      "高三最后200天提高180分"
    ],
    projects: [
      {
        title: "AI＋医疗产品",
        role: "联合创始人/项目经理",
        description: "借助大模型技术，赋能于医生问诊过程，医生只需专注于和病人交流，大模型监听对话并处理信息。"
      },
      {
        title: "绘画机器人",
        role: "研发经理",
        description: "融入大模型技术，运用大模型生成童话故事，并配以插图，机器人以一边绘画一边讲述的方式输出故事。"
      },
      {
        title: "AI Clone 网站",
        role: "研发经理",
        description: "用户上传本人照片、视频、本人讲话录音和微信聊天记录等数据，克隆出一个数字人自我。"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* 头部个人信息 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {personalInfo.basic.name}
        </h1>
        <div className="mt-4 text-gray-600">
          <span className="mr-4">{personalInfo.basic.age}</span>
          <span>{personalInfo.basic.mbti}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {personalInfo.basic.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 导航栏 */}
      <div className="max-w-4xl mx-auto mb-8 flex gap-4">
        {["basic", "experience", "projects"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeSection === section
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* 内容区域 */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
      >
        {activeSection === "basic" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">研究方向</h2>
            <div className="flex gap-2 mb-6">
              {personalInfo.basic.research.map((item, index) => (
                <span key={index} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg">
                  {item}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-4">价值观</h2>
            <div className="flex gap-2">
              {personalInfo.basic.values.map((value, index) => (
                <span key={index} className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg">
                  {value}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="space-y-4">
            {personalInfo.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-50 rounded-lg"
              >
                {exp}
              </motion.div>
            ))}
          </div>
        )}

        {activeSection === "projects" && (
          <div className="space-y-6">
            {personalInfo.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-lg"
              >
                <h3 className="text-xl font-bold text-blue-600">{project.title}</h3>
                <p className="text-gray-600 mt-1">{project.role}</p>
                <p className="mt-2 text-gray-700">{project.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </main>
  );
}
