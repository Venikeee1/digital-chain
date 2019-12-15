<template>
  <section>
    <div class="container">
      <div class="d-flex justify-between">
        <div class="col-6">
          <SecondaryTitle :text="sectionData.title" />
          <p class="text">{{sectionData.text}}</p>
        </div>
        <contact-form />
      </div>
    </div>
    <contact-form-up />
  </section>
</template>

<script>
import ContactForm from './ContactForm'
import ContactFormUp from './ContactFormUp'
const sectionData = {
  title: 'Get in touch [[to find out how we can help you]]',
  text: `Discover how our results-oriented campaigns can help you achieve your business goals.
        Request a marketing assessment call with our strategy experts today!`
}
export default {
  name: 'BusinessExperience',
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
.col-6 {
  flex-shrink: 0;
  flex-grow: 0;
  width: 50%;
}
.text {
  font-size: 16px;
  line-height: 30px;
  color: #FFFFFF;
  opacity: 0.3;
}
</style>
