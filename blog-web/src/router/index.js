import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import IndexPage from "@/views/IndexPage.vue";
import TagsPage from "@/views/TagsPage.vue";
import CategoriesPage from "@/views/CategoriesPage.vue";
import FilePage from "@/views/FilePage.vue";

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
      },
      {
        path: '/tags',
        component: TagsPage
      },
      {
        path: '/categories',
        component: CategoriesPage
      },
      {
        path: '/file',
        component: FilePage
      }

    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router