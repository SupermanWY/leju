<template>
  <div>
    <div class="header">
      <div class="search" to="/search">
        <span class="text-search iconfont">&#xe600;</span>
        <input type="text" placeholder="搜索装修新技能" class="input-search">
      </div>
      <router-link class="cancel" to="/" tag="div">取消</router-link>
    </div>
    <div>
      <div class="hot-search">
        <h2 class="title-hot">热门搜索</h2>
        <div class="item-hot"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-index'
  }
</script>

<style scoped lang="stylus">
  .header
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: .88rem;
    background: #fff;
    .search
      display: flex;
      flex: 1
      margin: 0 .2rem
      height: .6rem;
      border-radius: .2rem;
      background: #f5f5f5;
      .input-search
        display: block;
        flex: 1;
        border-radius: .2rem;
        background: #f5f5f5;
        &::placeholder
          font-size: .28rem;
          color: #999;
      .text-search
        padding: 0 .2rem;
        line-height: .6rem;
        font-size: .34rem;
        color: #333;
    .cancel
      padding-right: .2rem
</style>
