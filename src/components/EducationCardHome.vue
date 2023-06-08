<template>
  <div>
    <div class="px-4 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8">
        <h2 class="max-w-md mb-6 font-sans text-2xl font-bold tracking-tight text-amber-500 sm:leading-none xl:max-w-lg">
            Rekomendasi Edukasi
        </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:px-8 mb-32 mx-5 md:mx-0">
        
          <article class="flex flex-col md:flex-row bg-white transition shadow-xl">
            <div class=" sm:basis-56">
              <img
                alt="Edukasi"
                src="../assets/images/dm.jpg"
                class="aspect-square h-36 md:h-full w-full object-cover"
              />
            </div>
        
            <div class="flex flex-1 flex-col justify-between">
              <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <h3 class="font-bold uppercase text-gray-900">
                    Kursus Digital Marketing,Dijamin Profit 100%
                  </h3>
        
                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Dalam kursus ini, Anda akan belajar langkah-langkah praktis untuk mengoptimalkan kampanye pemasaran digital Anda dengan menggunakan teknik-teknik terbaru yang terbukti berhasil.
                </p>
              </div>
        
              <div class="sm:flex sm:items-end sm:justify-end">
                <RouterLink
                  to="/eduDetail"
                  class="block bg-amber-500 px-5 py-3 text-center text-xs font-bold uppercase text-zinc-800 transition hover:bg-zinc-800 hover:text-white"
                >
                  Lihat Detail
              </RouterLink>
              </div>
            </div>
          </article>
          <article class="flex flex-col md:flex-row bg-white transition shadow-xl">
              <div class=" sm:basis-56">
                <img
                  alt="Edukasi"
                  src="../assets/images/stg1.jpg"
                  class="aspect-square h-36 md:h-full w-full object-cover"
                />
              </div>
          
              <div class="flex flex-1 flex-col justify-between">
                <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <h3 class="font-bold uppercase text-gray-900">
                      Strategi untuk memulai usaha
                    </h3>
          
                  <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Mengumpulkan informasi ini akan membantu Anda memahami kebutuhan pasar dan mengembangkan strategi yang relevan.
                  </p>
                </div>
          
                <div class="sm:flex sm:items-end sm:justify-end">
                  <RouterLink
                      to="/eduDetail"
                      class="block bg-amber-500 px-5 py-3 text-center text-xs font-bold uppercase text-zinc-800 transition hover:bg-zinc-800 hover:text-white"
                    >
                      Lihat Detail
                  </RouterLink>
                </div>
              </div>
          </article>
    </div>
  </div> 
</template>

<script setup>
  import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>

</style>