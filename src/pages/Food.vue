<template>
  <Layout>
    <div class="container">
      <h1>Food</h1>
        <Menu />
    </div>
  </Layout>
</template>

<script>
import Menu from '../templates/Menu';
export default {
  metaInfo: {
    title: "Mango's Restaurant & Bar"
  },
  components: {
    Menu
  }
}
</script>

<style scoped>
  div h1 {
    font-family: 'Rock Salt', cursive;
  }
</style>