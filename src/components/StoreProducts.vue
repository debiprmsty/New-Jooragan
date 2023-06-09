<template>
    <div>
        <div class="px-4  mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 my-6">
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
                            <h1 class="text-lg font-bold text-white">{{ formatRupiah(product.price) }}</h1>
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