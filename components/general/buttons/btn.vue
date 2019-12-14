<template>
  <button
    :class="btnColor"
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    color: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    btnColor () {
      return `btn--${this.color}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    text-transform: capitalize;
    position: relative;
    background: none;
    border: 2px solid transparent;
    border-radius: 30px;
    font-size: 16px;
    padding: 3px 20px;
    line-height: 1.2;

    &--default {
      color: #fff;
      border-color: #fff;
    }

    &--dark {
      color: $dark-color;
      border-color: $dark-color;
    }
  }

</style>
