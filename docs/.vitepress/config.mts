
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站基本信息
  title: 'RFIC Learning Notes',
  description: "LittleFairy's RFIC Study",

  // 网站语言
  lang: 'zh-CN',

  // Markdown 配置
  markdown: {
    math: true
  },

  // 网站主题配置
  themeConfig: {

    // 顶部导航栏
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📡 RFIC 设计', link: '/rfic/lna' },
      { text: '📖 关于本站', link: '/about' }
    ],

    // 侧边栏
    sidebar: {
      '/rfic/': [
        {
          text: '射频集成电路设计',
          collapsed: false,
          items: [
            {
              text: '低噪声放大器 LNA',
              link: '/rfic/lna'
            }
          ]
        }
      ]
    },

    // 本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索笔记',
            buttonAriaLabel: '搜索笔记'
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 顶部导航和菜单文字
    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    // 上一页和下一页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 编辑与更新时间
    lastUpdated: {
      text: '最后更新时间'
    },

    // 深色模式切换
    darkModeSwitchLabel: '外观',

    // 返回顶部
    returnToTopLabel: '返回顶部',

    // 导航辅助文字
    sidebarMenuLabel: '目录'
  },

  // 显示文章最后更新时间
  lastUpdated: true
})
