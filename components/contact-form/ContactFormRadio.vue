<template>
<label
:for="`radio-${value}`"
class="label"
:class="{'checked': checked===value}"
>
  <input
    :id="`radio-${value}`"
    type="radio"
    :checked="checked"
    :name="name"
    class="input"
    @change="handlerChange"
  >
  <span
    class="radio"
    :class="{'checked': checked===value}"
  ></span>
  <slot></slot>
</label>
</template>
<script>
export default {
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
      this.$emit('change', this.checked)
    }
  }

}
</script>

<style lang="scss" scoped>
  .label {
    border: 1px solid #393939;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 6.86px;
    display: flex;
    color: #fff;
    font-family: 'PFDinTextCondPro-Regular';
    font-size: 14px;
    cursor: pointer;
  }

  .radio {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #393939;
    box-sizing: border-box;
    position: relative;
    border-radius: 50%;
    margin-right: 7px;
  }

  .radio.checked:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.96px;
    margin-left: -1.96px;
    height: 3.92px;
    width: 3.92px;
    border-radius: 50%;
    background: #fff;
  }
  .input {
    display: none;

    &:checked+.radio {
      background: #fff;
    }
  }
</style>
