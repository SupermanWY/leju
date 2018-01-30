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
        <img :src="icon" class="headImg">
        <input type="file" ref="photo" class="photo" @change="handleHeadimgChage"/>
      </li>
      <li class="item item-first border-bottom">
        <span class="icon iconfont">&#xe63f;</span>
        昵称
        <input type="text" class="text-item" v-model="username" />
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
        <input type="text" class="text-item" v-model="address" />
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
    <toast ref="toast"></toast>
  </div>
</template>

<script>
  import axios from 'axios'
  import toast from '../../components/ui/toast'
  export default {
    name: 'personalpage',
    components: {
      toast
    },
    data () {
      return {
        userInfo: '',
        icon: '',
        headImgShow: true,
        birthday: '',
        imageUrl: '',
        format: '',
        file: '',
        radio: '男',
        username: '',
        address: ''
      }
    },
    methods: {
      handleHeadimgChage () {
        let file = this.$refs.photo.files[0]
        if (file.type !== 'image/jpeg') {
          this.$refs.toast.toastShow('暂不支持此文件类型')
        } else {
          if (typeof FileReader !== 'undefined') {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (evt) => {
              this.icon = evt.target.result
            }
          }
        }
      },
      handleSubmitClick () {
        var formData = new FormData()
        try {
          let file = this.$refs.photo.files[0]
          if (file.type !== 'image/jpeg') {
            this.$refs.toast.toastShow('暂不支持此文件类型')
          } else {
            formData.append('icon', file)
          }
        } catch (e) {}
        formData.append('nickname', this.username)
        formData.append('sex', this.radio)
        formData.append('address', this.address)
        formData.append('birthday', this.birthday)
        formData.append('id', this.userInfo.id)
        axios.post('/user/add/information/', formData)
             .then(this.handleUpdateSucc.bind(this))
             .catch(this.handleUpdateErr.bind(this))
      },
      handleUpdateSucc (res) {
        if (res.data.data.state === '0' || res.data.data.state === 0) {
          this.$refs.toast.toastShow('修改失败')
        } else if (res.data.data.state === '1' || res.data.data.state === 1) {
          this.$refs.toast.toastShow('修改成功')
          window.localStorage.userInfo = JSON.stringify(res.data.data)
          setTimeout(() => {
            this.$router.push('/my')
          }, 2000)
        }
      },
      handleUpdateErr () {
        this.$refs.toast.toastShow('返回信息错误')
      }
    },
    created () {
      try {
        this.userInfo = JSON.parse(window.localStorage.userInfo)
        this.username = this.userInfo.username
        this.address = this.userInfo.address
        this.birthday = this.userInfo.birthday
        this.radio = this.userInfo.sex
        this.icon = this.userInfo.icon
      } catch (e) {}
    }
  }
</script>

<style scoped lang="stylus">
  .photo
    position: absolute
    right: .2rem
    top: .1rem
    width: 1rem
    height: 1rem
    opacity: 0
    z-index: 3
    background: #fff
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
