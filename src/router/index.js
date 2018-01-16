import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import Login from '@/pages/login/login'
import Register from '@/pages/login/register'
import Inspiration from '@/pages/inspiration/index'
import My from '@/pages/my'
import Topic from '@/pages/topic/index'
import Search from '@/pages/search/index'
import Diary from '@/pages/diary/index'
import Questions from '@/pages/questions/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/inspiration',
      name: 'inspiration',
      component: Inspiration
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/diary',
      name: 'diary',
      component: Diary
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions
    }
  ]
})
