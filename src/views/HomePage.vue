<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20 bg-zinc-800">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            <div>
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-500 uppercase rounded-full bg-teal-accent-400">
                Platform Frachise
              </p>
            </div>
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-amber-500 sm:text-4xl sm:leading-none">
              Semua bisa jadi <br class="hidden md:block" />
              
              <span class="inline-block text-amber-500 ">Jooragan!</span>
            </h2>
            <p class="text-base text-white md:text-lg">
                Platform berbasis aplikasi digital yang mempertemukan pemilik franchise dengan pihak yang ingin membeli franchise.
            </p>
          </div>
          <div class="flex items-center space-x-3">
            <a href="/" class="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/app-store.png" class="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
            <a href="/" class="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/google-play.png" class="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center lg:w-1/2 mt-6">
          <div class="w-5/5 bg-amber-500 rounded-full p-1">
            <img class="h-35 w-35" src="../assets/images/h3.png" alt="" />
          </div>
        </div>
      </div>
      <a
        href="/"
        aria-label="Scroll down"
        class="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
        </svg>
      </a>
    </div>

    <!-- Fitur -->
    <HomeFeature />

    <!-- Card Produk Home -->
    <HomeCardFeature />
    
      
  </template>

<script setup>
    import HomeCardFeature from '../components/HomeCardFeature.vue';
    import HomeFeature from '../components/HomeFeature.vue';
    
</script>

<style lang="scss" scoped>

</style>