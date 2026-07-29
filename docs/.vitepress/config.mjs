import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LightMind Docs',
  description: 'LightMind 项目官方文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '功能', link: '/feature/' },
      { text: '关于', link: '/about/' }
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
            { text: '概览', link: '/feature/getting-started' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '关于 LightMind', link: '/about/getting-started' },
            { text: '了解我们如何使用 TRAE 开发 LightMind', link: '/about/build-lightmind-with-trae' },
            { text: '路线图', link: '/about/getting-started' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightmindlab/lightminddocs' }
    ]
  }
})
