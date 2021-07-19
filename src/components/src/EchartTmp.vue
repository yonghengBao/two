<template>
  <div class="chart-component">
    <div :id="id" class="chart"></div>
  </div>
</template>
<script>
  import bus from "../../utils/bus";
  import {mapGetters} from "vuex";

    export default {
        name: "EchartTmp",
        // 验证类型
        props: {
            id: {
                required: true,
                type: String
            },
            colorProp:{
                type:String,
                default:''
            }
        },
        computed:{
            ...mapGetters(['pieColors','lineColors'])
        },
        created(){
            bus.$on('changeTheme',()=>{
                this.colorProp && this.reload(this[this.colorProp]);
            })
        },

        data() {
            return {
                chart: null,
                resetFn: null
            }
        },
        methods: {
            initChart() {
                let chartDom = document.getElementById(this.id);
                this.$nextTick(() => {
                    this.chart = this.$echarts.init(chartDom)
                    this.chart.showLoading({
                        text: '',
                        color: '#eee',
                        maskColor: 'transparent'
                    })
                    this.$emit('chartInstance', this.chart);
                })
            },
            reload(color){
                let opt = this.chart.getOption();
                opt.color = color;
                this.chart.setOption(opt);
            }
        },
        mounted() {
            this.initChart()
        },
        beforeDestroy() {
            bus.$off('changeTheme')
        }
    }
</script>
<style scoped>
  .chart-component {
    position: relative;
  }

  .chart-component, .chart {
    height: 100%;
    width: 100%;
  }
</style>
