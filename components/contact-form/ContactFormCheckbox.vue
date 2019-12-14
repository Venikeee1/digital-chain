<template>
  <label
    :for="`checkbox-${value}`"
    class="label"
    :class="{
    'checked': checked,
    error: error
    }"
  >
  <span
    class="checkbox"
  >
    <checked v-if="checked"/>
  </span>
    <input
      :id="`checkbox-${value}`"
      type="checkbox"
      :value="value"
      class="input"
      :checked="checked"
      @change="handlerChange"
    >
    <slot></slot>
  </label>
</template>
<script>
import Checked from '../svg/Checked'
export default {
  components: { Checked },
  props: {
    value: [String],
    checked: [Boolean]
  },
  data: function () {
    return {
      error: false
    }
  },
  methods: {
    handlerChange (e) {
      this.$emit('change', e.target.value)
    }
  }

}
</script>

<style lang="scss" scoped>
  .label {
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .checkbox {
    width: 17px;
    height: 17px;
    border: 1px solid #393939;
    box-sizing: border-box;
    border-radius: 3px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .input {
    display: none;
  }
</style>
