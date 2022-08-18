<template lang="pug">
.blog-layout
  section(v-if="windowAspect > 0.75")
    Sidebar
  nav(v-else)
    p oooooo
  main
    Nuxt
  section(v-if="windowAspect > 0.75")
    p aaaa
</template>

<script>
import Sidebar from '../components/blog/sidebar.vue'
export default {
    data() {
        return {
            windowAspect: ""
        };
    },
    mounted() {
        const resizeWindow = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            this.windowAspect = width / height;
        };
        window.addEventListener("resize", resizeWindow);
        resizeWindow();
    },
    components: { Sidebar }
}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Zen Kaku Gothic New', sans-serif;
}
.blog-layout {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: min(4rem, 12vmin) 0;
  background-color: #fffffc;
  > main {
    width: min(100%, var(--vh,100vh));
    background-color: #f2f2efcc;
    border-radius: min(1rem, 3vmin);
    padding: min(2rem, 6vmin);
  }
  > section {
    width: min(20vw, var(--vh,100vh) * .25);
    flex-shrink: 0;
    margin: 0 min(3rem, 9vmin);
  }
  @media (max-aspect-ratio: 3 / 4) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
