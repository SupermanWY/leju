<template>
  <div>
    <div class="discuss-title">
      <span class="discuss-title-desc">正在讨论</span>
      <span class="discuss-more iconfont">查看更多&#xe65e;</span>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="discuss">
        <ul class="content">
          <router-link :to="/discussPage/+item.id" 
                       tag="li" 
                       class="discuss-content" 
                       v-for="(item, index) in discussInfo" 
                       :key="item.id">
            <img class="discuss-img" :src="'/static/img/discuss0'+(index%2+1)+'.png'">
            <p class="discuss-desc">{{item.desc}}</p>
          </router-link>
        </ul>
      </div>
    </div>   
</div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'discuss',

    props: ['discussInfo'],

    mounted () {
      this.createScroll()
    },

    methods: {
      createScroll () {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          scrollY: false,
          click: true
        })
      }
    },

    watch: {
      discussInfo () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
  .discuss-title
    line-height: 1.2rem
    display: flex
    justify-content: space-between
    padding: .2rem
    .discuss-title-desc
      font-size: .34rem
      color: #666
    .discuss-more
      color: #6dd5a7
      font-size: .24rem
  .wrapper
    overflow: hidden
    .discuss
      float: left
      .content
        float: left
        white-space: nowrap
        padding-left: .2rem
        .discuss-content
          position: relative
          margin-right: .1rem
          display: inline-block
          height: 1.42rem
          width: 2.56rem
          .discuss-img
            width: 100%
          .discuss-desc
            position: absolute
            top: .36rem
            left: 0
            bottom: 0
            width: 1.86rem
            padding: 0 .35rem
            white-space: normal;
            line-height: .36rem
            font-size: .26rem
            color: #333
            text-align: center
            
</style>
