import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('@/pages/home/index')
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/pages/guide')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/login/register')
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: () => import('@/pages/login/forgotpassword')
    },
    {
      path: '/inspiration',
      name: 'inspiration',
      component: () => import('@/pages/inspiration/index')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/pages/my')
    },
    {
      path: '/topic',
      name: 'topic',
      component: () => import('@/pages/topic')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/pages/search')
    },
    {
      path: '/diary',
      name: 'diary',
      component: () => import('@/pages/diary')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('@/pages/questions')
    },
    {
      path: '/decorate',
      name: 'decorate',
      component: () => import('@/pages/decorate')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('@/pages/design')
    },
    {
      path: '/personalpage',
      name: 'personalpage',
      component: () => import('@/pages/my/personalpage')
    },
    {
      path: '/topicsubpage/:id',
      name: 'topicsubpage',
      component: () => import('@/pages/topic/topicsubpage')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/pages/my/setting')
    },
    {
      path: '/mes',
      name: 'mes',
      component: () => import('@/pages/my/message')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/pages/detail')
    },
    {
      path: '/discussPage/:id',
      name: 'discussPage',
      component: () => import('@/pages/topic/discussPage')
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import('@/pages/my/publish')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/pages/my/chat')
    },
    {
      path: '/pubtopic',
      name: 'pubtopic',
      component: () => import('@/pages/my/pubtopic')
    },
    {
      path: '/like',
      name: 'like',
      component: () => import('@/pages/my/like')
    }
  ]
})
