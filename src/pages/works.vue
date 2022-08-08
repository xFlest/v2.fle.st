<template>
  <div class="card">
    <div class="card-inner">
      <Nav />
      <div class="card-scroller">
      </div>
    </div>
  </div>
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