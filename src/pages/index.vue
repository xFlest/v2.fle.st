<template lang="pug">
.card
  .card-inner
    .prf-avatar
      img(class="prf-avatar-image" src="avatar/avatar2.jpg")
    .prf-text
      p.prf-text-name ふれすと
      p.prf-text-screenname xFlest
    CardLink
</template>

<script>
import CardLink from '~/components/index/card-link.vue';
export default {
  name: "Index",
  components: { 
    CardLink,
  },
  layout: "default",
  mounted () {
    const mobile = navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i);
    if (!mobile) {
      document.body.addEventListener('mousemove', function(e){
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        const degreeX = (cursorY - (vh / 2)) / (vh / 2) * -20;
        const degreeY = (cursorX - (vw / 2)) / (vw / 2) * 20;
        const root = document.querySelector(':root');
        root.style.setProperty('--cardRotate', `rotateX(${degreeX}deg) rotateY(${degreeY}deg)`);
      });
    }
  } 
}
</script>

<style lang="scss" scoped>
.card {
  transform: var(--cardRotate);
  &.page-leave {
    &-active {
      transition: .3s;
    }
    &-to {
      height: 92%;
      transform: rotateY(0);
      > .card-inner {
        opacity: 0;
      }
    }
  }
  &.page-enter {
    height: 92%;
    transform: rotateY(0);
    &-active {
      transition: .3s;
      > .card-inner {
        transition-delay: .3s;
      }
    }
    > .card-inner {
      opacity: 0;
      padding: 0;
    }
  }
  &-inner {
    height: 120%;
    width: 100%;
    margin-top: calc(-20% /16 *9);
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: opacity .2s;
  }
}
.prf {
  &-avatar {
    height: 40%;
    width: 100%;
    &-image {
      max-height: 100%;
      width: auto;
      display: block;
      margin: 0 auto;
      border-radius: 100%;
      box-shadow: 0 0 10px #888;
    }
  }
  &-text {
    height: 30%;
    width: 100%;
    margin: calc(5% /16 *9 *1.2) 0;
    > p {
      height: 40%;
      width: 100%;
      margin: 0;
      padding-top: calc(10% /16 *9 *0.48);
      font-size: calc(var(--vmin,100vmin)*0.06);
      color: white;
      text-align: center;
      font-weight: bold;
      &.prf-text-screenname {
        display: block;
        font-size: calc(var(--vmin,100vmin)*0.04);
        font-weight: normal;
      }
    }
  }
}
</style>