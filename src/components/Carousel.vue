<template>
  <section>
    <vue-glide class="h-mobile sm:h-desktop"
              :perView="1"
              :autoplay="6000">
      <vue-glide-slide v-for="(item, i) in items" :key="i">
        <g-image class="pb-4 h-mobile w-full object-cover sm:h-desktop" :src="item.images" />
      </vue-glide-slide>
      <template slot="control">
          <button class="ml-2 py-4 px-12 bg-gray-900 text-gray-200 uppercase sm:mb-4 sm:ml-16 sm:px-20 focus:outline-none" data-glide-dir="<">prev</button>
          <button class="mr-2 py-4 px-12 float-right bg-gray-900 text-gray-200 uppercase sm:mb-4 sm:mr-16 sm:px-20 focus:outline-none" data-glide-dir=">">next</button>
      </template>
    </vue-glide>
  </section>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js';

export default {
  data(items) {
    return {
      items: [
        { images: require('../../static/uploads/slide1.jpg') },
        { images: require('../../static/uploads/slide2.jpg') },
        { images: require('../../static/uploads/slide3.jpg') },
        { images: require('../../static/uploads/slide4.jpg') },
        { images: require('../../static/uploads/slide5.jpg') },
        { images: require('../../static/uploads/slide6.jpg') },
        { images: require('../../static/uploads/slide7.jpg') },
        { images: require('../../static/uploads/slide8.jpg') },
      ],
    }
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  }
}
</script>

<style lang="postcss">
 .VueCarousel-pagination button {
   pointer-events: none;
 }
</style>