---
title: 使用
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

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| size | 尺寸 | string | medium / small / mini | — |
| show-alpha | 是否支持透明度选择 | boolean | — | false |
| color-format | 写入 v-model 的颜色的格式 | string | hsl / hsv / hex / rgb | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |
| popper-class | ColorPicker 下拉框的类名 | string | — | — |
| predefine | 预定义颜色 | array | — | — |
<!-- <DemoTable title="参数" :tableBody="tableBody" :tableHead="tableHead"/> -->

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
    },

  }
</script>
