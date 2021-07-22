<template>
  <div>
    <button @click="switchs('light')" style="color: #fff">浅色主题</button>
    <button @click="switchs('dark')" style="color: #f00">红色主题</button>

    <div>
      改echarts主题
      <button @click="changeEchart">change</button>
    </div>
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
        <EchartTmp id="bar" ref="barChart" @chartInstance="chartInstance2"></EchartTmp>
      </div>
    </div>
  </div>
</template>
<script>
    import cut from "../utils/publicStyle.js";
    import {mapMutations, mapState, mapGetters} from 'vuex'
    import bus from "../utils/bus";
    import {LineOptions, PieOptions} from "../options/chartOptions";

    export default {
        name: "changeTheme",
        data() {
            return {
                cutcheack: true, //主题切换
                value: false,
                pieEchart: null
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
            canvas() {
                let option = new PieOptions().option;
                this.pieEchart.setOption(option);
            },
            chartInstance2(echart) {
                echart.hideLoading()
                let option = {
                    title: {
                        text: '某地区蒸发量和降水量',
                        subtext: '纯属虚构'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['蒸发量', '降水量']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '蒸发量',
                            type: 'bar',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name: '降水量',
                            type: 'bar',
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                            markPoint: {
                                data: [
                                    {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                                    {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                };

                echart.setOption(option);
            },
            changeEchart() {
                this.$refs.barChart.chart.dispose();
                this.$refs.barChart.initChart('walden')
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
