<template>
  <Layout>
    <section class="sm:ml-96 sm:pb-0">
      <div class="text-gray-200 relative bg-black sm:h-screen">
        <g-image class="w-full h-96 object-fill bg-black opacity-50 sm:h-full" src="../../static/hero-image.jpg" quality="90" />
        <div class="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center z-50 text-lg sm:text-3xl">
          <h1 class="pb-4 text-sm sm:pb-8 sm:text-3xl">Tastiest pizza in the Overberg District</h1>
          <h5 class="pb-4 text-sm sm:pb-8 sm:text-2xl">Check out our epic pizzas!</h5>
          <div class="flex">
            <g-link to="/menu"><button class="p-2 rounded bg-gray-200 text-gray-900 text-xs text-center font-semibold uppercase sm:text-lg sm:p-3 focus:outline-none hover:text-gray-200 hover:bg-gray-900">View Menu</button></g-link>
            <h5 class="mt-2 px-3 pb-4 font-semibold text-sm sm:px-6 sm:pb-8 sm:text-2xl">OR</h5>
            <g-link to="/contact"><button class="p-2 rounded bg-gray-200 text-gray-900 text-xs text-center font-semibold uppercase sm:text-lg sm:p-3 focus:outline-none hover:text-gray-200 hover:bg-gray-900">Make Reservation</button></g-link>
          </div>
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