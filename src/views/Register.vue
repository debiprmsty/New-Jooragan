<template>
    <div class="flex justify-center items-center shadow-bg">
        <section class="bg-white">
            <div class="lg:grid lg:min-h-screen lg:grid-cols-12 ">
            <section
                class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
            >
                <img
                alt="Jooragan"
                src="../assets/images/pcard.jpg"
                class="absolute inset-0 h-full w-full object-cover opacity-80"
                />
        
                <div class="hidden lg:relative lg:block lg:p-12">
                <a class="block text-white" href="/">
                    <span class="sr-only">Home</span>
                    <img src="../assets/images/logo.png" class="h-20" alt="" srcset="">
                </a>
        
                <h1
                    class="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                    >
                    Welcome to <span class="text-amber-500">Jooragan</span>
                </h1>
        
                <p class="mt-4 leading-relaxed text-white">
                    Platform berbasis aplikasi digital yang mempertemukan pemilik franchise dengan pihak yang ingin membeli franchise.
                </p>
                </div>
            </section>
        
            <main
                aria-label="Main"
                class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
                <div class="max-w-xl lg:max-w-3xl">
                <div class="relative -mt-16 block lg:hidden">
                    <a
                    class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                    href="/"
                    >
                    <span class="sr-only">Home</span>
                    <img src="../assets/images/logo.png" class="h-10 sm:h-10" />
                    </a>
        
                    <h1
                    class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                    >
                    Welcome to <span class="text-amber-500">Jooragan</span>
                    </h1>
        
                    <p class="mt-4 leading-relaxed text-gray-500">
                        Platform berbasis aplikasi digital yang mempertemukan pemilik franchise dengan pihak yang ingin membeli franchise.
                    </p>
                </div>
        
                <form @submit.prevent="register" class="mt-8 grid grid-cols-6 gap-6">
                    <div class="col-span-6">
                    <label
                        for="FirstName"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Username
                    </label>
        
                    <input
                        type="text"
                        id="FirstName"
                        name="first_name"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        v-model="user.name"
                    />
                    <h5 class="text-sm text-red-500" v-if="validation">{{ validation.name[0] }}</h5>
                    </div>
        
                    <div class="col-span-6">
                    <label for="Email" class="block text-sm font-medium text-gray-700">
                        Email
                    </label>
        
                    <input
                        type="email"
                        id="Email"
                        name="email"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        v-model="user.email"
                    />
                    <h5 class="text-sm text-red-500" v-if="validation">{{ validation.email[0] }}</h5>
                    </div>
        
                    <div class="col-span-6 sm:col-span-3">
                    <label
                        for="Password"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
        
                    <input
                        type="password"
                        id="Password"
                        name="password"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        v-model="user.password"
                    />
                    <h5 class="text-sm text-red-500" v-if="validation">{{ validation.password[0] }}</h5>
                    </div>
        
                    <div class="col-span-6 sm:col-span-3">
                    <label
                        for="PasswordConfirmation"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Password Confirmation
                    </label>
        
                    <input
                        type="password"
                        id="PasswordConfirmation"
                        name="password_confirmation"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        v-model="user.password_confirmation"
                    />
                    <h5 class="text-sm text-red-500" v-if="validasi_password">{{ validasi_password }}</h5>
                    </div>
        
                    <div class="col-span-6">
                    <label for="MarketingAccept" class="flex gap-4">
                        <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                        />
        
                        <span class="text-sm text-gray-700">
                            Saya ingin menerima email tentang acara, pembaruan produk, dan pengumuman perusahaan.
                        </span>
                    </label>
                    </div>
        
                    <div class="col-span-6">
                    <p class="text-sm text-gray-500">
                        Dengan membuat akun, Anda menyetujui 
                        <a href="#" class="text-gray-700 underline">
                            syarat dan ketentuan
                        </a>
                        dan
                        <a href="#" class="text-gray-700 underline">kebijakan privasi</a>
                        kami.
                    </p>
                    </div>
        
                    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                        type="submit"
                        class="inline-block shrink-0 rounded-md bg-amber-500 px-12 py-3 text-sm font-medium text-white transition "
                        
                    >
                        Buat akun
                    </button>
        
                    <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                        Sudah punya akun ?
                        <RouterLink to="/login" class="text-gray-700 underline">Log in</RouterLink>
                    </p>
                    </div>
                </form>
                </div>
            </main>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { RouterLink,useRouter } from 'vue-router';
    import {reactive,ref} from 'vue';
    import axios from 'axios';

    const router = useRouter();

    const user = reactive({
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    })

    const validation = ref(null);
    const validasi_password = ref(null);

    const register = () => {
        let name = user.name;
        let email = user.email;
        let password = user.password;
        let password_confirmation = user.password_confirmation;

        if(password == password_confirmation) {
            axios.post('http://localhost:8000/api/register', {name,email,password:password_confirmation}).then(()=> {
            return router.push({ name: 'login' })
            }).catch(err => {
                validation.value = err.response.data.errors
            })
        }else {
            validasi_password.value = "Password tidak sama"
        }

    }


</script>

<style lang="scss" scoped>

</style>