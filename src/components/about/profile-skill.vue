<template lang="pug">
.profile-more
  .profile-more-title
    h2.profile-more-title-text #[p で] #[p き] #[p る] #[p こ] #[p と]
  ul.profile-more-list
    li.profile-more-list-item HTML
    li.profile-more-list-item CSS
    li.profile-more-list-item(v-emoji) Sass🤏
    li.profile-more-list-item(v-emoji) Pug🤏
    li.profile-more-list-item(v-emoji) Nuxt🤏
    li.profile-more-list-item Kodular
    li.profile-more-list-item MFM

</template>

<style lang="scss">
.profile-more-list {
  ul {
    list-style: circle;
  }
  &-etc {
    display: inline-block;
    margin: 0;
    font-size: .03em;
  }
}
</style>
