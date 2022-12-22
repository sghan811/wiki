import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/Index'
import Viewpost from '@/views/Post'
import Loginpage from '@/views/login'
import writepage from '@/views/write'

const routes = [
  {
    path: '/',
    component: PageHome
  },
  {
    path: '/detail',
    component: Viewpost
  },
  {
    path: '/login',
    component: Loginpage
  },
  {
    path: '/write',
    component: writepage
  }
  // },
  // {
  //   path: '/about',
  //   name: 'PageAbout',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/PageAbout.vue')
  // },
  // {
  //   path: '/board/list',
  //   name: 'BoardList',
  //   component: BoardList
  // },
  // {
  //   path: '/board/detail',
  //   name: 'BoardDetail',
  //   component: BoardDetail
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router