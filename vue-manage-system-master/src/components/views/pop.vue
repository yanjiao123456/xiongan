<template>
    <div class="peiDianTu-pop">
        <div :class="{block:true,bigBlock:!size}">
            <div class="bg"></div>
            <div class="pop-content">
                <div class="head">
                    <span @click="winSize" :class="size?zoomIn:zoomOut"></span>
                    <span @click="close" class="close"></span>
                </div>
                <div class="myCharts">
                    <div class="head">
                        <div class="title">实时曲线</div>
                        <div class="tabNav">
                            <span class="btn cur">功率</span>
                            <span class="btn">电压</span>
                            <span class="btn">电流</span>
                            <span class="btn">表底</span>
                        </div>
                    </div>
                    <my-echarts v-if="hackReset" :option="option"></my-echarts>
                    <!--<my-echarts :option="option"></my-echarts>-->
                    <!--<div id="diyLine" style="width: 100%; height: 100%"></div>-->
                </div>

                <div class="table">
                    <div class="head">
                        <div class="title">数据列表</div>
                    </div>
                    <div class="table-content">
                        <table cellSpacing="0">
                            <tr>
                                <th>名称</th>
                                <th>最大值</th>
                                <th>最大值时间</th>
                                <th>最小值</th>
                                <th>最小值时间</th>
                            </tr>
                            <tr>
                                <td>电流la</td>
                                <td>30.25</td>
                                <td>2018-10-19 12:10:00</td>
                                <td>11.1400</td>
                                <td>2018-10-19 12:10:00</td>
                            </tr>
                            <tr class="trCur">
                                <td>电流la</td>
                                <td>30.25</td>
                                <td>2018-10-19 12:10:00</td>
                                <td>11.1400</td>
                                <td>2018-10-19 12:10:00</td>
                            </tr>
                            <tr>
                                <td>电流la</td>
                                <td>30.25</td>
                                <td>2018-10-19 12:10:00</td>
                                <td>11.1400</td>
                                <td>2018-10-19 12:10:00</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myEcharts from '../views/template-popEcharts'

    export default {
        name: "pop",
        data(){
            return {
                size:true,
                zoomIn:'zoomIn',
                zoomOut:'zoomOut',
                hackReset:true,
                option:{
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    // formatter(datas){
                    //     // console.log(datas);
                    //     for (let i = 0; i < datas.length; i++) {
                    //         console.log(datas[i]);
                    //         var res = `<div class="box"><p>name:`+datas[i].name+`</p><p>数据:`+datas[i].data+`</p></div>`;
                    //         return res;
                    //     }
                    // },
                    grid: {
                        top: 30,
                        bottom: 30,
                        left:50,
                        right:20
                    },
                    legend: {
                        icon: 'rect',
                        itemWidth: 30, // 图例图形宽度
                        itemHeight: 6, // 图例图形高度
                        data:['电流Ia','电流Ib','电流Ic'],
                        textStyle:{
                            color:'#5FFBF8',//示例标识文字颜色
                            fontSize:10
                        }
                    },
                    xAxis : [
                        {
                            type : 'category',
                            axisLine:{
                                lineStyle:{
                                    color:'rgb(91,227,224)'//x轴坐标颜色
                                }
                            },
                            boundaryGap :true,
                            data :['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        }
                    ],
                    yAxis : [
                        {
                            type: 'value',
                            name: '单位（A）',
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgba(223, 253, 255, 1)'

                                }
                            },
                            axisLabel: {
                                margin: 10,
                                textStyle: {
                                    fontSize: 12
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(151, 160, 211, 1)'
                                }
                            }
                        }
                    ],
                    series: [{
                        name: '电流Ia',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 2
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(31,192,243)',
                                borderColor: 'rgba(31,192,243,0.2)',
                                borderWidth: 12

                            }
                        },
                        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122,220,
                            182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
                    }, {
                        name:'电流Ib',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 2
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(255,150,2)',
                                borderColor: 'rgba(255,150,2,0.2)',
                                borderWidth: 12

                            }
                        },
                        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150,
                            120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
                    },{
                        name:'电流Ic',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 2
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(0,224,153)',
                                borderColor: 'rgba(0,224,153,0.2)',
                                borderWidth: 12

                            }
                        },
                        data: [150, 150, 225, 105, 162, 105, 112, 240, 122, 141, 134, 180,
                            180, 140, 105, 185, 172, 145, 142, 280, 112, 101, 104, 110]
                    }
                    ]
                },
            }
        },
        components:{
            myEcharts
        },
        methods:{
            winSize(){
                this.hackReset = false
                this.$nextTick(() => {
                    this.hackReset = true
                })

                this.size=!this.size
            },
            close(){
                this.$router.go(-1);
            }

        },
        mounted(){

        }

    }
