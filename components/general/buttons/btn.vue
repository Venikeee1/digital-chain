<template>
  <button
    :class="btnColor"
    class="btn"
    v-on="$listeners"
  >
    <span class="btn__line"></span>
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
    padding: 8px 40px;
    line-height: 1.2;
    cursor: pointer;
    border: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 100%;
      border: 2px solid;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 25px;
      height: 100%;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      border-width: 2px;
      border-style: solid;
    }

    &__line {
      display: inline-block;
      position: absolute;
      width: calc(100% - 40px);
      height: 100%;
      top: 0;
      left: 25px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        transition: transform 0.7s;
      }
    }

    &:hover {
      .btn__line {
        &::after {
          transform: scaleX(1);
        }
      }
    }

    &--default {
      stroke: #fff;
      color: #fff;

      &::before {
        border-color: #fff transparent #fff #fff;
      }

      &::after {
        border-color: #fff #fff #fff transparent;
      }

      .btn__line {
        &::before, &::after {
          background: #fff;
        }
      }
    }

    &--dark {
      stroke: $dark-color;
      color: $dark-color;

      &::before {
        border-color: $dark-color transparent $dark-color $dark-color;
      }

      &::after {
        border-color: $dark-color $dark-color $dark-color transparent;
      }

      .btn__line {
        &::before, &::after {
          background: $dark-color;
        }
      }
    }
  }

</style>
