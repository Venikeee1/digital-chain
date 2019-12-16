<template>
<label
  :for="`radio-${value}`"
  class="label"
  :class="{'checked': checked === value}"
>
  <span
    class="radio"
    :class="{'checked': checked === value}"
  ></span>
  <input
    :id="`radio-${value}`"
    type="radio"
    :checked="checked"
    :name="name"
    class="input"
    @change="handlerChange"
  >
  <slot></slot>
</label>
</template>
<script>
export default {
  name: 'ContactFormRadio',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: [String],
    name: [String],
    checked: [String]
  },
  methods: {
    handlerChange (e) {
      if (this.checked !== this.value) {
        this.$emit('change', this.value)
      } else {
        this.$emit('change', '')
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.label {
  border: 1px solid #393939;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 7px;
  display: flex;
  color: #fff;
  font-family: $main-font-regular;
  font-size: 14px;
}
  .radio {
    width: 14px;
    height: 14px;
    border: 1px solid #393939;
    box-sizing: border-box;
    position: relative;
    border-radius: 50%;
    margin-right: 10px;
  }
  .radio.checked:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2px;
    margin-left: -2px;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background: #fff;
  }
  .input {
    display: none;
  }
</style>
