<template>
<div
class="input-container"
:class="{
  error: error,
  focus: focus
  }"
>
  <input
    type="text"
    :value="value"
    class="input"
    :placeholder="placeholder"
    @input="inputHandler"
    @focus="focus=true"
    @blur="focus=false"
  >
</div>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    regExp: [String],
    value: [String],
    placeholder: [String]
  },
  data: function () {
    return {
      error: false,
      focus: false
    }
  },
  methods: {
    inputHandler (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  border-bottom: 1px solid #393939;
  width: 100%;
  position: relative;
  transition: all .5s ease-in-out;
  &::before {
    position: absolute;
    content: '';
    width: 55px;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #fff;
    transition: all .5s ease-in-out;
  }
  &.focus::before {
    width: 100%;
  }
}
.input {
  background: transparent;
  border: none;
  color: #fff;
  padding: 18px 0;
  width: 100%;
  max-width: 500px;
  outline: none;
}
</style>
