<template>
  <div class="navbar bg-amber-500 fixed top-0 w-full z-50 ">
    <div class="flex-1">
      <RouterLink
          to="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
        <img src="../assets/images/logo.png" alt="" srcset="" class="md:w-15 md:h-16 w-12 h-12 md:ml-10">
          <span
            class="ml-2 md:text-xl text-sm font-bold tracking-wide text-white uppercase"
            >Jooragan</span
          >
      </RouterLink>
    </div>
    <div class="flex-none">
      <ul class="md:flex items-center hidden space-x-8 lg:flex md:mr-5">
        <li>
          <RouterLink
            to="/"
            class="font-medium tracking-wide transition-colors duration-200 text-white"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
          to="/about"
            class="font-medium tracking-wide transition-colors duration-200 text-white"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/store"
            aria-label="Product pricing"
            title="Product pricing"
            class="font-medium tracking-wide transition-colors duration-200 text-white"
            >Store</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/education"
            aria-label="About us"
            title="About us"
            class="font-medium tracking-wide transition-colors duration-200 text-white"
            >Education</RouterLink
          >
        </li>

      </ul>

      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown dropdown-end md:mr-5">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="../assets/images/user.png" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 foc  us:bg-deep-purple-50 ml-2"
          @click="isMenuOpen = true"
        >
          <svg class="w-5 text-white" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
          <div class="p-5 bg-zinc-800 border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4 ml-7">
              <div>
                <RouterLink
                to="/"
                aria-label="Jooragan"
                title="Jooragan"
                class="inline-flex items-center"
              >
              <img src="../assets/images/logo.png" alt="" srcset="" class="w-15 h-20">
                <span
                  class="ml-2 text-xl  font-bold tracking-wide text-white uppercase"
                  >Jooragan</span
                >
              </RouterLink>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <RouterLink
                  to="/"
                  class="font-medium tracking-wide transition-colors duration-200 text-white"
                  >Home</RouterLink
                >
                </li>
                <li>
                  <RouterLink
                    to="/about"
                      class="font-medium tracking-wide transition-colors duration-200 text-white"
                      >About</RouterLink
                    >
                </li>
                <li>
                  <RouterLink
                    to="/store"
                      class="font-medium tracking-wide transition-colors duration-200 text-white"
                      >Store</RouterLink
                    >
                </li>
                <li>
                  <RouterLink
                    to="/education"
                      class="font-medium tracking-wide transition-colors duration-200 text-white"
                      >Education</RouterLink
                    >
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>


    <!-- <div
      class="px-4 py-1 mx-auto  md:max-w-full md:px-24 lg:px-8 bg-zinc-800 font-poppins fixed top-0 w-full z-50"
    >
      <div class="relative flex items-center justify-between">
        <RouterLink
          to="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
        <img src="../assets/images/logo.png" alt="" srcset="" class="w-15 h-20">
          <span
            class="ml-2 text-xl  font-bold tracking-wide text-white uppercase"
            >Jooragan</span
          >
        </RouterLink>
        <ul class="md:flex items-center hidden space-x-8 lg:flex">
          <li>
            <RouterLink
              to="/"
              class="font-medium tracking-wide transition-colors duration-200 text-white"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
            to="/about"
              class="font-medium tracking-wide transition-colors duration-200 text-white"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/store"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide transition-colors duration-200 text-white"
              >Store</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/education"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide transition-colors duration-200 text-white"
              >Education</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/login"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >Login
            </RouterLink>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 foc  us:bg-deep-purple-50"
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-zinc-800 border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4 ml-7">
                <div>
                  <RouterLink
                  to="/"
                  aria-label="Jooragan"
                  title="Jooragan"
                  class="inline-flex items-center"
                >
                <img src="../assets/images/logo.png" alt="" srcset="" class="w-15 h-20">
                  <span
                    class="ml-2 text-xl  font-bold tracking-wide text-white uppercase"
                    >Jooragan</span
                  >
                </RouterLink>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <RouterLink
                    to="/"
                    class="font-medium tracking-wide transition-colors duration-200 text-white"
                    >Home</RouterLink
                  >
                  </li>
                  <li>
                    <RouterLink
                      to="/about"
                        class="font-medium tracking-wide transition-colors duration-200 text-white"
                        >About</RouterLink
                      >
                  </li>
                  <li>
                    <RouterLink
                      to="/store"
                        class="font-medium tracking-wide transition-colors duration-200 text-white"
                        >Store</RouterLink
                      >
                  </li>
                  <li>
                    <RouterLink
                      to="/education"
                        class="font-medium tracking-wide transition-colors duration-200 text-white"
                        >Education</RouterLink
                      >
                  </li>
                  <li>
                    <RouterLink
                      to="/login"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-500 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Login
                    </RouterLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </template>
  


<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';


    const isMenuOpen = ref(false);

</script>

<style lang="scss" scoped>

</style>