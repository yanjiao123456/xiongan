<template>
    <div class="Inquire">
        <div class="addBtn">
            <div @click="filtrateShow=!filtrateShow" :class="{'btn-item':true}">添加定义</div>
        </div>
        <el-collapse-transition>
            <div v-show="filtrateShow" class="filtrate-box">
                <div class="bg"></div>
                <div class="title"><h3>添加能耗计量报警</h3></div>
                <!--<div @click="filtrateShow=!filtrateShow"-->
                <!--:class="{'shift-knob-t':filtrateShow,'shift-knob-b':!filtrateShow}"></div>-->

                <div class="filtrate-show">

                    <div class="item-row item2">
                        <div class="more-box">
                            <span>报警仪表类型：</span>
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
                            <span>报警支路：</span>
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
                            <span>报警参数：</span>
                            <el-select class="select" v-model="select1" placeholder="仪表编码">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="more-box">
                            <span>报警级别：</span>
                            <el-select class="select" v-model="select1" placeholder="安装位置">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                    </div>
                    <div class="item-row item2">
                        <div class="more-box">
                            <span>报警上限：</span>
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
                            <span>报警上上限：</span>
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
                            <span>报警下限：</span>
                            <el-select class="select" v-model="select1" placeholder="仪表编码">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="more-box">
                            <span>报警下下限：</span>
                            <el-select class="select" v-model="select1" placeholder="安装位置">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                    </div>
                    <div class="item-row item2">
                        <div class="more-box">
                            <span>预警值：</span>
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
                            <span>报警处理：</span>
                            <el-select class="select" v-model="select1" placeholder="仪表名称">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>


                    </div>


                    <div class="btns-box">
                        <div @click="btns=0" :class="{'btn-item':true,cur:btns==0}">保存</div>
                        <div @click="btns=1,treeShow=true" :class="{'btn-item':true,cur:btns==1}">重置</div>
                        <div @click="btns=2,gxhShow=true" :class="{'btn-item':true,cur:btns==2}">关闭</div>
                    </div>

                </div>


            </div>
        </el-collapse-transition>

        <div class="Table">
            <div class="bg"></div>
            <div class="title">
                <div class="tabTit">
                    <h3 @click="tabCur=0" :class="{cur:tabCur==0}">实时监测报警</h3>
                    <h3 @click="tabCur=1" :class="{cur:tabCur==1}">能耗计量报警</h3>
                </div>
            </div>

            <div class="table-box">
                <div class="table-tit">【报警定义列表 】</div>

                <table border="0">
                    <tr>
                        <th v-for="v in 5">区域名称</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(v,index) in 5" :class="{cur:!setShow && setId==index}">
                        <td v-for="v in 5">七跨行车动力距离</td>
                        <td v-show="setId!=index ||setShow"><i class="icon-xg"></i><span
                                @click="setShow = false,setId=index" class="set">修改</span></td>
                        <td v-show="setId==index && !setShow">
                            <div class="item1">
                                <i class="icon-xg-ing"></i>
                                <span>修改</span>
                            </div>
                            <div class="item1">
                                <i class="icon-del"></i>
                                <span @click="setShow = true" class="del">删除</span>
                            </div>
                        </td>
                    </tr>
                </table>
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
        name: "baojingdingyi",
        data() {
            return {
                tabCur:1,
                setShow: true,
                setId: '',
                radio: '1',
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
                tableTitle: {
                    title: '【 仪表台账数据列表 】',
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
                            prop: "操作",
                            label: "总有功功率W",
                            sortable: false
                        },
                    ]
                },

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
        .addBtn {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 15px;
            .btn-item {
                width: 90px;
                height: 40px;
                cursor: pointer;
                /*margin-right: 20px;*/
                text-align: center;
                line-height: 40px;
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
            .title {
                display: flex;
                justify-content: space-between;
                position: relative;
                z-index: 5;
                /*margin-bottom: 15px;*/
                .tabTit{
                    display: flex;
                    justify-content: flex-start;

                    h3{
                        cursor: pointer;
                        font-size:16px;
                        font-family:HiraginoSansGB-W3;
                        font-weight:bold;
                        color:rgba(122,160,187,1);
                        &.cur{
                            font-size:16px;
                            font-family:HiraginoSansGB-W3;
                            font-weight:bold;
                            color:rgba(255,255,255,1);
                            padding-bottom: 3px;
                            border-bottom: 2px solid #FFFFFF;
                        }
                        &:nth-child(2){
                            margin-left: 33px;
                        }

                    }
                }
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
            .table-box {
                position: relative;
                z-index: 5;
                border: 1px solid #15759A;
                margin-top: 24px;
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
                table {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    border: 0;
                    border-collapse: collapse; /*边框会合并为一个单一的边框*/

                    tr {
                        background-color: #104C7B;
                        &:nth-child(2n) {
                            background-color: #0A3E6E;
                        }
                        &.cur {
                            td {
                                background-color: #085E96;
                                font-size: 14px;
                                font-family: HiraginoSansGB-W6;
                                font-weight: normal;
                                color: rgba(255, 255, 255, 1);
                            }

                        }

                        th {
                            font-size: 14px;
                            font-family: HiraginoSansGB-W6;
                            font-weight: normal;
                            color: rgba(95, 251, 248, 1);
                            background-color: #185588;
                        }
                        td {
                            font-size: 14px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: normal;
                            color: rgba(223, 253, 255, 1);

                        }

                        td, th {
                            border-right: 1px solid #145F8B;
                            text-align: center;
                            height: 48px;
                        }
                        .icon-xg {
                            width: 15px;
                            height: 14px;
                            display: inline-block;
                            background: url("../../assets/PeiDianJianCe/icon_xg.png") no-repeat;
                            margin-right: 10px;
                            position: relative;
                            top: 3px;
                            /*line-height: 48px;*/
                        }
                        .set {
                            font-size: 14px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: normal;
                            color: rgba(95, 251, 248, 1);
                            cursor: pointer;
                        }
                        .item1 {
                            display: inline-block;
                            /*padding: 0 10px;*/
                            .icon-xg-ing {
                                display: inline-block;
                                width: 15px;
                                height: 14px;
                                /*line-height: 48px;*/
                                background: url("../../assets/PeiDianJianCe/icon_xg-xz.png") no-repeat;
                                position: relative;
                                top: 3px;
                            }
                            .icon-bc {
                                width: 16px;
                                height: 16px;
                                display: inline-block;
                                background: url("../../assets/PeiDianJianCe/icon_bc.png") no-repeat;
                                position: relative;
                                top: 3px;
                            }
                            .bc {
                                font-size: 14px;
                                font-family: HiraginoSansGB-W6;
                                font-weight: normal;
                                color: rgba(250, 236, 79, 1);
                                cursor: pointer;
                            }
                            .icon-del{
                                width: 15px;
                                height: 15px;
                                display: inline-block;
                                background: url("../../assets/PeiDianJianCe/删除-2.png") no-repeat;
                                position: relative;
                                top: 3px;
                            }
                            .del{
                                font-size:14px;
                                font-family:HiraginoSansGB-W6;
                                font-weight:normal;
                                color:rgba(255,65,65,1);
                                cursor: pointer;
                            }
                        }
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
