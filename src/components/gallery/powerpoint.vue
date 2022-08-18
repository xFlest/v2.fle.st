<template lang="pug">
.gallery.gallery-p
  .gallery-title
    h2.gallery-title-text #[p P] #[p o] #[p w] #[p e] #[p r ]   #[p  P] #[p o] #[p i] #[p n] #[p t]
  silent-box(:gallery='pp')
  a.gallery-pptx-dl(href="avatar/flest.pptx" download)
    fa(:icon="['fas', 'download']")
    p flest.pptx
  p Midraによって#[wbr]パワポに#[wbr]なりました。#[wbr]謎です。#[br]元絵は#[wbr]あやさん作です。
</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

export default {
  data() {
    return {
      pp: [
        {
          src: '/avatar/pptx1.jpg'
        },
        {
          src: '/avatar/pptx2.jpg'
        },
        {
          src: '/avatar/pptx3.jpg'
        },
        {
          src: '/avatar/pptx4.jpg'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.gallery-p {
  text-align: center;
  #silentbox-gallery {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: min(.5rem, 1vmin);
    > a {
      aspect-ratio: 16/9 !important;
      order: 0 !important;
    }
  }
  .gallery-pptx-dl {
    display: inline-flex;
    margin-top: min(15px, 4vmin);
    padding: min(.7rem, 2vmin) min(1.2rem, 3.6vmin);
    border-radius: 2.5em;
    background-color: #F8D92F;
    color: #fff;
    font-size: min(1.6rem, 4vmin);
    align-items: center;
    text-decoration: none;
    transition: background-color .2s;
    > svg {
      display: block;
      margin-right: .6em;
      filter: drop-shadow(0 0 .05em #0008);
    }
    > p {
      font-size: min(1.6rem, 4vmin);
      text-shadow: 0 0 .2em #0008;
      margin: 0;
      flex-grow: 1;
    }
    &:hover {
      background-color: #FAC26D;
    }
    &:active {
      background-color: #FAE36D;
    }
  }
}
</style>
