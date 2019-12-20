<template>
<form action="" class="form">
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
    <p class="choose">{{ choose }}</p>
  </div>
  <div class="form-row w100 wrap">
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
      placeholder="Phone number or Skype (optional)"
    />
  </div>
  <div class="form-row">
    <contact-form-input
      v-model="message"
      placeholder="Type your message or question"
    />
  </div>
  <div class="form-row w100 wrap-fix">
    <contact-form-checkbox
      value="agree"
      :checked="agree"
      @change="handlerChangeCheckbox"
    >
      <p>{{ checkboxText }}</p>
    </contact-form-checkbox>
    <div class="button-container">
      <MainButton>Explore our process</MainButton>
    </div>
  </div>
</form>
</template>

<script>
import ContactFormInput from './ContactFormInput'
import ContactFormRadio from './ContactFormRadio'
import ContactFormCheckbox from './ContactFormCheckbox'
const choose = 'Choose one of our services (optional)'
export default {
  name: 'ContactForm',
  components: {
    ContactFormCheckbox,
    ContactFormRadio,
    ContactFormInput
  },
  data: function () {
    return {
      choose,
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
  width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  outline: none;
  @media only screen and (min-width: $xl ){
    width: 50%;
  }
}
.form-row {
  @media only screen and (min-width: $xl ){
    width: 50vw;
  }
  width: 100vw;
  /*width: 100%;*/
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;
  &:not(:first-child) {
    margin-top: 40px;
  }
  &.wrap {
  @media only screen and (max-width: $md) {
    flex-wrap: wrap;
    justify-content: flex-start;
   }
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

.button-container:hover {
  background: url('~assets/img/blot.png') center no-repeat;
}

.width-fix {
  flex-wrap: wrap;
  @media only screen and (min-width: $lg){
    flex-wrap: nowrap;
  }
  & :first-child {
  width: 100%;
  @media only screen and (min-width: $lg){
    flex-basis: 364px;
    flex-shrink: 1;
    margin-right: 24px;
  }
}
}
.wrap-fix {
  display: block;
  width: 100%;
  text-align: center;
   @media only screen and (min-width: $sm){
     width: auto;
   }
  @media only screen and (min-width: $md){
    text-align: left;
  }
  @media only screen and (min-width: $lg){
    display: flex;
  }
}
</style>
