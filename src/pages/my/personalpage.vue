<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/my">&#xe605;</router-link>
      编辑个人主页
    </div>
    <ul class="list">
      <li class="item item-first border-bottom" style="height: 1.2rem">
        <span class="icon iconfont">&#xe765;</span>
        头像
        <img :src="userInfo.icon" class="headImg" @click="handleImgClick" v-if="show">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          v-if="!show">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe63f;</span>
        昵称
        <input type="text" :placeholder="userInfo.username" class="text-item" v-model="username" />
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe7e6;</span>
        性别
        <div class="sex">
          <input type="radio" value="true" name="sex"  v-model="radio" checked />男
          <input type="radio" value="false" name="sex"  v-model="radio" style="margin-left: .2rem" />女
        </div>
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe60f;</span>
        位置
        <input type="text" :placeholder="userInfo.address" class="text-item" v-model="address" />
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe618;</span>
        生日
        <el-date-picker
          v-model="birthday"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          style="float: right">
        </el-date-picker>
      </li>
      <li class="btn-item" @click="handleSubmitClick">提交</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'personalpage',
    data () {
      return {
        userInfo: '',
        headImgShow: true,
        birthday: '',
        imageUrl: '',
        format: '',
        file: '',
        show: true,
        radio: '男',
        username: '',
        address: ''
      }
    },
    methods: {
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
        this.file = file
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      },
      handleImgClick () {
        this.show = false
      },
      handleSubmitClick () {
        var formData = new FormData()
        formData.append('nickname', this.username)
        formData.append('sex', this.radio)
        formData.append('address', this.address)
        formData.append('birthday', this.birthday)
        formData.append('icon', this.file)
        formData.append('id', this.userInfo.id)
        axios.get('/user/add/information/', formData)
             .then(this.handleUpdateSucc.bind(this))
             .catch(this.handleUpdateErr.bind(this))
      },
      handleUpdateSucc () {
        this.$router.push('/my')
      },
      handleUpdateErr () {
        console.log('返回信息错误')
      }
    },
    created () {
      try {
        this.userInfo = JSON.parse(window.localStorage.userInfo)
        this.username = this.userInfo.username
        this.address = this.userInfo.address
        this.birthday = this.userInfo.birehday
        this.radio = this.userInfo.sex
      } catch (e) {}
    }
  }
</script>

<style scoped lang="stylus">
  .avatar-uploader
    float: right
    height: 1rem
    margin-top: .1rem
    border-radius: 1rem
    overflow: hidden
  .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
    .avatar {
      width: 1rem;
      height: 1rem;
      display: block;
    }
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
  .list
    margin: 0 .2rem
    .item-first
      line-height: 1.2rem
      .headImg
        width: 1rem
        height: 1rem
        float: right
        margin-top: .1rem
        border-radius: 1rem
      .upload
        width: 3.5rem
        height: .9rem
        margin-top: .3rem
        float: right
    .item
      height: 1rem
      line-height: 1rem
      .text-item
        float: right
        height: 1rem
        line-height: 1rem
        font-size: .26rem
        color: #999
        text-align: right
      .icon
        font-size: .28rem
        color: #999
    .btn-item
      height: .9rem
      margin: .2rem
      background: #6dd5a7
      line-height: .9rem
      text-align: center
      font-size: .28rem
      color: #fff
      border-radius: .2rem
    .sex
      float: right
</style>
