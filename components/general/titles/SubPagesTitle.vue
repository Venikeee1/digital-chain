<template>
<component :is="tag" class="sub-pages-title">
  <slot></slot>
</component>
</template>

<script>
export default {
  name: 'SubPagesTitle',
  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style scoped>

</style>
