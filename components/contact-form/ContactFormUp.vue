<template>
<a href="" class="column">
  <arrow />
  up
</a>
</template>

<script>
import Arrow from '../svg/Arrow'
export default {
  components: {
    Arrow
  }
}


</script>

<style lang="scss" scoped>
.column {
  color: inherit;
  text-decoration: none;
  font-family: $secondary-font-bold;
  font-weight: bold;
  font-size: 18px;
  width: 34px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #aaaaaa;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 30px;
  text-transform: uppercase;
}
</style>
