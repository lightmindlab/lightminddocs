import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LightMind 文档中心',
  description: 'LightMind 文档中心',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/hatching-chick.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '功能', link: '/feature/' },
      { text: '关于', link: '/about/' },
      { text: '打开网页版', link: 'https://www.lightmind.top' },
      { text: '下载应用', link: 'https://www.lightmind.top/download' },
      { text: '服务健康状态', link: 'https://status.lightmind.top' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/feature/': [
        {
          text: '功能',
          items: [
            { text: '概览', link: '/feature/getting-started' },
            { text: '对话', link: '/feature/getting-started' },
            { text: '日程', link: '/feature/getting-started' },
            { text: '知识图谱', link: '/feature/getting-started' },
            { text: '资料库', link: '/feature/getting-started' },
            { text: '题目解析', link: '/feature/getting-started' },
            { text: '图书', link: '/feature/getting-started' },
            { text: '教材学习', link: '/feature/getting-started' },
            { text: '写作', link: '/feature/getting-started' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '更新日志', link: '/about/getting-started' },
            { text: '了解 LightMind', link: '/about/getting-started' },
            { text: '了解我们如何使用 TRAE 开发 LightMind', link: '/about/build-lightmind-with-trae' },
            { text: '路线图', link: '/about/getting-started' }
          ]
        }
      ]
    }
  }
})
