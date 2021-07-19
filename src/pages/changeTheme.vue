<template>
  <div>
    <button @click="switchs('light')" style="color: #fff">浅色主题</button>
    <button @click="switchs('dark')" style="color: #f00">红色主题</button>
    <div class='home'>

      <div class="el-container">
        文字测试
      </div>
    </div>
    <div>
      <el-switch v-model="value"></el-switch>
      <el-input placeholder="placeholder"></el-input>
    </div>
    <div class="line-box">
      <EchartTmp id="line" colorProp="lineColors" @chartInstance="chartInstance"></EchartTmp>
    </div>
    <div class="line-box">
      <div>
        <EchartTmp id="pie" colorProp="pieColors" ref="pieChart" @chartInstance="chartInstance1"></EchartTmp>
      </div>
      <div>
        <EchartTmp  id="bar" @chartInstance="chartInstance2"></EchartTmp>
      </div>
    </div>
  </div>
</template>
<script>
    import cut from "../utils/publicStyle.js";
    import {mapMutations, mapState,mapGetters} from 'vuex'
    import bus from "../utils/bus";
    import {LineOptions, PieOptions} from "../options/chartOptions";

    export default {
        name: "changeTheme",
        data() {
            return {
                cutcheack: true, //主题切换
                value: false,
                pieEchart:null
            };
        },
        methods: {
            // 左侧导航隐藏或显示
            // 切换主题
            ...mapMutations({
                SET_PIE: 'colorConfig/SET_PIE'
            }),
            switchs(theme) {
                cut(theme); // 修改全局theme.scss中的全局变量
                this.cutcheack = !this.cutcheack;
                if (!this.cutcheack) {
                    document.getElementById('style').href = 'static/theme/custorEelmenttheme/index.css';
                } else {
                    document.getElementById('style').href = 'static/theme/elementDefault/index.css';
                }
                this.SET_PIE(theme);
                bus.$emit('changeTheme');
            },
            chartInstance(echart) {
                echart.hideLoading()
                let option = new LineOptions().option;
                echart.setOption(option, true);
            },
            chartInstance1(echart) {
                echart.hideLoading()
                this.pieEchart = echart;
                this.canvas();
            },
            canvas(){
                let option = new PieOptions().option;
                this.pieEchart.setOption(option);
            },
            chartInstance2(echart) {
                echart.hideLoading()
                let option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }]
                };
                echart.setOption(option);
            },
        },
    };
</script>
<style lang='scss' scope>
  .home {
    height: 100%;
    width: 100%;
    background: $bgColor;

    .el-container {
      height: 100%;
      color: $fontColor;
    }
  }

  .line-box {
    height: 200px;
  }

  .line-box > div {
    height: 100%;
    width: 45%;
    display: inline-block;
  }
</style>
