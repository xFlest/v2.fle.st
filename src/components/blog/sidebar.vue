<template lang="pug">
.sidebar
  header.site-info 
    .header-icon 
      img(src="/avatar/avatar1.png")
    h1 ふれすとのメモ帳
    p 何か作った記録とか
  ul.site-link
    li
      .site-link-item
         fa(:icon="['fas', 'house']")
</template>

<style lang="scss">
.sidebar {
  color: #231E06d0;
  .header-icon {
    height: 10rem;
    > img {
      height: 100%;
      border-radius: 100%;
      box-shadow: 0 0 1rem #332e1615, 0 0 .5rem #332e1605;
    }
  }
  > h1 {
    margin: 0 {
      top: 1.6rem;
    }
    font-size: 1.4rem;
  }
  > p {
    opacity: .6;
  }
  > .site-link {
    list-style: none;
    padding: 0;
    margin: 4rem 0 0
  }
}
</style>
