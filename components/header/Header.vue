<template>
  <header class="header" :class="{'header--minimized': isMinimized}">
    <div class="container">
      <div class="header__inner">
        <AppLogo id="app-logo" />
        <Navigation />
        <MainButton>Contact us</MainButton>
      </div>
    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import Navigation from '@/components/navigation/Navigation.vue'

export default {
  name: 'Header',
  components: {
    AppLogo,
    Navigation
  },
  data () {
    return {
      isMinimized: false
    }
  },
  mounted () {
    this.setIsHeaderMinimized()
    this.addScrollAnimation()
  },
  methods: {
    addScrollAnimation () {
      window.addEventListener('scroll', () => {
        this.setIsHeaderMinimized()
      })
    },
    setIsHeaderMinimized () {
      this.isMinimized = window.scrollY >= 10
    }
  }
}
</script>

<style lang="scss" scoped>

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 65px 0 20px;
    z-index: 1000;
    transition: background 0.4s, transform 0.4s;

    &--minimized {
      transform: translateY(-40px);
      background: $dark-color;
    }

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>
