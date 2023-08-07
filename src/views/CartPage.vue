<template>
    <section class="mt-12 mb-5">
      <div class="mx-auto max-w-full px-4 py-8 md:px-0  sm:py-12  bg-zinc-100 ">
        <div class="mx-auto max-w-3xl md:max-w-lg shadow-lg p-4 bg-white rounded-md">
          <header class="text-center">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Keranjang <span class="text-amber-500">Anda!</span></h1>
          </header>

          <div class="mt-8">
            <ul class="space-y-4" v-if="products != null">
              <li class="flex items-center gap-4" v-for="(pr,index) in products" :key="pr.id">
                <img
                  :src="apiProduct + 'images/' + pr.product.image"
                  alt=""
                  class="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 class="text-sm text-gray-900">{{ pr.product.title }}</h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Paket:</dt>
                      <dd class="inline">{{ pr.paket.nama_paket }}</dd>
                      <br />
                      <b>{{ formatRupiah(pr.product.price) }}</b>
                    </div>
                  </dl>
                </div>

                <div class="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line1Qty" class="sr-only"> Quantity </label>

                    <input
                      type="number"
                      min="1"
                      v-model="pr.qty" 
                      id="Line1Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button @click.prevent="deleteCart(pr.id)" class="text-gray-600 transition hover:text-red-600">
                    <span class="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>

            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4">
                <dl class="space-y-0.5 text-sm text-gray-700">
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>{{ formatRupiah(subtotal) }}</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>Biaya Admin <b>(1%)</b></dt>
                    <dd>{{ formatRupiah(feeAdmin) }}</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-</dd>
                  </div>

                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>{{ formatRupiah(total) }}</dd>
                  </div>
                </dl>

                <div class="flex justify-end">
                  <span
                    class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p class="whitespace-nowrap text-xs">Voucher diskon</p>
                  </span>
                </div>

                <div class="flex justify-end">
                  <button
                    @click.prevent="handleCart"
                    class="block rounded bg-amber-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-amber-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=""></div>
    </section>
</template>

<script setup>
import { ref,onMounted,watch,reactive } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import axios from 'axios';

const getToken = () => localStorage.getItem('token');
const router = useRouter();
const apiMe = "http://localhost:8000/api/me";
const apiCarts = "http://localhost:8000/api/carts/me-cart";
const apiProduct = "http://localhost:8000/api/products/";
const products = ref(null);
const qty = ref(null);
const idUser= ref(null);
const subtotal = ref(0);
const total = ref(0);
const feeAdmin = ref(0)

onMounted(() => {
  window.scrollTo(0, 0);
  getActiveUser();
  fetchDataCarts();
});

const deleteCart = (id) => {
  const dataId = products.value.filter((item) => item.id !== id);
  console.log(dataId);
}


const handleCart = () => {
  if(products.value != null) {
    if(products.value.length > 1) {
      products.value.map((pr) => {
        const cartItem = {
          id_user:idUser.value,
          id_product: pr.product.id,
          id_paket:pr.paket.id,
          quantity:pr.qty
        }

        console.log(cartItem);
      }); 

    }else {
      const cartItem = {
        id_user: idUser.value,
        id_product: products.value[0].product.id,
        id_paket: products.value[0].paket.id,
        quantity: products.value[0].quantity
      }
    }
  }
}

watch(products,(newValue) => {
  if(newValue) {
    subtotal.value = 0;
    console.log(newValue);
    newValue.map((pr) => {
      let sum = pr.product.price * pr.qty;
      subtotal.value += sum;
      feeAdmin.value = subtotal.value * 0.01;
      total.value = subtotal.value + feeAdmin.value;
      watch(()=> pr.qty,calculate);
    })
  }
})

const calculate = () => {
  subtotal.value = 0;

  products.value.forEach((pr) => {
    let sum = pr.product.price * pr.qty;
    subtotal.value += sum;
    feeAdmin.value = subtotal.value * 0.01;
    total.value = subtotal.value + feeAdmin.value;
  });
};


const getActiveUser = async () => {
  const token = getToken();
  if (token) {
    try {
      const response = await axios.get(apiMe, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
      idUser.value = data.id;
    } catch (error) {
      console.log(error);
    }
  }else {
    router.push({
      name: 'login',
    })
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

const fetchDataCarts = async () => {
  const token = getToken();
  try {
    const response = await axios.get(apiCarts, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    products.value = response.data.data.map(pr => ({
      ...pr,
      qty: pr.quantity
    }));
  } catch (error) {
    console.log(error);
  }
}

</script>
