<template lang="pug">
.profile
  .profile-image: img(src="/avatar2.jpg" alt="avatar_flest")
  .profile-info
    .profile-text
      p.profile-text-name ふれすと
      p.profile-text-screenname #[span /] xFlest
    .profile-link
      a.profile-link-twitter(href="https://twitter.com/xflest")
        div 
          fa(:icon="['fab', 'twitter']")
      a.profile-link-discord(href="https://discord.com/users/559273656342151179")
        div
          fa(:icon="['fab', 'discord']")
      a.profile-link-github(href="https://github.com/xFlest")
        div
          fa(:icon="['fab', 'github']")
      a.profile-link-misskey(href="https://submarin.online/@f")
        div
          img(src="../../assets/misskey.png" alt="misskey")
</template>

<style lang="scss" scoped>
.profile {
  margin-top: min(16px, 6vmin);
  display: flex;
  gap: min(4vmin, 36px);
  align-items: center;
  &-image {
    position: relative;
    margin: min(24px, 2vmin);
    :where(&) {
      width: min(30%, 30rem);
      height: min(30%, 30rem);
    }
    > img {
      height: 100%;
      width: 100%;
      border-radius: 100%;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: solid min(1px, .7vmin) #fff;
      opacity: 0;
    }
    &:hover::after {
      animation: circle .9s ease alternate;
    }
  }
  &-info {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &-text {
    margin: 0 0 min(12px, 2.25vmin);
    color: #fff;
    &-name {
      font-size: min(2rem, 8vmin);
      font-weight: 700;
      margin: 0 {
        bottom: min(.6rem, 2.4vmin);
      }
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-position: 100% 0;
      background-size: 300% 100%;
      background-image: linear-gradient(to right, rgba(255,182,0,1) 0%, rgba(252,255,0,1) 17%, rgba(255,234,196,1) 34%, #fff 67%, #fff 100%);
      transition: background-position .4s;
      &:hover {
        background-position: 0 0;
      }
    }
    &-screenname {
      font-size: min(1.2rem, 3.6vmin);
      margin: 0;
    }
  }
  &-link {
    position: relative;
    display: flex;
    margin-top: 2vmin;
    overflow: hidden;
    gap: 2vmin;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: min(1px, .5vmin);
      transition: background-size .8s;
      background-size: 100% 100%;
      background-image: linear-gradient(to left, #0000, #0000 min(12rem, 32vmin), #fff calc(100% - min(6rem, 16vmin)), #fff 100%);
    }
    a {
      display: block;
      height: min(3rem, 8vmin);
      width: min(3rem, 8vmin);
      overflow: hidden;
      color: #fff;
      margin: min(4px, 2vmin) 0;
      text-decoration: none;
      font-weight: 700;
      > * {
        line-height: min(2rem, 6vmin);
        font-size: min(1rem, 3vmin);
      }
      > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        > :is(img, svg) {
          height: min(1.2rem, 3.6vmin);
          vertical-align: middle;
          transition: transform .2s;
        }
      }
      &:hover {
        > div {
          animation: flip .4s ease;
          :is(svg, img) {
            transform: scale(1.2);
          }
        }
      }
      &:active {
        :is(svg, img) {
          transform: scale(.8) !important;
        }
      }
    }
    &-misskey img {
      filter: brightness(10) saturate(0);
    }
    &:active {
      &::before {
        background-size: 300% 100%;
      }
    }
  }
  @media (max-aspect-ratio: 3/4) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
    &-image {
      width: min(50%, 50rem);
      margin: min(48px, 5vmin) 0 !important;
    }
    &-text-screenname > span {
      display: none;
    }
    &-link {
      height: calc(min(4rem, 10vmin) + min(4px, 2vmin));
      justify-content: center;
      align-items: center;
      &::before {
        background: none !important;
      }
      > a {
        border: dotted 1px #fff;
        border-radius: 100%;
        transition: .4s;
        overflow: hidden;
        background-position: 100% 0;
        background-size: 300% 100%;
        :is(svg, img) {
          transition: transform .2s;
        }
        &.profile-link-twitter {
          background-image: linear-gradient(45deg, #1da1f266 0%, #1da1f266 45%, #0000 55%, #0000 100%);
        }
        &.profile-link-discord {
          background-image: linear-gradient(45deg, #7289da66 0%, #7289da66 45%, #0000 55%, #0000 100%);
        }
        &.profile-link-github {
          background-image: linear-gradient(45deg, #3336 0%, #3336 45%, #0000 55%, #0000 100%);
        
        }&.profile-link-misskey {
          background-image: linear-gradient(45deg, #b4ea0066 0%, #b4ea0066 45%, #0000 55%, #0000 100%);
        }
        &:hover {
          height: min(4rem, 10vmin);
          width: min(4rem, 10vmin);
          animation: kurukuru 5s linear infinite;
          background-position: 0 0;
          > div {
            animation: kurukuru 5s linear infinite reverse;
          }
        }
        &:active {
          border-radius: 40% !important;
          :is(svg, img) {
            transform: scale(1.2) !important;
          }
        }
      }
    }
  }
}
@keyframes circle {
  0% {
    opacity: 0;
  } 1% {
    opacity: 1;
  } 100% {
    opacity: 0;
    transform: scale(1.2);
  }
}
@keyframes kurukuru {
  0% {
    transform: rotate(0deg);
  } 100% {
    transform: rotate(360deg);
  }
}
@keyframes flip {
  0% {
    transform: rotateY(-360deg);
  } 100% {
    transform: rotateY(0deg);
  }
}
</style>