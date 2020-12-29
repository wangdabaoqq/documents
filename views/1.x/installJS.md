---
title: 使用
date: 2019-04-09
---

<DemoBlock title="基础用法" desc="基础用法" onlineRunLink="https://codesandbox.io/s/nice-shannon-y8yo2?file=/index.html" :config="codeNavConfigs">
   <!-- <button>test</button> -->
   <DragTree></DragTree>

  <!-- <template slot="codeDesc">
   按钮实体
  </template> -->

  <highlight-code slot="web" lang="vue">

  <<< @/.vuepress/components/examples/VueDragTreeOrg.html

  </highlight-code>
</DemoBlock>

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
        codeNavConfigs: ['web'] 
      }
    },

  }
</script>