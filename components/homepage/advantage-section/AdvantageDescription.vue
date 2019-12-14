<template>
    <div class="advantage-description">
      <SecondaryTitle :text="advantageData.description" />
      <p class="advantage-description__additional-info text--transparent">{{ advantageData.additionalInfo }}</p>
      <MainButton>{{ advantageData.btnText }}</MainButton>
    </div>
</template>

<script>
const advantageData = {
  description: 'Cooperate with an experienced [[team of marketers]] who are committed [[to excellence]]',
  additionalInfo: 'We integrate our systematic approach and proven methodologies to help you in achieving your business objectives.',
  btnText: 'Explore our process'
}

export default {
  name: 'AdvantageDescription',
  data () {
    return {
      advantageData: advantageData
    }
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
