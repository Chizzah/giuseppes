<template>
  <main>
    <SideNavigation />
    <slot />
    <Footer />
  </main>
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
  html {
    height: 100%;
  }
  body {
    font-family: 'Noto Sans', sans-serif;
    background: #EDF2F7;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: 'Rock Salt', cursive;
  }
</style>
