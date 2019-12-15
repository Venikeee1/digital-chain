<template>
  <div class="awards-slider">
    <Swiper :options="swiperOptions">
      <SwiperSlide>
        <img src="~assets/img/awards/effy.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="~assets/img/awards/golden-drum.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="~assets/img/awards/webby.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="~assets/img/awards/effy.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="~assets/img/awards/golden-drum.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="~assets/img/awards/webby.png" alt="">
      </SwiperSlide>
    </Swiper>
    <button class="swiper-button-next">
      <ArrowRight />
    </button>
    <button class="swiper-button-prev">
      <ArrowLeft />
    </button>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import ArrowLeft from '@/components/svg/ArrowLeft'
import ArrowRight from '@/components/svg/ArrowRight'
import Swiper from '@/components/swiper/Swiper'
import SwiperSlide from '@/components/swiper/SwiperSlide'

const options = {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

export default {
  name: 'AwardsSlider',
  components: {
    ArrowLeft,
    ArrowRight,
    Swiper,
    SwiperSlide
  },
  computed: {
    swiperOptions () {
      return options
    }
  }
}
</script>

<style lang="scss" scoped>
  .awards-slider {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
  }

  .swiper-wrapper {
    position: relative;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background: none !important;
    border: none;

    svg {
      fill: #fff;
    }
  }
</style>
