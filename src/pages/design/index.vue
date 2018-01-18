<template>
  <div>
    <div class="header border-bottom">
      <router-link class="iconfont back" to="/">&#xe605;</router-link>
      找设计
    </div>
    <div class="list">
      <div class="item" v-for="item in listInfo" :key="item.id">
        <div class="img-con">
          <img :src="item.imgUrl" class="img">
        </div>
        <div class="company">
          <div class="title">{{item.title}}</div>
          <span class="name">{{item.company}}</span>
          <span class="city">{{item.address}}</span>
          <img :src="item.logo" class="headImg">
        </div>
      </div> 
    </div> 
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'design',
    data () {
      return {
        listInfo: []
      }
    },
    methods: {
      handleGetDataSucc (res) {
        console.log(res)
        res.data && (res = res.data)
        this.listInfo = res.data.findDesign
      },
      handleGetDataErr () {
        console.log('返回信息错误')
      }
    },
    mounted () {
      axios.get('/design/')
           .then(this.handleGetDataSucc.bind(this))
           .catch(this.handleGetDataErr)
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
    margin: .2rem
    .item
      margin-bottom: .5rem
      .img-con
        height: 0
        padding-bottom: 50%
        overflow: hidden
        .img
          width: 100%
      .company
        position: relative
        font-size: .24rem
        color: #999
        .title
          line-height: .8rem
          font-size: .3rem
          color: #333
        .name
          padding-right: .2rem
        .headImg
          position: absolute
          width: .8rem
          height: .8rem
          top: -50%
          right: .4rem
          border-radius:  .8rem
</style>
