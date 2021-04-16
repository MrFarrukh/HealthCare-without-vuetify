import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/appoint',
    name: 'Appoint',
    component: () => import('../views/Appoint.vue')
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: () => import('../views/Doctors.vue')
  },
  {
    path: '/depart',
    name: 'Depart',
    component: () => import('../views/Depart.vue')
  },
  {
    path: '/bemors',
    name: 'Bemors',
    component: () => import('../views/Bemors.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
]

const router = new VueRouter({
  
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
