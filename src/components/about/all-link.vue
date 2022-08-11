<template lang="pug">
.profile-link
  .profile-more-title
    h2.profile-more-title-text #[p リ] #[p ン] #[p ク]
  ul.profile-link-list
    li.profile-link-twitter
      ul
        li: a.profile-link-item(href="https://twitter.com/xflest") @xFlest
        li: a.profile-link-item(href="https://twitter.com/yflest") @yFlest
        li: a.profile-link-item(href="https://twitter.com/keyflest") @keyFlest
      div: fa(:icon="['fab', 'twitter']")
    li.profile-link-fediverse
      ul
        li: a.profile-link-item(href="https://submarin.online/@f") @f@submarin.online
        li: a.profile-link-item(href="https://submarin.online/@xflest") @xFlest@submarin.online
        li: a.profile-link-item(href="https://misskey.io/@fl") @fl@misskey.io
        li: a.profile-link-item(href="https://sushi.ski/@xflest") @xFlest@sushi.ski
        li: a.profile-link-item(href="https://mi.cbrx.io/@xflest") @xFlest@mi.cbrx.io
        li: a.profile-link-item(href="https://mstdn.jp/@xflest") @xFlest@mstdn.jp
      div: fa(:icon="['fas', 'earth-americas']")
    li.profile-link-instagram
      a.profile-link-item(href="https://instagram.com/xflest") @zFlest
      div: fa(:icon="['fab', 'instagram']")
    li.prpfile-link-discord
      a.profile-link-item(href="https://discord.com/users/559273656342151179") ふれすと#1351
      div: fa(:icon="['fab', 'discord']")
    li.prpfile-link-line
      a.profile-link-item(href="https://line.me/ti/p/UvLrZbk76V") LINE
      div: fa(:icon="['fab', 'line']")
    li.prpfile-link-youtube
      a.profile-link-item(href="https://www.youtube.com/channel/UCjUBlrQbLSwC-7fRv47o-2w") YouTube
      div: fa(:icon="['fab', 'youtube']")
    li.prpfile-link-github
      a.profile-link-item(href="https://github.com/xFlest") Github
      div: fa(:icon="['fab', 'github']")
    li.prpfile-link-pixiv
      a.profile-link-item(href="https://www.pixiv.net/users/75343053") pixiv
      div: img(src="~/assets/pixiv.png")
    li.prpfile-link-tiktok
      a.profile-link-item(href="https://www.tiktok.com/@xflest") TikTok
      div: fa(:icon="['fab', 'tiktok']")
    li.prpfile-link-tumblr
      a.profile-link-item(href="https://xflest.tumblr.com") tumblr
      div: fa(:icon="['fab', 'tumblr']")
    li.prpfile-link-facebook
      a.profile-link-item(href="https://www.facebook.com/100049470604133") Facebook
      div: fa(:icon="['fab', 'facebook-f']")
    li.prpfile-link-exdeck
      a.profile-link-item(href="https://exdeck.site/archives/author/xflest/") EXDeck開発ブログ
      div: img(src="~/assets/exdeck.png")
    
</template>

<style lang="scss">
.profile-link {
  margin: min(90px, 24vmin) 0;
  &-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    font-size: min(1.2rem, 3.6vmin);
    > li {
      display: flex;
      overflow: hidden;
      margin: 1.2em 0 0;
      flex-basis: 50%;
      flex-grow: 0;
      @media (max-aspect-ratio: 9/8) {
        flex-basis: 100%;
      }
      > div {
        flex-basis: min(45px, 25%);
        flex-grow: 0;
        flex-shrink: 0;
        order: 1;
        text-align: center;
        font-size: min(2rem, 6vmin);
        color: #fff;
        > img {
          width: min(2rem, 6vmin);
          filter: saturate(0) brightness(100);
        }
        > :is(svg, img) {
          transition: transform .4s;
        }
      }
      > :is(ul, a) {
        flex-grow: 1;
        order: 2;
        border-left: solid min(1px, .5vmin) #fff;
        transition: border-color .2s;
        &:hover {
          text-decoration-color: #fae46daa;
          border-color: #fae46d;
          > li > a {
            text-decoration-color: #fae46daa;
          }
          + div > :is(svg, img) {
            transform: scale(1.1);
            animation: kurukuru 1s ease 2s infinite;
          }
        }
        &:active {
          + div > :is(svg, img) {
            transform: scale(.8);
            animation: none;
          }
        }
      }
      > ul {
        list-style: none;
        padding: 0;
        > li {
          display: block;
        }
      }
      a {
        display: block;
        color: #fff;
        text-decoration: underline solid #0000;
        padding-left: 1em;
        line-height: 1.6em;;
        border-radius: 0 .4em .4em 0;
        transition: background-color .2s, text-decoration-color .2s;
        &:hover {
          background-color: #0002;
        }
      }
    }
  }
}
@keyframes kurukuru {
  0% {
    transform: rotateY(0deg) scale(1.1);
  } 100% {
    transform: rotateY(360deg) scale(1.1);
  }
}
</style>