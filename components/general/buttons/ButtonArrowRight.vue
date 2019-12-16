<template>
    <button class="button-arrow-right" v-on="$listeners">
      <ArrowRight :class="btnColor" />
    </button>
</template>

<script>
import ArrowRight from '@/components/svg/ArrowRight'
export default {
  name: 'ButtonArrowLeft',
  components: {
    ArrowRight
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
        [`button-arrow-right--${this.color}`]: `button-arrow-right--${this.color}`,
        'button-arrow-right--disabled': this.disabled
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-arrow-right {
    display: flex;
    cursor: pointer;
    background: none;
    border: none;
    align-items: center;
    justify-content: center;
    outline: none;

    svg {
      transition: transform 0.4s;
    }

    &:hover {
      svg {
        transform: translateX(10px);
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
