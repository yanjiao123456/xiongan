<template>
    <div class="Inquire">
        <div class="filtrate-box">
            <div class="bg"></div>
            <div class="title"><h3>筛选条件</h3></div>
            <div @click="filtrateShow=!filtrateShow"
                 :class="{'shift-knob-t':filtrateShow,'shift-knob-b':!filtrateShow}"></div>
            <el-collapse-transition>
                <div v-show="filtrateShow" class="filtrate-show">
                    <div class="item-row">
                        <el-radio class="choice" v-model="radio" label="1">电</el-radio>
                        <el-radio class="choice" v-model="radio" label="2">水</el-radio>
                        <el-radio class="choice" v-model="radio" label="3">冷热</el-radio>
                        <el-radio class="choice" v-model="radio" label="4">压缩空气</el-radio>
                    </div>
                    <div class="item-row item2">
                        <div class="more-box">
                            <el-checkbox v-model="checked1">支路:</el-checkbox>
                            <el-select class="select" v-model="select1" placeholder="请选择支路">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="more-box">
                            <el-checkbox class="ml92" v-model="checked2">分项:</el-checkbox>
                            <el-select class="select" v-model="select2" placeholder="请选择分项">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div v-show="sw" class="item-show more-box">
                            <el-checkbox class="ml92" v-model="checked3">部门:</el-checkbox>
                            <el-select class="select" v-model="select3" placeholder="请选择部门">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div v-show="sw" class="item-show more-box">
                            <el-checkbox class="ml92" v-model="checked4">位置:</el-checkbox>
                            <el-select class="select" v-model="select4" placeholder="请选择位置">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>


                        <div @click="sw=!sw" class="no-off more-box">
                            <i :class="{'icon-left':sw,'icon-right':!sw}"></i>
                            <span v-show="sw">收缩</span>
                            <span v-show="!sw">更多</span>
                        </div>
                    </div>
                    <div class="item-row-2 item-row">
                        <!--<el-col :xs="24" :sm="24" :lg="8">-->
                        <div class="fl">
                            <span class="date-select">时间选择</span>
                            <el-date-picker
                                    class=""
                                    v-model="value6"
                                    type="daterange"
                                    range-separator="—"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <!--<br>-->



                        <!--</el-col>-->
                        <!--<el-col :xs="24" :sm="24" :lg="8">-->
                        <div class="fl days-box">
                        <span class="days-tit date-select">
                            <i class="el-icon-search"></i>
                            快捷查询:
                        </span>
                            <div class="days-btn">
                                <span @click="days=0" :class="{cur:days==0}">前1天</span>
                                <span @click="days=1" :class="{cur:days==1}">前3天</span>
                                <span @click="days=2" :class="{cur:days==2}">前7天</span>
                                <span @click="days=3" :class="{cur:days==3}">前1月</span>
                            </div>
                        </div>
                        <!--</el-col>-->
                    </div>

                    <div class="btns-box">
                        <div @click="btns=0" :class="{'btn-item':true,cur:btns==0}">查询</div>
                        <div @click="btns=1" :class="{'btn-item':true,cur:btns==1}">重置</div>
                        <div @click="btns=2" :class="{'btn-item':true,cur:btns==2}">个性化</div>
                    </div>

                </div>
            </el-collapse-transition>

        </div>

        <!--能耗-->
        <div class="consumption-box">
            <el-row :gutter="24">
                <el-col :key="index" v-for="(v,index) in consumptionData" :xl="6" :lg="6" :md="24" :sm="24" :xs="24">
                    <div :class="v.class">
                        <div class="bg"></div>
                        <div :class="v.col">
                            <i class="icon-nh"></i>
                            {{ v.tit }}
                        </div>
                        <div class="electricity">
                            <span class="ele-tit">用电量</span>
                            <span class="num">{{ v.electricity }}</span>
                            <span class="unit">kWh</span>
                        </div>
                        <div class="number-box">
                            <div class="electricity-number">
                                <span class="nums">{{ v.num1 }}</span>
                                <span class="date">{{ v.data1 }}</span>
                            </div>
                            <div class="electricity-center">
                                <i class="point"></i>
                            </div>
                            <div class="electricity-number">
                                <span class="nums">{{ v.num2 }}</span>
                                <span class="date">{{ v.data2 }}</span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

        </div>
        <!--能耗-->

        <!--能耗大数据图表 start-->
        <div class="energy-Echarts">
            <div class="bg"></div>
            <div class="title"><h3>能耗趋势</h3></div>
            <div id="myChart" style="width: 100%;height: 100%;"></div>
        </div>
        <!--能耗大数据图表 end-->

        <div class="Table">
            <div class="bg"></div>
            <div class="title"><h3>数据列表</h3>
                <div class="head-right"><i class="icon-pdf"></i><i class="icon-excel"></i></div>
            </div>

            <template-table :data-tit="tableTitle"></template-table>
            <div class="selector">
                <i class="icon-front"></i>
                <i class="icon-prev"></i>
                <div class="page-num">
                    <div class="bg"></div>
                    <input type="text" value="1">
                </div>

                <span class="page-all">
                        /共1页
                    </span>
                <i class="icon-next"></i>
                <i class="icon-last"></i>
                <div class="count">
                    <div class="bg"></div>
                    <select>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import TemplateTable from '../views/template-table'

    var echarts = require('echarts');
    export default {
        name: "inquire",
        data() {
            return {
                radio: '1',
                filtrateShow: true,
                days: 2,
                count: '',
                btns: 0,
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                select1: '',
                select2: '',
                select3: '',
                select4: '',
                sw: true,
                value6: '',

                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                consumptionData: [
                    {
                        tit: '2AAH101-1电源线_能耗',
                        col: 'head col1',
                        class: 'consumption-item',
                        electricity: 1066.56,
                        num1: 156345666.56,
                        num2: 126065666.54,
                        data1: '2018-10-01 10:02 30',
                        data2: '2018-10-01 10:02 60',
                    },
                    {
                        tit: '2AAH101-1电源线_能耗',
                        col: 'head col2',
                        class: 'consumption-item',
                        electricity: 1066.56,
                        num1: 156345666.56,
                        num2: 126065666.54,
                        data1: '2018-10-01 10:02 30',
                        data2: '2018-10-01 10:02 60',
                    },
                    {
                        tit: '2AAH101-1电源线_能耗',
                        col: 'head col3',
                        class: 'consumption-item',
                        electricity: 1066.56,
                        num1: 156345666.56,
                        num2: 126065666.54,
                        data1: '2018-10-01 10:02 30',
                        data2: '2018-10-01 10:02 60',
                    },
                    {
                        tit: '2AAH101-1电源线_能耗',
                        col: 'head col4',
                        class: 'consumption-item',
                        electricity: 1066.56,
                        num1: 156345666.56,
                        num2: 126065666.54,
                        data1: '2018-10-01 10:02 30',
                        data2: '2018-10-01 10:02 60',
                    }
                ],
                tableTitle: {
                    title: '【 2018-09-18 00:00:00 至 2018-09-18 20:00:00 能耗数据 】',
                    titArr: [
                        {
                            prop: "id",
                            label: "日期",
                            sortable: false
                        },
                        {
                            prop: "dianliuIa",
                            label: "电流Ia",
                            sortable: false
                        },
                        {
                            prop: "dianliuIb",
                            label: "电流Ib",
                            sortable: false
                        },
                        {
                            prop: "dianliuIc",
                            label: "电流Ic",
                            sortable: false
                        },
                        {
                            prop: "zhengDianNeng",
                            label: "当前正向有功总电能",
                            sortable: false
                        },
                        {
                            prop: "cuUan",
                            label: "粗电压Uan",
                            sortable: false
                        },
                        {
                            prop: "cuUbn",
                            label: "粗电压Ubn",
                            sortable: false
                        },
                        {
                            prop: "cuUcn",
                            label: "粗电压Ucn",
                            sortable: false
                        },
                        {
                            prop: "sum",
                            label: "总有功功率W",
                            sortable: false
                        },
                    ]
                },
            }
        },
        components: {
            TemplateTable
        },
        methods: {
            SetEchart() {
                // 基于准备好的dom，初始化echarts实例
                // var growRanking = echarts.init(document.getElementById('myChart'));

                var growRanking = document.getElementById('myChart');
                var growRankingChart = echarts.init(growRanking);
                var one = [224, 220, 335, 188, 350, 230, 354, 261];
                var two = [110, 220, 115, 300, 188, 120, 241, 321];
                var three = [300, 150, 215, 200, 108, 160, 223, 241];
                var four = [200, 100, 315, 100, 168, 220, 330, 210];
                var color = "#fff";
                // 指定图表的配置项和数据


                var option = {
                    color: ['#637EF9', '#1C97FF', '#38E68D', '#CFDB48', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                    legend: {
                        data: ['2AA101-1号电源线_能耗', '2AA102-1号电源线_能耗', '2AA103-1号电源线_能耗', '2AA104-1号电源线_能耗'],
                        align: 'left',
                        top:'5%',
                        x: 'center',
                        right: '4%',
                        icon: 'rect',
                        itemWidth: 10, // 图例图形宽度
                        itemHeight: 10, // 图例图形高度
                        itemGap: 50,
                        textStyle: {
                            color: 'rgb(91,227,224)',
                            fontSize: 12
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '1%',
                        bottom: '3%',
                        top: '15%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: [{
                        data: ['2018年10月16日', '2018年10月17日', '2018年10月18日', '2018年10月19日', '2018年10月20日', '2018年10月21日', '2018年10月22日', '2018年10月23日'],
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(91,227,224)'//x轴坐标颜色
                            }
                        },
                        boundaryGap: true
                    }],
                    yAxis: [
                        {
                            type: 'value',
                            name: '单位（%）',
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(223,253,255)'
                                }
                            },
                            axisLabel: {
                                margin: 10,
                                textStyle: {
                                    fontSize: 14
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: 'rgb(42,81,125)'
                                }
                            }
                        }
                    ],
                    series: [{
                        name: '2AA101-1号电源线_能耗',
                        type: 'bar',
                        stack: '2AA101-1号电源线_能耗',
                        data: one
                    }, {
                        name: '2AA102-1号电源线_能耗',
                        type: 'bar',
                        stack: '2AA102-1号电源线_能耗',
                        data: two
                    }, {
                        name: '2AA103-1号电源线_能耗',
                        type: 'bar',
                        stack: '2AA103-1号电源线_能耗',
                        data: three
                    }, {
                        name: '2AA104-1号电源线_能耗',
                        type: 'bar',
                        stack: '2AA104-1号电源线_能耗',
                        data: four
                    }
                    ]
                }


                // 使用刚指定的配置项和数据显示图表。
                growRankingChart.setOption(option);
                window.onresize=function(){
                    growRankingChart.resize;
                }
            },
            getSummaries(param) {
                const {columns, data} = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '总价';
                        return;
                    }
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += ' 元';
                    } else {
                        sums[index] = 'N/A';
                    }
                });

                return sums;
            }

        },
        mounted() {
            this.SetEchart();
            // =================================================

        }

    }
