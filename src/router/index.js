import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import Register from '@/pages/home/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
