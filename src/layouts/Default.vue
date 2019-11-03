<template>
  <div>
    <SideNavigation />
    <slot />
  </div>
</template>

<script>
import SideNavigation from '~/components/SideNavigation';

export default {
  components: {
    SideNavigation
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