</script>


<style lang="scss" scoped>
    .Inquire {
        width: 100%;
        height: 100%;
        position: relative;
        .fl {
            float: left;
        }
        .bg {
            width: 100%;
            height: 100%;
            position: absolute;
            box-sizing: border-box;
            top: 0;
            left: 0;
            border: 1px solid rgba(42, 244, 255, 1);
            box-shadow: 0px 3px 10px 0px rgba(23, 48, 80, 1), 0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
            opacity: 0.5;
            border-radius: 3px;
            z-index: 0;
        }
        .filtrate-box {
            width: 100%;
            /*height: 292px;*/
            position: relative;
            box-sizing: border-box;
            padding: 15px 20px;
            background-color: #0B3F6F;
            .shift-knob-t {
                width: 61px;
                height: 20px;
                background: url("../../assets/NengHaoChaXun/bt_zk.png") no-repeat;
                position: absolute;
                left: 50%;
                bottom: -20px;
                margin-left: -30px;
            }
            .shift-knob-b {
                width: 61px;
                height: 20px;
                background: url("../../assets/NengHaoChaXun/bt_ss.png") no-repeat;
                position: absolute;
                left: 50%;
                bottom: -20px;
                margin-left: -30px;
            }
            .title {
                /*margin-bottom: 15px;*/
                h3 {
                    font-size: 16px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: bold;
                    color: rgba(254, 254, 255, 1);
                }
            }

            .filtrate-show {
                width: 100%;
                display: flex;
                position: relative;
                flex-direction: column;
                z-index: 5;
                margin-top: 15px;
                /*margin-bottom: 60px;*/
                .item2 {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: flex-start;

                    .more-box {
                        flex: 1;
                        display: flex;
                        flex-wrap: nowrap;
                        justify-content: flex-start;
                        align-items: center;
                    }
                }

                .item-row {
                    height: 60px;
                    width: 100%;
                    background-color: #174B7B;
                    display: flex;
                    align-items: center;
                    border-bottom: 2px solid #0B3F6F;
                    box-sizing: border-box;
                    padding: 0 10px;
                    .select {
                        /*width: 220px;*/
                        margin-left: 7px;
                    }
                    .ml92 {
                        /*margin-left: 92px;*/
                    }
                    .no-off {
                        /*margin-left: 92px;*/
                        cursor: pointer;
                        .icon-left {
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            background: url("../../assets/NengHaoChaXun/icon_ss.png") no-repeat;
                        }
                        .icon-right {
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            background: url("../../assets/NengHaoChaXun/icon_gd.png") no-repeat;
                        }
                        span {
                            font-size: 12px;
                            font-family: HiraginoSansGB-W6;
                            font-weight: bold;
                            position: relative;
                            top: -1px;
                            color: rgba(45, 243, 255, 1);
                        }
                    }
                    .date-select {
                        font-size: 14px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: bold;
                        color: rgba(45, 243, 255, 1);
                    }
                    .days-box {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }
                    .days-btn {
                        width: 288px;
                        height: 28px;
                        border: 1px solid rgba(45, 243, 255, 1);
                        opacity: 0.8;
                        margin-left: 5px;
                        border-radius: 2px;
                        display: flex;
                        span {
                            flex: 1;
                            font-size: 12px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: bold;
                            color: rgba(219, 253, 255, 1);
                            text-align: center;
                            line-height: 28px;
                            cursor: pointer;
                        }
                        .cur {
                            background: linear-gradient(180deg, rgba(6, 88, 110, 1), rgba(27, 138, 168, 1));
                            border: 1px solid rgba(153, 236, 241, 1);
                            box-shadow: 0px 1px 1px 0px rgba(12, 28, 79, 0.2);
                            border-radius: 2px;
                            color: #2DF3FF;
                        }
                    }

                }
                .item-row-2{
                    height: auto;
                    width: 100%;
                    padding: 13px 10px;
                    background-color: #174B7B;
                    display: block;

                    border-bottom: 2px solid #0B3F6F;
                    box-sizing: border-box;
                    /*padding: 0 10px;*/
                }
                .btns-box {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 17px;
                    .btn-item {
                        width: 81px;
                        height: 41px;
                        cursor: pointer;
                        margin-right: 20px;
                        text-align: center;
                        line-height: 41px;
                        font-size: 14px;
                        font-family: HiraginoSansGB-W6;
                        font-weight: normal;
                        color: rgba(97, 213, 255, 1);
                        background: url("../../assets/NengHaoChaXun/bt_wxz.png") no-repeat;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .cur {
                        background: url("../../assets/NengHaoChaXun/bt_xz.png") no-repeat;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                }
            }
        }
        .consumption-box {
            width: 100%;
            /*height: 164px;*/
            margin-top: 24px;
            overflow: hidden;
            /*display: flex;*/
            /*justify-content: space-between;*/
            position: relative;
            z-index: 5;
            .ml27 {
                margin-left: 27px;
            }
            .consumption-item {
                /*flex: 1;*/
                /*float: left;*/
                position: relative;
                @media screen and (max-width: 1200px) {
                    margin-left: 0;
                    margin-top: 15px;
                }
                .col1 {
                    background: #637EF9;
                }
                .col2 {
                    background: #1C97FF;
                }
                .col3 {
                    background: #38E68D;
                }
                .col4 {
                    background: #CFDB48;
                }
                .head {
                    width: 100%;
                    height: 38px;

                    opacity: 0.8;
                    border-radius: 3px 3px 0px 0px;
                    box-sizing: border-box;
                    padding: 0 21px;
                    position: relative;
                    z-index: 5;

                    font-size: 16px;
                    font-family: HiraginoSansGB-W6;
                    font-weight: normal;
                    color: rgba(232, 238, 234, 1);
                    line-height: 38px;
                    .icon-nh {
                        display: inline-block;
                        width: 11px;
                        height: 15px;
                        background: url("../../assets/NengHaoChaXun/icon_nh.png") no-repeat;
                    }
                }
                .electricity {
                    width: 100%;
                    margin-top: 28px;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 0 21px;
                    position: relative;
                    z-index: 5;
                    .ele-tit {
                        font-size: 14px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: normal;
                        color: rgba(183, 208, 210, 1);
                    }
                    .num {
                        font-size: 18px;
                        font-family: DigitaldreamFat;
                        font-weight: 400;
                        color: rgba(44, 244, 242, 1);
                    }
                    .unit {
                        font-size: 14px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: normal;
                        color: rgba(232, 238, 234, 1);
                    }
                }
                .number-box {
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 0 21px;
                    margin-top: 30px;
                    position: relative;
                    padding-bottom: 12px;
                    z-index: 5;
                    .electricity-number {
                        display: flex;
                        flex-direction: column;
                        .nums {
                            font-size: 12px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: normal;
                            color: rgba(255, 255, 255, 1);
                        }
                        .date {
                            font-size: 10px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: normal;
                            color: rgba(183, 208, 210, 1);
                        }

                    }
                    .electricity-center {
                        position: relative;
                        .point {
                            position: absolute;
                            bottom: 0;
                            left: -18px;
                            display: inline-block;
                            width: 38px;
                            height: 6px;
                            background: url("../../assets/NengHaoChaXun/point.png") no-repeat;
                        }
                    }

                }
            }
        }
        /*大数据图表*/
        .energy-Echarts {
            width: 100%;
            height: 486px;
            margin-top: 25px;
            background: #0B3F6F;
            position: relative;
            box-sizing: border-box;
            padding: 23px 20px;
            .title {
                display: flex;
                justify-content: space-between;
                position: relative;
                z-index: 5;
                /*margin-bottom: 15px;*/
                h3 {
                    font-size: 16px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: bold;
                    color: rgba(254, 254, 255, 1);
                }

            }
            #main {
                width: 100%;
                height: 100%;
            }
        }
        .Table {
            width: 100%;
            position: relative;
            box-sizing: border-box;
            padding: 23px 20px;
            margin-top: 25px;
            margin-bottom: 25px;
            .title {
                display: flex;
                justify-content: space-between;
                position: relative;
                z-index: 5;
                /*margin-bottom: 15px;*/
                h3 {
                    font-size: 16px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: bold;
                    color: rgba(254, 254, 255, 1);
                }
                .icon-pdf {
                    display: inline-block;
                    width: 21px;
                    height: 21px;
                    background: url("../../assets/NengHaoChaXun/pdf.png") no-repeat;
                    margin-right: 20px;
                }
                .icon-excel {
                    display: inline-block;
                    width: 21px;
                    height: 21px;
                    background: url("../../assets/NengHaoChaXun/excel.png") no-repeat;
                }
            }
            .table-box {
                position: relative;
                z-index: 5;
                border: 1px solid #15759A;
                /*padding-bottom: 60px;*/
                .table-tit {
                    padding: 20px;
                    width: 100%;
                    /*letter-spacing:2px;*/
                    font-size: 14px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: normal;
                    color: rgba(95, 251, 248, 1);
                    text-align: center;
                }

            }
            .selector {
                position: relative;
                z-index: 5;
                display: flex;
                justify-content: flex-end;
                margin-top: 20px;
                align-items: center;

                .icon-front {
                    width: 10px;
                    height: 14px;
                    display: inline-block;
                    background: url("../../assets/NengHaoChaXun/icon_zz.png") no-repeat;
                }
                .icon-prev {
                    width: 8px;
                    height: 14px;
                    display: inline-block;
                    transform: rotate(180deg);
                    margin-left: 10px;
                    background: url("../../assets/NengHaoChaXun/箭头2.png") no-repeat;
                }
                .icon-next {
                    width: 8px;
                    height: 14px;
                    display: inline-block;
                    margin-left: 20px;
                    background: url("../../assets/NengHaoChaXun/箭头2.png") no-repeat;
                }
                .icon-last {
                    margin-left: 10px;
                    width: 10px;
                    height: 14px;
                    display: inline-block;
                    background: url("../../assets/NengHaoChaXun/icon_yy.png") no-repeat;
                }
                .page-num {

                    width: 38px;
                    height: 26px;
                    margin-left: 20px;
                    position: relative;
                    input {
                        position: relative;
                        z-index: 5;
                        width: 100%;
                        height: 100%;
                        background: rgba(26, 96, 134, 0);
                        border: 0px;
                        outline: none;
                        cursor: pointer;
                        font-size: 12px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: bold;
                        color: rgba(45, 243, 255, 1);
                        text-align: center;
                    }
                }
                .page-all {
                    font-size: 12px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: bold;
                    color: rgba(45, 243, 255, 1);
                    margin-left: 10px;
                }
                .count {
                    width: 48px;
                    height: 26px;
                    margin-left: 22px;
                    position: relative;
                    select {
                        border: 0px;
                        outline: none;
                        cursor: pointer;
                        position: relative;
                        z-index: 5;
                        width: 100%;
                        height: 100%;
                        background: rgba(26, 96, 134, 0);
                        font-size: 12px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: bold;
                        color: rgba(45, 243, 255, 1);
                        option {
                            background-color: #0B3F6F;
                        }
                    }
                }
            }
        }
    }
</style>
