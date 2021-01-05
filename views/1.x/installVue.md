---
title: vue-drag-tree-org控件
date: 2019-04-09
---
<DemoBlock title="基础用法" desc="基础用法" onlineRunLink="https://codesandbox.io/s/musing-chandrasekhar-ontro?file=/src/components/HelloWorld.vue" :config="codeNavConfigs">
   <!-- <button>test</button> -->
   <DragTree></DragTree>

  <!-- <template slot="codeDesc">
   按钮实体
  </template> -->

  <highlight-code slot="vue" lang="vue">
  <<< @/.vuepress/components/examples/VueDragTreeOrg.vue
  </highlight-code>

</DemoBlock>

## 参数

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data | 展示数据 | array | — | — |
| empty-text | 内容为空的时候展示的文本 | String | — | - |
| node-key | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | String | - | — |
| props | 是否支持透明度选择 | object | — | - |
| default-expand-all | 是否默认展开所有节点 | boolean | - | - |
| accordion | 是否每次只打开一个同级树节点展开	| boolean | — | false |
| draggable | 是否开启拖拽节点功能 | boolean | — | false |
<!-- <DemoTable title="参数" :tableBody="tableBody" :tableHead="tableHead"/> -->
## props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label | 指定节点标签为节点对象的某个属性值	 | string, function(data, node)	 | — | — |
| children | 指定子树为节点对象的某个属性值 | String | — | - |

## 事件

| 事件名称      | 说明    | 回调参数      | 
|---------- |-------- |---------- |
| node-click | 节点被点击时的回调	 | 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。|
| node-contextmenu | 当某一节点被鼠标右键点击时会触发该事件 | 共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。｜
| node-drag-start | 节点开始拖拽时触发的事件 | 共两个参数，依次为：被拖拽节点对应的 Node、event |
| node-drag-enter | 拖拽进入其他节点时触发的事件 | 共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event |
| node-drag-leave	 | 拖拽离开某个节点时触发的事件	 | 共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event |
| node-drag-over	 | 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）	| 共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event |
| node-drag-end	 | 拖拽结束时（可能未成功）触发的事件	 | 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event |
| node-drop	| 拖拽成功完成时触发的事件| 共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event |


<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `size | 尺寸 | String | medium / small / mini | —`
        ],
        codeNavConfigs: ['vue']
      }
    }
  }
</script>
