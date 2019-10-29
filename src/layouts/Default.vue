<template>
  <div>
    <Sidenav />
    <slot />
  </div>
</template>

<script>
import Sidenav from '~/components/Sidenav';

export default {
  components: {
    Sidenav
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
h3 {
  background: white;
  font-family: 'Noto Sans', Arial, Helvetica, sans-serif, cursive;
  line-height: 1.3;
}

.container {
  width: 70vw;
  height: auto;
  float: right;
  padding: 2.5em 0 0 8em; 
}

h1,
h2 {
  font-family: 'Rock Salt', cursive;
  padding-bottom: 1em; 
}

a {
  text-decoration: none;
  color: #f1f1f1;
}

ul {
  list-style: none;
}

  @media screen and (max-width: 960px) {
    .container {
      float: none;
      width: 100%;
    }
  }
</style>