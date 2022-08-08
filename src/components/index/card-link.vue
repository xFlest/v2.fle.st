<template>
  <nav class="prf-nav">
    <li class="prf-nav-item">
      <NuxtLink to="/about"><fa :icon="['fas', 'circle-user']" /></NuxtLink>
    </li>
    <li class="prf-nav-item">
      <NuxtLink to="/works"><fa :icon="['fas', 'award']" /></NuxtLink>
    </li>
    <li class="prf-nav-item">
      <NuxtLink to="/blog"><fa :icon="['fas', 'newspaper']" /></NuxtLink>
    </li>
    <li class="prf-nav-item">
      <NuxtLink to="/illust"><fa :icon="['fas', 'images']" /></NuxtLink>
    </li>
    <li class="prf-nav-item">
      <NuxtLink to="/tweet"><fa :icon="['fab', 'twitter']" /></NuxtLink>
    </li>
  </nav>
</template>

<style lang="scss" scoped>
.prf-nav {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  height: 20%;
  width: 100%;
  margin: 0;
  padding: 0 5% 5%;
  &-item {
    position: relative;
    list-style: none;
    height: 100%;
    width: 16%;
    transition: 1s;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2%;
      bottom: 10%;
      border-radius: 20px;
      background-color: #fff;
      transition: .4s;
    }
    &:hover {
      &::after {
        bottom: 30%;
        opacity: 0;
      }
      svg {
        transform: scale(0);
        opacity: 0;
      }
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      -webkit-tap-highlight-color:#0000;
      svg {
        color: #fff;
        height: 50%;
        margin-bottom: 10%;
        transition: .2s
      }
    }
  }
}
</style>