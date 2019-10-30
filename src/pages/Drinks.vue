<template>
  <Layout>
    <div class="container">
      <h1>Drinks</h1>
      <h3>Beer<span>.</span></h3>
        <ul class="menuList" v-for="{ node } in $page.beer.edges" :key="node.id">
          <li>
            <h4>{{ node.title }}:</h4>
            <span class="price">{{ node.price }}</span>
            <p> {{ node.description }}</p>
          </li>
        </ul>
      <h3>Whiskey<span>.</span></h3>
        <ul class="menuList" v-for="{ node } in $page.whiskey.edges" :key="node.id">
          <li>
            <h4>{{ node.title }}:</h4>
            <span class="price">{{ node.price }}</span>
            <p> {{ node.description }}</p>
          </li>
        </ul>
    </div>
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