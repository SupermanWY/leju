<template>
  <div class="list-container">
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/my">&#xe605;</router-link>
      收藏
    </div>
    <div class="list">
      <router-link :to="'/detail/'+item.id" tag="div" class="item-list" v-for="item in listInfo" :key="item.id">
        <div class="img-con">
          <img v-lazy="item.top_img" class="img">
        </div>
        <h3 class="item-title">{{item.top_title}}</h3>
        <div class="info">
          <div class="userinfo">
            <img :src="item.imgurl" alt="" class="img-user">
            <span class="username">{{item.username}}</span>
          </div>
          <div class="houseinfo">
            <span class="house">{{item.house_type}}</span>
            <span>{{item.usable_area}}平米</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'like',
    data () {
      return {
        listInfo: []
      }
    },
    methods: {
      getData () {
        axios.get('/my/collects/')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res.data && (res = res.data)
        if (res.ret) {
          res.data && (this.listInfo = res.data)
        } else {
          console.log('请求失败')
        }
      },
      handleGetDataErr () {
        console.log('请求失败')
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>

<style scoped lang="stylus">
  .list-container
    background: #fff;
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
      padding: 0 .2rem;
      overflow: hidden;
      .img-con
        height: 0
        padding-bottom: 50.28%
        overflow: hidden
        background: cyan
        .img
          width: 100%;
      .item-title
        margin-top: .3rem;
        font-size: .28rem;
        color: #333;
      .info
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1rem;
        .username
          font-size: .26rem;
          color: #333;
        .img-user
          height: .6rem
          width: .6rem
          border-radius: .6rem
        .houseinfo
          font-size: .26rem;
          color: #adadad;
          .house
            padding-right: .2rem;
</style>
