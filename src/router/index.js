import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index'
import Login from '@/pages/login/login'
import Register from '@/pages/login/register'
import Inspiration from '@/pages/inspiration/index'
import My from '@/pages/my'
import TopicSubpage from '@/pages/topic/topicsubpage'
import Topic from '@/pages/topic/index'
import Search from '@/pages/search/index'
import Diary from '@/pages/diary/index'
import Questions from '@/pages/questions/index'
import Decorate from '@/pages/decorate/index'
import Design from '@/pages/design/index'
import Personalpage from '@/pages/my/personalpage'
import Setting from '@/pages/my/setting'
import FindPwd from '@/pages/login/findPwd'
import Guide from '@/pages/guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: () => {
        try {
          var userInfo = JSON.parse(window.localStorage.userInfo)
        } catch (e) {}
        if (!userInfo || userInfo === {}) {
          return '/guide'
        } else {
          return '/index'
        }
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
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
      path: '/personalpage',
      name: 'personalpage',
      component: Personalpage
    },
    {
      path: '/topicsubpage/:id',
      name: 'topicsubpage',
      component: TopicSubpage
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/findpwd',
      name: 'findpwd',
      component: FindPwd
    }
  ]
})
