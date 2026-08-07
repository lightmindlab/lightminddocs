import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LightMind 文档中心',
  description: 'LightMind 文档中心',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/hatching-chick.png' }]
  ],
  themeConfig: {
    logo: '/hatching-chick.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/register-account' },
      { text: '功能', link: '/feature/overview' },
      { text: '关于', link: '/about/build-lightmind-with-trae' },
      { text: '打开网页版', link: 'https://www.lightmind.top' },
      { text: '下载应用', link: 'https://www.lightmind.top/download' },
      { text: '服务健康状态', link: 'https://status.lightmind.top' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '注册账号', link: '/guide/register-account' },
            { text: '登录账号', link: '/guide/login-account' }
          ]
        }
      ],
      '/feature/': [
        {
          text: '功能',
          items: [
            { text: '概览', link: '/feature/overview' },
            { text: '对话', link: '/feature/conversation' },
            { text: '学习计划', link: '/feature/learning-plan' },
            { text: '知识图谱', link: '/feature/knowledge-graph' },
            { text: '资料库', link: '/feature/library' },
            { text: '图书', link: '/feature/books' },
            { text: '白板', link: '/feature/whiteboard' },
            { text: '作业答疑', link: '/feature/homework-help' },
            { text: '教材学习', link: '/feature/textbook-learning' },
            { text: '写作', link: '/feature/writing' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '用户案例', link: '/about/user-cases' },
            { text: '了解我们如何使用 TRAE 开发 LightMind', link: '/about/build-lightmind-with-trae' }
          ]
        }
      ]
    }
  }
})
