<template>
  <div class="contaier" ref="wrapper">
    <div class="main-content">
      <index-header></index-header>
      <swiper :bannerInfo='bannerInfo'></swiper>
      <div class="nav">
        <router-link class="item-nav" to="/decorate" tag="div">
          <img src="/static/img/decorate.png" class="img-item">
          <div class="text-item" tag="div">学装修</div>
        </router-link>
        <router-link class="item-nav" to="/design" tag="div">
          <img src="/static/img/design.png" class="img-item">
          <div class="text-item">找设计</div>
        </router-link>
        <div class="item-nav">
          <img src="/static/img/diray.png" class="img-item">
          <div class="text-item">看日记</div>
        </div>
        <div class="item-nav">
          <img src="/static/img/question.png" class="img-item">
          <div class="text-item">提问题</div>
        </div>
      </div>
      <list :listInfo='listInfo'></list>
    </div>
    <foot class="footer"></foot>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'

  import indexHeader from './header'
  import swiper from './swiper'
  import list from './list'
  import foot from '../../components/common/foot'

  export default {
    name: 'index',
    components: {
      indexHeader,
      swiper,
      list,
      foot
    },
    data () {
      return {
        bannerInfo: [],
        listInfo: []
      }
    },
    mounted () {
      this.getData()
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper)
      })
    },
    methods: {
      getData () {
        axios.get('/list/')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res.data && (res = res.data)
        if (res.ret) {
          this.bannerInfo = res.data.banner
          this.listInfo = res.data.wellDesign
        } else {
          console.log('请求失败')
        }
      },
      handleGetDataErr () {
        console.log('请求失败')
      }
    }
  }
</script>

<style scoped lang="stylus">
 .contaier
    position: absolute;
    top: 0;
    right: 0;
    bottom: .98rem;
    left: 0;
   .main-content
    .nav
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 1.85rem;
      background: #fff;
      .item-nav
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: .86rem;
        .img-item
          height: .52rem;
        .text-item
          font-size: .24rem;
          color: #666;
      
</style>
