<template>
    <div class="Inquire">

        <div class="filtrate-box">
            <div class="bg"></div>
            <div class="title"><h3>筛选条件</h3></div>
            <div @click="filtrateShow=!filtrateShow" :class="{'shift-knob-t':filtrateShow,'shift-knob-b':!filtrateShow}"></div>
            <el-collapse-transition>
                <div v-show="filtrateShow" class="filtrate-show">

                    <div class="item-row item2">
                        <div class="more-box">
                            <el-radio class="choice" v-model="radio" label="1">部门:</el-radio>

                            <el-select class="select" v-model="select1" placeholder="仪表类型">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="more-box">
                            <el-radio class="choice" v-model="radio" label="2">分项:</el-radio>

                            <el-select class="select" v-model="select1" placeholder="仪表名称">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="more-box">
                            <el-radio class="choice" v-model="radio" label="3">位置:</el-radio>
                            <el-select class="select" v-model="select1" placeholder="仪表编码">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="more-box"></div>

                    </div>
                    <div class="item-row">
                        <i class="icon-lx"></i>
                        <span class="checkbox-tit">类型:</span>
                        <el-radio class="choice" v-model="radio1" label="1">总</el-radio>
                        <el-radio class="choice" v-model="radio1" label="2">电</el-radio>
                        <el-radio class="choice" v-model="radio1" label="3">水</el-radio>
                    </div>
                    <div class="item-row">
                        <i class="icon-jh"></i>
                        <span class="checkbox-tit">计划:</span>
                        <el-radio class="choice" v-model="radio2" label="1">产量</el-radio>
                        <el-radio class="choice" v-model="radio2" label="2">产值</el-radio>

                    </div>
                    <div class="item-row">
                        <i class="icon-wd"></i>
                        <span class="checkbox-tit">维度：</span>
                        <el-radio class="choice" v-model="radio3" label="1">月</el-radio>
                        <el-radio class="choice" v-model="radio3" label="2">年</el-radio>
                    </div>
                    <div class="item-row">
                        <span class="date-select">时间选择</span>
                        <el-date-picker
                                class=""
                                v-model="value6"
                                type="datetimerange"
                                range-separator="—"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </div>


                    <div class="btns-box">
                        <div @click="btns=0" :class="{'btn-item':true,cur:btns==0}">查询</div>
                        <div @click="btns=1" :class="{'btn-item':true,cur:btns==1}">重置</div>
                        <!--<div @click="btns=2,gxhShow=true" :class="{'btn-item':true,cur:btns==2}">个性化</div>-->
                    </div>

                </div>
            </el-collapse-transition>

        </div>
        <div class="Table">
            <div class="bg"></div>
            <div class="title"><h3>能耗趋势</h3>
                <div class="head-right">
                    <div class="count">
                        <!--<div class="bg"></div>-->
                        <select>
                            <option>线性回归</option>
                            <option>二次回归</option>

                        </select>
                    </div>
                   <div class="saveBtn">保存分析结果</div>
                </div>
            </div>
            <div class="tit">
                【 XX部门 2018-09至2018-09产量能耗相关性分析 】
            </div>
            <div class="charts"></div>

        </div>


        <div class="Table">
            <div class="bg"></div>
            <div class="title"><h3>数据列表</h3>
                <div class="head-right">

                    <i class="icon-pdf"></i><i class="icon-excel"></i></div>
            </div>

            <div class="content-table">
                <div class="tit">【xxxx部门2018年度用电计划】</div>

                <div id="myTable" class="myTable table-box">
                    <el-table
                            :data="tableData"
                            align="center"
                            border
                            stripe
                            :default-sort="{prop: 'date', order: 'descending'}"
                            style="width: 100%">
                        <el-table-column
                                align="center"
                                sortable
                                prop="date"
                                label="日期"
                                show-overflow-tooltip
                                >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="name"
                                sortable
                                label="姓名"

                                show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="name"
                                sortable
                                label="姓名"

                                show-overflow-tooltip
                        >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="name"
                                sortable
                                label="姓名"

                                show-overflow-tooltip
                        >
                        </el-table-column>

                        <el-table-column
                                align="center"
                                prop="zip"
                                sortable
                                label="邮编"
                                width="250"
                                show-overflow-tooltip
                        >
                        </el-table-column>

                    </el-table>
                    <!--<div class="table-header">-->
                    <!--<table>-->
                    <!--<tr>-->
                    <!--<th>日期</th>-->
                    <!--&lt;!&ndash;<th>日期</th>&ndash;&gt;-->
                    <!--</tr>-->
                    <!--&lt;!&ndash;<tr></tr>&ndash;&gt;-->

                    <!--<tr v-for="v in 10">-->
                    <!--<td>01-03-LPB-E4-00</td>-->
                    <!--</tr>-->
                    <!--</table>-->
                    <!--</div>-->
                    <!--<div class="table-right">-->
                    <!--<table>-->
                    <!--&lt;!&ndash;<tr style="border-bottom: 1px solid #1B6D9A;">&ndash;&gt;-->
                    <!--&lt;!&ndash;<th style="border-right: 1px solid #1B6D9A;" colspan="5">查询结果项1</th>&ndash;&gt;-->
                    <!--&lt;!&ndash;<th style="border-right: 1px solid #1B6D9A;" colspan="5">查询结果项2</th>&ndash;&gt;-->
                    <!--&lt;!&ndash;<th style="border-right: 1px solid #1B6D9A;" colspan="5">查询结果项3</th>&ndash;&gt;-->
                    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
                    <!--<tr>-->
                    <!--<th v-for="v in 5">名称</th>-->
                    <!--</tr>-->
                    <!--<tr v-for="v in 10">-->
                    <!--<td v-for="v in 5">01-03-LPB-E4-00</td>-->
                    <!--</tr>-->
                    <!--</table>-->
                    <!--</div>-->
                </div>


            </div>


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
        name: "dingbiaoguanli",
        data() {
            return {
                setShow: true,
                setId: '',
                value6:'',
                radio: '1',
                radio1: '1',
                radio2: '1',
                radio3: '1',
                filtrateShow: true,
                gxhShow: false,
                treeShow: false,
                days: 2,
                count: '',
                btns: 0,
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: true,
                checked6: false,
                checked7: false,
                checked8: false,
                checked9: false,
                checked10: false,
                select1: '',
                select2: '',
                select3: '',
                select4: '',

                sw: true,
                value6: '',
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],

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
                    //title: [{
                    //    text: '对比定标单耗增长排名',
                    //    x: 'center',
                    //    y: 'top',
                    //    textStyle: {
                    //        color: '#01CED4',
                    //        textAlign: 'center',
                    //        fontSize: 14,
                    //        fontWeight: 'bold'
                    //    }
                    //}],
                    legend: {
                        data: ['2AA101-1号电源线_能耗', '2AA102-1号电源线_能耗', '2AA103-1号电源线_能耗', '2AA104-1号电源线_能耗'],
                        align: 'left',
                        // x: 'right',
                        right: '4%',
                        icon: 'rect',
                        itemWidth: 10, // 图例图形宽度
                        itemHeight: 10, // 图例图形高度
                        //itemGap: 13,
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
            },


        },
        mounted() {

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
            top: 0;
            left: 0;
            border: 1px solid rgba(42, 244, 255, 1);
            box-shadow: 0px 3px 10px 0px rgba(23, 48, 80, 1), 0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
            opacity: 0.5;
            border-radius: 3px;
            z-index: 0;
        }
        .gxhPop {
            width: calc(100% - 250px);
            height: 100%;
            margin-top: -20px;
            margin-left: -20px;
            position: fixed;
            overflow: hidden;

            z-index: 500;

            .bgc {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(1, 14, 17, 1);
                opacity: 0.8;
                z-index: 0;
            }
            .tree-block {
                width: 640px;
                height: 546px;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                margin: auto;
                .bg-box {
                    width: 100%;
                    height: 100%;

                    position: relative;
                    box-sizing: border-box;
                    padding: 20px;
                    .block-bg {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: rgba(33, 152, 229, 1);
                        border: 1px solid rgba(42, 244, 255, 1);
                        box-shadow: 0px 0px 10px 0px rgba(23, 48, 80, 1), 0px 0px 30px 0px rgba(42, 244, 255, 0.84) inset;
                        opacity: 0.5;
                        /*z-index: 0;*/
                    }
                    .details {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        z-index: 5;
                        .icon-close {
                            cursor: pointer;
                            width: 11px;
                            height: 11px;
                            display: inline-block;
                            background: url("../../assets/NengHaoChaXun/icon_gb 拷贝.png") no-repeat;
                            position: absolute;
                            right: 0;
                            top: 0;
                        }
                        .tree-btns {
                            display: flex;
                            justify-content: flex-end;
                            margin-top: 11px;
                            span {
                                cursor: pointer;
                                width: 81px;
                                height: 40px;
                                display: inline-block;
                                background: url("../../assets/NengHaoChaXun/矩形 831.png") no-repeat;
                                text-align: center;

                                font-size: 14px;
                                font-family: HiraginoSansGB-W6;
                                font-weight: normal;
                                color: rgba(97, 213, 255, 1);
                                line-height: 37px;
                            }

                        }
                        .tree-content {
                            width: 100%;
                            height: 444px;
                            overflow-x: hidden;
                            overflow-y: auto;
                            border-bottom: 1px solid #174162;
                        }
                        .title {
                            font-size: 14px;
                            font-family: HiraginoSansGB-W6;
                            font-weight: normal;
                            color: rgba(255, 255, 255, 1);
                        }
                        .list-box {
                            margin-top: 12px;
                            ul {
                                list-style: none;
                                li {
                                    width: 100%;
                                    height: 80px;
                                    box-sizing: border-box;
                                    padding: 17px 12px;
                                    background-color: #0B3451;
                                    border-bottom: 1px solid #072B49;
                                    p {
                                        font-size: 14px;
                                        font-family: HiraginoSansGB-W3;
                                        font-weight: normal;
                                        color: rgba(45, 243, 255, 1);
                                    }
                                    .compile {
                                        width: 100%;
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        .item-span {
                                            font-size: 14px;
                                            font-family: HiraginoSansGB-W3;
                                            font-weight: normal;
                                            color: rgba(223, 253, 255, 1);
                                        }
                                        .btns {
                                            span {
                                                cursor: pointer;
                                                width: 67px;
                                                height: 37px;
                                                display: inline-block;
                                                background: url("../../assets/NengHaoChaXun/矩形 1.png") no-repeat;
                                                text-align: center;

                                                font-size: 14px;
                                                font-family: HiraginoSansGB-W6;
                                                font-weight: normal;
                                                color: rgba(97, 213, 255, 1);
                                                line-height: 37px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        .import-box {
                            margin-top: 23px;
                            display: flex;
                            flex-wrap: nowrap;
                            justify-content: space-between;
                            .import {
                                width: 416px;
                                height: 31px;
                                background-color: #06253E;
                                border: 1px solid #76BECA;
                                color: rgba(187, 187, 187, 1);
                                box-sizing: border-box;
                                padding: 0 14px;

                            }
                            .save {
                                cursor: pointer;
                                display: inline-block;
                                width: 143px;
                                height: 30px;
                                background-color: #39A4BC;
                                font-size: 14px;
                                font-family: HiraginoSansGB-W6;
                                font-weight: normal;
                                color: rgba(255, 255, 255, 1);
                                line-height: 30px;
                                text-align: center;
                            }
                        }

                    }
                }
            }
            .block {
                width: 630px;
                height: 300px;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                margin: auto;
                .bg-box {
                    width: 100%;
                    height: 100%;

                    position: relative;
                    box-sizing: border-box;
                    padding: 20px;
                    .block-bg {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: rgba(33, 152, 229, 1);
                        border: 1px solid rgba(42, 244, 255, 1);
                        box-shadow: 0px 0px 10px 0px rgba(23, 48, 80, 1), 0px 0px 30px 0px rgba(42, 244, 255, 0.84) inset;
                        opacity: 0.5;
                        /*z-index: 0;*/
                    }
                    .details {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        z-index: 5;
                        .icon-close {
                            cursor: pointer;
                            width: 11px;
                            height: 11px;
                            display: inline-block;
                            background: url("../../assets/NengHaoChaXun/icon_gb 拷贝.png") no-repeat;
                            position: absolute;
                            right: 0;
                            top: 0;
                        }
                        .title {
                            font-size: 14px;
                            font-family: HiraginoSansGB-W6;
                            font-weight: normal;
                            color: rgba(255, 255, 255, 1);
                        }
                        .list-box {
                            margin-top: 12px;
                            ul {
                                list-style: none;
                                li {
                                    width: 100%;
                                    height: 80px;
                                    box-sizing: border-box;
                                    padding: 17px 12px;
                                    background-color: #0B3451;
                                    border-bottom: 1px solid #072B49;
                                    p {
                                        font-size: 14px;
                                        font-family: HiraginoSansGB-W3;
                                        font-weight: normal;
                                        color: rgba(45, 243, 255, 1);
                                    }
                                    .compile {
                                        width: 100%;
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        .item-span {
                                            font-size: 14px;
                                            font-family: HiraginoSansGB-W3;
                                            font-weight: normal;
                                            color: rgba(223, 253, 255, 1);
                                        }
                                        .btns {
                                            span {
                                                cursor: pointer;
                                                width: 67px;
                                                height: 37px;
                                                display: inline-block;
                                                background: url("../../assets/NengHaoChaXun/矩形 1.png") no-repeat;
                                                text-align: center;

                                                font-size: 14px;
                                                font-family: HiraginoSansGB-W6;
                                                font-weight: normal;
                                                color: rgba(97, 213, 255, 1);
                                                line-height: 37px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        .import-box {
                            margin-top: 23px;
                            display: flex;
                            flex-wrap: nowrap;
                            justify-content: space-between;
                            .import {
                                width: 416px;
                                height: 31px;
                                background-color: #06253E;
                                border: 1px solid #76BECA;
                                color: rgba(187, 187, 187, 1);
                                box-sizing: border-box;
                                padding: 0 14px;

                            }
                            .save {
                                cursor: pointer;
                                display: inline-block;
                                width: 143px;
                                height: 30px;
                                background-color: #39A4BC;
                                font-size: 14px;
                                font-family: HiraginoSansGB-W6;
                                font-weight: normal;
                                color: rgba(255, 255, 255, 1);
                                line-height: 30px;
                                text-align: center;
                            }
                        }

                    }
                }
            }
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
                        span {
                            font-size: 14px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: bold;
                            color: rgba(223, 253, 255, 1);
                        }
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
                    .choice-title {
                        font-size: 14px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: bold;
                        color: rgba(45, 243, 255, 1);
                    }
                    .icon-lx{
                        width: 14px;
                        height: 14px;
                        display: inline-block;
                        background: url("../../assets/PeiDianJianCe/icon_lx.png") no-repeat;
                    }
                    .icon-jh{
                        width: 14px;
                        height: 16px;
                        display: inline-block;
                        background: url("../../assets/PeiDianJianCe/icon_jh1.png") no-repeat;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-wd {
                        display: inline-block;
                        width: 16px;
                        height: 15px;
                        background: url("../../assets/NengHaoChaXun/icon_wd.png") no-repeat;
                    }
                    .checkbox-tit {
                        font-size: 14px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: bold;
                        color: rgba(45, 243, 255, 1);
                        margin-left: 4px;
                        margin-right: 20px;
                    }
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
                .item-row-2 {
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
            height: 164px;
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            position: relative;
            z-index: 5;
            .ml27 {
                margin-left: 27px;
            }
            .consumption-item {
                flex: 1;
                position: relative;
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
            box-sizing: border-box;
            padding: 15px 20px;
            background: #0B3F6F;
            position: relative;
            .myChart {
                position: relative;
                z-index: 5;
            }
            .title {
                position: relative;
                z-index: 5;
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
            overflow: hidden;
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
                .saveBtn{
                    cursor: pointer;
                    width:112px;
                    height:30px;
                    background:linear-gradient(180deg,rgba(6,88,110,0.2),rgba(27,138,168,0.2));
                    border:1px solid rgba(153, 236, 241, 0.4);
                    box-shadow:0px 1px 1px 0px rgba(12,28,79,0.2);
                    border-radius:4px;
                    font-size:14px;
                    font-family:HiraginoSansGB-W6;
                    font-weight:normal;
                    color:rgba(97,213,255,1);
                    text-align: center;
                    line-height: 30px;
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
                .head-right {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .count {
                    width: 170px;
                    height: 28px;
                    margin-left: 22px;
                    position: relative;
                    border: 1px solid rgba(45, 243, 255, 1);
                    border-radius: 2px;
                    background-color: #0A3E6E;
                    margin-right: 24px;

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
            .tit{
                text-align: center;
                width: 100%;
                font-size:14px;
                font-family:HiraginoSansGB-W3;
                font-weight:normal;
                color:rgba(95,251,248,1);
            }
            .charts{
                position: relative;
                float: left;
                width: calc(100% - 515px);
                min-width: 600px;
                height: 530px;
                overflow: hidden;
               
            }

            .content-table {
                position: relative;
                width: 100%;
                /*height: 577px;*/
                border: 1px solid #15759A;
                margin-top: 15px;
                text-align: center;
                box-sizing: border-box;
                padding-top: 16px;
                .tit {
                    font-size: 14px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: normal;
                    color: rgba(95, 251, 248, 1);
                }

            }
            .table-box {
                width: 100%;
                /*height: 528px;*/
                margin-top: 12px;
                /*display: flex;*/
                /*flex-wrap: nowrap;*/
                table {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    border-collapse: collapse;
                    border: 0; //表示表格没有边框。
                    cellspacing: '0'; //表示单元格之间间隙为0。
                    cellpadding: '0'; //表示单元格的边框宽度为0。
                    /*z-index: 5;*/
                    tr {
                        background-color: #0A3E6E;
                        height: 48px;
                    }
                    tr:nth-child(2n-1) {
                        background-color: #104C7B;
                    }
                    td, th {
                        border-right: 1px solid #0F5A84;
                    }
                    th {
                        background-color: #185588;
                        font-size: 14px;
                        font-family: HiraginoSansGB-W6;
                        font-weight: normal;
                        color: rgba(95, 251, 248, 1);
                    }
                    td {
                        font-size: 14px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: normal;
                        color: rgba(223, 253, 255, 1);
                    }
                }
                .icon-bxz {
                    display: inline-block;
                    width: 20px;
                    height: 17px;
                    background: url("../../assets/PeiDianJianCe/icon_bxz.png") no-repeat;
                    margin-left: 20px;
                }
                .table-header {
                    height: 100%;
                    width: 215px;
                    position: relative;
                    overflow: hidden;
                    float: left;

                }
                .table-right {
                    width: calc(100% - 215px);
                    /*width: 100%;*/
                    overflow-y: hidden;
                    overflow-x: scroll;
                    table {
                        width: 2000px;
                    }
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
