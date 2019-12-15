<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div
    v-swiper:mySwiper="options"
    class="app-swiper"
    :class="{'app-swiper--fit-height': fitToContainer}"
  >
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    options: Object,
    fitToContainer: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang=scss scoped>
.app-swiper {
  position: relative;

  &--fit-height {
    height: 100%;

    .siper-wrapper {
      height: 100%;
    }

    .siper-item {
      height: 100%;
    }
  }
}
</style>
