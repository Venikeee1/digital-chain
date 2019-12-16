<template>
<label
class="input-container"
:class="{
  error: error,
  focus: focus
  }"
>
  <input
    type="text"
    :value="value"
    name="name"
    class="input"
    :placeholder="placeholder"
    @input="inputHandler"
    @focus="focus=true"
    @blur="blurHandler"
    @keyup="keyUpHandler"
  >
</label>
</template>
<script>
export default {
  name: 'ContactFormInput',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    validate: [Array],
    value: [String],
    placeholder: [String],
    name: [String]
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
    },
    blurHandler () {
      this.focus = false
      this.verify()
    },
    keyUpHandler () {
      this.error && this.verify()
    },
    verify () {
      console.log('verify')
      if (this.validate) {
        let match = true
        for (const rule in this.validate) {
          console.log('rule', this.validate[rule])
          match = this.value.match(this.validate[rule])
          console.log('testResultError', match)
          if (!match) {
            this.$emit('error', this.name, true)
            this.error = true
            return
          }
        }
        this.$emit('error', this.name, false)
        this.error = false
      }
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
  &.error::before {
    border-color: orangered;
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
