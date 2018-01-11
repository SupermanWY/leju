<template>
  <div class="body">
    <div class="header">
      <img class="logo-img" src="../../resource/logo.png" alt="">
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
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'register',
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
        this.$refs.password.value = this.passwordFlag ? this.$refs.password.value : '密码必须是8-16位字母和数'

        if (this.passwordFlag && this.userFlag && verification) {
          axios.get('/static/register.json', {
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
          console.log('缺少参数')
        } else if (state === 1) {
          console.log('验证码错误')
        } else if (state === 2) {
          console.log('注册成功')
        } else if (state === 3) {
          console.log('注册失败')
        } else if (state === 4) {
          console.log('用户已经注册')
        }
      },
      handleRegisterErr () {
        console.log('请求失败')
      },
      handleGetCode (username) {
        const usernameReg = /^1[3587]\d{9}$/
        if (usernameReg.test(username)) {
          this.userFlag = true
        } else {
          this.userFlag = false
        }
        this.$refs.username.value = this.userFlag ? this.$refs.username.value : '必须是手机号'
        if (this.userFlag) {
          axios.get('/static/register/send/sms/sms.json', {
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
        console.log('获取验证码失败')
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
        padding-top: .54rem
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
      .submit 
        height: 100%
        width: 100%
        background: #fff
</style>