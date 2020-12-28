<template>
  <div class="demo-block">
    <header>
      <h2>
        {{ bindValue.title }}
      </h2>
      <p class="desc">
        {{ bindValue.desc }}
      </p>
    </header>
    <DemoCard :onlineRunLink="bindValue.onlineRunLink">
      <slot />
      <template slot="codeDesc">
        <slot name="codeDesc" />
      </template>
      <!-- <template slot="code">
        <slot name="code" />
      </template> -->
      <!-- <template slot="code">
        <slot name="code" />
      </template> -->
      <div v-for="item in ['code', 'web']" :key="item">
        <template :slot="item">
          <slot :name="item" />
        </template>
      </div>
    </DemoCard>
  </div>
</template>
<script>
import DemoCard from './DemoCard'
export default {
  components: { DemoCard },
  data() {
    return {};
  },
  computed: {
    bindValue() {
      console.log(this.props, this.$attrs)
      return { ...this.$attrs, ...this.props }
    }
  }
};
</script>
<style  scoped>
  .demo-block .desc {
    font-size: 14px;
    line-height: 1.5em;
    color: #5e6d82;
  }
</style>
