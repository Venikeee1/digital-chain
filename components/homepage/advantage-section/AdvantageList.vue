<template>
  <div class="advantage-list">
    <AdvantageItem
      v-for="advantage in advantageList"
      :key="advantage.svg"
      :advantage-item-data="advantage"
    />
  </div>
</template>

<script>
import AdvantageItem from '@/components/homepage/advantage-section/AdvantageItem'
const advantageList = [
  {
    svg: 'Analytic',
    title: 'Analytically substantiated decisions'
  },
  {
    svg: 'TrafficSource',
    title: 'Base of in-house and affiliate traffic sources'
  },
  {
    svg: 'Planing',
    title: 'Cross-regional and multimedia planning'
  },
  {
    svg: 'Solution',
    title: 'Outstanding solution orientation'
  },
  {
    svg: 'Goals',
    title: 'Definition of business and marketing goals'
  },
  {
    svg: 'Creativity',
    title: 'Creativity and innovative concepts'
  }
]

export default {
  name: 'AdvantageList',
  components: {
    AdvantageItem
  },
  data () {
    return {
      advantageList: advantageList.map((advantage, index) => ({ ...advantage, index: index + 1 }))
    }
  }
}
</script>

<style lang="scss" scoped>
  .advantage-list {
    background: url(~assets/img/brain.png) center no-repeat;
    background-size: contain;
  }
</style>
