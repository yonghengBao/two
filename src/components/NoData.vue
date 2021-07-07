<template>
    <div class="no-date">
      <img class="img" :src="imgUrl" alt="">
      <p class="content">{{content}}</p>
    </div>
</template>

<script>
    export default {
        name: "NoData",
        props:{
            content:{
                type:String,
                default:"暂无数据"
            },
            imgUrl:{
                type:String,
                default:require("../assets/logo.png")
            }
        }
    }
</script>

<style scoped>
  .no-date{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
.img{
  width: 100px;
}
</style>
