<template>
  <div>
    <div class="header">
      <div class="search" to="/search">
        <span class="text-search iconfont">&#xe600;</span>
        <input 
          type="text" 
          placeholder="搜索装修新技能" 
          class="input-search" 
          :bind="searchVal" @input="handleInputChange">
      </div>
      <router-link class="cancel" to="/" tag="div">取消</router-link>
    </div>
    <div>
      <div class="search-con">
        <h2 class="title">热门搜索</h2>
        <div class="list">
          <div class="item">卫生间</div>
          <div class="item">主卧</div>
          <div class="item">次卧</div>
          <div class="item">厨房</div>
          <div class="item">客厅</div>
        </div>
      </div>
      <div class="search-con">
        <h2 class="title">历史搜索</h2>
        <div class="list">
          <div class="item">厕所</div>
          <div class="item">餐厅</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-index',
    data () {
      return {
        searchVal: ''
      }
    },
    methods: {
      handleInputChange () {
        console.log(1)
      },
      debounce (fn, ctx) {
        clearTimeout(fn.id)
        setTimeout(() => {
          fn()
        }, 500)
      }
    }
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
  .search-con
    margin: .2rem .2rem 0
    .title
      margin-bottom: .2rem
    .item
      display: inline-block
      width: 1.46rem
      height: .46rem
      margin-bottom: .1rem
      text-align: center
      line-height: .46rem
      border: 1px solid #ccc
      color: #fff
      border-radius: .2rem
      background: #bcbcbc
</style>
