<template>
  <div class="md:mx-auto md:mb-96 md:pb-24 mb-56 mt-28 pb-96 mx-4 min-h-screen ">
    <section class="h-screen">
      <form class="container max-w-2xl mx-auto shadow-xl md:w-3/4 mb-12 px-3 ">
        <div class="p-4 border-t-2 border-amber-400 rounded-lg bg-gray-100/5">
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center space-x-4">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="../assets/images/logo.png"
                  class="mx-auto object-cover rounded-full h-16 w-16"
                />
              </a>
              <h1 class="text-zinc-800 font-bold md:text-xl text-md">Buat Product Franchise Anda !</h1>
            </div>
          </div>
        </div>
        <div class="space-y-6 ">
          <div
            class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">Nama Produk</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div class="relative">
                <input
                  type="text"
                  id="user-info-email"
                  class="rounded-lg  flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Masukkan nama produk..."
                />
              </div>
            </div>
          </div>
          <hr />
          <div
              class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
            >
              <h2 class="max-w-sm mx-auto md:w-1/3">Harga</h2>
              <div class="max-w-sm mx-auto md:w-2/3">
              <div class="flex relative ">
                  <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      Rp.
                  </span>
                  <input type="number.."  class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent" placeholder="Masukkan Harga"/>
                </div>
              </div>
          </div>
          <hr />
          <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
              >
              <h2 class="max-w-sm mx-auto md:w-1/3">Stock</h2>
               <div class="max-w-sm mx-auto md:w-2/3">
                <div class="relative">
                  <input
                    type="number"
                    class="rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Masukkan jumlah stock..."
                  />
                </div>
              </div>
          </div>
          <hr />
          <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
                >
            <h2 class="max-w-sm mx-auto md:w-1/3">Deskripsi</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <label class="text-gray-700" for="name">
                  <textarea class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent" id="comment" placeholder="Masukkan description" name="comment" >
                </textarea>
              </label>
            </div>
          </div>
          <hr />
          <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
                  >
            <h2 class="max-w-sm mx-auto md:w-1/3">Gambar Product</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <fieldset class="w-full  space-y-1 dark:text-gray-100">
                  <label for="files" class="block text-sm font-medium">Attachments</label>
                  <div class="flex">
                    <input type="file" name="files" id="files" class="md:w-full w-80 px-8 py-12 border-2 border-dashed rounded-md  dark:bg-amber-500">
                  </div>
              </fieldset>
            </div>
          </div>
          <hr />
          <div
            class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">Alamat</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div class="relative">
                <input
                  type="text"
                  id="user-info-email"
                  class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Masukkan alamat..."
                />
              </div>
            </div>
          </div>
          <hr />
          <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              class="py-2 px-4 bg-amber-500 hover:bg-amber-700 focus:ring-amber-500 focus:ring-offset-amber-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Save
            </button>
          </div>
          
        </div>
      </form>
    </section>
  </div>
</template>

<script setup></script>

<style scoped></style>
