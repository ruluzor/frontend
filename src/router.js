import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './views/Main.vue'
import Login from './views/Login.vue'
import Dashboard from '@/views/content/Dashboard.vue';
import Customers from '@/views/content/Customers.vue';
import ConstructionInfoReader from '@/views/content/ConstructionInfoReader.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'main',
    component: Main,
    children: [
        {         
            path: 'dashboard',
            component: Dashboard
        },
        {         
            path: 'customers',
            component: Customers
        },
        {         
            path: 'constructionInfoReader',
            component: ConstructionInfoReader
        }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
