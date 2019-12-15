<template>
  <div class="solution-details">
    <h3 class="solution-details__title text--white">{{ details.title }}</h3>
    <p class="solution-details__text text" v-html="details.description"></p>
  </div>
</template>

<script>

export default {
  name: 'SolutionDetails',
  props: {
    details: Object
  }
}
</script>

<style lang="scss" scoped>
  .solution-details {
    max-width: 500px;

    &__title {
      font-family: $secondary-font-bold;
      font-size: 96px;
      text-transform: uppercase;
      margin-bottom: 0.4em;
    }

    &__text {
      margin-bottom: 70px;
    }
  }

</style>
