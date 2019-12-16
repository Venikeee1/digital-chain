<template>
  <label
    :for="`checkbox-${value}`"
    class="label"
    :class="{
    'checked': checked
    }"
  >
  <span
    class="checkbox"
    :class="{error: error}"
  >
    <checked v-if="checked" />
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
  name: 'ContactFormCheckbox',
  components: { Checked },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: [String],
    checked: [Boolean],
    name: [String]
  },
  data: function () {
    return {
      error: false
    }
  },
  methods: {
    handlerChange (e) {
      this.$emit('change', this.value)
      this.verify()
    },
    async verify () {
      console.log('checked1', this.checked)
      await this.$emit('error', this.name, !this.checked)
      console.log('checked2', this.checked)
      this.error = !this.checked
      console.log('checked3', this.checked)
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
  .error {
    border-color: orangered;
  }
</style>
