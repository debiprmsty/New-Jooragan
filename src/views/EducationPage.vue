<template>
    <div class="font-poppins min-h-screen mt-20 mb-16">
        <CarouselEducation /> 
        
        <!-- Category Education -->
        <CardEducation />
    </div>
</template>

<script setup>
import CarouselEducation from '../components/CarouselEducation.vue'
import CardEducation from '../components/CardEducation.vue'

import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
});

</script>

<style lang="scss" scoped>

</style>