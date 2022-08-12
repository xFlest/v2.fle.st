<template lang="pug">
.profile-more
  .profile-more-title
    h2.profile-more-title-text #[p す] #[p き] #[p な] #[p も] #[p の]
  ul.profile-more-list
    li.profile-more-list-item かわいいもの
      ul
        li シナモロール #[p.profile-more-list-etc などなど...]
    li.profile-more-list-item あまいもの
      ul
        li 酪王カフェオレ
        li ココア
    li.profile-more-list-item 音楽
      ul
        li YOASOBI #[p.profile-more-list-etc などなど...]
    li.profile-more-list-item アニメ・漫画
      ul
        li 名探偵コナン
        li ゆるゆり #[p.profile-more-list-etc などなど...]
    li.profile-more-list-item(v-emoji) 東方Project🤏
    li.profile-more-list-item(v-emoji) 文房具🤏
    li.profile-more-list-item(v-emoji) スマホ🤏

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