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
                                <input type="text" placeholder="Search" class="w-full  py-3 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600" />
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- Category -->
        <ButtonCarouselStoreVue />
        <!-- Products -->
        <StoreProducts />
    </div>
</template>

<script setup>
    import ButtonCarouselStoreVue from '../components/ButtonCarouselStore.vue';
    import StoreProducts from '../components/StoreProducts.vue';
    

</script>

<style lang="scss" scoped>

</style>