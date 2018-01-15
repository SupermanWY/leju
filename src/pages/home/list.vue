<template>
  <div class="list-container">
    <h2 class="title">优秀设计</h2>
    <div class="list">
      <div class="item-list" v-for="item in listInfo" :key="item.id">
        <div class="img-con">
          <img :src="item.top_img" class="img">
        </div>
        <h3 class="item-title">{{item.yop_title}}</h3>
        <div class="info">
          <div class="userinfo">
            <img src="" alt="">
            <span class="username">{{item.username}}</span>
          </div>
          <div class="houseinfo">
            <span class="house">{{item.house_type}}</span>
            <span>{{item.usable_area}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: ['listInfo']
  }
</script>

<style scoped lang="stylus">
  .list-container
    background: #fff;
    .title
      position: relative;
      height: .68rem;
      font-size: .28rem;
      color: #333;
      text-align: center;
      line-height: .68rem;
      &::before
        content: "";
        position: absolute;
        top: 40%;
        left: 35%;
        width: .1rem;
        height: .1rem;
        border-radius: 100%;
        border: 1px solid #333;
        background: #6dd5a7;
      &::after
        content: "";
        position: absolute;
        top: 40%;
        left: 65%;
        width: .1rem;
        height: .1rem;
        border-radius: 100%;
        border: 1px solid #333;
        background: #6dd5a7;
    .list
      padding: 0 .2rem;
      overflow: hidden;
      .img-con
        height: 0
        padding-bottom: 50.28%
        overflow: hidden
        background: cyan
        .img
          width: 100%;
      .item-title
        margin-top: .3rem;
        font-size: .28rem;
        color: #333;
      .info
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1rem;
        .username
          font-size: .24rem;
          color: #333;
        .houseinfo
          font-size: .24rem;
          color: #adadad;
          .house
            padding-right: .2rem;
</style>
