<template>
  <nav class="nav">
    <div class="nav-image"><img src="~/assets/logo.png" alt="logo"></div>
    <ul class="nav-link">
      <li class="nav-link-item nav-link-index"><NuxtLink to="/"><fa :icon="['fas', 'house']" /></NuxtLink></li>
      <li class="nav-link-item"><NuxtLink to="/about"><fa :icon="['fas', 'circle-user']" /></NuxtLink></li>
      <li class="nav-link-item"><NuxtLink to="/works"><fa :icon="['fas', 'award']" /></NuxtLink></li>
      <li class="nav-link-item"><NuxtLink to="/blog"><fa :icon="['fas', 'newspaper']" /></NuxtLink></li>
      <li class="nav-link-item"><NuxtLink to="/illust"><fa :icon="['fas', 'images']" /></NuxtLink></li>
      <li class="nav-link-item"><NuxtLink to="/tweet"><fa :icon="['fab', 'twitter']" /></NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: min(50px, 5vmin);
  margin-top: min(12px, 2vmin);
  padding-bottom: min(4px, .7vmin);
  border-bottom: double min(3px, .5vmin) #fff7;
  &-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-shrink: 0;
    > img {
      height: 60%;
      margin-left: min(12px, 2vmin);
      filter: drop-shadow(0 0 3px #0009) drop-shadow(0 0 1px #fff);
    }
  }
  &-link {
    display: flex;
    flex-shrink: 0;
    overflow-x: scroll;
    scrollbar-width: none;
    width: calc(min(50px, 5vmin) * 6);
    margin: 0 {
      left: min(8%, 40px);
    }
    &::-webkit-scrollbar {
      display: none;
    }
    padding: 0;
    > li {
      flex-shrink: 0;
    }
    &-item {
      height: 100%;
      width: min(50px, 5vmin);
      list-style: none;
      border-radius: min(6px, .6vmin);
      transition: background-color .2s;
      &:hover {
        background-color: #fff2;
      }
      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        transition: opacity .3s;
        &.nuxt-link-exact-active,
        &:active {
          opacity: .6;
        }
        svg {
          color: #fff;
          height: 40%;
        }
      }
    }
  }
}
</style>