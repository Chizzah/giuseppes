<template>
  <footer class="w-full pin-b bg-gray-900 text-gray-200 pin-b sm:hidden">
    <div class="pt-8 text-xs fill-current">
      <div class="mx-4 py-6 border-solid border-t-2 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/></svg>
        <p class="ml-4">36 Markham Rd, Claremont, Cape Town, 7708</p>
      </div>
      <div class="mx-4 pb-6 flex justify-around items-center">
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4z"/></svg>
          <p class="ml-4">072 712 1024</p>
        </div>
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"/></svg>
          <p class="ml-4">chaddpoggenpoel@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="mx-12 py-2 flex justify-around bg-gray-200 fill-current">
      <a href="#"><g-image class="hover:text-gray-500" src="../../static/icons/facebook.svg" width="13" /></a>
      <a href="#"><g-image src="../../static/icons/twitter.svg" width="25" /></a>
      <a href="#"><g-image src="../../static/icons/instagram.svg" width="20" /></a>
    </div>
    <div class="mx-4 py-4 text-xs text-center">
      <p class="pb-2">JAMstack Website by <a class="font-semibold hover:text-green-400" href="https://chaddpoggenpoel.netlify.com/">Chadd Poggenpoel</a></p>
      <p>Copyright &copy; {{ new Date().getFullYear() }} Tasty Bites. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>