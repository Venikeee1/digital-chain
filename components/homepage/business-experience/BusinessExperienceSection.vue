<template>
<section classs="business-experience">
  <div class="container">
    <div class="d-flex justify-between">
      <div class="business-experience__heading col-xl-5">
        <SecondaryTitle :text="sectionData.title" />
        <div class="business-experience__img"></div>
      </div>
      <BusinessExperienceList />
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
  &__img {
    background: url(~assets/img/b2c.png) center no-repeat;
    background-size: contain;
    width: 100%;
    height: 500px;
  }
}
</style>
