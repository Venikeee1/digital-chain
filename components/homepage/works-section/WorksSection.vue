<template>
    <section class="works-section">
      <Swiper>
        <SwiperSlide />
      </Swiper>
      <div class="container">
        <h2 class="works-section__title">Our works</h2>
        <Swiper>
          <SwiperSlide>
            <WorksDetails
              v-for="work in works"
              :key="work.title"
              :details="work"
            />
          </SwiperSlide>
        </Swiper>
        <div class="works-sectionactions">
          <MainButton color="dark">Explore case</MainButton>
        </div>
      </div>
    </section>
</template>

<script>
import Swiper from '@/components/swiper/Swiper'
import SwiperSlide from '@/components/swiper/SwiperSlide'
import WorksDetails from './WorksDetails'

const works = [
  {
    title: 'Fired up to win',
    services: ' Creative / Media / Strategy cient',
    client: 'Parimatch',
    geo: 'Global',
    bgSrc: ''
  }
]

export default {
  name: 'WorksSection',
  components: {
    Swiper,
    SwiperSlide,
    WorksDetails
  },
  computed: {
    works () {
      return works
    }
  }
}
</script>

<style lang="scss" scoped>
.works-section {
  padding: 80px 0;
  font-family: $secondary-font-regular;
  background: yellow;
  color: $dark-color;

  &__title {
    font-size: 48px;
    margin-bottom: 1.1em;
  }
}
</style>
