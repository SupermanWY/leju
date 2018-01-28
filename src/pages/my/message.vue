<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/my">&#xe605;</router-link>
      消息
    </div>
    <div class="list" ref="list">
      <div>
        <div class="item" v-for="item in mesList" :key="item.id">
          <div class="title">{{item.title}}</div>
          <div class="img-con">
            <img :src="item.imgurl" class="img" />
          </div>
          <div class="bottom">
            <div class="time">{{item.time}}</div>
            <div class="detail">查看详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'

  export default {
    name: 'message',
    data () {
      return {
        mesList: []
      }
    },
    methods: {
      getData () {
        axios.get('/information/')
          .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        res.data && (res = res.data)
        res.data && (this.mesList = res.data)
      }
    },
    watch: {
      mesList () {
        this.$nextTick(() => {
          if (this.BScroll) {
            this.BScroll.refresh()
          }
        })
      }
    },
    mounted () {
      this.BScroll = new BScroll(this.$refs.list)
      this.getData()
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
    position: absolute
    top: .86rem
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    .item
      padding: .2rem
      .title
        height: .96rem
        line-height: .96rem
        font-size: .26rem
        color: #333
      .img-con
        height: 0
        padding-bottom: 50%
        overflow: hidden
        .img
          width: 100%
      .bottom
        margin: .2rem 0
        .time
          font-size: .26rem
          color: #c9c9c9
        .detail
          float: right
          font-size: .26rem
          color: #666
</style>
