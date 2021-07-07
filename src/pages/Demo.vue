<template>
  <div>
    <svg-icon icon-class="cart"></svg-icon>
    <input type="text" v-focus v-model="val">
    <div>
      <button v-permission="'admin'">主页面</button>
      <button @click="login" >
        <svg-icon icon-class="add"></svg-icon>
        添加权限
      </button>
      <button @click="dele" >删除权限</button>
    </div>
    <children></children>
    <p>
      <button v-if="result('user')">个人中心</button>
    </p>
    <router-link to="/login">登录</router-link>
    <router-link to="/directiveDemo">自定义指令</router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  name: 'Demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      val: ''
    }
  },
  mounted () {
    console.log(this.$store.getters['userCopy/result']('user'))
  },
  computed: { // 计算属性
    result() {
      return function (role) { // 计算属性需要传参数时，先返回一个函数，函数接收的参数即是计算属性传过来的参数
        return this.$store.getters['userCopy/result'](role)
      }
    },
    ...mapGetters({
      pressionList:'userCopy/getPresion'
    })
  },
  methods: {
    login () {
      console.log("没用辅助函数",this.$store.getters['userCopy/getPresion'])
      console.log("使用辅助函数mapGetters",this.pressionList)
      console.log(this.$store.getters['userCopy/result']('user'))
      this.$store.dispatch('userCopy/asyncSetPression', this.val).then(res => { // 异步，采用action中的方法改数据
        console.log(res)
      })
    },
    dele(){
      console.log("没用辅助函数",this.$store.getters['userCopy/getPresion'])
      this.$store.commit('userCopy/DELE_PRESSIONLIST',this.val) // 同步，使用mutations中的方法改数据
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
