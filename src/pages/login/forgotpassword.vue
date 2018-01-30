<template>
  <div>
     <div class="title border-bottom">
      <span class="iconfont icon" @touchstart="handleBackClick" >&#xe6b7;</span>忘记密码
    </div>
    <div class="main">
     <label class="forgotpassword-container verification-container">
        <div class="verification inputCode border-bottom">
          <input type="text" class="forgotpassword-input"  placeholder="请输入手机号" ref="username">
        </div>
       <input type="button" class="verification getVerification"  :value="btnValue" @click="handleGetCode($refs.username.value)">
     </label>
     <label  class="forgotpassword-container border-bottom">
      <input type="text" class="forgotpassword-input" placeholder="请输入验证码" ref="verification">
     </label>
      <label class="forgotpassword-container border-bottom">
        <input type="password" class="forgotpassword-input" placeholder="请输入新密码" ref="password">
      </label>
      <label class="forgotpassword-container resetpassword-submit border"> 
        <input type="button" class="submit" value="重置密码" @click="handleSubmitClick($refs.username.value,$refs.verification.value,$refs.password.value,)">
      </label>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>
<script>
  import axios from 'axios'
  import toast from '../../components/ui/toast'
  export default {
    name: 'forgotpassword',

    data () {
      return {
        userFlag: false,
        passwordFlag: false,
        smsState: false,
        btnValue: '获取验证码',
        isSubmit: true
      }
    },

    components: {
      toast
    },

    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      handleGetCode (username) {
        const usernameReg = /^1[3587]\d{9}$/
        if (usernameReg.test(username)) {
          this.userFlag = true
          axios.post('/user/register/send/sms/', {
            username: username
          })
            .then(this.handleGetCodeSucc.bind(this))
            .catch(this.handleGetCodeErr.bind(this))
        } else {
          this.handleInputCheck()
        }
      },
      handleGetCodeSucc () {
        this.isSubmit = false
        var time = 60
        this.timer = setInterval(() => {
          time--
          this.btnValue = time + '秒后获取'
          if (time === 0) {
            clearInterval(this.timer)
            this.isSubmit = true
            this.btnValue = '请获取验证码'
          }
        }, 1000)
        this.smsState = true
      },
      handleInputCheck () {
        this.$refs.toast.toastShow('请输入正确的手机号')
      },
      handleGetCodeErr () {
        this.$refs.toast.toastShow('获取验证码失败')
      },
      handleSubmitClick (username, verification, password) {
        const passwordReg = /^[a-zA-Z0-9]{8,16}$/
        if (username === '') {
          this.$refs.toast.toastShow('用户名不能为空')
        } else if (verification === '') {
          this.$refs.toast.toastShow('请获取输入验证码')
        } else if (password === '') {
          this.$refs.toast.toastShow('请输入新密码')
        } else if (passwordReg.test(password)) {
          this.passwordFlag = true
        } else {
          this.$refs.toast.toastShow('密码必须是8-16位字母和数字')
        }

        if (this.userFlag && this.passwordFlag && verification && this.smsState) {
          axios.post('/user/mpw/', {
            username: username,
            verification: verification,
            password: password
          })
            .then(this.handleResetPassworSucc.bind(this))
            .catch(this.handleResetPassworErr.bind(this))
        }
      },
      handleResetPassworSucc (res) {
        if (res.data.data.state === 1 || res.data.data.state === '1') {
          this.$refs.toast.toastShow('重置密码成功,3s后跳到登录页')
          setTimeout(() => {
            this.$router.push('/login')
          }, 3000)
        } else {
          this.$refs.toast.toastShow('验证码错误')
        }
      },
      handleResetPassworErr () {
        this.$refs.toast.toastShow('重置密码失败')
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import '../../assets/styles/common/header.styl';

  .main
      display: flex
      flex-direction: column
      align-items: center
    .verification-container
      display: flex
    .forgotpassword-container
      width: 80%
      margin: 0 auto
      height: 1rem
      color: #999
      &::before
        border-color: #999
      .forgotpassword-input
        width: 100%
        padding-top: .54rem
        font-size: .24rem
        &::placeholder
          color: #ccc
      .verification
        float: left
      .inputCode 
        flex: 1
        &::before
         border-color: #999
      .getVerification
        width: 1.66rem
        background: #fff
        padding-top: .54rem
        color:#999
    .resetpassword-submit
      height: 0.78rem
      margin-top: .6rem
      border-radius: 1rem
      color: #333
      font-size: .32rem
      &::before
        border-color: #383838
        border-radius: .5rem
      .submit 
        height: 100%
        width: 100%
        background: #fff
        color: #32b379
</style>