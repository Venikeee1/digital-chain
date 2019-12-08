<template>
    <li class="business-experience-item">
      <div class="business-experience-item__heading">
        <span class="business-experience-item__number">0{{ index }}</span>
        <span class="business-experience-item__title" v-html="sentenseWithStyledFirstWord"></span>
      </div>
      <p class="business-experience-item__description">
        {{ featureData.description }}
      </p>
    </li>
</template>

<script>
export default {
  name: 'BusinessExperienceItem',
  props: {
    featureData: Object,
    index: Number
  },
  computed: {
    sentenseWithStyledFirstWord () {
      const arrOfWords = this.featureData.title.split(' ')
      const [firstWord, ...restWords] = arrOfWords
      return `<span class="text--transparent">${firstWord}</span> ${restWords.join(' ')}`
    }
  }
}
</script>

<style lang="scss" scoped>
.business-experience-item {
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 40px;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 50px;
    height: 1px;
    background: $secondary-color;
  }

  &:last-child {
    &::before {
      display: none;
    }
  }

  &__heading {
    margin-bottom: 25px;
  }

  &__number {
    display: inline-block;
    font-family: $secondary-font-regular;
    font-size: 36px;
    color: #fff;
    margin-right: 40px;

    &:first-letter {
      color: $secondary-text-color;
    }
  }

  &__title {
    font-size: 24px;
    text-transform: uppercase;
    font-family: $secondary-font-regular;
    color: #fff;

    &:first-letter {
      color: $secondary-text-color;
    }
  }
}
</style>
