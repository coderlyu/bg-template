import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'homePage',
        component: () => import('@/views/home'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/profile',
    redirect: '/profile/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'profile',
        component: () => import('@/views/profile'),
        meta: { title: '我的主页' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { title: '登录注册' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
