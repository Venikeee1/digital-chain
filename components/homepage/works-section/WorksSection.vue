<template>
    <section class="works-section">
      <div class="works-section__slider-bg">
        <Swiper
          ref="bgSlider"
          fit-to-container
          :options="bgSwiperOptions"
        >
          <SwiperSlide
            v-for="work in works"
            :key="work.client"
          >
            <div class="works-section__bg-item" :style="`background-image: url(${work.bgSrc})`">
              <div class="works-section__photo-item" :style="`background-image: url(${work.imageSrc})`"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="works-section__container container pos-relative">
        <h2 class="works-section__title" v-html="title"></h2>
        <div class="works-section__info-slider">
          <Swiper ref="textSlider">
            <SwiperSlide
              v-for="work in works"
              :key="work.title"
            >
              <WorksDetails :details="work" />
            </SwiperSlide>
          </Swiper>
        </div>
        <ControlsNextPrev
          color="dark"
          @next="slideNext"
          @prev="slidePrev"
        >
          Explore case
        </ControlsNextPrev>
      </div>
    </section>
</template>

<script>
import Swiper from '@/components/swiper/Swiper'
import SwiperSlide from '@/components/swiper/SwiperSlide'
import ControlsNextPrev from '@/components/ControlsNextPrev/ControlsNextPrev'
import WorksDetails from './WorksDetails'

const title = 'Our<br>works'
const works = [
  {
    title: 'Fired up<br>to win',
    services: ' Creative / Media / Strategy cient',
    client: 'Parimatch',
    geo: 'Global',
    bgSrc: '/img/works/pari-match-bg.jpg',
    imageSrc: '/img/works/pari-match-img.png'
  },
  {
    title: 'Fired up<br>to win',
    services: ' Creative / Media / Strategy cient',
    client: 'Parimatch',
    geo: 'Global',
    bgSrc: '/img/works/poker-match-bg.jpg',
    imageSrc: '/img/works/poker-match-img.png'
  }
]

export default {
  name: 'WorksSection',
  components: {
    Swiper,
    SwiperSlide,
    WorksDetails,
    ControlsNextPrev
  },
  computed: {
    works () {
      return works
    },
    title () {
      return title
    },
    textSlider () {
      return this.$refs.textSlider.$el.swiper
    },
    bgSlider () {
      return this.$refs.bgSlider.$el.swiper
    },
    bgSwiperOptions () {
      return { effect: 'fade', loop: true }
    }
  },
  methods: {
    slideNext () {
      this.textSlider.slideNext()
      this.bgSlider.slideNext()
    },
    slidePrev () {
      this.textSlider.slidePrev()
      this.bgSlider.slidePrev()
    }
  }
}
</script>

<style lang="scss" scoped>
.works-section {
  position: relative;
  padding: 80px 0;
  font-family: $secondary-font-regular;
  color: $dark-color;

  &__container {
    z-index: 5;
  }

  &__slider-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: yellow;
  }

  &__bg-item {
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  &__photo-item{
    width: 100%;
    height: 100%;
    background: bottom right no-repeat;
    background-size: initial;
  }

  &__title {
    font-size: 48px;
    margin-bottom: 1.1em;
  }

  &__info-slider {
    margin-bottom: 40px;
    max-width: 450px;
    overflow: hidden;
  }
}
</style>
