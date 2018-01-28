<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="back iconfont" to="/my">&#xe605;</router-link>
      写日记
    </div>
    <div class="diray">
      <el-select v-model="spend" clearable placeholder="装修花费">
        <el-option
          v-for="item in spendOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <el-select v-model="area" clearable placeholder="房屋面积">
        <el-option
          v-for="item in areaOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <el-select v-model="type" clearable placeholder="房屋类型">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <el-select v-model="style" clearable placeholder="房屋样式">
        <el-option
          v-for="item in styleOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <input type="text" class="title-input" placeholder="请填写标题" v-model="inputVal">
      <textarea class="input" placeholder="装修小日记" v-model="textareaVal"></textarea>
      <div class="upload-img-con">
        <img :src="uploadImg" alt="" class="upload-img" ref="uploadImg" />
      </div>
      <div class="file-con">  
        <div class="upfile">{{fileVal}}</div>  
        <input title="上传图片" type="file"  ref="file" class="file" @change="handleInputChange" />  
      </div> 
      <div class="publish" @click="handleSubmitClick">提交</div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>

<script>
  import toast from '../../components/ui/toast'
  import axios from 'axios'

  export default {
    name: 'publish',
    components: {
      toast
    },
    data () {
      return {
        uploadImg: '',
        imageUrl: '',
        file: '',
        inputVal: '',
        textareaVal: '',
        spend: '',
        style: '',
        area: '',
        type: '',
        fileVal: '上传图片',
        spendOptions: [{
          value: '装修花费',
          label: '装修花费',
          disabled: true
        }, {
          value: '1-5',
          label: '1万-5万'
        }, {
          value: '5-10',
          label: '5万-10万'
        }, {
          value: '10-20',
          label: '10万-20万'
        }, {
          value: '20-50',
          label: '20万-50万'
        }, {
          value: '50或跟多',
          label: '50万以上'
        }],
        areaOptions: [{
          value: '房屋面积',
          label: '房屋面积',
          disabled: true
        }, {
          value: '50-80',
          label: '50-80平米'
        }, {
          value: '80-100',
          label: '80-100平米'
        }, {
          value: '100-200',
          label: '100-200平米'
        }, {
          value: '200以上',
          label: '200以上平米'
        }],
        styleOptions: [{
          value: '房屋样式',
          label: '房屋样式',
          disabled: true
        }, {
          value: '欧式',
          label: '欧式'
        }, {
          value: '美式',
          label: '美式'
        }, {
          value: '中式',
          label: '中式'
        }, {
          value: '简约',
          label: '简约'
        }, {
          value: '田园',
          label: '田园'
        }, {
          value: '混搭',
          label: '混搭'
        }, {
          value: '其它',
          label: '其它'
        }],
        typeOptions: [{
          value: '房屋类型',
          label: '房屋类型',
          disabled: true
        }, {
          value: '一居室',
          label: '一居室'
        }, {
          value: '二居室',
          label: '二居室'
        }, {
          value: '三居室',
          label: '三居室'
        }, {
          value: '别墅',
          label: '别墅'
        }, {
          value: '其它',
          label: '其它'
        }]
      }
    },
    methods: {
      handleSubmitClick () {
        if (!this.style || !this.type || !this.area || !this.spend) {
          this.$refs.toast.toastShow('请选择您的房屋信息')
        } else if (this.textareaVal === '') {
          this.$refs.toast.toastShow('请输入内容')
        } else if (this.file.type !== 'image/jpeg') {
          this.$refs.toast.toastShow('暂不支持此文件类型')
        } else if (this.inputVal === '') {
          this.$refs.toast.toastShow('请输入标题')
        } else {
          const formData = new FormData()
          formData.append('title', this.inputVal)
          formData.append('content', this.textareaVal)
          formData.append('img', this.file)
          formData.append('style', this.style)
          formData.append('type', this.type)
          formData.append('area', this.area)
          formData.append('spend', this.spend)
          axios.post('/add/diary/', formData)
            .then(this.handleSubmitSucc.bind(this))
            .catch(this.handleSubmitErr.bind(this))
        }
      },
      handleSubmitSucc (res) {
        let state = 0
        res.data && (res = res.data)
        res.data && (state = res.data.state)
        if (state === 1 || state === '1') {
          this.$refs.toast.toastShow('发布成功')
          setTimeout(() => {
            this.$router.go(-1)
          }, 2000)
        } else {
          this.$refs.toast.toastShow('发布失败')
        }
      },
      handleSubmitErr () {
        this.$refs.toast.toastShow('返回信息错误')
      },
      handleInputChange () {
        this.$refs.file.files[0] && (this.file = this.$refs.file.files[0])
        this.fileVal = this.file.name
        if (typeof FileReader !== 'undefined') {
          const reader = new FileReader()
          reader.readAsDataURL(this.file)
          reader.onload = (evt) => {
            this.uploadImg = evt.target.result
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.container
  display: flex
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  flex-direction: column
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
  .diray
    flex: 1
    display: flex
    flex-direction: column
    margin: .2rem
    background: #fff
    .title-input
      line-height: 1rem
      width: 100%
      border-bottom: 1px #d9d9d9 dashed 
    .upload-img-con
        height: 3rem
        width: 3rem
        margin: 0 auto
      .upload-img
        width: 3rem
        height: 3rem
    .file-con
      position: relative
      height: 0.9rem;
      margin: 0.2rem;
      background: #6dd5a7;
      line-height: 0.9rem;
      border-radius: .2rem
      color: #fff
      .upfile
        text-align: center
      .file
        position: absolute
        width: 100%
        height: .9rem
        top: 0
        left: 0
        z-index: 9
        opacity: 0
    .input
      display: block
      width: 100%
      height: 100%
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