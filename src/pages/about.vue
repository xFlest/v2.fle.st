<template>
  <div class="card">
    <div class="card-inner">
      <Nav />
      <div class="card-scroller">
        <Profile />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue';
import Profile from '~/components/about/profile.vue';
export default {
  name: "About",
  components: {
    Nav,
    Profile
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
    height: 100%;
  }
  &-scroller {
    transition: opacity .3s;
    height: calc(100% - min(62px, 7vmin));
    overflow-x: visible;
    overflow-y: scroll;
    scrollbar-width: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>