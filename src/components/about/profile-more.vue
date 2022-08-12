<template lang="pug">
.profile-more
  .profile-more-title
    h2.profile-more-title-text #[p 基] #[p 本] #[p 情] #[p 報]
  ul.profile-more-list
    li.profile-more-list-item 身分    高校生
    li.profile-more-list-item 誕生    2004 / 12 / 20
    li.profile-more-list-item 年齢    17歳
    li.profile-more-list-item 住処    福島県某所
    li.profile-more-list-item 雌雄    おとこ
</template>

<style lang="scss">
.profile-more {
  margin-top: min(45px, 12vmin);
  width: calc(100% / 3);
  @media (max-aspect-ratio: 9/8) {
    flex-wrap: nowrap;
    width: 100%;
    &-container {
      flex-direction: column;
    }
  }
  &-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  &-title {
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
  &-list {
    list-style: none;
    font-size: min(1.2rem, 3.6vmin);
    position: relative;
    padding-left: min(3.5rem, 10.5vmin);
    white-space: pre-wrap;
    &-item {
      color: #fff;
      line-height: min(2rem, 6vmin);
      margin-bottom: min(.3rem, 1vmin);
      &::before {
        content: '';
        position: absolute;
        left: min(.3rem, .9vmin);
        display: block;
        background-image: url(/ribbon.png);
        background-size: contain;
        background-repeat: no-repeat;
        height: min(2rem, 6vmin);
        width: min(3rem, 9vmin);
        transform: scale(.7) rotate(-15deg);
      }
      &:hover::before {
        animation: poyo2 .6s linear infinite;
      }
    }
  }
}
@keyframes poyo {
  0% {
    transform: rotate(-35deg);
  } 25% {
    transform: rotate(-45deg);
  } 75% {
    transform: rotate(-30deg);
  } 100% {
    transform: rotate(-35deg);
  }
}
@keyframes poyo-reverse {
  0% {
    transform: rotate(35deg);
  } 25% {
    transform: rotate(45deg);
  } 75% {
    transform: rotate(30deg);
  } 100% {
    transform: rotate(35deg);
  }
}
@keyframes poyo2 {
  0% {
    transform: scale(.7) rotate(-15deg);
  } 25% {
    transform: scale(.7) rotate(-20deg);
  } 75% {
    transform: scale(.7) rotate(-10deg);
  } 100% {
    transform: scale(.7) rotate(-15deg);
  }
}
</style>