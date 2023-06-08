<template>
  <div>
    <template v-if="!isLoginOrRegisterPath">
      <Navbar />
    </template>
    
    <router-view />
    
    <template v-if="!isLoginOrRegisterPath">
      <Footer />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const router = useRouter();
const route = useRoute();

const isLoginOrRegisterPath = ref(false);

onMounted(() => {
  isLoginOrRegisterPath.value = ['login', 'register'].includes(route.name);
});

watch(() => route.name, (newRouteName) => {
  isLoginOrRegisterPath.value = ['login', 'register'].includes(newRouteName);
});
</script>

<style scoped>
/* Gaya gaya Anda */
</style>
