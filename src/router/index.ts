import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from "@/views/home.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/input',
    name: 'input',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "input" */ "@/views/input.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router