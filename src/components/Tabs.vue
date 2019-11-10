<template>
  <div>
    <div class="py-4 flex justify-around items-center border-t-2 border-b-2 border-solid border-white">
      <button @click="selectTab(0)" :class="{ 'bg-white text-red-700 font-semibold' : currentTab == 0 }" class="w-32 p-4 border-2 border-solid border-white uppercase hover:bg-white hover:text-red-700 hover:font-semibold focus:outline-none" tabindex="0">Breakfast</button>
      <button @click="selectTab(1)" :class="{ 'bg-white text-red-700 font-semibold' : currentTab == 1 }" class="w-32 p-4 border-2 border-solid border-white uppercase hover:bg-white hover:text-red-700 hover:font-semibold focus:outline-none">Starters</button>
      <button @click="selectTab(2)" :class="{ 'bg-white text-red-700 font-semibold' : currentTab == 2 }" class="w-32 p-4 border-2 border-solid border-white uppercase hover:bg-white hover:text-red-700 hover:font-semibold focus:outline-none">Pizza</button>
    </div>

    <div v-if="currentTab == 0">
      <h2 class="pt-8 pb-2 text-xl">Breakfast</h2>
      <p class="pb-8 text-md">Served between 7am-11am.</p>
      <div class="pb-8" v-for="{ node } in $page.breakfast.edges" :key="node.id">
        <span class="flex flex-row justify-between items-center"><h2>{{ node.title }}</h2>
        <p class="pb-4">{{ node.price }}</p></span>
        <p class="pb-4">{{ node.description }}</p>
      </div>
    </div>

    <div v-if="currentTab == 1">
      <h2 class="pt-8 pb-2 text-xl">Starters</h2>
      <p class="pb-8 text-md">Start your meal off with a delicous starter.</p>
      <div class="pb-8" v-for="{ node } in $page.starters.edges" :key="node.id">
        <span class="flex flex-row justify-between items-center"><h2>{{ node.title }}</h2>
        <p class="pb-4">{{ node.price }}</p></span>
        <p class="pb-4">{{ node.description }}</p>
      </div>
    </div>

    <div v-if="currentTab == 2">
      <h2 class="pt-8 pb-2 text-xl">Pizza</h2>
        <span class="flex flex-row justify-between items-center"><p class="pb-8 text-md">Try our epic pizzas!</p><p class="pb-8 text-md font-semibold">Picolla (23cm)/Grande(30cm)</p></span>
        <div class="pb-8" v-for="{ node } in $page.pizza.edges" :key="node.id">
          <span class="flex flex-row justify-between items-center"><h2>{{ node.title }}</h2>
          <span class="flex flex-row justify-between items-center"><p class="pr-6 pb-4 sm:pr-32">{{ node.picolla }}</p><p class="pb-4 sm:pr-8">{{ node.grande }}</p></span></span>
          <p class="pb-4">{{ node.description }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data:() => {
    return {
      currentTab: 0
    }
  },
  props: {
    value: String
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab
    }
  }
}
</script>