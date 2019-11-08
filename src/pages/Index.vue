<template>
  <Layout>
    <section class="text-gray-200 sm:h-screen sm:ml-96 sm:pb-0">
      <video class="w-full h-full object-fill" src="../../static/heroVideo.mp4" muted autoplay loop></video>
      <div class="w-full px-8 pb-4 sm:h-screen sm:px-32">
        <h1 class="py-8 text-lg sm:text-3xl">Welcome to Giuseppes LA Trattoria</h1>
        <p class="pb-4 sm:text-2xl">A trattoria is an Italian-style eating establishment, less formal than a ristorante, but more formal than an osteria. There are generally no printed menus, the service is casual, wine is sold by the decanter rather than the bottle, prices are low, and the emphasis is on a steady clientele rather than on haute cuisine. The food is modest but plentiful (mostly following regional and local recipes) and in some instances is even served family-style (i.e. at common tables).</p>
        <p class="pb-4 sm:text-2xl">All our meals are freshly made to order. Our Pizza bases are freshly rolled to order. It may take a little longer to prepare. So why don’t sit relax and enjoy some of our wide range of drinks and Cocktails.</p>  
        <div class="py-8 flex justify-between items-center">
          <g-link to="/food"><g-image class="px-2 sm:w-64" src="../../static/pizza.jpg" width="150" /></g-link>
          <a href="https://xplorio.com/gansbaai/giuseppes-trattoria-and-cocktail-bar/" target="_blank"><g-image class="px-2 sm:w-64" src="../../static/Gansbaai.jpg" width="150" /></a>
          <a href="https://www.tripadvisor.co.za/Restaurant_Review-g472522-d5427385-Reviews-Giuseppes_Gansbaai-Gansbaai_Overstrand_Overberg_District_Western_Cape.html" target="_blank"><g-image class="px-2 sm:w-64" src="../../static/tripadvisor-logo.png" width="150" /></a>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Mango's Restaurant & Bar"
  }
}
</script>

<style>
</style>