# Benson的个人博客

这是一个使用现代技术栈构建的个人博客网站，采用简约而富有动感的设计风格。

## 技术栈

- **前端框架**: React 18 + Next.js 13+
- **样式解决方案**: Tailwind CSS
- **动画效果**: Framer Motion
- **开发语言**: TypeScript

## 功能特点

### 1. 主页设计
- 全屏视差滚动效果
- 视频背景配合打字机效果
- 优雅的页面切换动画
- 响应式设计，完美适配各种设备

### 2. 页面板块
- **首页视频展示**: 带有动态打字效果的个人介绍
- **生活记录**: 图文展示个人生活点滴
- **精神领袖**: 个人价值观和思想分享
- **项目展示**: 展示个人项目经历
- **亲密关系**: 展示重要的人际关系
- **近期动态**: 最新的生活和工作更新

### 3. 交互特效
- 滚动触发动画
- 悬停效果
- 渐变色文字
- 磨砂玻璃效果
- 流畅的过渡动画

### 4. 联系方式
- 集成社交媒体链接
- 一键获取联系信息
- 优雅的弹窗设计

## 项目结构

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── page.tsx           # 主页面
│   ├── life/              # 生活页面
│   ├── star/              # 精神领袖页面
│   ├── projects/          # 项目展示页面
│   ├── relationships/     # 亲密关系页面
│   └── current/          # 近期动态页面
├── components/            # 可复用组件
└── styles/               # 全局样式
```

## 开发指南

### 环境要求
- Node.js 16.8+
- npm 或 yarn

### 安装步骤

1. 克隆项目
```bash
git clone [项目地址]
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 运行开发服务器
```bash
npm run dev
# 或
yarn dev
```

4. 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 开发注意事项
- 遵循 TypeScript 类型检查
- 使用 ESLint 进行代码规范检查
- 保持组件的可复用性
- 注意性能优化

## 部署

项目可以部署在任何支持 Node.js 的平台上，推荐使用：
- Vercel
- Netlify
- AWS Amplify

## 维护者

- Benson (benson@magicap.net)

## 联系方式

- 微信：yundingzhiyifpv
- 电话：13419923655
- 邮箱：benson@magicap.net

## 更新日志

### v1.0.0 (2023-12-17)
- 初始版本发布
- 实现基础功能和页面
- 添加动画效果
- 完成响应式设计

## 许可证

MIT License
