<template>
  <div v-swiper:mySwiper="options" class="app-swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    options: Object
  }
}
</script>

<style scoped>
.app-swiper {
  position: relative;
}
</style>
