<template>
    <div>
        About
    </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {}
    },
    mounted(){
      console.log(this.$store.state.permission.routes)
    }
  }
</script>

<style scoped>

</style>
