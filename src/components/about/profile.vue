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
          <fa :icon="['fab', 'twitter']" /><span>Twitter</span>
        </a>
        <a class="profile-link-discord" href="https://discord.com/users/559273656342151179">
          <fa :icon="['fab', 'discord']" /><span>Discord</span>
        </a>
        <a class="profile-link-github" href="https://github.com/xFlest">
          <fa :icon="['fab', 'github']" /><span>GitHub</span>
        </a>
        <a class="profile-link-misskey" href="https://submarin.online/@f">
          <img src="../../assets/misskey.png" alt="misskey"><span>Misskey</span>
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
    &-image {
      width: min(50%, 50rem);
    }
    &-info {
      margin-top: -18px;
    }
    &-text-screenname > span {
      display: none;
    }
  }
  &-image {
    margin: 18px 0;
    border-radius: 100%;
    :where(&) {
      width: min(30%, 30rem);
    }
    aspect-ratio: 1/1;
    overflow: hidden;
    > img {
      height: 100%;
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
    }
    &-screenname {
      font-size: min(2rem, 6vmin);
    }
  }
  &-link {
    a {
      display: inline-block;
      height: min(2rem, 6vmin);
      padding: 0 min(.5rem, 1.5vmin);
      overflow: hidden;
      margin: {
        bottom: 4px;
        right: 6px;
      }
      border-radius: 4px;
      text-decoration: none;
      font-weight: 700;
      > * {
        line-height: min(2rem, 6vmin);
        font-size: min(1rem, 3vmin);
      }
      > :is(img, svg) {
        height: min(1.2rem, 3.6vmin);
        vertical-align: middle;
      }
      > span {
        margin-left: 4px;
      }
    }
    &-twitter {
      background-color: #1DA1F2;
      color: #fff;
    }
    &-discord {
      background-color: #5865F2;
      color: #fff;
    }
    &-github {
      background-color: #171515;
      color: #fff;
    }
    &-misskey {
      background-color: #fff;
      color: #B4EA00;
    }
  }
}
</style>