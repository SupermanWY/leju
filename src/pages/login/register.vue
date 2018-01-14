<template>
  <div class="body">
    <div class="header">
      <img class="logo-img" src="/static/img/logo.png" alt="">
      <div class="operation">
        <router-link to="/register" tag="span" class="register">注册</router-link>
        <router-link to="/login" tag="span" class="login">登录</router-link>
      </div>
    </div>
    <div class="main">
     <label  class="register-container border-bottom">
      <input type="text" class="register-input" placeholder="请输入手机号" ref="username">
     </label>
     <label class="register-container verification-container">
        <div class="verification inputCode border-bottom">
          <input type="text" class="register-input"  placeholder="请输入验证码" ref="verification">
        </div>
       <input type="button" class="verification getVerification"  value="获取验证码" @click="handleGetCode($refs.username.value)">
     </label>
      <label class="register-container border-bottom">
        <input type="text" class="register-input" placeholder="请输入密码" ref="password">
      </label>
      <label class="register-container register-submit border"> 
        <input type="button" class="submit" value="注册" @click="handleSubmitClick($refs.username.value,$refs.verification.value,$refs.password.value,)">
      </label>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>
<script>
  import axios from 'axios'

  import toast from '../../components/ui/toast'
  export default {
    name: 'register',
    components: {
      toast
    },
    data () {
      return {
        smsState: false,
        userFlag: false,
        passwordFlag: false
      }
    },
    methods: {
      handleSubmitClick (username, verification, password) {
        const passwordReg = /^[a-zA-Z0-9]{8,16}$/
        if (passwordReg.test(password)) {
          this.passwordFlag = true
        } else {
          this.passwordFlag = false
        }
        if (!this.passwordFlag) {
          this.$refs.toast.toastShow('密码必须是8-16位字母和数')
        }
        if (this.passwordFlag && this.userFlag && verification) {
          axios.post('/user/register/', {
            username: username,
            verification: verification,
            password: password
          })
            .then(this.handleRegisterSucc.bind(this))
            .catch(this.handleRegisterErr.bind(this))
        }
      },
      handleRegisterSucc (res) {
        const state = res.data.data.state
        if (state === 0) {
          this.$refs.toast.toastShow('缺少参数')
        } else if (state === 1) {
          this.$refs.toast.toastShow('验证码错误')
        } else if (state === 2) {
          this.$refs.toast.toastShow('注册成功')
          this.$router.push('/login')
        } else if (state === 3) {
          this.$refs.toast.toastShow('注册失败')
        } else if (state === 4) {
          this.$refs.toast.toastShow('用户已经注册')
        }
      },
      handleRegisterErr () {
        this.$refs.toast.toastShow('请求失败')
      },
      handleGetCode (username) {
        const usernameReg = /^1[3587]\d{9}$/
        if (usernameReg.test(username)) {
          this.userFlag = true
        } else {
          this.userFlag = false
        }
        if (!this.userFlag) {
          this.$refs.toast.toastShow('请输入正确的手机号')
        }
        if (this.userFlag) {
          axios.post('/user/register/send/sms/', {
            username: username
          })
            .then(this.handleGetSmsSucc.bind(this))
            .catch(this.handleGetSmsErr.bind(this))
        }
      },
      handleGetSmsSucc (res) {
        this.smsState = res.data.data.state
      },
      handleGetSmsErr () {
        this.$refs.toast.toastShow('获取验证码失败')
      }
    }
  }
</script>
<style scoped lang="stylus">
  .header 
    height: 5.35rem
    background: #32b379
    display: flex
    flex-direction: column
    align-items: center
    color: #fff
    .logo-img
      display: block;
      width: 1.28rem;
      height: 2.21rem;
      margin: 1.56rem auto 0;
    .operation
      margin-top: .88rem
      width: 100%
      display: flex
      text-align: center
      font-size: .32rem
      .register,.login
        width: 50%;
        height: .7rem
        position: relative
      .register::before
        content: "";
        position: absolute;
        border: .28rem solid transparent;
        border-bottom: .28rem solid #fff;
        bottom: 0;
        opacity: .5;
   .main
      display: flex
      flex-direction: column
      align-items: center
    .verification-container
      display: flex
    .register-container
      width: 80%
      margin: 0 auto
      height: 1rem
      color: #999
      &::before
        border-color: #999
      .register-input
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
    .register-submit
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
</style>