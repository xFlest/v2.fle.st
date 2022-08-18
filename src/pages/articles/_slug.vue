<template lang="pug">
article
  h1 {{ articles.title }}
  div
    nuxt-content(:document="articles")
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: 'blog',
  async asyncData({ $content, params }) {
    const articles = await $content(`articles/${params.slug}`).fetch()
    return {
      articles,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
