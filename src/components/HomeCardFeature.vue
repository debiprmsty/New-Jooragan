<template>
    <div class="pt-24">
        <div class="relative sm:h-96">
            <img class="object-cover w-full h-56 sm:h-96 parallax" src="../assets/images/pcard.jpg" alt="" />
            <div class="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center flex-col px-4 md:px-0">
              <h1 class="text-center text-xl sm:text-5xl font-bold text-amber-500 italic">Bergabung bersama kami.Ubah Cara Anda Memperluas Bisnis!</h1>
              <a
              href="/"
              class="inline-flex items-center justify-center md:h-12 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-5"
              aria-label="Sign up"
              title="Sign up"
            >
              Gabung
            </a>
            </div>
        </div>
        <div class="px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:pt-20">
            <h2 class="max-w-md mb-6 font-sans text-2xl font-bold tracking-tight text-amber-500 sm:leading-none xl:max-w-lg">
                Rekomendasi Produk
            </h2>
            <div class="grid gap-5 row-gap-5 mb-4 lg:grid-cols-4 sm:grid-cols-2 ml-4 md:ml-0">
                <div v-for="product in products" :key="product.id">
                    <RouterLink :to="'/productDetail/' + product.id ">
                        <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:-translate-y-2">
                            <img class="object-cover w-full h-48 mt-2 rounded-lg" :src="url+'images/'+product.image" :alt="product.title">
                            <div class="px-4 py-2">
                                <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{{ product.title }}</h1>
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{{ product.description }}</p>
                            </div>
                            <div class="flex items-center justify-between px-4 py-2 bg-zinc-800">
                                <h1 class="md:text-md text-lg font-bold text-white">{{ formatRupiah(product.price) }}</h1>
                                <button class="px-2 py-1 text-xs font-semibold text-zinc-800 uppercase transition-colors duration-300 transform bg-amber-500 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
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
    import axios from 'axios';

    const formattedAmount = ref(null)
    const products = ref(null)
    const url = "http://localhost:8000/api/products/";

    function formatRupiah(harga) {
      return harga.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    }

    onMounted(()=>{
        axios.get(url)
        .then((response)=>{
            products.value=response.data.data;
        }).catch((err)=>{
            console.log(err);
        })
    })
    
    


</script>

<style lang="scss" scoped>

</style>