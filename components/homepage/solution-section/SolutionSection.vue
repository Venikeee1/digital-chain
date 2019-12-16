<template>
    <section class="solution-section">
      <div class="container">
        <div class="d-flex justify-between">
          <div class="solution-section__info col-lg-5">
            <SecondaryTitle text="[[dc marketing]] solutions" />
            <Swiper ref="sliderDetails">
              <SwiperSlide
                v-for="solution in solutionList"
                :key="solution.title"
              >
                <SolutionDetails :details="solution" />
              </SwiperSlide>
            </Swiper>
            <ControlsNextPrev
              @next="slideNext"
              @prev="slidePrev"
            >
              Explore More
            </ControlsNextPrev>
          </div>
          <div class="solution-section__img-slider col-lg-6">
            <Swiper ref="sliderShape" :options="swiperShapesSettings">
              <SwiperSlide
                v-for="solution in solutionList"
                :key="solution.title"
              >
                <div class="solution-section__figure d-flex align-center justify-center">
                  <img
                    class="solution-section__img"
                    :src="solution.imgUrl"
                    alt="solution.title"
                  >
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Swiper from '@/components/swiper/Swiper'
import SwiperSlide from '@/components/swiper/SwiperSlide'
import ControlsNextPrev from '@/components/controls-next-prev/ControlsNextPrev'
import SolutionDetails from './SolutionDetails'

const solutionList = [
  {
    title: 'Media',
    description: 'We create outstanding media campaigns: From market analysis and planning to implementation, support and monitoring of their<br> effectiveness after launch.',
    imgUrl: '/digital-preview/img/solutions/shape-1.png'
  },
  {
    title: 'Media',
    description: 'We create outstanding media campaigns: From market analysis and planning to implementation, support and monitoring of their<br> effectiveness after launch.',
    imgUrl: '/digital-preview/img/solutions/shape-2.png'
  }
]
export default {
  name: 'SolutionSection',
  components: {
    Swiper,
    SwiperSlide,
    ControlsNextPrev,
    SolutionDetails
  },
  computed: {
    solutionList () {
      return solutionList
    },
    swiperShapesSettings () {
      return {
        effect: 'fade',
        allowTouchMove: false
      }
    },
    swiperShape () {
      return this.$refs.sliderShape.$el.swiper
    },
    swiperDetails () {
      return this.$refs.sliderDetails.$el.swiper
    }
  },
  mounted () {
    this.swiperShape.controller.conrol = this.swiperDetails
  },
  methods: {
    slideNext () {
      this.swiperShape.slideNext()
      this.swiperDetails.slideNext()
    },
    slidePrev () {
      this.swiperShape.slidePrev()
      this.swiperDetails.slidePrev()
    }
  }
}
</script>

<style lang="scss" scoped>
.solution-section {
  padding: 120px 0 50px;

  &__info {
    overflow: hidden;
    padding-top: 120px;
  }

  &__img-slider{
    /*overflow: hidden;*/
    .swiper-container {
      overflow: initial;
    }

    .swiper-slide-active {
      .solution-section__figure {
        opacity: 1 !important;
        transform: translateY(1);
      }
    }

    /deep/ .swiper-slide-next {
      opacity: 1 !important;
      .solution-section__figure {
        opacity: 0.1 !important;
        transform: translate(10%, 35%);
      }
    }
  }

  &__figure {
    opacity: 0;
    transition: transform 0.4s, opacity 0.4s;
  }

  &__img {
    max-width: 100%;
  }
}
</style>
