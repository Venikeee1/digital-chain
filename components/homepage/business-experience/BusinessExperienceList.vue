<template>
  <ul class="business-experience-list">
    <BusinessExperienceItem
      v-for="(feature, index) in features"
      :key="feature.title"
      :index="index + 1"
      :feature-data="feature"
    />
  </ul>
</template>

<script>
import BusinessExperienceItem from '@/components/homepage/business-experience/BusinessExperienceItem'

const features = [
  {
    title: 'Identify Challenges',
    description: 'We outline your main marketing goals and specify measurable objectives.'
  },
  {
    title: 'Establish Goals',
    description: 'We outline your main marketing goals and specify measurable objectives.'
  },
  {
    title: 'Create strategy',
    description: 'We develop an individual strategy to achieve these goals within your budget.'
  },
  {
    title: 'Starting Campaign',
    description: 'We are deploying our plan to deliver the required outcomes.'
  },
  {
    title: 'Empower thought result',
    description: 'We’ll turn your concept into a reality with maximum ROI.'
  }
]

export default {
  name: 'BusinessExperienceList',
  components: {
    BusinessExperienceItem
  },
  data () {
    return {
      features
    }
  }
}
</script>

<style lang="scss" scoped>
.business-experience-list {
  max-width: 550px;
  width: 100%;
}
</style>
