// import vueDragTree from 'vue-drag-tree-org'
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import DragTree from './components/examples/VueDragTreeOrg.vue'
export default ({ Vue, options, router, siteData, isServer }) => {
  // Vue.use(VueDragTree)
  Vue.use(VueHighlightJS)
  Vue.component(DragTree.name, DragTree)
}