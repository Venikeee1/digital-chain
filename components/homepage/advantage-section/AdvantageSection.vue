<template>
<section class="advantage-section">
  <div class="container">
    <div class="d-flex">
      <AdvantageList
        class="col-xs-6"
        :advantage-list="advantageList"
        @click="goToSlide"
      />
      <div class="advantage-section__text-slider col-xs-6">
        <Swiper ref="textSlider" :options="textSliderSettings">
          <SwiperSlide v-for="advantageItem in advantageList" :key="advantageItem.title">
            <AdvantageDescription :advantage-details="advantageItem" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import AdvantageList from '@/components/homepage/advantage-section/AdvantageList'
import AdvantageDescription from '@/components/homepage/advantage-section/AdvantageDescription'
import Swiper from '@/components/swiper/Swiper'
import SwiperSlide from '@/components/swiper/SwiperSlide'
export default {
  name: 'AdvantageSection',
  components: {
    AdvantageList,
    AdvantageDescription,
    Swiper,
    SwiperSlide
  },
  computed: {
    advantageList () {
      return [
        {
          svg: 'Analytic',
          title: 'Analytically substantiated decisions',
          description: 'Cooperate with an experienced [[team of marketers]] who are committed [[to excellence]]',
          additionalInfo: 'We integrate our systematic approach and proven methodologies to help you in achieving your business objectives.',
          link: ''
        },
        {
          svg: 'TrafficSource',
          title: 'Base of in-house and affiliate traffic sources',
          description: 'Cooperate with an experienced [[team of marketers]] who are committed [[to excellence]]',
          additionalInfo: 'We integrate our systematic approach and proven methodologies to help you in achieving your business objectives.',
          link: ''
        },
        {
          svg: 'Planing',
          title: 'Cross-regional and multimedia planning',
          description: 'Cooperate with an experienced [[team of marketers]] who are committed [[to excellence]]',
          additionalInfo: 'We integrate our systematic approach and proven methodologies to help you in achieving your business objectives.',
          link: ''
        },
        {
          svg: 'Solution',
          title: 'Outstanding solution orientation',
          description: 'Cooperate with an experienced [[team of marketers]] who are committed [[to excellence]]',
          additionalInfo: 'We integrate our systematic approach and proven methodologies to help you in achieving your business objectives.',
          link: ''
        },
        {
          svg: 'Goals',
          title: 'Definition of business and marketing goals',
          description: 'Cooperate with an experienced [[team of marketers]] who are committed [[to excellence]]',
          additionalInfo: 'We integrate our systematic approach and proven methodologies to help you in achieving your business objectives.',
          link: ''
        },
        {
          svg: 'Creativity',
          title: 'Creativity and innovative concepts',
          description: 'Cooperate with an experienced [[team of marketers]] who are committed [[to excellence]]',
          additionalInfo: 'We integrate our systematic approach and proven methodologies to help you in achieving your business objectives.',
          link: ''
        }
      ]
    },
    textSlider () {
      return this.$refs.textSlider.$el.swiper
    },
    textSliderSettings () {
      return {
        allowTouchMove: false
      }
    }
  },
  methods: {
    goToSlide (index) {
      this.textSlider.slideTo(index)
    }
  }
}
</script>

<style class="scss">
.advantage-section {
  padding: 90px 0;
}
</style>
