import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',

  title: '西大工具箱-移动教务（暂名）',
  description: 'GXU 教务系统常用功能全适配，包括个人课表、考试信息、考试成绩等',

  theme: defaultTheme({
    logo: 'https://gitlab.unde.site/uploads/-/system/appearance/logo/1/DE36B41263F10D046C9449C45B69DF67.png',

    navbar: ['/', '/main','/logs', 'QA'],
  }),

  bundler: viteBundler(),
})
