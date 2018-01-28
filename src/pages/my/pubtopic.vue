<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/my">&#xe605;</router-link>
      发布话题
    </div>
    <div class="main">
      <div class="input-con">
        <input 
          type="text" 
          placeholder="请输入标题" 
          class="title" 
          v-model="title"
          @input="handleTitleChange" />
        <span class="count"><strong class="heavy">{{this.title.length}}</strong>/20</span>
      </div>
      <div class="cont-box">
        <textarea 
          class="content" 
          placeholder="请输入内容" 
          v-model="content"
          @input="handleContentChange">
        </textarea>
        <span class="count"><strong class="heavy">{{this.content.length}}</strong>/50</span>
      </div>
      <div class="publish" @click="handlePublishClick">发布</div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
  import toast from '../../components/ui/toast'
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
      handleTitleChange () {
        if (this.title.length >= 20) {
          this.$refs.toast.toastShow('标题最多可输入20字')
          this.title = this.title.substr(0, 20)
        }
      },
      handleContentChange () {
        if (this.content.length >= 50) {
          this.$refs.toast.toastShow('内容最多可输入50字')
          this.content = this.content.substr(0, 50)
        }
      },
      handlePublishClick () {
        let reg = /^\s+|\s$/g
        this.title = this.title.replace(reg, '')
        this.content = this.content.replace(reg, '')
        if (this.title === '') {
          this.$refs.toast.toastShow('请输入标题')
        } else if (this.content === '') {
          this.$refs.toast.toastShow('请输入内容')
        } else {
          console.log(this.title, this.content)
        }
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
    .input-con
      position: relative
      .title
        width: 100%
        line-height: .5rem
      .count
        position: absolute
        right: .1rem
        top: 0
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
