<template>
  <div class="questions">
    <div class="title border-bottom">
      <router-link to="/" tag="span" class="iconfont icon">&#xe6b7;</router-link>提问题
    </div>
    <List :questions="questionsInfo"></List>
  </div>
</template>
<script>
  import axios from 'axios'
  import List from './list'

  export default {
    name: 'queations',

    data () {
      return {
        questionsInfo: []
      }
    },

    components: {
      List
    },

    created () {
      this.getQuestionsData()
    },

    methods: {
      getQuestionsData () {
        axios.get('/problem/')
        .then(this.handleGetQuestionsSucc.bind(this))
        .catch(this.handleGetQuestionsErr.bind(this))
      },
      handleGetQuestionsSucc (res) {
        this.questionsInfo = res.data.data.questions
      },
      handleGetQuestionsErr () {
        console.log('获取questions失败')
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


	@import '../../assets/styles/common/header.styl'


</style>