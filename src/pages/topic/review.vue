<template>
  <div class="container">
    <div class="header border-bottom">
      <span class="back iconfont" @click="handleBackClick">&#xe605;</span>
      评论
    </div>
    <div class="main">
      <div class="cont-box">
        <textarea 
          class="content" 
          placeholder="请输入内容" 
          v-model="content"
          @input="handleContentChange">
        </textarea>
        <span class="count"><strong class="heavy">{{this.content.length}}</strong>/300</span>
      </div>
      <div class="img-con">
      </div>
      <div class="publish" @click="handlePublishClick">评论</div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
  import toast from '../../components/ui/toast'
  import axios from 'axios'
  export default {
    name: 'pubtopic',
    components: {
      toast
    },
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      handleBackClick () {
        this.$router.go('-1')
      },
      handleContentChange () {
        if (this.content.length >= 300) {
          this.$refs.toast.toastShow('内容最多可输入300字')
          this.content = this.content.substr(0, 300)
        }
      },
      handlePublishClick () {
        let reg = /^\s+|\s$/g
        this.content = this.content.replace(reg, '')
        if (this.content === '') {
          this.$refs.toast.toastShow('请输入内容')
        } else {
          console.log(this.$route.query.id)
          if (this.$route.query.id === '1') {
            axios.post('/topic/comment/' + this.$route.query.titleId, {
              content: this.content
            })
              .then(this.handlePubSucc.bind(this))
              .catch(this.handlePubErr.bind(this))
          } else {
            axios.post('udcontent/comment/' + this.$route.query.titleId, {
              content: this.content
            })
              .then(this.handlePubSucc.bind(this))
              .catch(this.handlePubErr.bind(this))
          }
        }
      },
      handlePubSucc (res) {
        res.data && (res = res.data)
        res.data && (res = res.data.state)
        if (res === 1 || res === '1') {
          this.$refs.toast.toastShow('评论成功')
          setTimeout(() => {
            this.$router.go(-1)
          }, 2000)
        } else {
          this.$refs.toast.toastShow('请先登录')
        }
      },
      handlePubErr () {
        this.$refs.toast.toastShow('评论失败')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header
    heigt: .86rem
    line-height: .86rem
    text-align: center
    font-size: .32rem
    color: #333
    .back
      position: absolute
      left: .2rem
      font-size: .4rem
      color: #7a7a7a
  .main
    display: flex
    flex-direction: column
    position: absolute
    padding: .2rem
    top: .86rem
    bottom: 0
    left: 0
    right: 0
    .heavy
      font-size: .4rem
      color: #6dd5a7
    .cont-box
      position: relative
      flex: 1
      padding-top: .5rem
      .content
        width: 100%
        height: 100%
      .count
        position: absolute
        top: .2rem
        right: .1rem
    .img-con
      height: 2rem
      display: flex
      justify-content: space-around
      img
        width: 33%
    .publish
      height: .9rem
      margin: .2rem
      background: #6dd5a7
      line-height: .9rem
      text-align: center
      font-size: .28rem
      color: #fff
      border-radius: .2rem
</style>
