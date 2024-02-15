import { createRouter, createWebHistory } from 'vue-router'
import FormularioView from '@/views/FormularioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'formulario',
      component: FormularioView
    },
    {
      path: '/lista',
      name: 'lista',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AlumnosView.vue')
    }
  ]
})

export default router
