<template>
  <Layout>
    <div class="container" v-for="edge in $page.allDrinks.edges" :key="edge.node.id">
    <h1>Drinks</h1>
    <h3><em>{{ edge.node.type }}</em><span>.</span></h3>
      <ul>
        <li>
          <span><strong>{{ edge.node.title }}:</strong> {{ edge.node.description }}</span> <span class="price">{{ edge.node.price }}</span>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  allDrinks {
    edges {
      node {
        id
        title
        type
        description
        price
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Mango's Restaurant & Bar"
  }
}
</script>

<style>
  div h3 {
    font-size: 1.7rem;
    font-weight: 600;
    padding: 1em 0;
  }

  div h3 span {
    color: orangered;
  }

  ul li {
    display: flex;
    justify-content: space-between;
  }

  .price {
    margin-right: 10em;
  }
</style>