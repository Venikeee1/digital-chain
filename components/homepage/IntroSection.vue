<template>
  <section class="intro-screen d-flex">
    <div class="container my-auto">
      <div class="d-flex d-block-lg d-flex-xl d-block-xxl">
        <div class="intro-screen__description">
          <h1 class="intro-screen__title main-title">{{ introData.title }}</h1>
          <span class="intro-screen__additional-info">{{ introData.description }}</span>
        </div>
        <div class="intro-screen__img">
          <img src="" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const introData = {
  title: 'We establish brands',
  description: '360° marketing agency: we stand for approaches that work and for solutions that empower thought result.'
}

export default {
  name: 'IntroSection',
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
  height: 100vh;

  &__description {
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
}
</style>
