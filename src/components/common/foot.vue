<template>
  <div class="footer border-top">
    <router-link class="nav" tag="div" to="/">
      <div class="icon-nav icon-nav-active iconfont">&#xe603;</div>
      <div class="text-nav">首页</div>
    </router-link>
    <router-link class="nav" tag="div" to="/inspiration">
      <div class="icon-nav iconfont">&#xe617;</div>
      <div class="text-nav">灵感</div>
    </router-link>
    <div class="nav">
      <div class="icon-nav iconfont">&#xe602;</div>
      <div class="text-nav">话题</div>
    </div>
    <div class="nav">
      <div class="icon-nav iconfont">&#xe60d;</div>
      <div class="text-nav">我的</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foot'
  }
</script>

<style scoped lang="stylus">
  .footer
    position: fixed;
    display: flex;
    width: 100%;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    height: .98rem;
    background: #fff;
    .nav
      text-align: center;
      .icon-nav
        padding-bottom: .15rem;
        font-size: .4rem;
      .icon-nav-active
        color: #32b379;
      .text-nav
        font-size: .2rem;
        color: #333;
</style>
