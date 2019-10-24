<template>
    <div>
        <h2>Title</h2>
        <ul>
          <li v-for="edge in $page.allMenu.edges" :key="edge.node.id">
        {{ edge.node.title }}
          </li>
          <li v-for="edge in $page.allMenu.edges" :key="edge.node.id">
        {{ edge.node.categories }}
          </li>
          <li v-for="edge in $page.allMenu.edges" :key="edge.node.id">
        {{ edge.node.type }}
          </li>
          <li v-for="edge in $page.allMenu.edges" :key="edge.node.id">
        {{ edge.node.description }}
          </li>
          <li v-for="edge in $page.allMenu.edges" :key="edge.node.id">
        {{ edge.node.price }}
          </li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>