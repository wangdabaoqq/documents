module.exports = {
  type: 'HomePageOne',
  // logo: '/icon_vuepress_reco.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'wangdabaoqq',
  authorAvatar: '/head.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2017',
  algolia: {
    apiKey: '97357e58cac743c6de62036cb152f18b',
    indexName: 'vuepress-theme-reco'
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  // valine 设置
  // valineConfig: {
  //   appId: 'cPmNp6eGW2Pzs96iOEIfpd45-gzGzoHsz',
  //   appKey: 'CmSrvhul0X9HaJgno4ijc9gj',
  //   placeholder: 'wangdabao221@163.com',
  //   verify: true, // 验证码服务
  //   // notify: true, // 
  //   recordIP: true,
  //   showComment: false
  // },
  vssueConfig: {
    admins: ['wangdabaoqq'],
    platform: 'github',
    owner: 'wangdabaoqq',
    repo: 'vuepress-reco.github.io',
    clientId: '0bdafb4af5f892df2231',
    clientSecret: 'f0d1ffefb8c6a11f66379b7f72c0cfed156b1b1c',
  },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'vuepress-reco/vuepress-reco.github.io',
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  docsBranch: 'gh-pages-source',
  // // 默认是 false, 设置为 true 来启用
  editLinks: true,
  mode: 'light',
  modePicker: false,
  codeTheme: 'tomorrow'
}