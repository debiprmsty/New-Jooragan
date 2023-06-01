import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import AboutPage from "../views/AboutPage.vue"
import StorePage from '../views/StorePage.vue'
import EducationPage from '../views/EducationPage.vue'



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
    }
  ]
})

export default router
