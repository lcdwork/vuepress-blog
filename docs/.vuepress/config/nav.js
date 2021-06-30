// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '基础',
        items: [
          { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
          { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
        ],
      },
      {
        text: '进阶',
        items: [
          { text: 'JavaScript', link: '/pages/0796ba76b4b55368/' },
          { text: 'ES6', link: '/pages/f344d070a1031ef7/' },
          { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
          { text: 'React', link: '/pages/5df969/' },
          { text: 'TypeScript 从零实现 axios', link: '/pages/e05dce83e5129785/' },
        ],
      },
    ],
  },
  {
    text: '笔记',
    link: '/pages/',
    items: [
      { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
      {
        text: 'TypeScript笔记',
        link: '/pages/51afd6/',
      },
      {
        text: '小程序笔记',
        link: '/note/wx-miniprogram/',
      },
      {
        text: 'JS设计模式总结笔记',
        link: '/pages/4643cd/',
      },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
      { text: 'Git', link: '/pages/8292d8/' },
    ],
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
