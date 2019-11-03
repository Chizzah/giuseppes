<template>
    <div>
        <nav class="sidenavContainer">
            <div>
                <h1 class="brand">Mango's</h1>
            </div>
            <div :class="{ active: active }">
                <ul>
                    <li><g-link to="/">Home</g-link></li>
                    <li><g-link to="/about">About</g-link></li>
                    <li><g-link to="/food">Food</g-link></li>
                    <li><g-link to="/drinks">Drinks</g-link></li>
                    <li><g-link to="/gallery">Gallery</g-link></li>
                    <li><g-link to="/contact">Contact</g-link></li>
                </ul>
            </div>
            <div class="iconContainer">
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="icon" :icon="['fab', 'facebook']" size="2x"/></g-link>
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="icon" :icon="['fab', 'twitter']" size="2x"/></g-link>
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="icon" :icon="['fab', 'instagram']" size="2x"/></g-link>
            </div>
            <div class="footnoteContainer">
            <p class="footnote">JAMstack by &copy; Chadd Poggenpoel 2019</p>
            </div>
        </nav>
        <nav class="mobileMenu" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>