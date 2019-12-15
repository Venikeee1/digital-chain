<template>
    <div class="controls-next-prev d-flex justify-between">
      <ButtonArrowLeft
        :color="color"
        :disabled="isPrevDisabled"
        @click="$emit('prev')"
      />
      <MainButton :color="color" @click="$emit('submit')">
        <slot></slot>
      </MainButton>
      <ButtonArrowRight
        :color="color"
        :disabled="isNextDisabled"
        @click="$emit('next')"
      />
    </div>
</template>

<script>
import ButtonArrowLeft from '@/components/general/buttons/ButtonArrowLeft'
import ButtonArrowRight from '@/components/general/buttons/ButtonArrowRight'
export default {
  name: 'ControlsNextPrev',
  components: {
    ButtonArrowLeft,
    ButtonArrowRight
  },
  props: {
    color: {
      type: String,
      default: 'default'
    },
    isPrevDisabled: {
      type: Boolean,
      default: false
    },
    isNextDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.controls-next-prev {
  display: flex;
  max-width: 455px;
}
</style>
