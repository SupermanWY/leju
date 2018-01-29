<template>
  <div class="diary">
    <div class="title border-bottom">
      <router-link to="/index" tag="span" class="iconfont icon" >&#xe6b7;</router-link>看日记
    </div>
    <div class="wrapper" ref="wrapper" v-show="isLogin">
      <ul class="main">
        <li class="diray-list" v-for="item in diaryInfo">
          <div class="img-container">
            <img class="diary-big-img" v-lazy="item.imgurl">
            <img class="diary-small-img" v-lazy="item.user_img">
          </div>
          <p class="diray-title">{{item.title}}</p>
          <p class="diary-desc">{{item.house_money}}万/{{item.usable_area}}㎡/{{item.house_type}}/{{item.house_style}}</p>
        </li>
      </ul>
    </div>
    <div class="login-first" v-if="!isLogin" @click="handleLoginClick">点击登录</div>
  </div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'diary',

    data () {
      return {
        diaryInfo: [],
        isLogin: false,
        userInfo: ''
      }
    },

    methods: {
      getDiaryInfo () {
        axios.get('/diary/')
          .then(this.handleGetDiaryInfoSucc.bind(this))
          .catch(this.handleGetDiaryInfoErr.bind(this))
      },
      handleGetDiaryInfoSucc (res) {
        this.diaryInfo = res.data.data
      },
      handleGetDiaryInfoErr () {
        console.log('获取diary失败')
      },
      careteScroller () {
        this.scroller = new BScroll(this.$refs.wrapper)
      },
      handleLoginClick () {
        this.$router.push('/login')
      }
    },

    watch: {
      diaryInfo () {
        this.scroller.refresh()
      }
    },

    mounted () {
      try {
        this.userInfo = JSON.parse(window.localStorage.userInfo)
      } catch (e) {}
      if (this.userInfo.state) {
        this.isLogin = true
        this.getDiaryInfo()
        this.careteScroller()
      }
    }

  }
</script>
<style scoped lang="stylus">
  @import '../../assets/styles/common/header.styl';
  .login-first
    font-size: .5rem
    text-align: center
    margin-top: 3.5rem
  .diary
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    flex-direction: column
    font-size: .32rem
    .wrapper
      flex: 1
      overflow: hidden
      margin-top: .2rem
      .main
        .diray-list
          padding: 0 .2rem .4rem 
          .img-container
            position: relative
            height: 0
            padding-bottom: 55.42%
            overflow: hidden
            .diary-big-img
              width: 100%
            .diary-small-img
              position: absolute
              right: .2rem
              bottom: -.34rem
              width: .8rem
              height: .8rem
          .diray-title
            margin: .19rem 0 .29rem 0 
            font-size: .3rem
            color: #333
          .diary-desc
            font-size: .26rem
            color: #999
              
</style>