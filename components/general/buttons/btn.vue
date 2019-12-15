<template>
  <button
    :class="btnColor"
    class="btn"
    v-on="$listeners"
  >
    <svg
      class="btn__svg"
      width="131"
      height="30"
      viewBox="0 0 131 30"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d="M1.99414 14.9995C1.99414 7.26753 8.26215 0.999512 15.9941 0.999512H115.994C123.726 0.999512 129.994 7.26753 129.994 14.9995C129.994 22.7315 123.726 28.9995 115.994 28.9995H15.9941C8.26216 28.9995 1.99414 22.7315 1.99414 14.9995Z" stroke-width="2" />
    </svg>
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
    position: relative;
    z-index: 1;
    text-transform: capitalize;
    background: none;
    border-radius: 30px;
    font-size: 14px;
    padding: 6px 40px;
    line-height: 1.2;
    cursor: pointer;
    border: none;

    &:hover {
      .btn__svg {
        stroke-dasharray: 247px 0;
      }
    }

    &__svg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      stroke-dasharray: 247px 32px;
      stroke-dashoffset: 76px;
      transition: stroke-dasharray 0.4s;
    }

    &--default {
      stroke: #fff;
      color: #fff;
    }

    &--dark {
      stroke: $dark-color;
      color: $dark-color;
    }
  }

</style>
