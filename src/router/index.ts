import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuard } from './guard'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      redirect: '/home/index',
      meta: {
        title: 'welcome'
      }
    },
    {
      path: '/notFound',
      name: 'NotFound',
      component: () => import('@/views/notFound.vue'),
      meta: {
        title: 'NotFound'
      }
    }]
})
createRouterGuard(router)
export default router
