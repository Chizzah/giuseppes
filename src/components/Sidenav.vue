<template>
    <div class="sidenavContainer">
        <nav>
            <div>
                <h1 class="brand">Mango's</h1>
            </div>
            <div class="listContainer">
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
        color: #f1f1f1;
    }
    
    nav {
        width: 100%;
        height: 50%;
    }

    nav div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav .fas {
        position: absolute;
        top: 0;
        right: 0;
        color: white;
        z-index: 999;
    }

    nav div .brand {
        font-family: 'Rock Salt', cursive;
        font-size: 3rem;
        font-weight: 100;
    }

    nav .listContainer {
        padding: 0.5em 0;
        font-size: 1.3rem;
    }

    nav .iconContainer {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 1em;
        padding: 1em 0;
    }

    nav li a:hover,
    nav .icon:hover {
        color: orange;
        cursor: pointer;
    }

    .footnoteContainer {
        text-align: center;
        font-size: 0.5rem;
        font-weight: 100;
    }

    @media screen and (max-width: 960px) {
        .sidenavContainer {
            visibility: hidden;
        }
    }
</style>