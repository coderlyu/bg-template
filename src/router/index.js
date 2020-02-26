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
    path: '/data',
    redirect: '/data/students',
    component: Layout,
    children: [
      {
        path: 'students',
        name: 'studentsPage',
        component: () => import('@/views/data/students.vue'),
        meta: { title: '学生列表' }
      },
      {
        path: 'teachers',
        name: 'teachersPage',
        component: () => import('@/views/data/teachers.vue'),
        meta: { title: '教师列表' }
      },
      {
        path: 'categories',
        name: 'categoriesPage',
        component: () => import('@/views/data/categories.vue'),
        meta: { title: '类别列表' }
      },
      {
        path: 'data',
        name: 'dataPage',
        component: () => import('@/views/data/data.vue'),
        meta: { title: '图表' }
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
