<template>
  <Layout>
    <div class="container">
      <h1>Food</h1>
      <h3>Pasta<span>.</span></h3>
        <ul class="menuList" v-for="{ node } in $page.pasta.edges" :key="node.id">
          <li>
            <h4>{{ node.title }}:</h4>
            <span class="price">{{ node.price }}</span>
            <p> {{ node.description }}</p>
          </li>
        </ul>
      <h3>Pizza<span>.</span></h3>
        <ul class="menuList" v-for="{ node } in $page.pizza.edges" :key="node.id">
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
  pasta: allPasta {
    edges {
      node {
        id
        title
        description
        price
      }
    }
  }
  pizza: allPizza {
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
  div h3 {
    font-size: 1.7rem;
    font-weight: 100;
    padding: 1em 0;
  }

  div h3 span {
    color: orangered;
  }

  ul li {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    padding-bottom: 0.5em;
    line-height: 1.7;
  }
  
  div h3 {
    font-family: 'Noto sans', cursive;
    font-size: 1.7rem;
    font-weight: 100;
    padding: 1em 0;
  }

  div h3 span {
    color: orangered;
  }

  .menuList {
    padding-bottom: 2em;
  }

  ul li {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }

  .price {
    margin-right: 10em;
  }
</style>