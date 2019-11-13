<template>
  <Layout>
    <section class="px-6 pb-6 text-gray-200 sm:ml-96 sm:px-20">
      <h2 class="py-8 text-lg sm:text-xl">Gallery</h2>
      <Carousel />
    </section>
  </Layout>
</template>

<script>
import Carousel from '~/components/Carousel'

export default {
  components: {
    Carousel
  }  
}
</script>