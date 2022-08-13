<template lang="pug">
.card
  .card-inner
    Nav
    .card-scroller
      p.gallery-text 素敵なイラストから#[wbr]謎のパワーポイントまで#[wbr]様々な物を#[wbr]頂きました。#[br]ありがたく#[wbr]展示させて#[wbr]いただきます。
      Illust
      Fukuwarai
      Music
      Powerpoint
</template>

<script>
import Illust from '../components/gallery/illust.vue';
import Fukuwarai from '../components/gallery/fukuwarai.vue';
import Music from '../components/gallery/music.vue';
import Powerpoint from '../components/gallery/powerpoint.vue';
import Nav from '~/components/nav.vue';

export default {
  name: "Gallery",
  components: {
    Nav,
    Illust,
    Fukuwarai,
    Music,
    Powerpoint
},
  layout: 'default',
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
  &-scroller {
    padding: calc(min(80vw, var(--vh,100vh)) * .04) {
      top: 0;
    };
    box-sizing: border-box;
  }
}
.gallery-text {
  text-align: center;
  color: #fff;
  font-size: min(1.5rem, 3vmin);
  margin: min(45px, 12vmin) auto;
  width: 92%;
  overflow-wrap: break-word;
  word-break: keep-all;
}
</style>