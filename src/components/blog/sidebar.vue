<template lang="pug">
.sidebar
  header.site-info 
    .header-icon 
      img(src="/avatar/avatar1.png")
    h1 ふれすとの#[wbr]メモ帳
    p 何か作った記録とか
  ul.site-link
    li
      NuxtLink.site-link-item(to='/blog')
         fa(:icon="['fas', 'newspaper']")
         label トップ
    li
      NuxtLink.site-link-item(to='/')
         fa(:icon="['fas', 'house']")
         label ホームページ
    li
      NuxtLink.site-link-item(to='/blog/about')
         fa(:icon="['fas', 'user']")
         label このブログについて
</template>

<style lang="scss">
.sidebar {
  color: #231E06d0;
  .header-icon {
    height: 10rem;
    max-height: min(20vw, var(--vh,100vh) * .25);
    > img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      box-shadow: 0 0 min(1rem, 3vmin) #332e1615, 0 0 min(.5rem, 1.5vmin) #332e1605;
    }
  }
  h1 {
    margin: 0 {
      top: min(1.6rem, 4.8vmin);
    }
    font-size: min(1.4rem, 4.2vmin);
    word-break: keep-all;
  }
  > p {
    opacity: .6;
  }
  > .site-link {
    list-style: none;
    padding: 0;
    margin: min(2rem, 6vmin) 0 0;
    .site-link-item {
      display: block;
      padding: min(1rem, 3vmin) 0;
      color: #231E06d0;
      border-radius: min(.5rem, 1.5vmin);
      text-decoration: none;
      > svg {
        margin: 0 min(1rem, 3vmin);
        width: 1em;
      }
      &:hover {
        background-color: #332e1615;
      }
    }
  }
}
</style>
