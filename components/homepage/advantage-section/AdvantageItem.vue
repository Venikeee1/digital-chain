<template>
  <div
    class="advantage-item d-flex text--transparent"
    :class="{'advantage-item--active': isActive}"
  >
    <div class="advantage-item__numeration d-flex align-center justify-between">
      <div class="advantage-item__icon">
        <component :is="advantageItemData.svg" />
      </div>
      <span class="advantage-item__index ">{{ itemNumber }}</span>
    </div>
    <p class="advantage-item__description">{{ advantageItemData.title }}</p>
  </div>
</template>

<script>
import Analytic from '@/components/svg/Analytic'
import Creativity from '@/components/svg/Creativity'
import Goals from '@/components/svg/Goals'
import Planing from '@/components/svg/Planing'
import Solution from '@/components/svg/Solution'
import TrafficSource from '@/components/svg/TrafficSource'

export default {
  name: 'AdvantageItem',
  components: {
    Analytic,
    Creativity,
    Goals,
    Planing,
    Solution,
    TrafficSource
  },
  props: {
    advantageItemData: Object,
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemNumber () {
      const index = this.advantageItemData.index
      return index < 10 ? `0${index}` : index
    }
  }
}
</script>

<style lang="scss" scoped>
.advantage-item {
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.4s;
  color: #fff;

  &--active {
    opacity: 1;

    .advantage-item__numeration {
      &::before {
        opacity: 1;
      }
    }
  }

  &__index{
    font-size: 14px;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    margin-right: 15px;
    fill: #fff;
  }

  &__description {
    line-height: 1.8;
    padding: 30px 0 30px 30px;
    max-width: 170px;
    transition: color 0.4s;
  }

  &__numeration {
    max-width: 120px;
    width: 100%;
    position: relative;
    padding: 30px 15px 30px 0;

    &::before {
      content: '';
      position: absolute;
      top: 25%;
      right: -1px;
      height: 50%;
      width: 1px;
      background: #fff;
      opacity: 0;
      transition: opacity 0.4s;
    }
  }
}
</style>
