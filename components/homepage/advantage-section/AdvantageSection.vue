<template>
<section class="advantage-section">
  <div class="container">
    <div class="d-flex">
      <AdvantageList class="col-xs-6" />
      <AdvantageDescription class="col-xs-6" />
    </div>
  </div>
</section>
</template>

<script>
import AdvantageList from '@/components/homepage/advantage-section/AdvantageList'
import AdvantageDescription from '@/components/homepage/advantage-section/AdvantageDescription'
export default {
  name: 'AdvantageSection',
  components: {
    AdvantageList,
    AdvantageDescription
  }
}
</script>

<style class="scss">
.advantage-section {
  padding: 70px 0;
}
</style>
