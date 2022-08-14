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
  #silentbox-gallery {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    > a {
      aspect-ratio: 16/9 !important;
      order: 0 !important;
    }
  }
  .gallery-pptx-dl {
    display: block;
    margin-top: min(15px, 4vmin);
    width: 100%;
    height: min(90px, 24vmin);
    border-radius: min(1rem, 4vmin);
    border: solid min(1px, .7vmin) #fff;
    display: flex;
    color: #fff;
    justify-content: space-around;
    align-items: center;
    font-size: min(1.2rem, 3.6vmin);
    text-decoration: none;
    transition: background-color .2s;
    > svg {
      font-size: 2.4em;
    }
    > p {
      width: 60%;
      font-size: 1.6em;
      margin: 0;
    }
    &:hover {
      background-color: #fff5;
    }
    &:active {
      background-color: #3339;
    }
  }
}
</style>
