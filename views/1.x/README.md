---
title: 在vue2.X中使用
date: 2019-04-09
---

欢迎来到`vue-drag-tree-org`, 当然也希望你可以喜欢用`vue-drag-tree-org`.

::: tip
  选择开发`vue-drag-tree-org`, 归根结底还是因为有这方面的需求, 发现市面上基于组织树的插件或者包比较少。
  其中最贴合的就是`vue-org-tree`, 但是比较遗憾的是没有拖拽的功能。索性我就基于`vue-org-tree`和`element-ui`的
  tree开发一款基于拖拽的组织树。
:::
## 安装


```bash
# use npm
npm install vue-drag-tree-org --save-dev

# use yarn
yarn add vue-drag-tree-org
```

## 引用

```js
# use
import VueDragTree from 'vue-drag-tree-org'

Vue.use(VueDragTree)

# or use
compoents: {
  VueDragTree
}
