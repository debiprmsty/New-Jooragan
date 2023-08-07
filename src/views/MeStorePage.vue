<template>
    <div v-if="jooragan.isLoading == true" class="container md:mx-auto md:my-32 my-28 min-h-screen mx-5">Loading...</div>
    <div class="container md:mx-auto md:my-32 my-28 min-h-screen mx-5" v-if="jooragan.isLoading == false">
        <div v-if="jooragan.owner !== null">
            <h1 class="text-3xl font-bold">{{ jooragan.owner.nama_toko }}</h1>
            <h5 class="text-md text-amber-500 mb-4">{{ jooragan.owner.category.nama_category }}</h5>

            <!-- Filter berdasarkan kategori -->
            <div class="mb-4">
                <RouterLink to="/add-product">
                    <button
                        class="flex items-center px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-500 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
                            <path
                                d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                        </svg>

                        <span class="mx-1">Tambah Product</span>
                    </button>
                </RouterLink>
            </div>

            <!-- Pencarian berdasarkan nama produk -->
            <div class="mb-4">
                <div>
                    <label for="search" class="block text-sm font-semibold mb-2">Cari Produk:</label>

                    <div class="relative flex items-center mt-2">
                        <span class="absolute">
                            <svg width="20" height="20" fill="currentColor"
                                class="absolute left-3 top-1/2 -mt-2.5 text-amber-500 pointer-events-none group-focus-within:text-amber-500"
                                aria-hidden="true" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                            </svg>
                        </span>

                        <input v-model="searchTerm" type="text" id="search"
                            class="text-sm block md:w-full w-72 py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-amber-500 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 dark:focus:border-amb-300 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Cari produk...">
                    </div>
                </div>
            </div>

            <!-- Item etalase toko -->
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-1 mt-6">
                <div v-if="jooragan.products" v-for="(item, index) in jooragan.products" :key="index"
                    class=" border border-gray-200 rounded-lg shadow md:w-full w-44 pb-6">
                    <img :src="jooragan.productImage(item.image)" :alt="item.title" class="w-full h-40 object-cover mb-2 rounded">
                    <h3 class="text-lg mb-2 px-2 font-bold">{{ item.title }}</h3>
                    <p class="text-gray-700 px-2 truncate">{{ item.description }}</p>
                    <p class="mt-2 text-amber-500 px-2 pb-5">{{ formatRupiah(item.price) }}</p>
                    <div class="flex">
                        <i class="fas fa-edit text-amber-500 px-2"></i>
                        <i class="fas fa-trash text-red-500 px-2"></i>
                    </div>
                </div>
                <div v-if="jooragan.products == null">
                    <h1>Belum ada Product</h1>
                </div>
            </div>
        </div>
        <div v-if="jooragan.owner == null ">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 md:pr-0 pr-10">
            <div class="mx-auto max-w-lg ">
                <h1 class="text-center text-2xl font-bold text-zync-800 sm:text-4xl">
                Mari bergabung kemitraan bersama <span class="text-amber-500">Jooragan.</span>
                </h1>

                <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                 Ayo, bergabunglah sekarang dan nikmati perjalanan penuh makna menuju masa depan gemilang bersama Jooragan!
                </p>

                <form
                action=""
                class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <div class="flex justify-center items-center gap-2">
                        <i class="fas fa-store text-gray-700"></i>
                        <p class="text-center text-lg font-semibold">Daftarkan Toko Anda</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nama Toko:</label>

                        <div class="relative">
                        <input
                            type="text"
                            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="Masukkan nama Toko"
                        />
                        </div>
                    </div>

                    <div class="mt-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Kategori:</label>
                    <select
                        id="category"
                        name="category"
                        class="mt-1 block w-full py-4 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent sm:text-sm"
                        v-if="jooragan.categoryProduct"
                    >
                    <option value="">Pilih Kategori</option>
                    <option v-for="category in jooragan.categoryProduct" :value="category.id">{{ category.nama_category }}</option>
                    
                    </select>
                    </div>

                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Pilih Icon Toko:</label>
                        <input
                        type="file"
                        id="fileInput"
                        name="fileInput"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  focus:ring-2 focus:ring-amber-500 focus:border-transparent sm:text-sm"
                        placeholder="Pilih file..."
                        />
                        
                    </div>

                    <div class="mt-4">
                            <label class="block text-sm font-medium text-gray-700 mb-1">Masukkan MOU <span class="italic font-normal">(MOU dalam bentuk pdf)</span></label>
                            <input
                            type="file"
                            ref="pdfInput"
                            accept="application/pdf"
                            id="fileInput"
                            name="fileInput"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  focus:ring-2 focus:ring-amber-500 focus:border-transparent sm:text-sm"
                            placeholder="Pilih file..."
                            />
                        
                        </div>

                    <div class="mt-4">
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Deskripsi:</label>
                        <textarea
                        id="description"
                        name="description"
                        class="mt-1 block w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Masukkan deskripsi toko"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        class="block w-full rounded-lg bg-amber-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Daftar
                    </button>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref,onMounted,watch} from "vue"
    import { jooraganState } from "../../stores/jooragan.js";
    import { useRouter } from "vue-router";
    
    const getToken = () => localStorage.getItem('token');

    const jooragan = jooraganState();
    const router = useRouter();
    onMounted(async () => {
        const token = getToken();
        if(token) {
            await jooragan.ownerStore();
            await jooragan.getCategoryProducts();
            console.log(jooragan.categoryProduct);
        }else {
            router.push({name:'login'});
        }
    });

    function formatRupiah(harga) {
        const newHarga = parseInt(harga);
        return newHarga.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2,
        });
    }

    const searchTerm = ref("");
    watch(searchTerm,async(newValue)=> {
        if(searchTerm.value.length > 0) {
            await jooragan.searchProduct(newValue);
        }else {
            await jooragan.ownerStore();
        }
    });



</script>

<style>
/* Tambahkan gaya khusus halaman etalase toko di sini jika diperlukan */
</style>
