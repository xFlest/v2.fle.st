<template>
  <div>
    <div class="background">
      <div class="background-fluid background-fluid-1"></div>
      <div class="background-fluid background-fluid-2"></div>
    </div>
    <div class="card-container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Zen Kaku Gothic New', serif;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: var(--vh,100vh);
  overflow: hidden;
  position: absolute;
  pointer-events: none;
  perspective: 1000px;
  > .card {
    height: calc(min(88vw, var(--vh,100vh))*0.5625);
    width: min(88vw, var(--vh,100vh));
    position: relative;
    border-radius: calc(var(--vmin,100vmin)*0.04);
    background-color: #17171740;
    backdrop-filter: blur(8vmin);
    -webkit-backdrop-filter: blur(8vmin);
    box-shadow: 0 0 10px #00000066;
    pointer-events: auto;
  }
}
.background {
  height: var(--vh,100vh);
  width: 100vw;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: 
    linear-gradient(45deg,#0000 0 23px, #0003 23px 24px, #0000 24px) 0 0 /20px 20px,
    linear-gradient(-45deg,#0000 0 23px, #0003 23px 24px, #0000 24px) 20px 10px /20px 20px;
  background-color: #212121 !important;
  &-fluid {
    background: linear-gradient(35deg, rgba(255,234,196,1) 0%, rgba(252,255,0,1) 50%, rgba(255,182,0,1) 100%);
    animation: fluid 25s ease 0s infinite;
    position: relative;
    width: calc(20vh + 20vw);
    height: calc(20vh + 20vw);
    &-1 {
      top: calc(-10vw + -20vh);
      left: calc(-10vw + -5vh);
    }
    &-2 {
      bottom: calc(-10vw + -25vh);
      right: calc(-10vw + -5vh);
      transform: rotate(135deg) scale(180%);
      animation-delay: -2s;
    }
  }
}
@keyframes fluid {  
  0%, 100% {
    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;
  } 14% {
    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
  } 28% {
    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
  } 42% {
    border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;
  } 56% {
    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
  } 70% {
    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
  } 84% {
    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
  }
}
</style>