<template>
    <button
      class="button-arrow-left"
      v-on="$listeners"
    >
      <ArrowLeft :class="btnColor" />
    </button>
</template>

<script>
import ArrowLeft from '@/components/svg/ArrowLeft'
export default {
  name: 'ButtonArrowLeft',
  components: {
    ArrowLeft
  },
  props: {
    color: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnColor () {
      return {
        [`button-arrow-left--${this.color}`]: `button-arrow-left--${this.color}`,
        'button-arrow-left--disabled': this.disabled
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-arrow-left {
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  svg {
    transition: transform 0.4s;
  }

  &:hover {
    svg {
      transform: translateX(-10px);
    }
  }

  &--default {
     fill:  #fff;
  }

  &--dark {
     fill: $dark-color;
  }

  &--disabled {
    opacity: 0.4;
  }
}
</style>
