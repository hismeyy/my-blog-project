import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import IndexPage from "@/views/IndexPage.vue";

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    redirect: '/index',
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    children:[
      {
        path: '/index',
        component: IndexPage
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router