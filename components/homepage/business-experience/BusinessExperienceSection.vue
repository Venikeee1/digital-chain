<template>
<section class="business-experience">
  <div class="business-experience__inner">
    <!--<img
      src="~assets/img/b2c.png"
      alt=""
      class="business-experience__bg-img"
    >-->
    <div class="container">
      <div class="d-flex justify-between">
        <div class="business-experience__heading col-xl-5">
          <SecondaryTitle :text="sectionData.title" />
          <div class="business-experience__img"></div>
        </div>
        <BusinessExperienceList />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import BusinessExperienceList from '@/components/homepage/business-experience/BusinessExperienceList'
const sectionData = {
  title: 'Do [[experience]] in [[business]] outcomes improvement'
}

export default {
  name: 'BusinessExperience',
  components: {
    BusinessExperienceList
  },
  data () {
    return {
      sectionData
    }
  }
}
</script>

<style lang="scss" scoped>
.business-experience {
  padding-bottom: 150px;

  &__inner {
    position: relative;
    z-index: 1;
  }

  &__bg-img {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 100%;
    transform: translateX(50%);
    opacity: 0.05;
  }

  &__img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 500px;

    &::before {
      position: absolute;
      z-index: -1;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(~assets/img/circle-curve.png) center no-repeat;
      background-size: contain;
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(~assets/img/b2c.png) center no-repeat;
      background-size: contain;
    }
  }
}
</style>
