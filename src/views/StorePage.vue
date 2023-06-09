<template>
    <div>
        <div class="font-poppins mt-20">
            <div class="relative sm:h-96 mt-16">
                <img class="object-cover w-full h-56 sm:h-96 parallax" src="../assets/images/pcard.jpg" alt="" />
                <div class="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div class="max-w-full">
                        <h1 class="text-3xl sm:text-6xl font-bold text-amber-500 text-center">Temukan Franchise Impianmu !</h1>
                        <form class="max-w-full px-4 mt-4 flex flex-col items-center">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" placeholder="Search" class="w-full  py-3 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-amber-600" />
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- Category -->
        <div class="category-carousel">
            <div class="carousel-wrapper">
              <button class="carousel-button prev" @click="prevSlide"><i class="fas fa-chevron-left"></i></button>
              <div class="carousel-content">
                <ul class="category-list" :style="{ transform: `translateX(-${activeIndex * slideWidth}px)` }">
                  <li v-for="(category, index) in categories" :key="index" :class="{ active: index === activeIndex }">
                    <button class="btn btn-wide bg-amber-500 text-zinc-800" @click="selectCategory(index)">{{ category.nama_category }}</button>
                  </li>
                </ul>
              </div>
              <button class="carousel-button next" @click="nextSlide"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        <!-- Products -->
        <div>
            <div class="px-4  mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 my-6">
                <div class="grid gap-5 row-gap-5 mb-4 lg:grid-cols-4 sm:grid-cols-2 ml-4 md:ml-0">
                    <div v-for="product in products" :key="product.id">
                        <RouterLink :to="'/productDetail/' + product.id ">
                            <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:-translate-y-2">
                            <img class="object-cover w-full h-48 mt-2 rounded-lg" :src="urlProduct+'images/'+product.image" :alt="product.title">
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

    </div>
</template>

<script setup>
    import { ref,onMounted,watch } from 'vue';
    import '@fortawesome/fontawesome-free/css/all.css';
    import axios from 'axios';

    const activeIndex = ref(0);
    const slideWidth = ref(178);
    const categories = ref(null);
    const formattedAmount = ref(null)
    const products = ref(null)

    const urlCategory = "http://localhost:8000/api/category";
    const urlProduct = "http://localhost:8000/api/products/";


    const fetchDataCategory = () => {
      axios.get(urlCategory)
        .then((res)=>categories.value = res.data)
        .catch((err)=>console.log(err))
    }

    const fetchDataProduct = () => {
        axios.get(urlProduct)
        .then((response)=>{
            products.value=response.data.data;
        }).catch((err)=>{
            console.log(err);
        })
    }

    onMounted(()=> {
        fetchDataCategory();
        fetchDataProduct();
    });

    const selectCategory = (index) => {
        console.log('Kategori dipilih:', categories.value[index]);
    };

    const prevSlide = () => {
      if (activeIndex.value > 0) {
          activeIndex.value--;
        }
    }

    const nextSlide = () => {
      if (activeIndex.value < categories.value.length ) {
          activeIndex.value++;
        }
    }
    

    function formatRupiah(harga) {
      return harga.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    }

    

</script>

<style scoped>

.category-carousel {
    width: 100%;
    padding: 20px;
    overflow: hidden;
  }
  
  .carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    color: orange;
  }
  
  .carousel-button.prev {
    left: 10px;
  }
  
  .carousel-button.next {
    right: 10px;
  }
  
  .carousel-content {
    overflow: hidden;
    margin: 0 50px;
  }
  
  .category-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .category-list li {
    margin-right: 10px;
  }
  
  .category-button {
    padding: 10px 20px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .category-list li.active .category-button {
    background-color: #f00;
    color: #fff;
  }

</style>