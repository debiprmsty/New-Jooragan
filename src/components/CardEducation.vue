<template>
    <div>
        <!-- Category Education -->
        <div class="px-4 py-16 mx-auto max-w-full md:px-8 lg:pt-20">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                  <span class="relative">Ada</span>
                </span>
                beberapa opsi menarik untuk tingkatkan skillsmu!
              </h2>
            </div>
            <div class="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
              <div v-for="category in jooragan.categoryEducation" :key="category.id">
                <button @click="clickCategory(category.id)" >
                  <div class="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                      <div class="flex flex-col h-full">
                      <img :src="jooragan.educationImageCategory(category.images)" class="object-cover w-full h-48" :alt="category.name_education" />
                      <div class="flex-grow border border-t-0 rounded-b">
                          <div class="p-5">
                          <h6 class="mb-2 font-semibold leading-5">{{ category.nama_education }}</h6>
                          </div>
                      </div>
                      </div>
                  </div>
                </button>
              </div>
            </div>
        </div>
        <div class="px-4 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8">
            <h2 class="max-w-md text-2xl mb-6 font-sans md:text-2xl font-bold tracking-tight text-amber-500 sm:leading-none xl:max-w-full">
                Rekomendasi Edukasi
            </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:px-8 mb-32 md:mx-0 mx-5">
          <div v-for="education in jooragan.educations" :key="education.id">
            <article class="flex flex-col md:flex-row bg-white transition shadow-xl">
              <div class="sm:basis-56">
                <video class="aspect-square h-36 md:h-full w-full object-cover" controls>
                  <source :src="jooragan.educationVideo(education.video_path)" type="video/mp4">
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
import { jooraganState } from '../../stores/jooragan.js';
import {ref,onMounted,watch} from 'vue'


const activeIndex = ref(0);
const jooragan = jooraganState(); 


const fetchDataEducation = async (index) => {
  if(index) {
    await jooragan.getEducationByCategory(index);
  }else {
    await jooragan.getEducations();
  }
}

watch(activeIndex,(newValue) => fetchDataEducation(newValue));


const clickCategory = (index) => {
  activeIndex.value = index
}

onMounted(async ()=>{
  await jooragan.getEducations();
  await jooragan.getCategoryEducation();
})

</script>

<style lang="scss" scoped>

</style>