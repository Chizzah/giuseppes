<template>
    <layout>
        <section class="px-6 text-gray-200 sm:ml-96 sm:px-20">
            <h2 class="pt-8 pb-4 text-3xl">Menu</h2>
            <Tabs />
        </section>
    </layout>
</template>

<page-query>
query {
  breakfast: allMenu(filter: { category: { in: ["Breakfast"] }}) {
    edges {
      node {
        id
        title
        category
        description
        price
      }
    }
  }
  starters: allMenu(filter: { category: { in: ["Starters"] }}) {
    edges {
      node {
        id
        title
        category
        description
        price
      }
    }
  }
  pizza: allMenu(filter: { category: { in: ["Pizza"] }}) {
    edges {
      node {
        id
        title
        category
        description
        picolla
        grande
      }
    }
  }
}
</page-query>

<script>
import Tabs from '~/components/Tabs';

export default {
    components: {
      Tabs
    }
};
</script>