<template>
<form action="" class="form">
  <div class="form-row">
    <contact-form-input
      v-model="name"
      reg-exp="w{2,}"
      placeholder="What is your name?*"
    />
    <contact-form-input
      v-model="email"
      placeholder="E-mail*"
    />
  </div>
  <div class="form-row w100">
    <contact-form-radio
v-for="(item, index) in options"
:key="index"
v-model="option"
:value="item.value"
name="option"
    >{{ item.text }}</contact-form-radio>
  </div>
  <div class="form-row">
    <contact-form-input
      v-model="skype"
      placeholder="Phone number or Skype (optional)"
    />
  </div>
  <div class="form-row">
    <contact-form-input
      v-model="message"
      placeholder="Type your message or question"
    />
  </div>
  <div class="form-row w100">
    <contact-form-checkbox
      value="agree"
      :checked="agree"
      @change="handlerChangeCheckbox"
    >
      <p>{{ checkboxText }}</p>
    </contact-form-checkbox>
    <div class="button-container">
      <input
        type="submit"
        class="submit"
        :value="buttonText"
        @mouseover="buttonText = 'Go'"
        @mouseleave="buttonText = 'Explore our process'"
      >
    </div>
  </div>
</form>
</template>

<script>
import ContactFormInput from './ContactFormInput'
import ContactFormRadio from './ContactFormRadio'
import ContactFormCheckbox from './ContactFormCheckbox'
export default {
  components: {
    ContactFormCheckbox,
    ContactFormRadio,
    ContactFormInput
  },
  data: function () {
    return {
      name: '',
      email: '',
      skype: '',
      message: '',
      option: null,
      agree: false,
      buttonText: 'Explore our process',
      options: [
        {
          value: 'digital',
          text: 'Digital'
        },
        {
          value: 'communication',
          text: 'Communication'
        },
        {
          value: 'strategy',
          text: 'Strategy'
        },
        {
          value: 'media',
          text: 'Media'
        },
        {
          value: 'creative',
          text: 'Creative'
        },
        {
          value: 'other',
          text: 'Other'
        }
      ]
    }
  },
  computed: {
    checkboxText () {
      return 'I accept the Privacy Policy of DC company'
    }
  },
  methods: {
    handlerChangeCheckbox (val) {
      console.log(val)
      this[val] = !this[val]
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 50%;
  flex-shrink: 0;
  flex-grow: 0;
}
.form-row {
  width: calc(50vw - 15px);
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}
.w100 {
  width: 100%;
}
.submit {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  width: 190px;
  text-align: center;
  padding: 7px 0;
  border-radius: 20px;
}
.blot {
  height: 131px;
  width: 131px;
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 50%;
  margin: -65.5px 0 0 -65.5px;
  opacity: 0;
  transition: all .5s ease-in-out;
}
.button-container {
  flex-grow: 0;
  flex-shrink: 0;
  height: 131px;
  width: 190px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: none;
}
.button-container:hover {
  background: url('~assets/img/blot.png') center no-repeat;
}
</style>
