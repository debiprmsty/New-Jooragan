import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import AboutPage from "../views/AboutPage.vue"
import StorePage from '../views/StorePage.vue'
import EducationPage from '../views/EducationPage.vue'
import MeStorePage from "../views/MeStorePage.vue"
import ProductDetail from '../components/ProductDetail.vue'
import VideoDetail from '../components/VideoDetail.vue'
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import CartPage from '../views/CartPage.vue'
import AddProduct from "../views/AddProduct.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/store',
      name: 'store',
      component: StorePage
    },
    {
      path: '/education',
      name: 'education',
      component: EducationPage
    },
    {
      path: '/productDetail/:id',
      name: 'product-detail',
      component: ProductDetail,
      props:true
    },
    {
      path: '/eduDetail/:id',
      name: 'edu-detail',
      component: VideoDetail,
      props:true
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/me-store',
      name: 'me-store',
      component: MeStorePage
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProduct
    },
  ]
})

export default router
