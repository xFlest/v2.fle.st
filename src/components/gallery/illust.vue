<template lang="pug">
.gallery
  .gallery-title
    h2.gallery-title-text #[p イ] #[p ラ] #[p ス] #[p ト]
  silent-box(:gallery='illust')
</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

export default {
  data() {
    return {
      illust: [
        {
          src: 'avatar/avatar1.png',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar2.jpg',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar3.webp',
          description: 'illustration by 酒樽',
        },
        {
          src: 'avatar/avatar4.jpg',
          description: 'illustration by おちや',
        },
        {
          src: 'avatar/avatar4_c.png',
          description: 'illustration by おちや',
        },
        {
          src: 'avatar/avatar5.jpg',
          description: 'illustration by Matechan',
        },
        {
          src: 'avatar/avatar6.jpg',
          description: 'illustration by さかなのおにぎり',
        },
        {
          src: 'avatar/avatar7.jpg',
          description: 'illustration by ふかまる',
        },
        {
          src: 'avatar/avatar8.jpg',
          description: 'illustration by ばーじぇす',
        },
        {
          src: 'avatar/avatar9.jpg',
          description: 'illustration by 翠羽',
        },
        {
          src: 'avatar/avatar10.png',
          description: 'illustration by 翠羽',
        },
        {
          src: 'avatar/avatar1_b.jpg',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar11.jpg',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar12.jpg',
          description: 'illustration by ちるちーる3',
        },
        {
          src: 'avatar/avatar13.jpg',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar14.jpg',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar15.jpg',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar16.png',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar17.png',
          description: 'illustration by 4y4san',
        },
        {
          src: 'avatar/avatar18.jpg',
          description: 'illustration by 山形',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.gallery-title {
  margin: min(45px, 12vmin) 0;
  text-align: center;
  &-text {
    display: inline-block;
    position: relative;
    margin: 0;
    height: min(2rem, 8vmin);
    font-size: min(1.5rem, 6vmin);
    color: #fff; 
    > p {
      height: 100%;
      margin: 0 !important;
      display: inline-block;
      transition: transform .15s;
      &:hover {
        transform: scale(1.2);
      }
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 50%;
      width: min(1.5px, 1vmin);
      bottom: 0;
      background-color: #fff;
      transform-origin: bottom;;
    }
    &::before {
      left: -20%;
      transform: rotate(-35deg);
    }
    &::after {
      right: -20%;
      transform: rotate(35deg);
    }
    &:hover {
      &::before {
        animation: poyo .6s linear infinite;
      }
      &::after {
        animation: poyo-reverse .6s linear infinite;
      }
    }
  }
}
</style>