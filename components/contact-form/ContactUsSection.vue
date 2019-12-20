<template>
  <section class="contact-us-section">
    <div class="container">
      <div class="d-flex justify-between wrap">
        <div class="contact-us-section__description col-6">
          <SecondaryTitle :text="sectionData.title" />
          <div class="text-block">
            <p
              v-for="(paragraph, index) in sectionData.text"
              :key="index"
              class="text"
            >{{ paragraph }}</p>
          </div>
        </div>
        <contact-form />
      </div>
      <contact-form-up v-scroll-to="'.header'" />
    </div>
  </section>
</template>

<script>
import ContactForm from './ContactForm'
import ContactFormUp from './ContactFormUp'
const sectionData = {
  title: 'Get in touch [[to find out</br>how we can help you]]',
  text: ['Discover how our results-oriented campaigns can help you achieve your business goals.',
    'Request a marketing assessment call with our strategy experts today!']
}
export default {
  name: 'ContactUsSection',
  components: {
    ContactFormUp,
    ContactForm
  },
  data () {
    return {
      sectionData
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact-us-section {
    padding: 180px 0 100px;

    &__description {
      padding-right: 10%;
    }
  }
  .container h2 {
    text-align: left;
    @media only screen and (min-width: $sm)  {
    text-align: center;
  }
    @media only screen and (min-width:$xl) {
      text-align: left;
    }
  }
  .wrap {
    flex-wrap: wrap;
    @media only screen and (min-width: $xl){
      flex-wrap: nowrap;
    }
  }

  .col-6 {
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    @media only screen and (min-width: $xl){
      width: 50%;
    }
  }

  .text {
    font-size: 9px;
    line-height: 15px;
    @media only screen and (min-width: $sm)  {
      text-align: center;
    }
    @media only screen and (min-width: $md) {
      font-size: 16px;
      line-height: 30px;
    }
    @media only screen and (min-width: $xl) {
      text-align: left;
    }
    color: $secondary-color;
  }
  .text-block {
    margin: 43px auto 20px;
    @media only screen and (min-width: $xl) {
      margin-top: 72px;
    }
  }
</style>
