<template>
  <div>
    <h2 class="title border-bottom">话题</h2>
    <discuss :discussInfo="discussInfo"></discuss>
    <topic-main :topicInfo="topicInfo"></topic-main>
    <div class="foot"></div>
    <foot></foot>
  </div>
</template>
<script>
  import axios from 'axios'
  import Discuss from './discuss'
  import TopicMain from './main'
  import foot from '../../components/common/foot'
  
  export default {
    name: 'topic',

    data () {
      return {
        discussInfo: [],
        topicInfo: []
      }
    },

    components: {
      Discuss,
      TopicMain,
      foot
    },

    created () {
      this.getTopicData()
    },

    methods: {
      getTopicData () {
        axios.get('/topic/')
          .then(this.handleGetTopicDataSucc.bind(this))
          .catch(this.handleGetTopicDataErr.bind(this))
      },
      handleGetTopicDataSucc (res) {
        this.discussInfo = res.data.data.discuss
        this.topicInfo = res.data.data.topic
      },
      handleGetTopicDataErr () {
        console.log('获取topic失败')
      }
    }
  }
</script>
<style scoped lang="stylus">
  .title
    line-height: .86rem
    text-align: center
    font-size: .34rem
    color: #333
    border-color: #f0f0f0
  .foot
    bottom: 0;
    height: .98rem;
    background: #fff;
</style>