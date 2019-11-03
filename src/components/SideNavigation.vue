<template>
    <header class="bg-green-800 text-gray-200 sm:w-96 sm:h-screen sm:fixed sm:flex sm:flex-col sm:justify-end sm:pl-3">
        <nav class="flex justify-between items-center px-4 py-3">
            <div>
                <g-link to="/"><h1 class="text-xl sm:text-4xl sm:pb-4">Giuseppe's La Trattoria</h1></g-link>
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button" class="block focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="12" x2="21" y2="12"></line><line x1="1" y1="6" x2="21" y2="6"></line><line x1="1" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </nav>
        <nav :class="isOpen ? 'block' : 'hidden'" class="block px-2 pb-2 font-semibold sm:block sm:text-lg">
            <ul class="list-reset px-2 rounded hover:bg-green-700" v-for="menuItem in menuItems" :key="menuItem.title">
                <li>
                    <g-link :to="`${menuItem.route}`">{{ menuItem.title }}</g-link>
                </li>
            </ul>
            <div class="p-1">
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="px-1 hover:text-green-400" :icon="['fab', 'facebook']" size="2x"/></g-link>
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="px-1 hover:text-green-400" :icon="['fab', 'twitter']" size="2x"/></g-link>
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="px-1 hover:text-green-400" :icon="['fab', 'instagram']" size="2x"/></g-link>
            </div>
            <p class="px-2 text-xs font-hairline hidden sm:block">
                JAMstack Website by Cloud Digital
            </p>
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
                { title:'Food', route:'/food' },
                { title:'Drinks', route:'/drinks' },
                { title:'Gallery', route:'/gallery' },
                { title:'Contact', route:'/contact' }
            ],
            isOpen: false,
        }
    }
}
</script>

<style>

</style>