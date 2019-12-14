<template>
<section class="partners-section">
  <div class="container text--center">
    <SecondaryTitle :text="sectionData.title" />
    <p class="partners-section__description text">{{ sectionData.description }}</p>
    <ul class="partners-section__list d-flex justify-center">
      <li
        v-for="logo in sectionData.logoList"
        :key="logo"
        class="partners-section__item d-flex align-center justify-center"
      >
        <a href="" class="partners-section__link">
          <img
            :src="logo"
            alt=""
            class="partners-section__logo"
          >
        </a>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
const data = {
  title: 'Our [[partners]]',
  description: 'We do not limit ourselves to certain business lines. We have the experience and professionals to build a custom solution and use multiple services to assist your business.',
  logoList: ['/img/partners/pari-match.png', '/img/partners/pokerdom.png', '/img/partners/poker-match.png', '/img/partners/binomo.png', '/img/partners/poker-match.png', '/img/partners/pokerdom.png', '/img/partners/pari-match.png']
}
export default {
  name: 'PartnersSection',
  computed: {
    sectionData () {
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
  .partners-section {
    padding: 80px 0 90px;
    background: url(~assets/img/wheight.png) center 100% no-repeat;
    background-size: auto, 100%, contain;

    &__description {
      max-width: 660px;
      margin: 0 auto 100px;
    }

    &__list {
      flex-wrap: wrap;
      max-width: 910px;
      margin: 0 auto;
    }

    &__item {
      width: 25%;
      margin-bottom: 80px;
    }
  }
</style>
