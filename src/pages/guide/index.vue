<template>
  <div class="container">
    <swiper class="swiper" :options="option">
      <swiper-slide>
        <div class="slide">
          <div class="img-box">
            <img alt="乐居时尚装修" class="img" src="/static/img/guide1.png">
          </div>
          <div></div>
          <div class="box">
            <div class="top">发现真实好物</div>
            <div class="bottom">百万真实中国人家、实操标签，比样板间更实用</div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="slide">
          <div class="img-box">
            <img alt="乐居时尚装修" class="img" src="/static/img/guide2.png">
          </div>
          <div class="box">
            <div class="top">分享家具生活</div>
            <div class="bottom">全民图片征集、热门话题讨论，别人踩坑你绕行</div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide  class="slide">
        <div class="slide">
          <div class="img-box">
            <img alt="乐居时尚装修" class="img" src="/static/img/guide3.png">
          </div>
          <div class="box">
            <div class="top">
              <span class="start">现在开始</span>
              <span>开启乐居</span>
            </div>
            <div class="btn" @click="intoIndex">进入乐居</div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="cover" @click="intoIndex"></div>
  </div>
</template>
<script>
  export default {
    name: 'guide',
    data () {
      return {
        option: {
          pagination: '.swiper-pagination',
          loop: false
        }
      }
    },
    methods: {
      intoIndex () {
        this.$router.push('/index')
      }
    }
  }
</script>

<style scoped lang="stylus">
.container
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  .swiper
    height: 100%
    .img-box
      height: 0
      padding-bottom: 110%
      overflow: hidden
      .img
        width: 100%
    .slide
      height: 100%
      display: flex
      flex-direction: column
      .box
        flex: 1
        position: relative
        .top
          position: absolute
          width: 100%
          top: 20%
          font-size: .32rem
          text-align: center
          color: #666
          .start
            padding-right: .28rem
        .bottom
          position: absolute
          width: 100%
          top: 40%
          text-align: center
          font-size: .26rem
          color: #666
        .btn
          position: absolute
          width: 1.98rem
          height: .68rem
          left: 50%
          transform: translateX(-50%)
          top: 30%
          border: 1px solid #32b379
          text-align: center
          line-height: .68rem
          margin: .5rem auto 0
          border-radius: .2rem
          font-size: .32rem
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: #32b379
  .cover
    width: .9rem
    height: .4rem
    position: fixed
    top: .28rem
    right: .24rem
    background: red
    z-index: 1
    opacity: 0
</style>