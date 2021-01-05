// import vueDragTree from 'vue-drag-tree-org'
import VueHighlightJS from 'vue-highlight.js';
// import ElementUI from 'element-ui';
import 'highlight.js/styles/atom-one-dark.css';
// import 'element-ui/lib/theme-chalk/index.css';
import VueDragTreeOrg from 'vue-drag-tree-org'

import DragTree from './components/examples/VueDragTreeOrg.vue'
export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(VueDragTreeOrg)
  Vue.use(VueHighlightJS)
  Vue.component(DragTree.name, DragTree)
}