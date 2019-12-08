<template>
  <div class="wrapper">
    <div class="homepage content">
      <Header />
      <IntroSection />
      <AdvantageSection />
      <BusinessExperience />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import IntroSection from '@/components/homepage/IntroSection.vue'
import AdvantageSection from '@/components/homepage/advantage-section/AdvantageSection.vue'
import BusinessExperience from '@/components/homepage/business-experience/BusinessExperience.vue'

export default {
  components: {
    Header,
    Footer,
    IntroSection,
    AdvantageSection,
    BusinessExperience
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