</script>

<style lang="scss" scoped>
    .peiDianTu-pop {
        background-color: #000;
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        overflow-y: auto;
        overflow-x: hidden;

        /*overflow: hidden;*/

        .block {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            /*overflow: hidden;*/
            /*background-color: #062843;*/
            width: 1000px;
            height: 757px;
            /*width: 100%;*/
            /*height: auto;*/
            margin: auto;
            box-sizing: border-box;
            padding: 12px 30px 30px 30px;

            background: rgba(28, 34, 65, 1);
            border: 1px solid #1A8EA0;
            box-shadow: 0px 3px 9px 0px rgba(1, 16, 31, 1), 0px 3px 30px 2px #1A8EA0 inset;
            border-radius: 3px;

            .pop-content {

                width: 100%;
                height: 100%;

                z-index: 5;
                box-sizing: border-box;

                .head {
                    width: 100%;
                    display: flex;
                    height: 30px;
                    justify-content: flex-end;
                    .zoomIn {
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        background: url("../../assets/PeiDianJianCe/btn_ck.png") no-repeat;
                        &:hover{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background: url("../../assets/PeiDianJianCe/btn_fd-xt.png") no-repeat;
                        }
                        &:active{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background: url("../../assets/PeiDianJianCe/btn_fd-ax.png") no-repeat;
                        }
                    }
                    .zoomOut{
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        background: url("../../assets/PeiDianJianCe/btn_sx-mr.png") no-repeat;
                        &:hover{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background: url("../../assets/PeiDianJianCe/btn_sx-xt.png") no-repeat;
                        }
                        &:active{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background: url("../../assets/PeiDianJianCe/btn_sx-ax.png") no-repeat;
                        }
                    }
                    .close {
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        background: url("../../assets/PeiDianJianCe/btn_close.png") no-repeat;
                        margin-left: 8px;
                        &:hover{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background: url("../../assets/PeiDianJianCe/btn_gb-xt.png") no-repeat;
                        }
                        &:active{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background: url("../../assets/PeiDianJianCe/btn_gb-ax.png") no-repeat;
                        }
                    }
                }
                .myCharts {
                    width: 100%;
                    height: 403px;
                    margin-top: 13px;
                    box-sizing: border-box;
                    padding: 13px 22px;
                    border: 1px solid #1A8DA1;
                    .head {
                        display: flex;
                        justify-content: space-between;
                        .title {
                            font-size: 16px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: bold;
                            color: rgba(255, 255, 255, 1);
                        }
                        .tabNav {
                            span {
                                width: 62px;
                                height: 35px;
                                display: inline-block;
                                background: url("../../assets/PeiDianJianCe/矩形_未选中1.png") no-repeat;
                                font-size: 12px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: bold;
                                color: rgba(97, 213, 255, 1);
                                text-align: center;
                                line-height: 35px;
                            }
                            .cur {
                                background: url("../../assets/PeiDianJianCe/矩形_未选中.png") no-repeat;
                                font-size: 12px;
                                font-family: HiraginoSansGB-W6;
                                font-weight: bold;
                                color: rgba(45, 243, 255, 1);
                            }
                        }
                    }

                }
                .table {
                    width: 100%;
                    /*height: 247px;*/
                    margin-top: 13px;
                    box-sizing: border-box;

                    border: 1px solid #1A8DA1;
                    .head {
                        padding: 13px 22px;
                        display: flex;
                        justify-content: space-between;
                        .title {
                            font-size: 16px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: bold;
                            color: rgba(255, 255, 255, 1);
                        }
                    }
                    .table-content {
                        width: 100%;
                        height: 194px;
                        margin-top: -5px;
                        table {
                            width: 100%;
                            height: 100%;
                            color: #000;

                            th {
                                background-color: #16456A;
                                font-size: 14px;
                                font-family: HiraginoSansGB-W6;
                                font-weight: normal;
                                color: rgba(95, 251, 248, 1);
                                border-top: 1px solid #195F80;
                                border-right: 1px solid #195F80;
                                height: 48px;
                            }
                            td {
                                text-align: center;
                                font-size: 14px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: normal;
                                color: rgba(221, 255, 255, 1);
                                border-right: 1px solid #195F80;
                            }
                            tr {
                                height: 48px;
                                background-color: #062742;
                            }
                            .trCur {
                                background-color: #054E78;

                                td {
                                    font-size: 14px;
                                    font-family: HiraginoSansGB-W6;
                                    font-weight: normal;
                                    color: rgba(255, 255, 255, 1);
                                }
                            }
                        }
                    }
                }

            }

        }

        .bigBlock{
            width: 100%;
            height: auto;
            position: static;
            .pop-content .myCharts{
                height: 723px;
                overflow: hidden;
            }
        }

    }
</style>
