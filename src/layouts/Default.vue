<template>
  <div>
    <SideNavigation />
    <slot />
    <Footer />
  </div>
</template>

<script>
import SideNavigation from '~/components/SideNavigation';
import Footer from '~/components/Footer';

export default {
  components: {
    SideNavigation,
    Footer
  }
}
</script>

<style lang="postcss">
  body {
    font-family: 'Noto Sans', sans-serif;
    background: #C53030;
  }
  h1,
  h2 {
    font-family: 'Rock Salt', cursive;
    font-weight: 100;
  }
</style>
