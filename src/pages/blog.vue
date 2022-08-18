<template lang="pug">
.card
  .card-inner
    Nav
    .card-scroller
      ul
        li(v-for="article in articles" :key="article.slug")
          NuxtLink(:to="'/articles/' + article.slug")
            p {{ article.title }}
</template>

<script>
import Nav from '~/components/nav.vue';
export default {
  name: "Blog",
  components: {
    Nav,
  },
  layout: 'default',
  async asyncData ({ $content }) {
    const articles = await $content('articles').sortBy('createdAt', 'desc').fetch()
    return {
      articles
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
