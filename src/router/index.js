import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Manage from '@/views/Manage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'about',
    component: AboutView
  },
  {
    path: '/manage-music',
    name: 'manage',
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log('Manage Router guard')
      next()
    }
  },
  {
    path: '/manage',
    redirect: { name: 'manage' }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  console.log('Global Guard')

  next()
})

export default router
