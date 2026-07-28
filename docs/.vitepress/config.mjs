import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LightMind Docs',
  description: 'LightMind 项目官方文档',
  base: '/lightminddocs/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightmindlab/lightminddocs' }
    ]
  }
})
