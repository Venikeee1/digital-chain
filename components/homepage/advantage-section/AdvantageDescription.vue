<template>
    <div class="advantage-description">
      <SecondaryTitle :text="advantageDetails.description" />
      <p class="advantage-description__additional-info text--transparent">{{ advantageDetails.additionalInfo }}</p>
      <MainButton>Explore our process</MainButton>
    </div>
</template>

<script>
export default {
  name: 'AdvantageDescription',
  props: {
    advantageDetails: Object
  }
}
</script>

<style lang="scss">
  .advantage-description {
    &__additional-info {
      max-width: 500px;
      letter-spacing: 0.02em;
      line-height: 1.7;
      margin-bottom: 75px;
    }
  }
</style>
