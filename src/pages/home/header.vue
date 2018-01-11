<template>
  <div>
    <div class="header">
      <div class="search">
        <span class="text-search iconfont">&#xe600;</span>
        <input type="text" placeholder="搜索装修新技能" class="input-search">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-header'
  }
</script>

<style scoped lang="stylus">
  .header
    display: flex;
    align-items: center;
    justify-content: center;
    height: .88rem;
    background: #fff;
    .search
      display: flex;
      width: 7.1rem;
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
</style>
