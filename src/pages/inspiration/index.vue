<template>
  <div>
    <div class="header border-bottom">
    	灵感
    	<span class="search iconfont">&#xe600;</span>
    </div>
    <div class="nav" @click="handleNavClick">
      <p class="item-nav item-nav-active" data-style="recommend" ref="recommend">推荐</p>
      <p class="item-nav" data-style="sample">简约</p>
      <p class="item-nav" data-style="chinese">中式</p>
      <p class="item-nav" data-style="europ">欧式</p>
      <p class="item-nav" data-style="america">美式</p>
      <p class="item-nav" data-style="vield">田园</p>
      <p class="item-nav" data-style="mix">混搭</p>
    </div>
    <waterfull :waterfullInfo="waterfullInfo"></waterfull>
    <foot></foot>
  </div>
</template>

<script>
  import axios from 'axios'

  import waterfull from './waterfull'
  import foot from '../../components/common/foot'

  export default {
    name: 'inspiration',
    components: {
      waterfull,
      foot
    },
    mounted () {
      this.getData()
    },
    data () {
      return {
        style: 'recommend',
        waterfullInfo: []
      }
    },
    watch: {
      style () {
        this.getData()
      }
    },
    methods: {
      getData () {
        axios.get('/static/' + this.style)
           .then(this.handleGetDataSucc)
      },
      handleGetDataSucc (res) {
        res.data && (res = res.data)
        if (res.ret && res.data) {
          this.waterfullInfo = res.data
        }
      },
      handleNavClick (e) {
        var navElem = e.target
        if (e.target !== e.currentTarget) {
          Array.from(navElem.parentNode.children).forEach((elem) => {
            elem.className = 'item-nav'
          })
          navElem.className += ' item-nav-active'
          this.style = navElem.getAttribute('data-style')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header
    line-height: .88rem
    text-align: center
    font-size: .32rem
    color: #333
    .search
      position: absolute
      right: .23rem;
  .nav
    display: flex
    box-sizing: border-box
    text-align: center
    border-bottom: .2rem solid #f5f5f5
    .item-nav
      flex: 1
      line-height: .79rem
    .item-nav-active
      border-bottom: .04rem solid #32b379
</style>