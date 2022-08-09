<template>
  <div class="profile">
    <div class="profile-image"><img src="~/assets/avatar2.jpg" alt="avatar_flest"></div>
    <div class="profile-info">
      <div class="profile-text">
        <p class="profile-text-name">ふれすと</p>
        <p class="profile-text-screenname"><span>/</span> xFlest</p>
      </div>
      <div class="profile-link">
        <a class="profile-link-twitter" href="https://twitter.com/xflest">
          <div>
            <fa :icon="['fab', 'twitter']" />
          </div>
        </a>
        <a class="profile-link-discord" href="https://discord.com/users/559273656342151179">
          <div>
            <fa :icon="['fab', 'discord']" />
          </div>
        </a>
        <a class="profile-link-github" href="https://github.com/xFlest">
          <div>
            <fa :icon="['fab', 'github']" />
          </div>
        </a>
        <a class="profile-link-misskey" href="https://submarin.online/@f">
          <div>
            <img src="../../assets/misskey.png" alt="misskey">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  gap: min(4vmin, 36px);
  align-items: center;
  @media (max-aspect-ratio: 3/4) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
    &-image {
      width: min(50%, 50rem);
      margin: min(48px, 5vmin) 0 !important;
    }
    &-info {
      margin-top: -18px;
    }
    &-text-screenname > span {
      display: none;
    }
  }
  &-image {
    position: relative;
    margin: min(24px, 2vmin);
    :where(&) {
      width: min(30%, 30rem);
    }
    aspect-ratio: 1/1;
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
      border: solid min(2px, 1vmin) #fff;
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
    margin: 12px 0;
    color: #fff;
    p {
      margin: 0;
    }
    &-name {
      font-size: min(3rem, 10vmin);
      font-weight: 700;
      margin-bottom: 6px !important;
      -webkit-background-clip: text;
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
      font-size: min(2rem, 6vmin);
    }
  }
  &-link {
    position: relative;
    margin-top: 12px;
    widows: fit-content;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: min(1px, .5vmin);
      background: linear-gradient(to left, #0000, #0000 min(12rem, 32vmin), #fff calc(100% - min(6rem, 16vmin)), #fff 100%);
    }
    a {
      display: inline-block;
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
        }
      }
    }
    &-misskey {
      filter: brightness(1000);
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
</style>