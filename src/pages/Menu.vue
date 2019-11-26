<template>
  <layout>
    <section class="px-6 pb-6 text-gray-900 sm:ml-96 sm:px-20">
      <h2 class="py-8 text-lg sm:text-xl">Our Menu</h2>
      <div class="py-4 flex justify-around items-center border-solid border-t-2 border-b-2 border-gray-900">
        <button @click="selectTab(0)" :class="{ 'bg-black text-gray-200 font-semibold' : currentTab == 0 }" class="p-4 border-2 border-solid border-gray-900 uppercase sm:w-32 hover:bg-black hover:text-gray-200 hover:font-semibold focus:outline-none" tabindex="0">Breakfast</button>
        <button @click="selectTab(1)" :class="{ 'bg-black text-gray-200 font-semibold' : currentTab == 1 }" class="p-4 border-2 border-solid border-gray-900 uppercase sm:w-32 hover:bg-black hover:text-gray-200 hover:font-semibold focus:outline-none">Starters</button>
        <button @click="selectTab(2)" :class="{ 'bg-black text-gray-200 font-semibold' : currentTab == 2 }" class="p-4 border-2 border-solid border-gray-900 uppercase sm:w-32 hover:bg-black hover:text-gray-200 hover:font-semibold focus:outline-none">Pizza</button>
      </div>

      <div v-if="currentTab == 0">
        <h3 class="pt-8 pb-2 sm:text-lg">Breakfast</h3>
        <p class="pb-6 sm:text-lg"><em>(Served between 7am-11am)</em></p>
        <div class="flex justify-center items-center">
          <g-image class="pb-8 rounded" src="../../static/uploads/slide3.jpg" width="900" height="250" />
        </div>
        <div v-for="{ node } in $page.breakfast.edges" :key="node.id">
          <span class="flex flex-row justify-between items-center"><h2 class="text-sm sm:text-md">{{ node.title }}</h2>
          <p>{{ node.price }}</p></span>
          <p class="pr-16 pb-8"><em>{{ node.description }}</em></p>
        </div>
      </div>

      <div v-if="currentTab == 1">
        <h2 class="pt-8 pb-2 sm:text-lg">Starters</h2>
        <p class="pb-6 sm:text-lg"><em>(Start your meal off with our delicous starters)</em></p>
        <div class="flex justify-center items-center">
          <g-image class="pb-8 rounded" src="../../static/uploads/slide5.jpg" width="900" height="250" />
        </div>
        <div v-for="{ node } in $page.starters.edges" :key="node.id">
          <span class="flex flex-row justify-between items-center"><h2 class="text-sm sm:text-md">{{ node.title }}</h2>
          <p>{{ node.price }}</p></span>
          <p class="pr-16 pb-8"><em>{{ node.description }}</em></p>
        </div>
      </div>

      <div v-if="currentTab == 2">
        <h2 class="pt-8 pb-2 sm:text-lg">Pizza</h2><p class="pb-6 sm:text-lg"><em>(Try our epic brick oven baked pizzas!)</em></p>
        <div class="flex justify-center items-center">
          <g-image class="pb-8 rounded" src="../../static/uploads/slide1.jpg" width="900" height="250" />
        </div>
          <span class="pb-6 flex flex-row justify-between items-center"><p class="sm:text-lg"><em>Picolla or Grande!</em></p><p class="text-xs font-semibold">(23cm) / (30cm)</p></span>
          <div v-for="{ node } in $page.pizza.edges" :key="node.id">
            <span class="flex flex-row justify-between items-center"><h2 class="text-sm sm:text-md">{{ node.title }}</h2>
            <span class="flex flex-row justify-between items-center"><p class="pr-4 sm:pr-12">{{ node.picolla }}</p><p class="">{{ node.grande }}</p></span></span>
            <p class="pr-16 pb-8"><em>{{ node.description }}</em></p>
          </div>
      </div>
    </section>
  </layout>
</template>

<page-query>
query allMenu {
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
  metaInfo: {
    title: "Menu"
  },
  data:() => {
    return {
      currentTab: 2
    }
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab
    }
  }
}
</script>