import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'
import AboutPage from '@/pages/About.vue'
import ErrorPage from '@/pages/Error.vue'

const routes = [
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
  // будет отобраться страница Error
  // по иным маршрутам, кроме существующих
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
