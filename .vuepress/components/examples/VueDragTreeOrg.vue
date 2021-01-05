<template>
   <VueDragTreeOrg
      :data="data"
      :props="defaultProps"
      node-key="id"
    >
    </VueDragTreeOrg>
</template>

<script>
// import vueDragTree from 'vue-drag-tree-org'
// import 'vue-drag-tree-org/lib/theme/index.css'
export default {
  name: 'DragTree',
  // components: { vueDragTree },
  data() {
    return {
      // direction: 'Horizontal',
      // isExpand: false,
      data: [
        {
          id: 0,
          label: 'XXX科技有限公司',
          children: [
            {
              id: 2,
              label: '产品研发部',
              children: [
                {
                  id: 5,
                  label: '研发-前端'
                },
                {
                  id: 6,
                  label: '研发-后端'
                },
                {
                  id: 9,
                  label: 'UI设计'
                },
                {
                  id: 10,
                  label: '产品经理'
                }
              ]
            },
            {
              id: 3,
              label: '销售部',
              children: [
                {
                  id: 7,
                  label: '销售一部'
                },
                {
                  id: 8,
                  label: '销售二部'
                }
              ]
            },
            {
              id: 4,
              label: '财务部'
            },
            {
              id: 9,
              label: 'HR人事'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {
    console.log(this.data)
  }
}
</script>

<style scoped>
</style>