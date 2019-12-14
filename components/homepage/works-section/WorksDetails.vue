<template>
  <div class="works-details">
    <h3 class="works-details__title secondary-title">{{ details.title }}</h3>
    <div class="works-details__item">
      <span class="works-details__title">{{ staticTranslation.services }} :</span>
      <span class="works-details__description">{{ details.services }}</span>
    </div>
    <div class="works-details__item">
      <span class="works-details__title">{{ staticTranslation.client }} :</span>
      <span class="works-details__description">{{ details.client }}</span>
    </div>
    <div class="works-details__item">
      <span class="works-details__title">{{ staticTranslation.geo }} :</span>
      <span class="works-details__description">{{ details.geo }}</span>
    </div>
  </div>
</template>

<script>
const staticTranslation = {
  services: 'services',
  client: 'client',
  geo: 'geo'
}

export default {
  name: 'WorksDetails',
  props: {
    details: Object
  },
  computed: {
    staticTranslation () {
      return staticTranslation
    }
  }
}
</script>

<style lang="scss" scoped>
  .works-details {
    font-size: 18px;

    &__item {
      margin-bottom: 20px;
    }

    &__title {
      text-transform: uppercase;
      margin-bottom: 0.6em;
    }
  }
</style>
