<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/my">&#xe605;</router-link>
      设置
    </div>
    <ul class="list">
      <router-link class="item item-first border-bottom" to="/personalpage" tag="li">
        编辑个人资料
        <span class="iconfont right-icon">&#xe65e;</span>
      </router-link>
      <li class="bagcolor"></li>
      <li class="item item-first border-bottom">
        账户绑定
        <span class="iconfont right-icon">&#xe65e;</span>
      </li>
      <li class="item item-first border-bottom">
        消息设置
        <span class="iconfont right-icon">&#xe65e;</span>
      </li>
      <li class="bagcolor"></li>
      <li class="item item-first border-bottom">
        清除缓存
        <span class="iconfont right-icon">&#xe65e;</span>
      </li>
      <li class="item item-first border-bottom">
        关于乐居
        <span class="iconfont right-icon">&#xe65e;</span>
      </li>
      <li class="btn-item" @click="handleLogout">退出登录</li>
    </ul>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
  import toast from '../../components/ui/toast'
  import axios from 'axios'

  export default {
    name: 'setting',
    components: {
      toast
    },
    methods: {
      handleLogout () {
        axios.get('/user/logout/').then(this.handleLogoutSucc.bind(this))
      },
      handleLogoutSucc (res) {
        if (res.data.data.start === 1) {
          try {
            window.localStorage.userInfo = JSON.stringify({})
            this.$refs.toast.toastShow('已退出登录')
            this.$router.push('/login')
          } catch (e) { console.log(e) }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header
    heigt: .86rem
    line-height: .86rem
    text-align: center
    font-size: .32rem
    color: #333
    .back
      position: absolute
      left: .2rem
      font-size: .4rem
      color: #7a7a7a
  .list
    .bagcolor
      height: .2rem
      background: #f5f5f5
    .item
      height: 1rem
      line-height: 1rem
      margin: 0 .2rem
      .text-item
        float: right
        height: 1rem
        line-height: 1rem
        font-size: .26rem
        color: #999
        text-align: right
      .icon
        font-size: .28rem
        color: #999
      .right-icon
        float: right
    .btn-item
      height: .9rem
      margin: .2rem
      background: #6dd5a7
      line-height: .9rem
      text-align: center
      font-size: .28rem
      color: #fff
      border-radius: .2rem
</style>
