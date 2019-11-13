<template>
  <Layout>
    <section class="text-gray-200 sm:ml-96 sm:pb-0">
      <div class="relative bg-black sm:h-screen">
        <video class="w-full h-96 object-fill bg-black opacity-50 sm:h-full" src="../../static/heroVideo.mp4" muted autoplay loop></video>
        <div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center z-50 text-lg sm:text-3xl">
          <h1 class="pb-4 text-sm sm:pb-8 sm:text-2xl">Come have a chat and a bite to eat!</h1>
          <g-link to="/menu"><button class="p-2 rounded bg-green-800 text-xs text-center font-bold uppercase sm:text-lg focus:outline-none hover:text-green-800 hover:bg-gray-200">Explore Our Menu</button></g-link>
        </div>
      </div>
      <div class="w-full px-8 pb-4 sm:px-32">
        <h2 class="py-8 text-sm sm:text-xl">Welcome to Giuseppes LA Trattoria</h2>
        <p class="pb-4 sm:text-lg">A trattoria is an Italian-style eating establishment, less formal than a ristorante, but more formal than an osteria. There are generally no printed menus, the service is casual, wine is sold by the decanter rather than the bottle, prices are low, and the emphasis is on a steady clientele rather than on haute cuisine. The food is modest but plentiful (mostly following regional and local recipes) and in some instances is even served family-style (i.e. at common tables).</p>
        <p class="pb-4 sm:text-lg">All our meals are freshly made to order. Our Pizza bases are freshly rolled to order. It may take a little longer to prepare. So why don’t sit relax and enjoy some of our wide range of drinks and Cocktails.</p>  
        <div class="mt-4 flex justify-between items-center sm:mt-16">
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
    title: "Home"
  }
}
</script>