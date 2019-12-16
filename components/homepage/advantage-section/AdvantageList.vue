<template>
  <div class="advantage-list">
    <AdvantageItem
      v-for="(advantage, index) in indexedAdvantageList"
      :key="advantage.svg"
      :advantage-item-data="advantage"
      :is-active="activeIndex === index"
      @click.native="setActiveItem(index)"
    />
  </div>
</template>

<script>
import AdvantageItem from '@/components/homepage/advantage-section/AdvantageItem'

export default {
  name: 'AdvantageList',
  components: {
    AdvantageItem
  },
  props: {
    advantageList: Array
  },
  data () {
    return {
      activeIndex: 0,
      indexedAdvantageList: this.advantageList.map((advantage, index) => ({ ...advantage, index: index + 1 }))
    }
  },
  methods: {
    setActiveItem (index) {
      this.activeIndex = index
      this.$emit('click', index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .advantage-list {
    position: relative;
    z-index: 1;

    &::after {
      z-index: -1;
      position: absolute;
      content: '';
      right: 10%;
      top: -15%;
      width: 110%;
      height: 120%;
      background: url(~assets/img/brain.png) left center no-repeat;
      background-size: contain;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      max-width: 121px;
      width: 100%;
      height: 100%;
      border-right: 1px solid $secondary-color;
    }
  }
</style>
