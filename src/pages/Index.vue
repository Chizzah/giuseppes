<template>
  <Layout>
    <section class="text-gray-200 md:ml-96 md:pb-0">
      <div class="relative bg-black md:h-screen">
        <g-image class="w-full h-96 object-fill bg-black opacity-50 md:h-full" src="../../static/hero-image.jpg" />
        <div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center z-50 text-lg md:text-3xl">
          <h1 class="pb-4 text-sm md:pb-8 md:text-3xl">Tastiest pizza in the Overberg District</h1>
          <h5 class="pb-4 text-sm md:pb-8 md:text-2xl">Come enjoy a hearty meal!</h5>
          <g-link to="/menu"><button class="p-4 rounded bg-green-800 text-xs text-center font-semibold uppercase md:text-lg focus:outline-none hover:text-green-800 hover:bg-gray-200">View Our Menu</button></g-link>
            <svg id="svgIcon" class="absolute mt-40 fill-current sm:mt-arrow sm: r" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z"/></svg>
        </div>
      </div>
      <div class="w-full px-8 pb-4 md:px-32">
        <h2 class="py-8 text-md md:text-xl">Welcome to Giuseppes LA Trattoria</h2>
        <p class="pb-4 md:text-lg">A trattoria is an Italian-style eating establishment, less formal than a ristorante, but more formal than an osteria. There are generally no printed menus, the service is casual, wine is sold by the decanter rather than the bottle, prices are low, and the emphasis is on a steady clientele rather than on haute cuisine. The food is modest but plentiful (mostly following regional and local recipes) and in some instances is even served family-style (i.e. at common tables).</p>
        <p class="pb-4 md:text-lg">All our meals are freshly made to order. Our Pizza bases are freshly rolled to order. It may take a little longer to prepare. So why don’t sit relax and enjoy some of our wide range of drinks and Cocktails.</p>  
        <div class="mt-4 flex justify-between items-center md:mt-16">
          <g-link to="/food"><g-image class="px-2 md:w-64" src="../../static/pizza.jpg" width="150" /></g-link>
          <a href="https://xplorio.com/gansbaai/giuseppes-trattoria-and-cocktail-bar/" target="_blank"><g-image class="px-2 md:w-64" src="../../static/Gansbaai.jpg" width="150" /></a>
          <a href="https://www.tripadvisor.co.za/Restaurant_Review-g472522-d5427385-Reviews-Giuseppes_Gansbaai-Gansbaai_Overstrand_Overberg_District_Western_Cape.html" target="_blank"><g-image class="px-2 md:w-64" src="../../static/tripadvisor-logo.png" width="150" /></a>
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

<style lang="postcss">
  #svgIcon {
    animation: svgIcon 3s ease-in-out infinite;
  }

  @keyframes svgIcon {
    0%,
    25%,
    50%,
    60%,
    75%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-18px);
    }
    60% {
      transform: translateY(-12px)
    }
  }
</style>