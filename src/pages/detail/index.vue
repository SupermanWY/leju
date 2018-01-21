<template>
  <div>
    <div class="top">
      <div class="iconfont icon" @click="handleBackClick">&#xe605;</div>
      <div class="img-con">
        <img src="/static/img/banner.png" alt="" class="img">
      </div>
    </div>
    <div class="content">
      <h2 class="title">这是一个大标题</h2>
      <div class="userinfo">
        <img src="/static/img/banner.png" alt="" class="headimg">
        <div class="user-con">
          <div class="name">催化</div>
          <div class="time">123123123</div>
        </div>
      </div>
      <div class="common">
        <div class="top-common">ABOUT ROOM</div>
        <div class="bottom-common">房屋信息</div>
      </div>
      <ul class="house">
        <li class="item-house">
          <span class="left">户型</span>
          <span>两室</span>
        </li>
        <li class="item-house">
          <span class="left">使用面积</span>
          <span>使用面积</span>
        </li>
        <li class="item-house">
          <span class="left">房屋位置</span>
          <span>房屋位置</span>
        </li>
        <li class="item-house">
          <span class="left">装修花费</span>
          <span>两室</span>
        </li>
      </ul>
      <div class="common-con">
        <div class="common">
          <div class="top-common">BLURB</div>
          <div class="bottom-common">编辑说</div>
        </div>
        <div class="foot-common">大户型才可以做美食？不易掉</div>
      </div>
      <div class="common-con">
        <div class="common">
          <div class="top-common">FOREWORD</div>
          <div class="bottom-common">说在前面</div>
        </div>
        <div class="foot-common">大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉大户型才可以做美食？不易掉</div>
      </div>
      <div class="common-con">
        <div class="common">
          <div class="top-common">ROOM SHOW</div>
          <div class="bottom-common">空间展示</div>
        </div>
      </div>
      <div class="space-show">
        <div class="space-title">
          户型图
        </div>
        <div class="img-con">
          <img class="img" src="/static/img/banner.png" />
        </div>
        <div class="content">
          的防腐剂撒了快递费了看电视发生的房价来看世纪东方加了的解放路口世纪东方设计费洛杉矶的法律上看见的法律的思考几分家的福利卡接收到了史莱克的积分
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'detail',
    data () {
      return {
        id: '',
        detailInfo: {}
      }
    },
    watch: {
      '$route.params.id' () {
        this.getDetailInfo(this.$route.params.id)
      }
    },
    methods: {
      getDetailInfo (id) {
        axios.get('/static/detail/' + id)
          .then(this.handleGetInfoSucc.bind(this))
      },
      handleGetInfoSucc (res) {
        console.log(res)
        res.data && (res = res.data)
      },
      handleBackClick () {
        this.$router.go(-1)
      }
    },
    mounted () {
      this.getDetailInfo(this.$route.params.id)
    }
  }
</script>

<style scoped lang="stylus">
  .top
    position: relative
    .img-con
      height: 0
      padding-bottom: 44.53%
      overflow: hidden
      .img
        width: 100%
    .icon
      position: absolute
      top: .2rem
      left: .2rem
      width: .5rem
      height: .5rem
      text-align: center
      line-height: .5rem
      border-radius: .5rem
      color: #fff
      background: rgba(0, 0, 0, .6)
  .content
    margin: 0 .4rem
    .title
      height: 1rem
      line-height: 1rem
      font-size: .32rem
      color: #333
      font-weight: bold
    .userinfo
      height: .6rem
      margin-bottom: .6rem
      .headimg
        width: .6rem
        height: .6rem
        margin-right: .1rem
        border-radius: .6rem
        float: left
      .user-con
        float: left
        .name
          margin-bottom: .1rem
          font-size: .24rem
        .time
          font-size: .24rem
          color: #999
    .common
      .top-common
        font-size: .26rem
        color: #a0a0a0
      .bottom-common
        margin-top: .2rem
        font-size: .32rem
        color: #6dd5a7
        font-weight: bold
    .house
      .item-house
        padding-top: .34rem
        .left
          display: inline-block
          width: 1.7rem
          font-size: .28rem
          color: #999
        .right
          font-size: .28rem
          color: #333
    .common-con
      margin-top: 1rem
      .foot-common
        margin-top: .3rem
        line-height: .48rem
        font-size: .26rem
        color: #333
    .space-show
      .space-title
        margin: .6rem 0
        font-size: .28rem
        color: #666666
        font-weight: bold
        text-align: center
      .img-con
        .img
          width: 100%
      .content
        margin-top: .4rem
        font-size: .26rem
        color: #333
        line-height: .48rem
</style>
