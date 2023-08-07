<template>
    <div class="mb-16">
        <div class="font-poppins mt-20">
            <div class="relative sm:h-96 mt-16">
                <img class="object-cover w-full h-56 sm:h-96 parallax" src="../assets/images/pcard.jpg" alt="" />
                <div class="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div class="max-w-full">
                        <h1 class="text-3xl sm:text-6xl font-bold text-amber-500 text-center">Temukan Franchise Impianmu !</h1>
                        <form class="max-w-full px-4 mt-4 flex flex-col items-center" @submit.prevent="performSearch">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" placeholder="Search" class="w-full  py-3 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-amber-600" v-model="search"/>
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
                  <li :key="0" :class="{ active: activeIndex === -1 }">
                    <button class="btn btn-wide bg-amber-500 text-zinc-800" @click="selectCategory(-1)">All</button>
                  </li>
                  <li v-for="(category, index) in jooragan.categoryProduct" :key="index" :class="{ active: index === activeIndex }">
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
                    <div v-for="product in jooragan.products" :key="product.id">
                        <RouterLink :to="'/productDetail/' + product.id ">
                            <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:-translate-y-2">
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

    </div>
</template>

<script setup>
    import { ref,onMounted,watch } from 'vue';
    import '@fortawesome/fontawesome-free/css/all.css';
    import { jooraganState } from '../../stores/jooragan.js';
    
    const jooragan = jooraganState();

    const activeIndex = ref(0);
    const search = ref('');
    const activeCategory = ref(0);
    const slideWidth = ref(270);

    onMounted(async () => {
      window.scrollTo(0, 0);
      await jooragan.getCategoryProducts();
      await jooragan.getProducts();
    });


    const fetchDataProduct = async (index) => {
        if(index) {
          await jooragan.getProductByCategory(index);
        }else if(index == 0 || !index) {
          await jooragan.getProducts();
        }
    }

    

    const selectCategory = (index) => {
        activeCategory.value = index === -1 ? 0 : index + 1;
    };

    watch(activeCategory,(newValue) => fetchDataProduct(newValue));
    watch(search,async (value) => {
      if(search.value.length > 0) {
        await jooragan.searchProduct(value);
      }else {
        await jooragan.getProducts();
      }
    });

    const prevSlide = () => {
      if (activeIndex.value > 0) {
          activeIndex.value--;
        }
    }

    const nextSlide = () => {
      if (activeIndex.value < jooragan.countCategory ) {
          activeIndex.value++; 
      }
    }
    

  function formatRupiah(harga) {
    const newHarga = parseInt(harga);
    return newHarga.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2,
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