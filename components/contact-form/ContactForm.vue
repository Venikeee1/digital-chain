<template>
<form
  action.prevent="submitHandler"
  method="post"
  class="form"
  @submit.prevent="submitHandler"
>
  <div class="form-row width-fix">
    <contact-form-input
      ref="name"
      v-model="name"
      :validate="['[A-Za-z0-9\ \-\']{3,}']"
      name="name"
      placeholder="What is your name?*"
      @error="errorHandler"
    />
    <contact-form-input
      ref="email"
      v-model="email"
      placeholder="E-mail*"
      name="email"
      :validate="['/^\\w+([\.-]?\\w+)*@\\w+([\.-]?\\w+)*(\.\\w{2,3})+$/']"
      @error="errorHandler"
    />
  </div>
  <div class="form-row w100">
    <contact-form-radio
      v-for="(item, index) in options"
      :key="index"
      v-model="option"
      :value="item.value"
      name="option"
    >
      {{ item.text }}
    </contact-form-radio>
  </div>
  <div class="form-row">
    <contact-form-input
      v-model="skype"
      name="skype"
      placeholder="Phone number or Skype (optional)"
    />
  </div>
  <div class="form-row">
    <contact-form-input
      v-model="message"
      name="message"
      placeholder="Type your message or question"
    />
  </div>
  <div class="form-row w100">
    <contact-form-checkbox
      ref="agree"
      value="agree"
      :checked="agree"
      name="agree"
      @change="handlerChangeCheckbox"
      @error="errorHandler"
    >
      <p>{{ checkboxText }}</p>
    </contact-form-checkbox>
    <div
      class="button-container"
      :class="{loading: loading}"
    >
      <input
        type="submit"
        class="submit"
        :value="buttonText"
        @click.prevent="submitHandler"
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
  name: 'ContactForm',
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
      loading: false,
      errors: {},
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
    },
    buttonText () {
      return this.loading ? 'Go' : 'Explore our process'
    }
  },
  methods: {
    async handlerChangeCheckbox (val) {
      this[val] = !this[val]
    },
    async verify () {
      console.log('verify-start')
      await this.$refs.name.verify()
      await this.$refs.email.verify()
      await this.$refs.agree.verify()
      console.log('verify', Object.assign(this))
    },
    errorHandler (name, value) {
      if (value) {
        this.errors[name] = true
      } else {
        delete this.errors[name]
      }
    },
    async submitHandler () {
      await this.verify()
      if (!Object.keys(this.errors).length) {
        console.log('submited')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 50%;
  flex-shrink: 0;
  flex-grow: 0;
  outline: none;
}
.form-row {
  width: calc(50vw - 15px);
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  &:not(:first-child) {
    margin-top: 40px;
  }
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
  outline: none;
}
.blot {
  height: 131px;
  width: 131px;
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 50%;
  margin: -66px 0 0 -66px;
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
.button-container.loading {
  background: url('~assets/img/blot.png') center no-repeat;
}

.width-fix :first-child {
  width: 364px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 24px;
}
</style>
