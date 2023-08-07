<template>
  <div class="container md:mx-auto mx-6 md:-mt-0 -mt-32">
    <div class="md:max-w-3xl">
      <h1 class="text-2xl font-bold mb-4 text-amber-500">Reviews</h1>

      <div
        v-for="comment in productComments"
        :key="comment.id"
        class="border-2 border-amber-300 rounded-md p-4 mb-4"
      >
        <div class="flex items-start mb-2">
          <div class="flex-shrink-0 mr-2">
            <img
              src="../assets/images/avatar.png"
              alt="Avatar"
              class="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <h2 class="font-bold">{{ comment.user.name }}</h2>
            <div class="flex justify-center items-center">
              <svg
                class="h-3 w-3 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <p class="text-sm text-gray-600 mx-1">{{ comment.rating }}</p>
              <p class="text-sm text-gray-600 italic ml-2">
                {{ formatDate(comment.user.updated_at) }}
              </p>
            </div>
          </div>
        </div>
        <p>{{ comment.comment }}</p>
      </div>

      <form @submit.prevent="addComment" class="bg-white shadow-md rounded p-4">
        <div class="mb-4">
          <label for="content" class="block font-bold mb-2">Rating:</label>
          <i class="text-amber-500"
            >Bisa masukkan angka desimal dari 1.0 - 5.0</i
          >
          <input
            type="text"
            v-model="newComment.rating"
            id="rating"
            class="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="content" class="block font-bold mb-2">Komentar:</label>
          <textarea
            v-model="newComment.comment"
            id="comment"
            class="w-full px-3 py-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref, defineProps, onMounted, reactive } from "vue";
import { jooraganState } from "../../stores/jooragan.js";
import { useRouter } from "vue-router";

const router = useRouter();
const jooragan = jooraganState();
const getToken = () => localStorage.getItem('token');
const props = defineProps({
  productId: {
    type: Number,
    required: true,
    validator: (value) => {
      return value !== null; // Check if the value is not null
    },
  },
  comms: {
    type: Array,
    required: true,
    validator: (value) => {
      return value !== null; // Check if the value is not null
    },
  },
});
const idProduct = ref(props.productId);
const productComments = ref(props.comms);
const newComment = reactive({
  id_user: null,
  comment: "",
  rating: null,
  id_product:null
});


onMounted(async () => {
  productComments.value = props.comms;
  await jooragan.getActiveUser();
  newComment.id_user = jooragan.id_user;
  newComment.id_product = jooragan.id_product;
});

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day }`
};

const addComment = async () => {
  const meToken = getToken();
  if(!meToken) {
    router.push({name:'login'});
  } 
  await jooragan.addComment(newComment);
  
};
</script>

