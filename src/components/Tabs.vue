<template>
  <section>
    <div class="py-4 flex justify-around items-center border-solid border-t-2 border-b-2 border-white">
      <button @click="selectTab(0)" :class="{ 'bg-white text-red-700 font-semibold' : currentTab == 0 }" class="p-4 border-2 border-solid border-white uppercase sm:w-32 hover:bg-white hover:text-red-700 hover:font-semibold focus:outline-none" tabindex="0">Breakfast</button>
      <button @click="selectTab(1)" :class="{ 'bg-white text-red-700 font-semibold' : currentTab == 1 }" class="p-4 border-2 border-solid border-white uppercase sm:w-32 hover:bg-white hover:text-red-700 hover:font-semibold focus:outline-none">Starters</button>
      <button @click="selectTab(2)" :class="{ 'bg-white text-red-700 font-semibold' : currentTab == 2 }" class="p-4 border-2 border-solid border-white uppercase sm:w-32 hover:bg-white hover:text-red-700 hover:font-semibold focus:outline-none">Pizza</button>
    </div>

    <div v-if="currentTab == 0">
      <h3 class="pt-8 pb-2 sm:text-lg">Breakfast</h3>
      <p class="pb-8 sm:text-lg"><em>(Served between 7am-11am)</em></p>
      <div v-for="{ node } in $page.breakfast.edges" :key="node.id">
        <span class="flex flex-row justify-between items-center"><h2 class="text-sm sm:text-md">{{ node.title }}</h2>
        <p>{{ node.price }}</p></span>
        <p class="pr-16 pb-8"><em>{{ node.description }}</em></p>
      </div>
    </div>

    <div v-if="currentTab == 1">
      <h2 class="pt-8 pb-2 sm:text-lg">Starters</h2>
      <p class="pb-8 sm:text-lg"><em>(Start your meal off with our delicous starters)</em></p>
      <div v-for="{ node } in $page.starters.edges" :key="node.id">
        <span class="flex flex-row justify-between items-center"><h2 class="text-sm sm:text-md">{{ node.title }}</h2>
        <p>{{ node.price }}</p></span>
        <p class="pr-16 pb-8"><em>{{ node.description }}</em></p>
      </div>
    </div>

    <div v-if="currentTab == 2">
      <h2 class="pt-8 pb-2 sm:text-lg">Pizza</h2>
        <span class="pb-8 flex flex-row justify-between items-center"><p class="sm:text-lg"><em>(Try our epic pizzas!)</em></p><p class="text-xs font-semibold sm:hidden">(23cm) / (30cm)</p><p class="text-xs font-semibold hidden sm:block sm:mr-8">Picolla (23cm) / Grande (30cm)</p></span>
        <div v-for="{ node } in $page.pizza.edges" :key="node.id">
          <span class="flex flex-row justify-between items-center"><h2 class="text-sm sm:text-md">{{ node.title }}</h2>
          <span class="flex flex-row justify-between items-center"><p class="pr-6 sm:pr-32">{{ node.picolla }}</p><p class="sm:pr-8">{{ node.grande }}</p></span></span>
          <p class="pr-16 pb-8"><em>{{ node.description }}</em></p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
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