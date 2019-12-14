<template>
  <div class="wrapper">
    <div class="homepage content">
      <Header />
      <IntroSection />
      <AdvantageSection />
      <BusinessExperienceSection />
      <WorksSection />
      <PartnersSection />
      <AwardsSection />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import IntroSection from '@/components/homepage/IntroSection.vue'
import AdvantageSection from '@/components/homepage/advantage-section/AdvantageSection.vue'
import BusinessExperienceSection from '@/components/homepage/business-experience/BusinessExperienceSection.vue'
import AwardsSection from '@/components/homepage/awards/AwardsSection.vue'
import PartnersSection from '@/components/homepage/partners-section/PartnersSection.vue'
import WorksSection from '@/components/homepage/works-section/WorksSection.vue'

export default {
  components: {
    Header,
    Footer,
    IntroSection,
    AdvantageSection,
    BusinessExperienceSection,
    AwardsSection,
    PartnersSection,
    WorksSection
  }
}
</script>

<style lang="scss">

  .wrapper {
    min-height: 100vh;
    background: $dark-color;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }
</style>

