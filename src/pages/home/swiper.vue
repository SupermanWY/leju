<template>
   <swiper class="swiper banner" :options="option">
    <swiper-slide v-for="item in bannerInfo" :key="item.id">
      <div class="img-box">
        <img :src="item.imgUrl" alt="乐居时尚装修" class="img">
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'swiper',
    props: ['bannerInfo'],
    data () {
      return {
        option: {
          pagination: '.swiper-pagination',
          autoplay: 10000,
          loop: false
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    height: 0;
    padding-bottom: 48%;
    .img
      width: 100%;
    .swiper-pagination 
      >>>.swiper-pagination-bullet-active
        background: #fff;
</style>