<template>
    <layout>
        <section class="px-6 text-gray-200 sm:ml-96 sm:px-20">
            <h2 class="pt-8 pb-4 text-3xl">Menu</h2>
            <h2 class="py-2 text-xl">Breakfast</h2>
            <p class="pb-8 text-lg">Served between 7am-11am.</p>
            <div class="pb-8" v-for="{ node } in $page.breakfast.edges" :key="node.id">
                <span class="flex flex-row justify-between items-center"><h2>{{ node.title }}</h2>
                <p class="pb-4">{{ node.price }}</p></span>
                <p class="pb-4">{{ node.description }}</p>
            </div>
            <h2 class="pt-8 pb-2 text-xl">Starters</h2>
            <p class="pb-8 text-lg">Start your meal off with a delicous starter.</p>
            <div class="pb-8" v-for="{ node } in $page.starters.edges" :key="node.id">
                <span class="flex flex-row justify-between items-center"><h2>{{ node.title }}</h2>
                <p class="pb-4">{{ node.price }}</p></span>
                <p class="pb-4">{{ node.description }}</p>
            </div>
            <h2 class="pt-8 pb-2 text-xl">Pizza</h2>
            <span class="flex flex-row justify-between items-center"><p class="pb-8 text-lg">Choose any of our epic pizzas or build your own!</p><p class="pb-8 text-lg font-semibold">Picolla (23cm) / Grande(30cm)</p></span>
            <div class="pb-8" v-for="{ node } in $page.pizza.edges" :key="node.id">
                <span class="flex flex-row justify-between items-center"><h2>{{ node.title }}</h2>
                <span class="flex flex-row justify-between items-center"><p class="pr-6 pb-4 sm:pr-32">{{ node.picolla }}</p><p class="pb-4 sm:pr-8">{{ node.grande }}</p></span></span>
                <p class="pb-4">{{ node.description }}</p>
            </div>
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
export default {

}
</script>