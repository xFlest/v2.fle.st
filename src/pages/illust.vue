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
          src: 'avatar/avatar9.jpg',
          description: 'illustration by 翠羽',
        },
        {
          src: 'avatar/avatar8.jpg',
          description: 'illustration by ばーじぇす',
        },
        {
          src: 'avatar/avatar7.jpg',
          description: 'illustration by ふかまる',
        },
        {
          src: 'avatar/avatar6.jpg',
          description: 'illustration by さかなのおにぎり',
        },
        {
          src: 'avatar/avatar5.jpg',
          description: 'illustration by Matechan',
        },
        {
          src: 'avatar/avatar4_c.jpg',
          description: 'illustration by おちや',
        },
        {
          src: 'avatar/avatar4.jpg',
          description: 'illustration by おちや',
        },
        {
          src: 'avatar/avatar3.jpg',
          description: 'illustration by 酒樽',
        },
        {
          src: 'avatar/avatar2.jpg',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar1.jpg',
          description: 'illustration by 4y4san',
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
}
</style>