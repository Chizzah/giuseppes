<template>
    <div class="sidenavContainer">
        <nav>
            <div>
                <h1 class="brand">Mango's</h1>
            </div>
            <div>
                <ul>
                    <li><g-link to="/">Home</g-link></li>
                    <li><g-link to="/about">About</g-link></li>
                    <li><g-link to="/food">Food</g-link></li>
                    <li><g-link to="/drinks">Drinks</g-link></li>
                    <li><g-link to="/gallery">Gallery</g-link></li>
                    <li><g-link to="/contact">Contact</g-link></li>
                </ul>
            </div>
            <div>
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="icon" :icon="['fab', 'facebook']" size="2x"/></g-link>
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="icon" :icon="['fab', 'twitter']" size="2x"/></g-link>
                <g-link to="https://www.facebook.com/Dawnayrsa/"><font-awesome class="icon" :icon="['fab', 'instagram']" size="2x"/></g-link>
            </div>
            <div>
            <p class="footnote">JAMstack by &copy; Chadd Poggenpoel 2019</p>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Sidenav'
}
</script>

<style>
    .sidenavContainer {
        position: fixed;
        width: 30vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: #000;
    }
    
    nav {
        position: relative;
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #000;
        color: #f1f1f1;
        z-index: 999;
    }

    nav div {
        display: flex;
        justify-content: center;
    }

    nav div h1 {
        font-family: 'Rock Salt', cursive;
        font-size: 3.5rem;
        font-weight: 100;
    }

    nav ul {
        margin: 0 0.5em 0;
    }

    nav li {
        font-size: 1.3rem;
        margin-bottom: 0.2em;
    }

    nav .icon {
        margin: 0.5em;
    }

    nav li a:hover,
    nav .icon:hover {
        color: orange;
        cursor: pointer;
    }

    .footnote {
        font-size: 0.6rem;
        font-weight: 100;
        margin-bottom: 3em;
    }
</style>