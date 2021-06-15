module.exports = {
  'zh': [
    { text: '文档', 
      icon: 'reco-api',
      items: [
        { text: 'vue-drag-tree-org', link: '/views/1.x/' },
      ]
    },
    // { text: '常见问题', link: '/views/other/question', icon: 'reco-faq' },
    // { text: '博客', link: '/categories/blog/', icon: 'reco-blog'},
    { text: '源码解析系列', icon: 'reco-link', 
      items: [
        { text: 'element-ui源码解析', link: 'https://github.com/wangdabaoqq/element-ui' },
        { text: 'underscore.js源码解析', link: 'https://github.com/wangdabaoqq/underscore-learn' },
      ]
    },
    { text: '作品', link: '/views/other/theme-example.html', icon: 'reco-category'},
    { text: '留言板', link: '/views/other/messageBoard.html', icon: 'reco-suggestion'},
    { text: 'GitHub', link: 'https://github.com/wangdabaoqq/documents', icon: 'reco-github'}
  ],
  'en': [
    { text: 'Documents', 
      icon: 'reco-api',
      items: [
        { 
          text: 'Theme', items: [
            { text: '1.x', link: '/en/views/1.x/' }
          ],
        },
        {
          text: 'Plugin', items: [
            { text: 'plugin', link: '/en/views/plugins/' }
          ]
        }
      ]
    },
    { text: 'FAQ', link: '/en/views/other/question', icon: 'reco-faq' },
    { text: 'Examples', link: '/en/views/other/theme-example.html', icon: 'reco-category'},
    { text: 'RSS', link: 'https://vuepress-theme-reco.recoluan.com/rss.xml', icon: 'reco-rss'},
    { text: 'GitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco', icon: 'reco-github'}
  ]
}