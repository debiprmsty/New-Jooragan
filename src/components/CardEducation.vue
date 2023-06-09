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
          <div v-for="education in educations" :key="education.id">
            <article class="flex flex-col md:flex-row bg-white transition shadow-xl">
              <div class="sm:basis-56">
                <video class="aspect-square h-36 md:h-full w-full object-cover" controls>
                  <source :src="url + 'video/' + education.video_path" type="video/mp4">
                </video>
              </div>
            
              <div class="flex flex-1 flex-col justify-between">
                <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <h3 class="font-bold uppercase text-gray-900">
                    {{ education.name_education }}
                  </h3>
            
                  <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    {{ education.description }}
                  </p>
                </div>
            
                <div class="sm:flex sm:items-end sm:justify-end">
                  <RouterLink
                    :to="'/eduDetail/' + education.id"
                    class="block bg-amber-500 px-5 py-3 text-center text-xs font-bold uppercase text-zinc-800 transition hover:bg-zinc-800 hover:text-white"
                  >
                    Lihat Detail
                  </RouterLink>
                </div>
              </div>
            </article>
          </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import {ref,onMounted} from 'vue'

const educations = ref(null);
const url = 'http://localhost:8000/api/education/'

onMounted(()=>{
  axios.get(url)
    .then((res) => educations.value = res.data.data)
    .catch((err) => console.log(err));
})

</script>

<style lang="scss" scoped>

</style>