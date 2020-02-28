import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=>import('../views/home/home.vue')
const category = ()=>import('../views/category/category.vue')
const car = ()=>import('../views/car/car.vue')
const profile = ()=>import('../views/profile/profile.vue')
const detail = ()=>import('../views/detail/detail.vue')
Vue.use(VueRouter)

// const abount = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
  {
    path:'',
    redirect:"/home"
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/car',
    name: 'car',
    component: car
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detail,
    // props:(route) => ({ query: route.query.q }) 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
