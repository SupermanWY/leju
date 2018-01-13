<template>
  <div class="container">
    <div class="header">
      <img :src="userInfo.icon||'/static/img/userbag.jpg'" class="img-header">
      {{userInfo.username || '用户名'}}
    </div>
    <ul class="list" @click="handleListClick">
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe625;</span>
        个人主页
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe7a8;</span>
        我的消息
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe663;</span>
        收藏
      </li>
      <li class="bagcolor"></li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe608;</span>
        历史
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe607;</span>
        设置
      </li>
    </ul>
    <foot></foot>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
  import foot from '../../components/common/foot'
  import toast from '../../components/ui/toast'

  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'myindex',
    components: {
      foot,
      toast
    },
    data () {
      return {
        isLogin: false,
        username: '用户名'
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      ...mapMutations(['changeUserInfo']),
      handleListClick () {
        if (!this.isLogin) {
          this.$refs.toast.toastShow('请先登录')
        }
      }
    },
    mounted () {
      if (this.userInfo.state === 2) {
        this.isLogin = true
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
        margin-left: .2rem
        line-height: .89rem
        font-size: .26rem
        .icon
          padding-right: .4rem
          color: #999
      .bagcolor
        height: .2rem
        background: #f5f5f5
</style>
