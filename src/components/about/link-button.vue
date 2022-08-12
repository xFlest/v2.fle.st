<template lang="pug">
.link-button
  NuxtLink(to='/blog')
    fa(:icon="['fas', 'newspaper']")
    p ブログはこちら
    fa(:icon="['fas', 'angle-right']")
  NuxtLink(to='/donate')
    fa(:icon="['fas', 'sack-dollar']")
    p 寄付・送金はこちら
    fa(:icon="['fas', 'angle-right']")
</template>

<style lang="scss" scoped>
.link-button {
  font-size: min(1.6rem, 4vmin);
  display: flex;
  gap: min(9px, 2.4vmin);
  padding: 0 8px;
  margin-bottom: min(90px, 24vmin);
  > a {
    height: min(90px, 24vmin);
    border-radius: min(4.5px, 1.2vmin);
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6em;
    color: #fff;
    background-color: #1114;
    text-decoration: none;
    transition: box-shadow .4s;
    > p {
      width: 50%;
    }
    > svg {
      font-size: 1.4em;
      transition: color .4s, transform .4s;
    }
    &:hover {
      box-shadow: 2px 2px 8px #444a, 3px -3px 6px #0001;
      > svg:first-child {
        color: #fae46d;
      }
      > svg:last-child {
        transform: translateX(-.5em);
      }
    }
    &:active {
      > svg:last-child {
        transform: translateX(10em);
      }
    }
  }
  @media (max-aspect-ratio: 1/1) {
    flex-direction: column;
  }
}
</style>