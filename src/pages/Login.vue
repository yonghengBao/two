<template>
    <div>
      <p>
        用户名
        <input type="text" v-model="username">
      </p>
      <p>
        密码
        <input type="text" v-model="password">
      </p>
      <button @click="login">登录</button>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username:"admin",
        password:""
      }
    },
    methods:{
      login(){
        this.$store
          .dispatch("user/login", { username: this.username })
          .then(() => {
            this.$router.push({
              path: this.$route.query.redirect || "/"
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>

</style>
