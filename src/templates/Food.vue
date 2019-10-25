<template>
    <div>
      <ul>
        <li v-for="edge in $page.allFood.edges" :key="edge.node.id">
          {{ edge.node.title }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>