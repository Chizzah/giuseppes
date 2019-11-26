<template>
  <header class="bg-gray-900 text-gray-100 sm:w-96 sm:h-screen sm:fixed sm:flex sm:flex-col sm:justify-end sm:pl-3">
    <nav class="flex justify-between items-center px-4 py-3">
      <div>
        <g-link to="/"><h1 class="py-2 text-xl sm:text-3xl sm:pb-4">Tasty Bites</h1></g-link>
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block focus:outline-none">
          <g-image class="bg-gray-200 fill-current rounded-sm" src="../../static/icons/menu.svg" width="30" />
        </button>
      </div>
    </nav>
    <nav :class="isOpen ? 'block' : 'hidden'" class="block px-2 pb-2 font-semibold sm:block sm:text-lg">
      <div class="pb-2">
        <ul class="list-reset px-2 rounded hover:bg-gray-200 hover:text-gray-900" v-for="menuItem in menuItems" :key="menuItem.title">
          <li>
            <g-link :to="`${menuItem.route}`">{{ menuItem.title }}</g-link>
          </li>
        </ul>
      </div>
      <div class="w-32 py-1 bg-gray-200 flex justify-around items-center hidden sm:flex">
        <a href="#"><g-image class="hover:text-gray-500" src="../../static/icons/facebook.svg" width="13" /></a>
        <a href="#"><g-image src="../../static/icons/twitter.svg" width="25" /></a>
        <a href="#"><g-image src="../../static/icons/instagram.svg" width="20" /></a>
      </div>
      <div class="px-2 pb-2 text-xs font-hairline hidden sm:block">
        <p class="py-2">
          JAMstack Website by <a class="font-semibold hover:text-green-400" href="https://chaddpoggenpoel.netlify.com/">Chadd Poggenpoel</a> 
        </p>
        <p>Copyright &copy; {{ new Date().getFullYear() }} Tasty Bites. All rights reserved.</p>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { title:'Home', route:'/' },
                { title:'About', route:'/about' },
                { title:'Menu', route:'/menu' },
                { title:'Gallery', route:'/gallery' },
                { title:'Contact', route:'/contact' }
            ],
            isOpen: false,
        }
    }
}
</script>