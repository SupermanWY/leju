<template>
  <div class="body">
    <div class="header">
      <img class="logo-img" src="../../assets/images/logo.png" alt="">
      <p class="logo-title">乐居</p>
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
       <input type="button" class="verification getVerification"  value="获取验证码">
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
  export default {
    name: 'register',
    methods: {
      handleSubmitClick (username, verification, password) {
        const usernameReg = /^1[3587]\d{9}$/
        const passwordReg = /^[a-zA-Z0-9]{8,16}$/
        if (usernameReg.test(username)) {
          console.log(true)
        } else {
          console.log(false)
        }
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
      height: 1.28rem
      width: 1.28rem
      margin: 1.56rem 0 0.4rem 0
    .logo-title
      font-size: .54rem
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