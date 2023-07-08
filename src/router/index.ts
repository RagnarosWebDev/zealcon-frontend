import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import NewsPage from '../pages/NewsPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ContactsPage from '../pages/ContactsPage.vue'
import ServicePage from '../pages/ServicePage.vue'
import AddNews from '../pages/AddNews.vue'
import AddService from '../pages/AddService.vue'
import AdminPage from '../pages/AdminPage.vue'
import ListForms from '../pages/ListForms.vue'
import EditLangPage from '../pages/EditLangPage.vue'
import EditService from '../pages/EditService.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
  },
  {
    path: '/service',
    name: 'service',
    component: ServicePage,
  },
  {
    path: '/addNews',
    name: 'addNews',
    component: AddNews,
  },
  {
    path: '/addService',
    name: 'addService',
    component: AddService,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
  },
  {
    path: '/list',
    name: 'list',
    component: ListForms,
  },
  {
    path: '/langs',
    name: 'langs',
    component: EditLangPage,
  },
  {
    path: '/editService',
    name: 'editService',
    component: EditService,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})
