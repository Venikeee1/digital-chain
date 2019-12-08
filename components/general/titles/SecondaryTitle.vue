<template>
  <component
    :is="type"
    class="secondary-title text--transparent"
    v-html="titleWithWrappedWords"
  />
</template>

<script>
export default {
  name: 'SecondaryTitle',
  props: {
    type: {
      type: String,
      default: 'h2'
    },
    text: String
  },
  computed: {
    titleWithWrappedWords () {
      return this.text.replace(/\[\[(.*?)\]\]/gi, '<span class="text--white">$1</span>')
    }
  }
}
</script>

<style lang="scss">
  .secondary-title {
    font-size: 62px;
    line-height: 1.2;
    text-transform: uppercase;
    font-family: $secondary-font-bold;
    margin-bottom: 1.2em;
  }
</style>
