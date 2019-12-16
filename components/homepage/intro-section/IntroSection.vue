<template>
  <section class="intro-screen d-flex">
    <div class="container my-auto">
      <div class="d-flex justify-between">
        <div class="intro-screen__description col-xl-5">
          <h1 class="intro-screen__title main-title">{{ introData.title }}</h1>
          <span class="intro-screen__additional-info">{{ introData.description }}</span>
        </div>
        <div class="intro-screen__img col-xl-5">
          <!--<img src="~assets/img/mission.png" alt="">-->
        </div>
      </div>
    </div>
    <IntroScrollDown />
  </section>
</template>

<script>
import IntroScrollDown from './IntroScrollDown'
const introData = {
  title: 'We establish brands',
  description: '360° marketing agency: we stand for approaches that work and for solutions that empower thought result.'
}

export default {
  name: 'IntroSection',
  components: {
    IntroScrollDown
  },
  data () {
    return {
      introData
    }
  }
}
</script>

<style lang="scss" scoped>
.intro-screen {
  padding-top: 130px;
  min-height: 100vh;

  &__description {
    padding: 40px 0;
    max-width: 500px;
  }

  &__title {
    margin-bottom: 0.30em;
    color: #fff;
  }

  &__additional-info {
    color: $secondary-text-color;
    line-height: 2;
  }

  &__img {
    position: relative;
    z-index: 1;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(~assets/img/mission.png) center 15% no-repeat;
      background-size: contain;
    }

    &::before {
      position: absolute;
      z-index: -1;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(~assets/img/circle-shape.png) center 15% no-repeat;
      background-size: contain;
    }
  }
}
</style>
