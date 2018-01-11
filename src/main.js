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

Vue.use(VievSwiper)
Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
  loading: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
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
