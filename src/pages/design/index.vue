<template>
  <div>
    <div class="header border-bottom">
      <router-link class="iconfont back" to="/index">&#xe605;</router-link>
      找设计
    </div>
    <div class="wrapper" ref="wrapper"> 
      <div class="list">
        <div class="item" v-for="item in listInfo" :key="item.id">
          <div class="img-con">
            <img v-lazy="item.imgUrl" class="img">
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
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'design',
    data () {
      return {
        listInfo: []
      }
    },
    watch: {
      listInfo () {
        if (this.BScroll) {
          this.$nextTick(() => {
            this.BScroll.refresh()
          })
        }
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
  .list
    padding: .2rem
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
