<template>
  <div class="demo-card">
    <div class="source">
      <slot />
    </div>
    <div
      v-show="showCode"
      class="code"
    >
      <div
        v-if="$slots.codeDesc"
        class="code-desc"
      >
        <slot name="codeDesc" />
      </div>
       <button
              v-for="(config, index) in codeNavConfigs"
              :key="index"
              :class="['demo-code-btn', codeNavIndex === index ? 'active' : '']"
              @click="codeNavBtnHandler(index)">{{config.title}}</button>
      <div class="code-src">
        <!-- <slot name="code" /> -->
        <!-- <slot name="code" /> -->

        <div
          class="demo-code-item"
          v-for="(config, index) in codeNavConfigs"
          :key="index"
          v-show="codeNavIndex === index">
          <!-- {{config.slotName}} -->
          <slot :name="config.slotName" />
        </div>
        <i class="demo-code-content-copy" @click='copyCode'>
          <svg t="1572585974849" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1695" width="20" height="20" style="fill: #fff"><path d="M866.461538 39.384615H354.461538c-43.323077 0-78.769231 35.446154-78.76923 78.769231v39.384616h472.615384c43.323077 0 78.769231 35.446154 78.769231 78.76923v551.384616h39.384615c43.323077 0 78.769231-35.446154 78.769231-78.769231V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231z m-118.153846 275.692308c0-43.323077-35.446154-78.769231-78.76923-78.769231H157.538462c-43.323077 0-78.769231 35.446154-78.769231 78.769231v590.769231c0 43.323077 35.446154 78.769231 78.769231 78.769231h512c43.323077 0 78.769231-35.446154 78.76923-78.769231V315.076923z m-354.461538 137.846154c0 11.815385-7.876923 19.692308-19.692308 19.692308h-157.538461c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h157.538461c11.815385 0 19.692308 7.876923 19.692308 19.692308v39.384615z m157.538461 315.076923c0 11.815385-7.876923 19.692308-19.692307 19.692308H216.615385c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h315.076923c11.815385 0 19.692308 7.876923 19.692307 19.692308v39.384615z m78.769231-157.538462c0 11.815385-7.876923 19.692308-19.692308 19.692308H216.615385c-11.815385 0-19.692308-7.876923-19.692308-19.692308v-39.384615c0-11.815385 7.876923-19.692308 19.692308-19.692308h393.846153c11.815385 0 19.692308 7.876923 19.692308 19.692308v39.384615z" p-id="1696"></path></svg>
        </i>

      </div>
    </div>
    <div
      class="action"
      @click="showCode=!showCode"
    >
      <span>{{ `${showCode?'隐藏':'显示'}代码` }}</span>
      <span
        v-if="$attrs.onlineRunLink"
        class="open"
        @click="open"
      >
        在线运行
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showCode: false,
      copied: false,
      codeNavIndex: 0,
      codeNavConfigs: [
        {
          title: 'Web',
          slotName: 'code'
        },
        {
          title: 'Vue',
          slotName: 'vue'
        }
      ]
    };
  },
  mounted () {
    console.log(this)
  },
  methods: {
    open() {
      window.open(this.$attrs.onlineRunLink)
    },
    codeNavBtnHandler (i) {
      this.codeNavIndex = i
    },
    copyCode () {
      const pre = this.$el.querySelectorAll('pre')[this.codeNavIndex]
      pre.setAttribute('contenteditable', 'true')
      pre.focus()
      document.execCommand('selectAll', false, null)
      this.copied = document.execCommand('copy')
      pre.removeAttribute('contenteditable')
      // setTimeout(() => { this.copied = false }, 1000)
    }
  }
};
</script>
<style scoped>
.demo-card {
  margin-bottom: 24px;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}
  .demo-card:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .demo-card .source {
    padding: 24px;
  }
  .code {
    padding: 10px;
    background-color: #fafafa;
    transition: 0.2s;
  }
  .code-src {
    position: relative;

  }
  .code-desc {
      padding: 10px;
      margin-bottom: 20px;
      font-size: 13px;
      background-color: #fff;
    }
  .action {
    height: 48px;
    margin-top: -1px;
    line-height: 48px;
    color: #409eff;
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    border-top: 1px solid #eaeefb;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    box-sizing: border-box;

  }
  .open {
    float: right;
    margin-right: 30px;
  }
  .demo-code-content-copy {
    position: absolute;
    top: 30px;
    right: 10px;
    z-index: 100;
    cursor: pointer;
  }
</style>
