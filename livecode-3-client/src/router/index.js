import Vue from 'vue'
import VueRouter from 'vue-router'
import Animals from '../views/Animals.vue'
// import Favorites from '../views/Favorites.vue'
// import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Animals',
    component: Animals
  }
  // {
  //   path: '/favorite',
  //   name: Favorites,
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/login',
  //   name: Login
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
