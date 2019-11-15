<template>
    <header class="bg-green-800 text-gray-200 sm:w-96 sm:h-screen sm:fixed sm:flex sm:flex-col sm:justify-end sm:pl-3">
        <nav class="flex justify-between items-center px-4 py-3">
            <address class="absolute top-0 left-0 mt-8 px-5 hidden sm:block">
                <p><strong>Business Hours:</strong><span class="ml-3"> Mon-Sat 07:30 - 22:00</span>
                <br>
                <span class="ml-32 pl-2">Sunday 16:00 - 22:00</span>
                </p>
                <p><strong>Our Number:</strong><span class="ml-8"> 071 657 9732</span></p>
                <p><strong>Our Address:</strong><span class="ml-8"> c/o Dirkie Uys & Fabriek </span> <span class="ml-32 pl-1"> Street, Gansbaai, 7220</span></p>
            </address>
            <div>
                <g-link to="/"><h1 class="py-2 sm:text-xl sm:pb-4">Giuseppe's La Trattoria</h1></g-link>
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button" class="block focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="12" x2="21" y2="12"></line><line x1="1" y1="6" x2="21" y2="6"></line><line x1="1" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </nav>
        <nav :class="isOpen ? 'block' : 'hidden'" class="block px-2 pb-2 font-semibold sm:block sm:text-lg">
            <div class="pb-2">
                <ul class="list-reset px-2 rounded hover:bg-green-700" v-for="menuItem in menuItems" :key="menuItem.title">
                    <li>
                        <g-link :to="`${menuItem.route}`">{{ menuItem.title }}</g-link>
                    </li>
                </ul>
            </div>
            <address class="px-2 py-2 border-solid border-t-2 border-white sm:hidden">
                <p><strong>Business Hours:</strong><span class="ml-3 font-medium"> Mon-Sat 07:30 - 22:00</span>
                <br>
                <span class="ml-32 pl-2 font-medium">Sunday 16:00 - 22:00</span>
                </p>
                <p><strong>Our Number:</strong><span class="ml-8 font-medium"> 071 657 9732</span></p>
                <p><strong>Our Address:</strong><span class="ml-8 font-medium"> c/o Dirkie Uys & Fabriek </span> <span class="ml-32 pl-1 font-medium"> Street, Gansbaai, 7220</span></p>
            </address>
            <div class="w-32 flex justify-around hidden sm:flex">
                <g-link to="https://www.facebook.com/giuseppes.gansbaai"><font-awesome class="hover:text-green-400" :icon="['fab', 'facebook']" size="2x"/></g-link>
                <g-link to="https://www.facebook.com/giuseppes.gansbaai"><font-awesome class="hover:text-green-400" :icon="['fab', 'twitter']" size="2x"/></g-link>
                <g-link to="https://www.facebook.com/giuseppes.gansbaai"><font-awesome class="hover:text-green-400" :icon="['fab', 'instagram']" size="2x"/></g-link>
            </div>
            <div class="px-2 pb-2 text-xs font-hairline hidden sm:block">
            <p class="py-2">
                JAMstack Website by digiCloud
            </p>
            <p>Copyright &copy; {{ new Date().getFullYear() }} Giuseppes La Trattoria. All rights reserved.</p>
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