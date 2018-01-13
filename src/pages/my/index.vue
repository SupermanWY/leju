<template>
  <div class="container">
    <div class="header">
      <img src="/static/img/ins1.png" class="img-header">
      呦呦
    </div>
    <ul class="list">
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe625;</span>
        个人主页
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe7a8;</span>
        我的消息
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe663;</span>
        收藏
      </li>
      <li class="bagcolor"></li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe608;</span>
        历史
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe607;</span>
        设置
      </li>
    </ul>
    <foot></foot>
  </div>
</template>

<script>
  import foot from '../../components/common/foot'

  export default {
    name: 'index',
    components: {
      foot
    }
  }
</script>

<style scoped lang="stylus">
  .container
    position: absolute
    top: 0
    right: 0
    bottom: .98rem
    left: 0
    .header
      margin-left: .2rem
      line-height: 2.24rem
      font-size: .32rem
      color: #666
      .img-header
        width: 1rem
        height: 1rem
        margin-right: .2rem
        border-radius: 100%
    .list
      .item-list
        margin-left: .2rem
        line-height: .89rem
        font-size: .26rem
        .icon
          padding-right: .4rem
          color: #999
      .bagcolor
        height: .2rem
        background: #f5f5f5
</style>
