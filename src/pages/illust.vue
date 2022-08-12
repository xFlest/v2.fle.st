<template lang="pug">
.card
  .card-inner
    Nav
    .card-scroller
      silent-box(:gallery='illust')
</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
import Nav from '~/components/nav.vue'
Vue.use(VueSilentbox)

export default {
  name: "Illust",
  components: {
    Nav,
    VueSilentbox
  },
  layout: 'default',
  data() {
    return {
      illust: [
        {
          src: 'https://raw.githubusercontent.com/xFlest/dev.fle.st/main/src/assets/avatar1.jpg?token=GHSAT0AAAAAABXBHKL5NT6W2HSZRY7LP6ISYXWDXUQ',
          description: 'illustration by 4y4san',
          thumbnailWidth: '220px'
        },
        {
          src: 'https://raw.githubusercontent.com/xFlest/dev.fle.st/main/src/assets/avatar2.jpg?token=GHSAT0AAAAAABXBHKL5PMRZCC5JBK2VPAUSYXWDZWA',
          description: 'illustration by 4y4san',
          thumbnailWidth: '220px'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 92% !important;
  transform: none !important;
  &:is(.page-leave-to, .page-enter) {
    transition: .3s;
   .card-scroller {
      opacity: 0;
    }
  }
  &-inner {
    padding: 0 4%;
  }
  &-scroller {
    transition: opacity .3s;
    height: calc(100% - min(62px, 7vmin));
    overflow-y: scroll;
    scrollbar-width: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>