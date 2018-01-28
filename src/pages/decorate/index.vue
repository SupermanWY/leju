<template>
  <div>
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/index">&#xe605;</router-link>
      学装修
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="nav">
          <h2 class="title">装修流程</h2>
          <div class="item-con">
            <div class="item">
              <img src="/static/img/sheji.png" class="img-item">
              <div class="text-item">设计</div>
            </div>
            <div class="item">
              <img src="/static/img/yusuan.png" class="img-item">
              <div class="text-item">预算</div>
            </div>
            <div class="item">
              <img src="/static/img/gaizao.png" class="img-item">
              <div class="text-item">改造</div>
            </div>
            <div class="item">
              <img src="/static/img/shuidian.png" class="img-item">
              <div class="text-item">水电</div>
            </div>
            <div class="item">
              <img src="/static/img/mugong.png" class="img-item">
              <div class="text-item">木工</div>
            </div>
            <div class="item">
              <img src="/static/img/yougong.png" class="img-item">
              <div class="text-item">油工</div>
            </div>
            <div class="item">
              <img src="/static/img/anzhuang.png" class="img-item">
              <div class="text-item">安装</div>
            </div>
            <div class="item">
              <img src="/static/img/qingjie.png" class="img-item">
              <div class="text-item">清洁</div>
            </div>
            <div class="item">
              <img src="/static/img/ruanzhuang.png" class="img-item">
              <div class="text-item">软装</div>
            </div>
          </div>
        </div>
        <div class="list">
          <h2 class="title-list">住友经验</h2>
          <ul class="list-con">
            <li class="item" v-for="item in decorateInfo" :key="item.id">
              <div class="img-con">
                <img v-lazy="item.imgUrl" class="img-item">
              </div>
              <div class="title-item">{{item.desc}}</div>
              <div class="userinfo">
                <img :src="item.headImg" class="headimg">
                <span class="username">{{item.username}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'decorate-index',
    data () {
      return {
        decorateInfo: []
      }
    },
    methods: {
      handleGetDataSucc (res) {
        res.data && (res = res.data)
        this.decorateInfo = res.data.decorate
      },
      handleGetDataErr () {
        console.log('返回信息错误')
      }
    },
    watch: {
      decorateInfo () {
        if (this.BScroll) {
          this.$nextTick(() => {
            this.BScroll.refresh()
          })
        }
      }
    },
    mounted () {
      axios.get('/decorate/')
           .then(this.handleGetDataSucc.bind(this))
           .catch(this.handleGetDataErr)
      this.scroll = new BScroll(this.$refs.wrapper)
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
.wrapper
  position: absolute
  top: .86rem
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
  .nav
    .title
      line-height: 1.08rem
      font-size: .28rem
      text-align: center
      color: #333333
    .item
      display: inline-block
      width: 15.7%
      height: .94rem
      padding-top: .2rem
      text-align: center
      .img-item
        width: .4rem
        height: .4rem
      .text-item
        font-size: .24rem
        margin-top: .09rem
        color: #666
  .list
    margin: .2rem
    .title-list
      line-height: 1.08rem
      font-size: .28rem
      text-align: center
      color: #333333
    .item
      padding-bottom: .4rem
      .img-con
        height: 0
        overflow: hidden
        padding-bottom: 50%
        .img-item
          width: 100%
      .title-item
        height: .69rem
        line-height: .69rem
        font-size: .28rem
        color: #333
      .userinfo
        .headimg
          width: .6rem
          height: .6rem
          border-radius: .6rem
        .username
          font-size: .24rem
          color: #333
</style>
