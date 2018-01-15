<template>
  <div>
    <div class="header">
      <div class="search" to="/search">
        <span class="text-search iconfont">&#xe600;</span>
        <input 
          type="text" 
          placeholder="搜索装修新技能" 
          class="input-search"
          v-model="searchVal"
          @input="handleInputChange">
      </div>
      <router-link class="cancel" to="/" tag="div">取消</router-link>
    </div>
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
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'search-index',
    data () {
      return {
        searchVal: ''
      }
    },
    methods: {
      handleInputChange () {
        this.debounce(this.getSearData, this, 500)
      },
      getSearData () {
        axios.get('/search/?search=' + this.searchVal)
             .then(this.handleGetSearchData.bind(this))
      },
      handleGetSearchData (res) {
        console.log(123)
      },
      debounce (fn, ctx, delay) {
        clearTimeout(fn.id)
        fn.id = setTimeout(() => {
          fn.call(ctx)
        }, delay)
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
      font-size: .28rem
      color: #666
  .search-con
    margin: .2rem .2rem 0
    .title
      margin: .4rem 0 .3rem 0
      font-size: .24rem
    .list
      font-size: 0
      .item
        display: inline-block
        height: .64rem
        padding: 0 .18rem
        margin: 0 .2rem .2rem 0
        line-height: .64rem
        font-size: .24rem
        color: #333
        border-radius: .1rem
        background: #f5f5f5
</style>
