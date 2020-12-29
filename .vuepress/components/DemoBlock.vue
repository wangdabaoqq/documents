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
    <DemoCard :onlineRunLink="bindValue.onlineRunLink" :config="bindValue.config">
      <slot />
      <template slot="codeDesc">
        <slot name="codeDesc" />
      </template>
       <template :slot="config" 
          v-for="(config, index) in bindValue.config"
        >
        <slot :name="config" />
       </template>
    </DemoCard>
  </div>
</template>
<script>
import DemoCard from './DemoCard'
export default {
  components: { DemoCard },
  data() {
    return {
    };
  },
  computed: {
    bindValue() {
      console.log(this.props, this.$attrs, this)
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
