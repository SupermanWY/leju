<template>
  <div class="questions">
    <div class="title border-bottom">
      <span class="iconfont icon" @touchstart="handleBackClick">&#xe6b7;</span>话题
    </div>
    <div class="main" ref="main">
      <ul class="subpage-container">
        <li class="subpage-title">
           <p class="topicsubpage-title">{{subpage.title}}</p>
          <p class="topicsubpage-desc">{{subpage.desc}}</p>
          <p class="topicsubpage-replaycount">回答 {{subpage.replaycount}}</p>
        </li>
        <li class="margin"></li>
        <li class="subtopic-content border-bottom" 
            v-for="(item,index) in topicsubpage.replaycontent" 
            :key="index" 
            :class="[index===0 ? 'padding-top':'padding-tops']">
          <div class="subtopic-user">
            <img class="subtopic-userimg" :src="item.imgUrl">
            <div class="subtopic-userinfo">
              <span class="subtopic-username">{{item.username}}</span>
              <span class="subtopic-city">{{item.city}}</span>
            </div>
          </div>
          <p class="subtopic-desc">{{item.desc}}</p>
          <div class="subtopic-imgs-container">
            <div class="subtopic-img-container" v-for="(img, index) in item.img" :key="index"> 
              <img class="subtopic-img":src="img"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'topicsubpage',

    data () {
      return {
        topicsubpage: [],
        subpage: {}
      }
    },

    created () {
      this.getTopicSubpageData()
    },

    mounted () {
      this.createScroller()
    },

    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      createScroller () {
        this.scroller = new BScroll(this.$refs.main)
      },
      getTopicSubpageData () {
        axios.get('/topic/subpage/' + this.$route.params.id)
          .then(this.handleGetTopicSubpageSucc.bind(this))
          .catch(this.handleGetTopicSubpageErr.bind(this))
      },
      handleGetTopicSubpageSucc (res) {
        this.topicsubpage = res.data.data
        this.subpage = this.topicsubpage.topicsubpage
      },
      handleGetTopicSubpageErr () {
        console.log('获取topicsubpage失败')
      }
    },

    watch: {
      topicsubpage () {
        this.$nextTick(() => {
          this.scroller.refresh()
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
  .questions
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    flex-direction: column
    .main
      flex: 1
      overflow:hidden
      .subpage-container
        .subpage-title
          padding: .42rem .21rem .41rem .21rem
          color: #333
          .topicsubpage-title
            font-size: .34rem
          .topicsubpage-desc
            line-height: .46rem
            font-size: .26rem
            margin: .3rem 0  .6rem 0
          .topicsubpage-replaycount
            font-size: .22rem
        .margin
          height: .9rem
          background: #f5f5f5
        .padding-top
          padding-top: .3rem
        .padding-tops
          padding-top: .41rem
        .subtopic-content
          margin: 0 .21rem
          padding-bottom: .44rem
          &::before
            border-color: #f0f0f0
          .subtopic-user
            display: flex
            .subtopic-userimg
              width: .6rem
              height: .6rem
              margin-right: .1rem
            .subtopic-userinfo
              display: flex
              flex-direction: column
              justify-content: space-between
              .subtopic-username
                font-size: .24rem
                color: #333
              .subtopic-city
                font-size: .2rem
                color: #999
          .subtopic-desc
            padding: .4rem 0
            line-height: .46rem
            font-size: .26rem
            color: #333
          .subtopic-imgs-container
            display: flex
            .subtopic-img-container
              width: 2.26rem
              height: 0
              padding-bottom: 2.27rem
              margin-right: .15rem
              overflow: hidden
              .subtopic-img
                width: 100%

  @import '../../assets/styles/common/header.styl'
</style>