<template>
  <div class="footer border-top">
    <router-link class="nav" tag="div" to="/index">
      <div class="icon-nav iconfont">&#xe653;</div>
      <div class="text-nav">首页</div>
    </router-link>
    <router-link class="nav" tag="div" to="/inspiration">
      <div class="icon-nav iconfont">&#xe640;</div>
      <div class="text-nav">灵感</div>
    </router-link>
    <router-link class="nav" to="topic">
      <div class="icon-nav iconfont">&#xe6f7;</div>
      <div class="text-nav">话题</div>
    </router-link>
    <router-link class="nav" tag="div" to="/my">
      <div class="icon-nav iconfont">&#xe62c;</div>
      <div class="text-nav">我的</div>
    </router-link>
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
        color: #666;
      .icon-nav-active
        color: #32b379;
      .text-nav
        font-size: .2rem;
        color: #333;
    .router-link-exact-active
      .icon-nav
        color: #32b379
</style>
