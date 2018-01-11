<template>
  <div>
    <div class="top">
      <img src="../../resource/logo.png" class="img">
      <div class="nav">
        <div class="content-nav">注册</div>
        <div class="content-nav login">登录</div>
      </div>
    </div>
    <div class="container">
      <div class="main">
        <div class="input-container border-bottom">
          <input type="text" placeholder="请输入用户名/手机号" class="text-input" v-model="username">
        </div>
        <div class="input-container border-bottom">
          <input type="text" placeholder="请输入密码" class="text-input" v-model="password">
        </div>
        <div class="btn-container border" @click="handleLoginClick">
          <input type="button" class="btn-input" value="登录">
        </div>
        <div class="password">
          <div class="remember-pwd">记住密码</div>
          <div class="forget-pwd">忘记密码?</div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="agreement">
        我已阅读并同意
        <a href="javascript:;" class="agree-link">乐居用户协议条款</a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'register',
    data () {
      return {
        username: '',
        password: '',
        usernameSucc: false,
        passwordSucc: false
      }
    },
    methods: {
      handleLoginClick () {
        if (this.username === '' || this.password === '') {
          alert('用户名或密码不能为空')
        } else {
          axios.get('/user/login/', {
            username: this.username,
            password: this.password
          }).then(this.handleLoginSucc.bind(this))
        }
      },
      handleLoginSucc (res) {
        res.data && (res = res.data)
        var state = res.data.state
        if (state === 2) {
          alert('跳转到首页')
        } else if (state === 1) {
          alert('密码错误')
        } else if (state === 3) {
          alert('该账户不存在')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .top
    height: 5.35rem;
    box-sizing: border-box;
    padding-top: 1.56rem;
    background: #32b379;
    .img 
      display: block;
      width: 1.28rem;
      height: 2.21rem;
      margin: 0 auto;
    .nav
      display: flex;
      margin-top: .88rem;
      font-size: .32rem;
      color: #fff;
      .content-nav
        width: 50%;
        height: .7rem;
        text-align: center;
      .login
        position: relative;
        &::before
          content: "";
          position: absolute;
          border: .28rem solid transparent;
          border-bottom: .28rem solid #fff;
          bottom: 0;
          opacity: .5;
  .container
    position: absolute;
    top: 5.35rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    .main
      margin: 0 .74rem;
      .input-container
        margin-top: .45rem;
        &::before
          background: #999;
        .text-input
          display: block;
          width: 100%;
          height: .65rem;
          font-size: .24rem;
          color: #999;
          &::placeholder
            color: #ccc;
      .btn-container
        margin-top: .6rem;
        &::before
          border: 1px solid #333;
          border-radius: .4rem;
        .btn-input
          display: block;
          width: 100%;
          height: .78rem;
          line-hieght: .78rem;
          text-align: center;
          font-size: .32rem;
          border-radius: .2rem;
          background: #fff;
      .password
        display: flex;
        justify-content: space-between;
        margin-top: .2rem;
        font-size: .24rem;
        color: #999;
  .foot
    position: absolute;
    width: 100%;
    bottom: .23rem;
    text-align: center;
    color: #999;
    font-size: .24rem;
    .agree-link
      color: #32b379;
</style>