<template>
  <section>
    <carousel class=" h-mobile sm:h-desktop focus:outline-none"
              autoplay
              loop
              :autoplayTimeout="6000"
              :per-page="1"
              :speed="1000">
      <slide v-for="(item, i) in items" :key="i">
        <g-image :src="item.images" />
      </slide>
    </carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data(items) {
    return {
      items: [
        { images: require('../../static/uploads/slide1.jpg') },
        { images: require('../../static/uploads/slide2.jpg') },
      ],
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="postcss">
 .VueCarousel-pagination button {
   pointer-events: none;
 }
</style>