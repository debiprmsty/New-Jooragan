<template>
    <div>
        <!-- Category Education -->
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                  <span class="relative">Ada</span>
                </span>
                beberapa opsi menarik untuk tingkatkan skillsmu!
              </h2>
            </div>
            <div class="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                    <div class="flex flex-col h-full">
                    <img src="../assets/images/kte1.jpg" class="object-cover w-full h-48" alt="" />
                    <div class="flex-grow border border-t-0 rounded-b">
                        <div class="p-5">
                        <h6 class="mb-2 font-semibold leading-5">Bisnis</h6>
                        </div>
                    </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                    <div class="flex flex-col h-full">
                    <img src="../assets/images/kte2.jpg" class="object-cover w-full h-48" alt="" />
                    <div class="flex-grow border border-t-0 rounded-b">
                        <div class="p-5">
                        <h6 class="mb-2 font-semibold leading-5">Digital Marketing</h6>
                        </div>
                    </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                    <div class="flex flex-col h-full">
                    <img src="../assets/images/kte3.png" class="object-cover w-full h-48" alt="" />
                    <div class="flex-grow border border-t-0 rounded-b">
                        <div class="p-5">
                        <h6 class="mb-2 font-semibold leading-5">Tips & Tricks</h6>
                        </div>
                    </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item" class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                    <div class="flex flex-col h-full">
                    <img src="../assets/images/kte4.jpg" class="object-cover w-full h-48" alt="" />
                    <div class="flex-grow border border-t-0 rounded-b">
                        <div class="p-5">
                        <h6 class="mb-2 font-semibold leading-5">Podcast</h6>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="px-4 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8">
            <h2 class="max-w-md text-2xl mb-6 font-sans md:text-2xl font-bold tracking-tight text-amber-500 sm:leading-none xl:max-w-full">
                Rekomendasi Edukasi
            </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:px-8 mb-32 md:mx-0 mx-5">
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