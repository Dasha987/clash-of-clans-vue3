import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'
import ContactPage from '@/pages/Contact.vue'
import Item from '@/pages/ItemAlias.vue'
import ErrorPage from '@/pages/Error.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/items/:alias',
    name: 'item',
    component: Item
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
