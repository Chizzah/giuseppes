<template>
  <section>
    <vue-glide class="h-mobile sm:h-desktop"
              :perView="1"
              :autoplay="6000">
      <vue-glide-slide v-for="(item, i) in items" :key="i">
        <g-image class="object-cover w-full h-mobile sm:h-desktop" :src="item.images" />
      </vue-glide-slide>
      <template slot="control">
          <button class="px-12 py-4 mt-4 ml-2 text-gray-200 bg-black sm:ml-40" data-glide-dir="<">prev</button>
          <button class="px-12 py-4 mt-4 ml-20 text-gray-200 bg-black sm:ml-96" data-glide-dir=">">next</button>
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