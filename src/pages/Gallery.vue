<template>
  <Layout>
    <section class="h-128 px-6 pb-6 text-gray-900 sm:ml-96 sm:px-20">
      <h2 class="py-8 text-lg sm:text-xl">Gallery</h2>
      <Carousel />
    </section>
  </Layout>
</template>

<script>
import Carousel from '~/components/Carousel';

export default {
  metaInfo: {
    title: "Gallery"
  },
  components: {
    Carousel
  },
}
</script>