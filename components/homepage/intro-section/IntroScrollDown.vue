<template>
    <div class="intro-scroll-down">
      <span class="intro-scroll-down__text">Go</span>
      <div class="intro-scroll-down__line"></div>
    </div>
</template>

<script>
export default {
  name: 'IntroScrollDown'
}
</script>

<style lang="scss" scoped>
.intro-scroll-down {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: $secondary-font-bold;
  font-size: 48px;
  text-transform: uppercase;

  &__text {
    opacity: 0;
    animation: fadein infinite 4s 1s alternate;
  }

  &__line {
    width: 1px;
    height: 15vh;
    background: $secondary-color;
    margin: 0.3em auto 0;
    animation: straightin infinite 4s 1s alternate;
    transform: scaleY(0);
    transform-origin: 0 100%;
  }
}
@keyframes straightin {
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
