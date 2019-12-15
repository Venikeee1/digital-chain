<template>
  <div class="wrapper">
    <div class="homepage content">
      <Header />
      <IntroSection />
      <AdvantageSection />
      <BusinessExperienceSection />
      <WorksSection />
      <SolutionSection />
      <PartnersSection />
      <AwardsSection />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import IntroSection from '@/components/homepage/intro-section/IntroSection.vue'
import AdvantageSection from '@/components/homepage/advantage-section/AdvantageSection.vue'
import BusinessExperienceSection from '@/components/homepage/business-experience/BusinessExperienceSection.vue'
import AwardsSection from '@/components/homepage/awards-section/AwardsSection.vue'
import PartnersSection from '@/components/homepage/partners-section/PartnersSection.vue'
import WorksSection from '@/components/homepage/works-section/WorksSection.vue'
import SolutionSection from '@/components/homepage/solution-section/SolutionSection.vue'

export default {
  components: {
    Header,
    Footer,
    IntroSection,
    AdvantageSection,
    BusinessExperienceSection,
    AwardsSection,
    PartnersSection,
    WorksSection,
    SolutionSection
  }
}
</script>

<style lang="scss">

  .wrapper {
    min-height: 100vh;
    background: $dark-color;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  .content {
    flex: 1;
  }
</style>

