<template>
  <Layout>
    <div class="container">
    <h1>Food</h1>
      <ul>
        <li v-for="edge in $page.allFood.edges" :key="edge.node.id">
          <strong>{{ edge.node.title }}:</strong><span class="price">{{ edge.node.price }}</span>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  allFood {
    edges {
      node {
        id
        title
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
  },
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