import { createRouter, createWebHistory } from 'vue-router'
import logIn from 'views/logIn/logIn.vue'
import home from 'views/home/home.vue'

const routes = [
  {
    path: '/',
    name: 'logIn',
    component: logIn
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
