<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/my">&#xe605;</router-link>
      编辑个人主页
    </div>
    <ul class="list">
      <li class="item item-first border-bottom" style="height: 1.2rem">
        <span class="icon iconfont">&#xe765;</span>
        头像
        <img :src="userInfo.icon" class="headImg">
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe63f;</span>
        昵称
        <input type="text" value="方法" class="text-item" />
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe7e6;</span>
        性别
        <input type="text" value="方法" class="text-item" />
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe60f;</span>
        位置
        <input type="text" value="方法" class="text-item" />
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe618;</span>
        生日
        <input type="text" value="方法" class="text-item" />
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'personalpage',
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      ...mapMutations(['changeUserInfo'])
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
    margin: 0 .2rem
    .item-first
      line-height: 1.2rem
      .headImg
        width: 1rem
        height: 1rem
        float: right
        margin-top: .1rem
        border-radius: 1rem
    .item
      height: 1rem
      line-height: 1rem
      .text-item
        float: right
        height: 1rem
        line-height: 1rem
        font-size: .26rem
        color: #999
        text-align: right
      .icon
        font-size: .28rem
        color: #999
</style>
