<template>
<div class="wrapper" ref="wrapper">
  <div>
    <div class="top">
      <div class="iconfont icon" @click="handleBackClick">&#xe605;</div>
      <div class="img-con">
        <img :src="detailInfo.headimg" alt="" class="img">
      </div>
    </div>
    <div class="content">
      <h2 class="title">{{detailInfo.top_title}}</h2>
      <div class="userinfo">
        <img :src="detailInfo.userimg" alt="" class="headimg">
        <div class="user-con">
          <div class="name">{{detailInfo.username}}</div>
          <div class="time">{{detailInfo.address}}</div>
        </div>
      </div>
      <div class="common">
        <div class="top-common">ABOUT ROOM</div>
        <div class="bottom-common">房屋信息</div>
      </div>
      <ul class="house">
        <li class="item-house">
          <span class="left">户型</span>
          <span>{{detailInfo.house_type}}</span>
        </li>
        <li class="item-house">
          <span class="left">使用面积</span>
          <span>{{detailInfo.usable_area}}平米</span>
        </li>
        <li class="item-house">
          <span class="left">房屋位置</span>
          <span>{{detailInfo.ratchadapisek}}</span>
        </li>
        <li class="item-house">
          <span class="left">装修花费</span>
          <span>{{detailInfo.decorate_cost}}万</span>
        </li>
      </ul>
      <div class="common-con">
        <div class="common">
          <div class="top-common">BLURB</div>
          <div class="bottom-common">编辑说</div>
        </div>
        <div class="foot-common">{{detailInfo.comment}}</div>
      </div>
      <div class="common-con">
        <div class="common">
          <div class="top-common">FOREWORD</div>
          <div class="bottom-common">说在前面</div>
        </div>
        <div class="foot-common">{{detailInfo.top_content}}</div>
      </div>
      <div class="common-con">
        <div class="common">
          <div class="top-common">ROOM SHOW</div>
          <div class="bottom-common">空间展示</div>
        </div>
      </div>
    </div>
    <div class="space-show">
      <div class="space-title">
        户型图
      </div>
      <div class="img-con">
        <img class="img" :src="detailInfo.floor_plan_img" />
      </div>
      <div class="content">
        {{detailInfo.house_type_content}}
      </div>
    </div>
    </div>
    <toast ref="toast"></toast>
    <div class="like" @click="handleLikeClick" v-show="show">{{collectVal}}</div>
</div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import toast from '../../components/ui/toast'

  export default {
    name: 'detail',
    components: {
      toast
    },
    data () {
      return {
        id: '',
        detailInfo: {},
        collectVal: '收藏',
        collectState: 0,
        show: true
      }
    },
    watch: {
      '$route.params.id' () {
        this.getDetailInfo(this.$route.params.id)
      }
    },
    methods: {
      getDetailInfo (id) {
        axios.get('/topic/excellent/' + id)
          .then(this.handleGetInfoSucc.bind(this))
      },
      handleGetInfoSucc (res) {
        res.data && (res = res.data)
        res.data[0] && (this.detailInfo = res.data[0])
        this.detailInfo && (this.collectState = this.detailInfo.collect_decide)
        if (this.collectState === 1) {
          this.collectVal = '取消收藏'
        } else if (this.collectState === 2) {
          this.collectVal = '收藏'
        }
      },
      handleBackClick () {
        this.$router.go(-1)
      },
      handleLikeClick () {
        if (this.collectState === 0) {
          this.$refs.toast.toastShow('请先登录')
        } else if (this.collectState === 1) {
          axios.get('/del/collects/' + this.$route.params.id)
            .then(this.handleDelCollectsSucc.bind(this))
            .catch(this.handleDelCollectsErr.bind(this))
        } else if (this.collectState === 2) {
          axios.get('/add/collects/' + this.$route.params.id)
            .then(this.handleCollectsSucc.bind(this))
            .catch(this.handleCollectsErr.bind(this))
        }
      },
      handleDelCollectsSucc (res) {
        res.data && (res = res.data)
        res.data && (res = res.data)
        res.state && (res = res.state)
        if (res === 1) {
          this.$refs.toast.toastShow('取消收藏成功')
          this.show = false
        } else {
          this.handleCollectsErr()
        }
      },
      handleDelCollectsErr () {
        this.$refs.toast.toastShow('取消收藏失败')
      },
      handleCollectsSucc (res) {
        res.data && (res = res.data)
        res.data && (res = res.data)
        res.state && (res = res.state)
        if (res === 1) {
          this.$refs.toast.toastShow('收藏成功')
          this.show = false
        } else {
          this.handleCollectsErr()
        }
      },
      handleCollectsErr () {
        this.$refs.toast.toastShow('收藏失败')
      }
    },
    mounted () {
      this.getDetailInfo(this.$route.params.id)
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    }
  }
</script>

<style scoped lang="stylus">
.wrapper
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  overflow: hidden
  .like
    position: absolute
    bottom: .5rem
    right: .2rem
    width: 1rem
    height: 1rem
    border-radius: .5rem
    text-align: center
    line-height: 1rem
    color: #fff
    font-size:  .24rem
    background: rgba(0, 0, 0, .5)
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
    width: 100%
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
