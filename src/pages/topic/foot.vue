<template>
  <div class="foot border-top">
    <router-link to="/" tag="div" class="nav">
      <span class="iconfont tag">&#xe653;</span>
      <span>首页</span>
    </router-link>
     <router-link to="/inspiration" tag="div" class="nav">
      <span class="iconfont tag">&#xe663;</span>
      <span>灵感</span>
    </router-link>
     <router-link to="/topic" tag="div" class="nav">
      <span class="iconfont tag">&#xe7a8;</span>
      <span>话题</span>
    </router-link>
     <router-link to="/" tag="div" class="nav">
      <span class="iconfont tag">&#xe625;</span>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'topic-foot'
  }
</script>
<style scoped lang="stylus">
  .foot
    position: fixed
    right: 0
    bottom:0
    left:0
    background: #fff
    display: flex
    justify-content: space-around
    height: .99rem
    border-color: #f0f0f0
    .nav
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-around
      color: #666
      .tag
        font-size: .4rem
</style>