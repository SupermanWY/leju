<template>
  <div class="topic">
    <div class="discuss-title border-top">
      <span class="discuss-title-desc">话题</span>
      <span class="discuss-more iconfont">查看更多&#xe65e;</span>
    </div>
    <ul class="topic-list">
      <li class="topic-content" v-for="item in topicInfo">
        <div class="topic-bg-container">
          <img class="topic-bg" src="../../../static/img/topicbg.png">
        </div>
        <div class="topic-text">
          <span class="iconfont microphone">&#xe642;</span>
          <p class="topic-title">{{item.title}}</p>
          <p class="topic-desc">{{item.desc}}</p>
          <div class="user">
            <div class="user-picture" 
             v-for="(img, index) in item.imgUrl" 
             :key="img.id">
                <img class="user-img" :src="img.imgUrl">
            </div>
            <div class="message-con">
              <img src="../../../static/img/xx.png" class="message-img">
            </div>
            <span class="iconfont discusscount">{{item.discusscount}}人参加讨论&#xe65e;</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'topicmain',

    props: ['topicInfo']

  }
</script>
<style scoped lang="stylus">
  .topic
    margin-top: .43rem
    .discuss-title
      line-height: 1.2rem
      display: flex
      justify-content: space-between
      padding: .2rem
      &::before
        border-color: #f0f0f0
      .discuss-title-desc
        font-size: .34rem
        color: #666
      .discuss-more
        color: #6dd5a7
        font-size: .24rem
    .topic-list
      padding: 0 .2rem
      .topic-content
        position: relative
        margin-bottom: .21rem
        .topic-bg-container
          width: 100%
          height: 0
          padding-bottom: 60%
          .topic-bg
            width: 100% 
        .topic-text
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          text-align: center
          .microphone
            display: inline-block
            width: 100%
            margin: .68rem 0 .34rem 0
            font-size: .5rem
            color: #6dd5a7
          .topic-title
            font-size: .36rem
            color: #333
          .topic-desc
            font-size: .22rem
            color: #333
            padding: 0 .94rem
            line-height: .36rem
            margin: .09rem 0 .41rem 0
          .user
            display: flex
            justify-content: center
            align-items: flex-start
            .user-picture
              width: .5rem
              margin-left: -.08rem
              .user-img
                width: 100%
            .message-con
              width: .46rem
              margin-left: -.08rem
              .message-img
                width: 100%
            .discusscount
              font-size: .22rem
              color: #666 
              line-height: .5rem
              margin-left: .11rem         
</style>