<template>
<div class="wrapper" ref="wrapper">
  <div class="waterfull-container">
    <div class="waterfull-left waterfull">
      <div class="waterfull-content" ref="waterfullLeft">
        <div class="waterfull-item" v-for="item in waterfullLeft" :key="item.id">
          <img :src="item.imgUrl" class="waterfull-img" @load="handleLeftImgOnload">
          <div class="desc">{{item.describe}}</div>
          <div class="userinfo">
            <div class="left-userinfo">
              <img v-lazy="item.headImg" class="headImg">
              <span class="username">{{item.username}}</span>
            </div>
            <div class="right-userinfo">
              <span 
                class="iconfont icon" 
                @click="handleIconClick">&#xe640;</span>
              <span class="num">{{item.num}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="waterfull-right waterfull">
      <div class="waterfull-content" ref="waterfullRight">
        <div class="waterfull-item" v-for="item in waterfullRight" :key="item.id">
          <img :src="item.imgUrl" class="waterfull-img" @load="handleRightImgOnload">
          <div class="desc">{{item.describe}}</div>
          <div class="userinfo">
            <div class="left-userinfo">
              <img v-lazy="item.headImg" class="headImg">
              <span class="username">{{item.username}}</span>
            </div>
            <div class="right-userinfo">
              <span 
                class="iconfont icon" 
                @click="handleIconClick">&#xe640;</span>
              <span class="num">{{item.num}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'waterfull',
    props: ['waterfullInfo'],
    data () {
      return {
        waterfullLeft: [],
        waterfullRight: [],
        waterfullLeftHei: 0,
        waterfullRightHei: 0,
        index: 0,
        isLike: false
      }
    },
    watch: {
      waterfullInfo () {
        this.waterfullLeft = []
        this.waterfullRight = []
        this.index = 0
        this.waterfullLeft.push(this.waterfullInfo[0])
        this.waterfullRight.push(this.waterfullInfo[1])
        this.index = 2
      }
    },
    methods: {
      handleLeftImgOnload () {
        this.waterfullLeftHei = this.$refs.waterfullLeft.offsetHeight
        this.pushWaterfullArr()
      },
      handleRightImgOnload () {
        this.waterfullRightHei = this.$refs.waterfullRight.offsetHeight
        this.pushWaterfullArr()
      },
      pushWaterfullArr () {
        if (this.index >= this.waterfullInfo.length || this.waterfullLeft.length === 0 || this.waterfullRight.length === 0) {
          return
        }
        if (this.waterfullLeftHei <= this.waterfullRightHei) {
          this.waterfullLeft.push(this.waterfullInfo[this.index++])
        } else {
          this.waterfullRight.push(this.waterfullInfo[this.index++])
        }
      },
      handleIconClick (e) {
        if (this.isLike) {
          e.target.style.color = '#ccc'
          e.target.nextElementSibling.innerHTML--
        } else {
          e.target.style.color = '#32b379'
          e.target.nextElementSibling.innerHTML++
        }
        this.isLike = !this.isLike
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style scoped lang="stylus">
.wrapper
  position: absolute
  top: 1.87rem
  rigth: 0
  bottom: .98rem
  left: 0
  overflow: hidden
  .waterfull-container
    display: flex
    margin: .2rem .2rem 0;
    .waterfull-left
      margin-right: .2rem
    .waterfull
      float: left
      flex: 1
    .waterfull-item
      margin-bottom: .4rem
      .waterfull-img
        width: 100%
      .desc
        line-height: .26rem
        margin: .2rem
        font-size: .24rem
        color: #666
      .userinfo
        display: flex
        margin: 0 .2rem
        justify-content: space-between
        .headImg
          width: .6rem
          height: .6rem
          border-radius: 100%
        .right-userinfo
          display: flex
          align-items: center
          color: #ccc
          .icon
            padding-right: .1rem
</style>