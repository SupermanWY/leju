<template>
  <div class="toast" v-show="show">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data () {
      return {
        show: false,
        isToastHide: true,
        message: ''
      }
    },
    methods: {
      toastShow (message) {
        this.message = message
        this.show = true
        this.debounce(this.toastHide, this)
      },
      toastHide () {
        setTimeout(() => {
          this.show = false
        }, 2000)
      },
      debounce (fn, context) {
        clearTimeout(fn.id)
        fn.id = setTimeout(() => {
          fn.call(context)
        }, 500)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .toast
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    padding: .3rem
    text-align: center
    color: #fff
    border-radius: .5rem
    border: 1px solid #ccc
    background: rgba(0, 0, 0, .5)
</style>
