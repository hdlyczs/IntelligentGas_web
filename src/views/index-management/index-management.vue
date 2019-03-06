<template>
    <div class="index_management clearfix">
        <div class="tab">
            <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type">
                {{tag.name}}
            </el-tag>
        </div>
        <div class="main">
            <el-row class="main_center">
                <el-col :span="24">
                  <div id="devSec" :style="{height: '367px',width:'50%',float:'left'}"></div>
                  <div id="devType" :style="{height: '367px',width:'48%',marginLeft:'2px',float:'right'}"></div>
                </el-col>
            </el-row>
            <el-row class="main_footer">
                <el-col :span="24">
                  <div id="infDev" :style="{height: '367px',width:'50%',float:'left'}"></div>
                  <div id="loopReg" :style="{height: '367px',width:'48%',marginLeft:'2px',float:'right'}"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import {indexManagementService} from '../../service/index';
    import echarts from 'echarts';
    export default {
        data(){
            return {
                tags: [
                    { name: '标签一', type: '' },
                ]
              };

        },
        methods:{
            drawDevSecChart(){
                this.$nextTick(function () {
                    var thistopValue =[];
                    if(this.topValue =="{}"){
                    }else{
                      this.topValue = '['+this.topValue+']';
                      thistopValue = eval(this.topValue);
                    }
                    var thistopData = eval(this.topData);
                    let devSecChart = echarts.init(document.getElementById('devSec'));
                    let option = {
                        backgroundColor : '#ffffff',
                        title : {
                          //text : '最新TOP5设备漏洞走势图',
                          text : '资产漏洞趋势统计',
                          padding : 12,
                          textStyle: {
                            fontSize: 18,
                            fontWeight: 'normal',
                            color: '#333333'  // 主标题文字颜色
                          }
                        },
                        tooltip : {
                          trigger : 'axis'
                        },
                        calculable : true,
                        xAxis: {
                          type: 'category',
                          boundaryGap: false,
                          axisLabel : {
                            /*formatter:function (value) {
                              return value+'次'
                            }*/
                          },
                          data: thistopData,
                        },
                        yAxis: {
                          type: 'value',
                        },
                        series: thistopValue,
                    };
                    devSecChart.setOption(option);
                    window.addEventListener("resize", function () {
                        devSecChart.resize();
                    });
                })
            },
            drawDevTypeChart(){
                this.$nextTick(function () {
                    var dataJsonAssType = eval(this.assetType);
                    var dataJsonAssName = eval(this.assetName);
                    let devTypeChart = echarts.init(document.getElementById('devType'));
                    let option = {
                      backgroundColor : '#ffffff',
                      title : {
                        //text : '设备类型统计TOP10',
                        text : '资产类型统计Top10',
                        padding : 12,
                        textStyle: {
                          fontSize: 18,
                          fontWeight: 'normal',
                          color: '#333333'  // 主标题文字颜色
                        }
                      },
                      color:['#758ecd','#58a4b0','#e5e5e5','#e57378','#a9bcd0'] ,
                      tooltip : {
                        trigger : 'item',
                        formatter : "{a} <br/>{b}: {c} ({d}%)"
                      },
                      legend : {
                        orient : 'vertical',
                        x : 'right',
                        data : dataJsonAssName,
                        formatter:function (value) {
                          var values = [];
                          if(value.length >=8){
                            values.push(value.substring(0,12)+'...');
                          }else{
                            values.push(value)
                          }
                          return values;
                        }
                      },
                      series : [ {
                        name : '设备类型统计TOP10',
                        type : 'pie',
                        radius : [ '50%', '70%' ],
                        avoidLabelOverlap : false,
                        label : {
                          normal : {
                            show : false,
                            position : 'center'
                          },
                          emphasis : {
                            show : true,
                            textStyle : {
                              fontSize : '26',
                              fontWeight : 'bold'
                            }
                          }
                        },
                        labelLine : {
                          normal : {
                            show : false
                          }
                        },
                        data : dataJsonAssType,
                      }]
                    };
                    devTypeChart.setOption(option);
                    window.addEventListener("resize", function () {
                      devTypeChart.resize();
                    });
                })

            },
            drawInfDevChart(){
              this.$nextTick(function () {
                var loopNameTop = eval(this.devLoopName);
                var loopCountTop = eval(this.devLoopCount);
                let infDevChart = echarts.init(document.getElementById('infDev'));
                let option = {
                  backgroundColor : '#ffffff',
                  title : {
                    // text : '影响设备数TOP5的漏洞',
                    text : '常见漏洞统计Top5',
                    padding : 12,
                    textStyle: {
                      fontSize: 18,
                      fontWeight: 'normal',
                      color: '#333333'  // 主标题文字颜色
                    }
                  },
                  tooltip : {
                    trigger : 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : ''        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter : "{b} : {c}"
                  },
                  calculable : true,
                  xAxis : [ {
                    type : 'value',
                    show : true,
                    splitLine:{
                      show:false
                    },
                  } ],
                  yAxis : [ {
                    type : 'category',
                    data : loopNameTop,
                    show : false,
                  } ],
                  series : [ {
                    type : 'bar',
                    itemStyle: {
                      normal: {
                        color: function(params) {
                          var colorList = ['#758ecd','#58a4b0','#e5d27a','#e7ba88','#e57378'];
                          return colorList[params.dataIndex]
                        },
                        label: {
                          show: true,
                          position: 'top',
                          formatter: '{b}',
                          textStyle: {
                            color: '#000000',
                            fontSize: 12
                          }
                        }
                      }
                    },
                    barWidth : 26,//柱图宽度
                    data :loopCountTop,
                  } ]
                };
                infDevChart.setOption(option);
                window.addEventListener("resize", function () {
                  infDevChart.resize();
                });
              })
            },
            drawLoopRegChart(){
              this.$nextTick(function () {
                var loopRegNameTop = eval(this.loopRegName);
                var loopRegCountTop = eval(this.loopRegCount);
                let loopRegChart = echarts.init(document.getElementById('loopReg'));
                let option = {
                  backgroundColor : '#ffffff',
                  title : {
                    // text : '任务区域分布TOP10',任务漏洞统计Top10
                    text : '任务漏洞统计Top10',
                    padding : 12,
                    textStyle: {
                      fontSize: 18,
                      fontWeight: 'normal',
                      color: '#333333'  // 主标题文字颜色
                    }
                  },
                  tooltip : {
                    trigger : 'item',
                    formatter : "{a} <br/>{b} : {c} ({d}%)"
                  },
                  color:['#758ecd','#58a4b0','#e5e5e5','#e57378','#a9bcd0'] ,
                  legend : {
                    orient : 'vertical',
                    x : 'right',
                    data : loopRegNameTop,
                    formatter:function (value) {
                      var texts = [];
                      if(value.length >=8){
                        texts.push(value.substring(0,12)+'...');
                      }else{
                        texts.push(value)
                      }
                      return texts;
                    }
                  },
                  calculable : true,
                  series : [ {
                    name : '漏洞区域分布',
                    type : 'pie',
                    radius : [ '50%', '70%' ],
                    avoidLabelOverlap : false,
                    label : {
                      normal : {
                        show : false,
                        position : 'center'
                      },
                      emphasis : {
                        show : true,
                        textStyle : {
                          fontSize : '26',
                          fontWeight : 'bold'
                        }
                      }
                    },
                    labelLine : {
                      normal : {
                        show : false
                      }
                    },
                    data : loopRegCountTop,
                  }]
                };
                loopRegChart.setOption(option);
                window.addEventListener("resize", function () {
                  loopRegChart.resize();
                });
              })
            },
        },
        created(){
          this.drawDevSecChart();
          this.drawDevTypeChart();
          this.drawInfDevChart();
          this.drawLoopRegChart();
        }

    }
</script>
<style lang="scss" scoped="" type="text/css">
  .index_management{
      padding:15px;
      padding-bottom:20px;
      //background: red;
      .tab{
          float:left;
      }
      .main{
          padding:15px;
          margin-top:20px;
          padding-bottom:20px;
          .main_center{
            padding-top:12px;
          }
          .main_footer{
            padding-top:12px;
          }

      }
  }
</style>
