<template>
  <div class="wrapper" ref="wrapper">
    <ul class="questions-container">
      <li class="questions-list border-bottom" v-for="(item,index) in questions" :class="[index === 0? '' : 'padding-top']">
        <div>
          <div class="questions-img-container">
            <img class="questions-img" v-lazy="item.imgUrl">
            <span class="username">{{item.username}}</span>
          </div>
          <div class="questions-desc">
            <span class="ask">问</span>
            {{item.question}}
          </div>
          <p class="common time">提问于 {{item.time}}</p>
          <div>
            <span class="common reply-count">{{item.replyCount}}人回答</span>
            <span class="common">{{item.browseCount}}人浏览</span>
          </div>
        </div>
        <span class="questions-style border">{{item.style}}</span> 
      </li>
    </ul>
  </div>
</template>
<script>
  import BSscroll from 'better-scroll'
  export default {
    name: 'questionslist',

    props: ['questions'],

    mounted () {
      this.createScroller()
    },

    methods: {
      createScroller () {
        this.scroller = new BSscroll(this.$refs.wrapper)
      }
    },

    watch: {
      questions () {
        this.$nextTick(() => {
          this.scroller.refresh()
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
  .wrapper
    flex: 1
    overflow: hidden
    margin: .2rem .2rem 0 .2rem
    .questions-container
      .padding-top
        padding-top: .4rem
      .questions-list
        display: flex
        justify-content: space-between
        padding-bottom: .3rem
        &::before
          border-color: #f0f0f0
        .questions-img-container
          line-height: .5rem
          .questions-img
            height: .5rem
            width: .5rem 
          .username
            font-size: .24rem
            color: #666   
    .questions-desc
      line-height: .38rem
      margin: .2rem 0
      font-size: .3rem
      color: #333
      .ask
        margin-right: .2rem
        display: inline-block
        height: .38rem
        width:.38rem
        font-size:.24rem
        text-align: center
        color: #fff  
        background: #6dd5a7
    .time
      margin-bottom: .4rem
    .common
      line-height: .2rem
      font-size: .2rem
      color: #999 
    .reply-count
      margin-right: .4rem
  .questions-style
    display: inline-block
    height: .44rem
    line-height: .44rem
    width: .72rem
    text-align: center
    font-size: .24rem
    color: #6dd5a7
    overflow: hidden
    &::before
      border-color: #6dd5a7
      border-radius: .1rem

</style>