<template>
  <!--  示例https://juejin.cn/post/6963840401899782175-->
  <div>
    <h1 class="title">标题</h1>
    <!--    点击范围扩大-->
    <div>
      <span class="border-red" v-expandClick="10,20,30,40" @click="glabClickoutside">
      点击范围扩大
    </span>
    </div>
    <br>
    <!--    拖拽-->
    <div style="position: relative;height: 100px" class="border-red">
      <div style="margin:0 20px;position: relative;height: 50px;width: 500px" class="border-red">
        <div v-drag> 支持拖拽的元素1</div>
      </div>
      <div v-drag> 支持拖拽的元素</div>
    </div>
    <!--    缩放-->
    <br>
    <!--    <div v-resize="resize" style="height: 100px" class="border-red"></div>-->
    <!--    空数据-->
    <div class="border-red" v-empty="emptyValue">
      <p v-for="item in list">{{item.name}}</p>
    </div>
<!--    改颜色-->
    <div>
      <div class="common-util">
        ceshi
      </div>
      <div @click="theme('iview')">默认</div>
      <div @click="theme('light')">浅色</div>
      <div @click="theme('dark')" style="border: 1px solid red">深色</div>
    </div>
    <div style="height: 200px">
      <EchartTmp  id="bar" @chartInstance="chartInstance2"></EchartTmp>
    </div>
  </div>
</template>

<script>
    import request from '@/utils/request'
    import {PieOptions} from '../options/chartOptions'
    import {mapGetters} from "vuex";
    export default {
        name: "DirectiveDemo",
        data() {
            return {
                emptyValue:{
                    content: '暂无列表数据',
                    img: require('../assets/nodate.png'),
                    visible: false,
                },
                list:[]
            }
        },
        computed:{
            ...mapGetters(['pieColors'])
        },
        created(){
            request({
                url: 'http://jsonplaceholder.typicode.com/users',
                method: 'get'
            }).then(res=>{
                if(res.length<0){ // 实际应该是判>0
                    this.list = res
                    this.emptyValue.visible = false;
                }else{
                    this.emptyValue.visible = true;
                }
            })
        },
        methods: {
            glabClickoutside() {
                console.log("点击")
            },
            resize() {
                console.log("改变了")
            },
            //换主题
            theme(type) {
                window.document.documentElement.setAttribute( "data-theme", type );
            },
            chartInstance2(echart) {
                echart.hideLoading()
                let option = new PieOptions().option
                echart.setOption(option);
            },
        }
    }
</script>



<style scoped lang="scss">

  .border-red {
    border: 1px solid red;
  }


  @import "../assets/style/_handle.scss";
  @import "../assets/style/dark";


  .title{
    color: $base-color;
  }
  .common-util {
    font-size: 18px;
    color: $bgColor;

    @include font_color("font_color1");
    @include background_color("background_color1");
    @include border_color("border_color1");
  }
</style>

