<template lang="pug">
.card
  .card-inner
    Nav
    .card-scroller
      .tweet-container
        Timeline(id="xflest" sourceType="profile")
</template>

<script>
import Vue from 'vue'
import { Timeline } from 'vue-tweet-embed'
import Nav from '~/components/nav.vue'

Vue.use(Timeline)

export default {
  name: "Tweet",
  components: {
    Timeline,
    Nav,
  },
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
.tweet-container {
  opacity: 0;
  transition: opacity .4s;
}
</style>