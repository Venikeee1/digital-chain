<template>
  <section class="awards-section">
    <div class="container">
      <div class="awards-section__inner">
        <SecondaryTitle :text="sectionData.title" />
        <p class="awards-section__description text">{{ sectionData.description }}</p>
        <AwardsSlider class="awards-section__slider" />
        <img class="awards-section__img" src="~assets/img/plate.png">
      </div>
      <p class="awards-section__additional-info text text--center">{{ sectionData.additionalInfo }}</p>
    </div>
  </section>
</template>

<script>
import AwardsSlider from './AwardsSlider'
const data = {
  title: 'Our [[awards]]',
  description: 'We do not limit ourselves to certain business lines. We have the experience and professionals to build a custom solution and use multiple services to assist your business.',
  additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
}
export default {
  name: 'AwardsSection',
  components: {
    AwardsSlider
  },
  computed: {
    sectionData () {
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
.awards-section {
  &__inner {
    text-align: center;
  }

  &__img {
    width: 100%;
    margin-bottom: 100px;
  }

  &__img, &__description {
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
  }

  &__additional-info {
    width: 77%;
    margin: 0 auto;
  }

  &__description {
    margin-bottom: 65px;
  }

  &__slider {
    margin-bottom: 55px;
  }
}
</style>
