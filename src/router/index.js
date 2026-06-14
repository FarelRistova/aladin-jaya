import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StarterView from '@/views/StarterView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/starter',
    name: 'Starter',
    component: StarterView
  }
]

const router = createRouter({
  history: createWebHistory('/aladin-jaya/'),
  routes,
  // Scroll ke atas saat pindah halaman
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router