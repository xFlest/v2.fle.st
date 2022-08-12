<template lang="pug">
.card
  .card-inner
    Nav
    .card-scroller
</template>

<script>
import Nav from '~/components/nav.vue';
export default {
  name: "Works",
  components: {
    Nav
  },
  layout: 'default',
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