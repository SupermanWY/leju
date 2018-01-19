<template>
  <div class="questions">
    <div class="title border-bottom">
      <router-link to="/index" tag="span" class="iconfont icon">&#xe6b7;</router-link>提问题
    </div>
    <List :questions="questionsInfo" v-if="isLogin"></List>
    <div class="login-first" v-if="!isLogin">请先登录</div>
  </div>
</template>
<script>
  import axios from 'axios'
  import List from './list'

  export default {
    name: 'queations',

    data () {
      return {
        questionsInfo: [],
        isLogin: false,
        userInfo: ''
      }
    },

    components: {
      List
    },

    created () {
      try {
        this.userInfo = JSON.parse(window.localStorage.userInfo)
      } catch (e) {}
      if (this.userInfo.state) {
        this.isLogin = true
        this.getQuestionsData()
      }
    },

    methods: {
      getQuestionsData () {
        axios.get('/problem/')
        .then(this.handleGetQuestionsSucc.bind(this))
        .catch(this.handleGetQuestionsErr.bind(this))
      },
      handleGetQuestionsSucc (res) {
        this.questionsInfo = res.data.data.question
      },
      handleGetQuestionsErr () {
        console.log('获取questions失败')
      }
    }

  }
</script>
<style scoped lang="stylus">
  .login-first
    font-size: .5rem
    text-align: center
    margin-top: 3.5rem
  .questions
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    flex-direction: column


  @import '../../assets/styles/common/header.styl'


</style>