<template lang="pug">
.gallery.gallery-m
  .gallery-title
    h2.gallery-title-text #[p 音] #[p 楽]
  silent-box(:gallery='music')
  p るなちが#[wbr]僕の#[wbr]誕生日に#[wbr]合わせて#[wbr]書き下ろして#[wbr]くれた#[wbr]曲です。#[br]ぜひ#[wbr]聞いてね。
</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

export default {
  data() {
    return {
      music: [
        {
          src: 'https://youtu.be/gMsO217_LKY',
          description: 'Ananas  /  Shirakaba Lunaco',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.gallery-m {
  #silentbox-gallery {
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      aspect-ratio: 16/9;
      max-height: none;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        display: block;
        top: 42%;
        left: 42%;
        width: 16%;
        height: 16%;
        background-image: url(~/assets/youtube.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      > img {
        width: 100% !important;
        object-fit: cover;
      }
    }
  }
}
</style>