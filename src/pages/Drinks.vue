<template>
  <Layout>
    <section class="px-6 text-gray-200 sm:ml-96 sm:px-20">
      <h2 class="pt-8 pb-3 text-2xl">Drinks</h2>
      <h3 class="py-4 text-2xl">Beer<span class="text-green-400">.</span></h3>
        <ul class="py-2" v-for="{ node } in $page.beer.edges" :key="node.id">
          <li>
            <h4 class="font-semibold">{{ node.title }}:<span class="float-right">{{ node.price }}</span></h4>
            <p> {{ node.description }}</p>
          </li>
        </ul>
      <h3 class="py-4 text-2xl">Whiskey<span class="text-green-400">.</span></h3>
        <ul class="py-2" v-for="{ node } in $page.whiskey.edges" :key="node.id">
          <li>
            <h4 class="font-semibold">{{ node.title }}:<span class="float-right">{{ node.price }}</span></h4>
            <p> {{ node.description }}</p>
          </li>
        </ul>
    </section>
  </Layout>
</template>

<page-query>
query {
  beer: allBeer {
    edges {
      node {
        id
        title
        description
        price
      }
    }
  }
  whiskey: allWhiskey {
    edges {
      node {
        id
        title
        description
        price
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>
</style>