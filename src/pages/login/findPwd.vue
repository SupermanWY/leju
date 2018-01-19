<template>
  <div>
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/login">&#xe605;</router-link>
      找回密码
    </div>
  </div>
</template>

<script>
  export default {
    name: 'decorate-index'
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
</style>
