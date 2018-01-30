<template>
  <div class="container">
    <div class="header">
      <img :src="userInfo.icon||'/static/img/userbag.jpg'" class="img-header">
      {{userInfo.username || '用户名'}}
    </div>
    <ul class="list" @click="handleListClick">
      <router-link class="item-list border-top" tag="li" to="/personalpage">
        <span class="iconfont icon">&#xe625;</span>
        个人主页
        <span class="iconfont right-icon">&#xe65e;</span>
      </router-link>
     <router-link class="item-list border-top" tag="li" to="/mes">
        <span class="iconfont icon">&#xe7a8;</span>
        我的消息
        <span class="iconfont right-icon">&#xe65e;</span>
      </router-link>
      <router-link class="item-list border-top" tag="li" to="/like">
        <span class="iconfont icon">&#xe663;</span>
        我的收藏
        <span class="iconfont right-icon">&#xe65e;</span>
      </router-link>
      <li class="bagcolor"></li>
      <router-link class="item-list border-top" tag="li" to="/pubtopic">
        <span class="iconfont icon">&#xe608;</span>
        发布话题
        <span class="iconfont right-icon">&#xe65e;</span>
      </router-link>
      <router-link class="item-list border-top" tag="li" to="/publish">
        <span class="iconfont icon">&#xe608;</span>
        写日记
        <span class="iconfont right-icon">&#xe65e;</span>
      </router-link>
      <router-link class="item-list border-top" tag="li" to="/setting">
        <span class="iconfont icon">&#xe607;</span>
        设置
        <span class="iconfont right-icon">&#xe65e;</span>
      </router-link>
    </ul>
    <foot></foot>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
  import foot from '../../components/common/foot'
  import toast from '../../components/ui/toast'

  export default {
    name: 'myindex',
    components: {
      foot,
      toast
    },
    data () {
      return {
        isLogin: false,
        userInfo: ''
      }
    },
    methods: {
      handleListClick () {
        if (!this.isLogin) {
          this.$refs.toast.toastShow('请先登录')
        }
      }
    },
    mounted () {
      try {
        this.userInfo = JSON.parse(window.localStorage.userInfo)
      } catch (e) {}
      if (this.userInfo) {
        this.isLogin = true
      } else {
        this.$refs.toast.toastShow('请先登录')
        setTimeout(() => {
          this.$router.replace('/login')
        }, 2000)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container
    position: absolute
    top: 0
    right: 0
    bottom: .98rem
    left: 0
    .header
      margin-left: .2rem
      line-height: 2.24rem
      font-size: .32rem
      color: #666
      .img-header
        width: 1rem
        height: 1rem
        margin-right: .2rem
        border-radius: 100%
    .list
      .item-list
        margin: 0 .2rem
        line-height: .89rem
        font-size: .26rem
        .icon
          padding-right: .4rem
          color: #999
        .right-icon
          float: right
          color: #999
      .bagcolor
        height: .2rem
        background: #f5f5f5
</style>
