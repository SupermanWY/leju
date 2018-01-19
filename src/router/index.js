import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import Login from '@/pages/login/login'
import Register from '@/pages/login/register'
import ForgotPassword from '@/pages/login/forgotpassword'
import Inspiration from '@/pages/inspiration/index'
import My from '@/pages/my'
import TopicSubpage from '@/pages/topic/topicsubpage'
import Topic from '@/pages/topic/index'
import Search from '@/pages/search/index'
import Diary from '@/pages/diary/index'
import Questions from '@/pages/questions/index'
import Decorate from '@/pages/decorate/index'
import Design from '@/pages/design/index'

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
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword
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
    },
    {
      path: '/decorate',
      name: 'decorate',
      component: Decorate
    },
    {
      path: '/design',
      name: 'design',
      component: Design
    },
    {
      path: '/topicsubpage/:id',
      name: 'topicsubpage',
      component: TopicSubpage
    }
  ]
})
