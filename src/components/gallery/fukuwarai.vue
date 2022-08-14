<template lang="pug">
.gallery.gallery-f
  .gallery-title
    h2.gallery-title-text #[p 福] #[p 笑] #[p い]
  silent-box(:gallery='fukuwarai')
  p 福笑いとは、#[wbr]正月に行われる#[wbr]日本の#[wbr]伝統的な遊び#[wbr]らしいです。#[br]適当に#[wbr]パーツを#[wbr]当てはめ#[wbr]て遊んでみてね。
</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

export default {
  data() {
    return {
      fukuwarai: [
        {
          src: '/avatar/fukuwarai.jpg',
          description: 'illustration by 4y4san',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.gallery-f {
  #silentbox-gallery {
    display: block !important;
    width: 100%;
    > a {
      aspect-ratio: 0 !important;
      width: 100%;
      max-height: none !important;
      > img {
        width: 100%;
      }
    }
  }
}
#silentbox-gallery ~ p {
  text-align: center;
  color: #fff;
  font-size: min(1.5rem, 3vmin);
  margin: min(45px, 12vmin) auto;
  width: 92%;
  overflow-wrap: break-word;
  word-break: keep-all;
}
</style>
