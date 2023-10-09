import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'
import ContactsPage from '@/pages/Contacts.vue'
import Item from '@/pages/ItemAlias.vue'
import NotFoundPage from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage
  },
  {
    path: '/items/:alias',
    name: 'item',
    component: Item
  },
  // будет отобраться страница по иным маршрутам, кроме существующих
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
