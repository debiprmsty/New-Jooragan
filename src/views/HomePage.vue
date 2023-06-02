<template>
  <div class="font-poppins min-h-screen">
    <div class="px-4 py-16 mx-auto  md:max-w-full md:px-24 lg:px-16 lg:py-20 bg-zinc-800">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            <div>
              <p class="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-amber-500 uppercase rounded-full bg-teal-accent-400">
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
        <div class="flex items-center justify-center lg:w-1/2 mt-6 ">
          <div class="max-w-lg bg-amber-500  rounded-full p-1 ml-20 -mt-3">
            <img class="h-35 w-35 animate-bounce " src="../assets/images/h3.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Fitur -->
    <HomeFeature />

    <!-- Card Produk Home -->
    <HomeCardFeature />
    
    <!-- Card Education Home -->
    <EducationCardHome />
  </div>
  </template>

<script setup>
    import HomeCardFeature from '../components/HomeCardFeature.vue';
    import HomeFeature from '../components/HomeFeature.vue';
    import EducationCardHome from '../components/EducationCardHome.vue'
    
</script>

<style lang="scss" scoped>

</style>