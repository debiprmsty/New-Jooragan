<template>
    <div class="pt-24">
        <div class="relative sm:h-96">
            <img class="object-cover w-full h-56 sm:h-96 parallax" src="../assets/images/pcard.jpg" alt="" />
            <div class="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center flex-col px-4 md:px-0">
              <h1 class="text-center text-xl sm:text-5xl font-bold text-amber-500 italic">Bergabung bersama kami.Ubah Cara Anda Memperluas Bisnis!</h1>
              <RouterLink
              to="/me-store"
              class="inline-flex items-center justify-center md:h-12 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-5"
              aria-label="Sign up"
              title="Sign up"
            >
              Gabung
            </RouterLink>
            </div>
        </div>
        <div class="px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:pt-20">
            <h2 class="max-w-md mb-6 font-sans text-2xl font-bold tracking-tight text-amber-500 sm:leading-none xl:max-w-lg">
                Rekomendasi Produk
            </h2>
            <div class="grid gap-5 row-gap-5 mb-4 lg:grid-cols-4 sm:grid-cols-2 ml-4 md:ml-0">
                <div v-for="product in jooragan.products" :key="product.id">
                    <RouterLink :to="'/productDetail/' + product.id ">
                        <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:-transla te-y-2">
                            <img class="object-cover w-full h-48 mt-2 rounded-lg" :src="jooragan.productImage(product.image)" :alt="product.title">
                            <div class="px-4 py-2">
                                <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{{ product.title }}</h1>
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{{ product.description }}</p>
                            </div>
                            <div class="flex items-center justify-between px-4 py-2 bg-zinc-800">
                                <h1 class="md:text-md text-lg font-bold text-white">{{ formatRupiah(product.price) }}</h1>
                                <div class="flex justify-center items-center">
                                    <svg
                                        class="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                        </svg>
                                    <h1 class="md:text-md text-lg font-semibold text-white ml-1">{{ product.rating }}</h1>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import {ref,onMounted} from 'vue';
    import { jooraganState } from '../../stores/jooragan.js';
    
    const jooragan = jooraganState();

    function formatRupiah(harga) {
      const newHarga = parseInt(harga);
      return newHarga.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
      });
    }

    onMounted(async ()=>{
        await jooragan.getProducts();
    })
    
    


</script>

<style lang="scss" scoped>

</style>