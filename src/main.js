// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VievSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import Fastclick from 'fastclick'
import store from './store/index.js'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
import '@/assets/styles/base/reset.css'
import '@/assets/styles/base/border.css'
import '@/assets/styles/base/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)
Vue.use(ElementUI)
Vue.use(VievSwiper)
Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/static/img/bag.jpg',
  attempt: 1
})
Fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
