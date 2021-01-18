---
home: true
heroImage: /icon_vuepress_reco.png
heroImageStyle: {
  maxWidth: '200px',
  width: '100%',
  display: block,
  margin: '0 auto 2rem',
  borderRadius: '1rem',
}
isShowTitleInHome: true
actionText: 快速开始
actionLink: /views/1.x/
features:
- title: 过去
  details: 开发一款基于Vue2.X的拖拽组织树。
- title: 当下
  details: 更好的完善目前开发的功能, 考虑后续开发的一些功能。
- title: 未来
  details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 安装
```sh
# use npm
npm install vue-drag-tree-org

# use yarn
yarn add vue-drag-tree-org
```
## 使用
```js
# use
import VueDragTreeOrg from 'vue-drag-tree-org'

Vue.use(VueDragTreeOrg)

# or use
compoents: {
  VueDragTreeOrg
}
```
## CDN
```html
# css
<link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-drag-tree-org@2.0.0/lib/theme/index.css">


# js
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-drag-tree-org@2.0.0/lib/index.umd.js"></script>
```

## 相关仓库
- [element-tree](https://github.com/ElemeFE/element/tree/dev/packages/tree) - 饿了么Tree组件
- [vue-org-tree](https://github.com/hukaibaihu/vue-org-tree) - 基于Vue的组织树

## 维护者

[@wangdabaoqq](https://github.com/wangdabaoqq)
## 支持浏览器


| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| --------- | --------- | --------- | --------- |

<!-- <Contributors user="vuepress-reco" repo="vuepress-theme-reco" :show-title="true"></Contributors>
<Contributors user="vuepress-reco" repo="vuepress-reco.github.io" :show-title="true"></Contributors> -->
