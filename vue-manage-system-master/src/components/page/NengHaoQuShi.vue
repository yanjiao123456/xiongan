<template>
    <div class="RTData Inquire">
        <transition name="el-zoom-in-center">
            <div v-show="leftShow" class="left-branch">
                <div class="tabTit">
                    <span @click="tabTit=0" :class="{cur:tabTit==0}">分项</span>
                    <span @click="tabTit=1" :class="{cur:tabTit==1}">部门</span>
                    <span @click="tabTit=2" :class="{cur:tabTit==2}">位置</span>
                    <span @click="tabTit=3" :class="{cur:tabTit==3}">支路</span>
                </div>
                <!--<div class="tit">选择支路</div>-->
                <div class="inputBox">
                    <i class="icon-ss"></i>
                    <input placeholder="请输入支路名称" type="text" id="key" value="" class="empty"/><br/>
                </div>
                <!--<div class="zTreeDemoBackground left">-->
                <ul id="treeDemo" class="ztree"></ul>
                <!--</div>-->
                <!--<div class="butt">-->
                <!--<div class="tit">已选支路</div>-->
                <!--<ul>-->
                <!--<li><i :class="option == 0?'icon-not':'icon-yes'"></i><span>2AH103-馈线-</span></li>-->
                <!--<li><i :class="option == 1?'icon-not':'icon-yes'"></i><span>2AH103-馈线-</span></li>-->
                <!--<li><i :class="option == 2?'icon-not':'icon-yes'"></i><span>2AH103-馈线-</span></li>-->
                <!--</ul>-->
                <!--</div>-->
            </div>
        </transition>
        <div @click="leftShow=!leftShow" :class="{btn:true,shrinkBtn:!leftShow}">支 路 选 择</div>
        <div :class="{main:true,mainShow:leftShow}">
            <div class="filtrate-box">
                <div class="bg"></div>
                <div class="title"><h3>筛选条件</h3>

                </div>
                <div @click="filtrateShow=!filtrateShow"
                     :class="{'shift-knob-t':filtrateShow,'shift-knob-b':!filtrateShow}"></div>
                <el-collapse-transition>
                    <div v-show="filtrateShow" class="filtrate-show">
                        <div class="item-row">
                            <i class="icon-lx"></i>
                            <span class="checkbox-tit">分析方法:</span>
                            <div class="count">
                                <!--<div class="bg"></div>-->
                                <select v-model="compareVal">
                                    <option>同比</option>
                                    <option>环比</option>
                                    <option>15</option>
                                    <option>30</option>
                                    <option>60</option>
                                </select>
                            </div>

                        </div>
                        <div class="item-row">
                            <i class="icon-wd"></i>
                            <span class="checkbox-tit">维度:</span>
                            <el-radio class="choice" v-model="radio" label="1">时</el-radio>
                            <el-radio class="choice" v-model="radio" label="2">天</el-radio>
                            <el-radio class="choice" v-model="radio" label="3">月</el-radio>
                        </div>
                        <div v-show="compareVal == 15" class="item-row item-row-br">
                            <div class="fl">
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
                            <!--<div class="fl days-box">-->
                            <!--<span class="days-tit date-select">-->
                            <!--<i class="el-icon-search"></i>-->
                            <!--快捷查询:-->
                            <!--</span>-->
                            <!--<div class="days-btn">-->
                            <!--<span @click="days=0" :class="{cur:days==0}">前1天</span>-->
                            <!--<span @click="days=1" :class="{cur:days==1}">前3天</span>-->
                            <!--<span @click="days=2" :class="{cur:days==2}">前7天</span>-->
                            <!--<span @click="days=3" :class="{cur:days==3}">前1月</span>-->
                            <!--</div>-->
                            <!--</div>-->
                        </div>


                        <div class="btns-box">
                            <div @click="btns=0" :class="{'btn-item':true,cur:btns==0}">查询</div>
                            <div @click="btns=1" :class="{'btn-item':true,cur:btns==1}">重置</div>
                        </div>

                    </div>
                </el-collapse-transition>

            </div>
            <!--对比-->
            <div class="contrast">
                <div class="lists" v-for="v in lists">
                    <div class="current-period">
                        <div class="item-left">
                            <i :class="v.icon"></i>
                        </div>
                        <div class="item-right">
                            <p>{{ v.title }}</p>
                            <div class="kwh">
                                <span class="number">166.56</span>
                                <span class="unit">kWh</span>
                            </div>
                        </div>
                    </div>
                    <div class="before">
                        <div class="item-left">
                            <i :class="v.icon"></i>
                        </div>
                        <div class="item-right">
                            <p>{{ v.title2 }}</p>
                            <div class="kwh">
                                <span class="number">166.56</span>
                                <span class="unit">kWh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="data-box">
                <div class="bg"></div>
                <div class="title"><h3>光伏发电量监测</h3>
                </div>
                <div class="my-charts">
                    <div id="chart" style="width:100%;height:100%;"></div>
                </div>
            </div>


            <div class="Table">
                <div class="bg"></div>
                <div class="title"><h3>数据列表</h3>
                    <div class="head-right"><i class="icon-pdf"></i><i class="icon-excel"></i></div>
                </div>


                <!--<template-table :data-tit="tableTitle"></template-table>-->
                <div class="table-box">
                    <div class="table-tit">{{ tableTitle.title }}</div>
                    <el-table
                            :data="tableData6"
                            border
                            stripe
                            style="width: 100%">
                        <el-table-column :key="index" v-for="(v,index) in tableTitle.titArr" class="trs" :prop="v.prop"
                                         :label="v.label"></el-table-column>

                    </el-table>
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
    </div>
</template>

<script>
    import TemplateTable from '../views/template-table'

    var echarts = require('echarts');
    export default {
        name: "nenghaoqushi",
        data() {
            return {
                compareVal: '同比',
                compareShow: false,
                tableData6: [{
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }],
                lists: [
                    {
                        title: '本期汇总',
                        icon: 'item-icon-hz',
                        title2: '同期汇总',
                    },
                    {
                        title: '本期平均',
                        icon: 'item-icon-pjf',
                        title2: '同期平均',
                    },
                    {
                        title: '本期最大值',
                        icon: 'item-icon-max',
                        title2: '同期最大值',
                    },
                    {
                        title: '本期最小值 ',
                        icon: 'item-icon-min',
                        title2: '同期最小值',
                    },
                    {
                        title: '本期同比',
                        icon: 'item-icon-tb',
                        title2: '同期同比',
                    },

                ],
                // lists:[
                //     {
                //         f1:{
                //             title:'本期汇总',
                //             icon:'item-icon-hz',
                //             number:166.56
                //         },
                //         f2:{
                //             title:'同期汇总',
                //             icon:'item-icon-hz',
                //             number:166.56
                //         },
                //     },
                //     {
                //         f1:{
                //             title:'本期平均',
                //             icon:'item-icon-pjf',
                //             number:166.56
                //         },
                //         f2:{
                //             title:'同期平均',
                //             icon:'item-icon-pjf',
                //             number:166.56
                //         },
                //     },
                //     {
                //         f1:{
                //             title:'本期最大值',
                //             icon:'item-icon-max',
                //             number:166.56
                //         },
                //         f2:{
                //             title:'同期最大值',
                //             icon:'item-icon-max',
                //             number:166.56
                //         },
                //     },
                //     {
                //         f1:{
                //             title:'本期最小值 ',
                //             icon:'item-icon-min',
                //             number:166.56
                //         },
                //         f2:{
                //             title:'同期最小值 ',
                //             icon:'item-icon-min',
                //             number:166.56
                //         },
                //     },
                //     {
                //         f1:{
                //             title:'本期同比',
                //             icon:'item-icon-tb',
                //             number:166.56
                //         },
                //         f2:{
                //             title:'同期同比',
                //             icon:'item-icon-tb',
                //             number:166.56
                //         },
                //     }
                // ],
                option: '2',
                tabTit: 0,
                radio: 2,
                leftShow: true,
                filtrateShow: true,
                btns: 0,
                no2off: true,
                value6: '',
                days: 2,
                checked5: true,
                checked6: true,
                checked7: true,
                checked8: false,
                checked9: false,
                checked10: false,
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
                var chart = document.getElementById('chart');
                var chartChart = echarts.init(chart);
                var option = {
                    tooltip: {
                        color: ['#FFF350', '#C09DFF', '#00FFFF'],
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                type: 'shadow',
                                color: '#778AA8'
                            }
                        }
                    },
                    grid: {
                        top: 50,
                        bottom: 50,
                        left: 50,
                        right: 20
                    },
                    legend: {
                        top: 0,
                        data: ['电压Uan', '电压Ubn', '电压Ucn'],
                        textStyle: {
                            color: 'rgb(91,227,224)'//示例标识文字颜色
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(91,227,224)'//x轴坐标颜色
                                }
                            },
                            boundaryGap: true,
                            data: ['2018-10-26 00:00:00', '2018-10-26 00:10:00', '2018-10-26 00:20:00', '2018-10-26 00:30:00',
                                '2018-10-26 00:40:00', '2018-10-26 00:50:00', '2018-10-26 00:60:00', '2018-10-26 01:00:00',
                                '2018-10-26 01:02:00', '2018-10-26 01:03:00', '2018-10-26 01:04:00']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '',
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(110,131,162)'
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
                    series: [
                        {
                            name: '电压Uan',
                            data: [21, 23, 20, 22, 21, 20, 20, 24, 20, 23, 22],
                            type: 'bar',
                            barWidth: '40%',
                            // symbol: 'circle',
                            // symbolSize: 8,
                            // color: '#04B8CE',
                            lineStyle: {
                                color: "rgba(255, 243, 80, 1)"
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(46, 160, 255, 1)'
                                    }, {
                                        offset: 0.8,
                                        color: 'rgba(86, 213, 254, 1)'
                                    }], false),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10
                                }
                            },
                        }, {
                            name: '电压Ubn',
                            data: [31, 33, 30, 32, 31, 30, 30, 34, 30, 33, 32, 31],
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 8,
                            color: '#04B8CE',
                            lineStyle: {
                                color: "rgba(192, 157, 255, 1)"
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(192, 157, 255, 1)'// 描边线条上的圆圈颜色及示例指示标颜色
                                }
                            }
                        }, {
                            name: '电压Ucn',
                            data: [41, 43, 40, 42, 41, 40, 40, 44, 40, 43, 42, 41],
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 8,
                            color: '#04B8CE',
                            lineStyle: {
                                color: "rgba(0, 255, 255, 1)"
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(0, 255, 255, 1)'// 描边线条上的圆圈颜色及示例指示标颜色
                                }
                            }
                        }
                    ]
                }
                chartChart.setOption(option);
                window.onresize = function () {
                    chartChart.resize();
                }
            }
        },
        mounted() {
            var setting = {
                check: {
                    enable: true,
                    // enable: true,
                    chkStyle: "radio",
                    radioType: "level"

                },
                view: {
                    nameIsHTML: true, //允许name支持html
                    selectedMulti: false
                },
                edit: {
                    enable: false,
                    editNameSelectAll: false
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                }
            };

            // var zNodes = [
            //     {
            //         id: 1,
            //         pId: 0,
            //         name: "随意勾选 1",
            //         open: true,
            //         // iconSkin: "icon01"
            //     },
            //     {
            //         id: 11,
            //         pId: 1,
            //         name: "随意勾选 1-1",
            //         open: true,
            //         // iconSkin: "icon01"
            //     },
            //     {
            //         id: 111,
            //         pId: 11,
            //         name: "随意勾选 1-1-1"
            //     },
            //     {
            //         id: 112,
            //         pId: 11,
            //         name: "随意勾选 1-1-2"
            //     },
            //     {
            //         id: 12,
            //         pId: 1,
            //         name: "随意勾选 1-2",
            //         open: true,
            //         // iconSkin: "icon01"
            //     },
            //     {
            //         id: 121,
            //         pId: 12,
            //         name: "随意勾选 1-2-1"
            //     },
            //     {
            //         id: 122,
            //         pId: 12,
            //         name: "随意勾选 1-2-2"
            //     },
            //     {
            //         id: 2,
            //         pId: 0,
            //         name: "随意勾选 2",
            //         checked: true,
            //         open: true,
            //         // iconSkin: "icon01"
            //     },
            //     {
            //         id: 21,
            //         pId: 2,
            //         name: "随意勾选 2-1"
            //     },
            //     {
            //         id: 22,
            //         pId: 2,
            //         name: "随意勾选 2-2",
            //         open: true,
            //         // iconSkin: "icon01"
            //     },
            //     {
            //         id: 221,
            //         pId: 22,
            //         name: "随意勾选 2-2-1",
            //         // checked: true,
            //     },
            //     {
            //         id: 222,
            //         pId: 22,
            //         name: "随意勾选 2-2-2"
            //     },
            //     {
            //         id: 23,
            //         pId: 2,
            //         name: "随意勾选 2-3"
            //     }
            // ];
            let zNodes = [{
                "id": 1,
                "parentId": 0,
                "level": 0,
                "name": "默认总节点",
                "children": [{
                    "id": 2,
                    "parentId": 1,
                    "level": 1,
                    "name": "1545378009097sss",
                    "children": [],
                    "key": "1-"
                }],
                "key": ""
            }]

            var code;

            function setCheck() {
                var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                    py = $("#py").attr("checked") ? "p" : "",
                    sy = $("#sy").attr("checked") ? "s" : "",
                    pn = $("#pn").attr("checked") ? "p" : "",
                    sn = $("#sn").attr("checked") ? "s" : "",
                    type = {"Y": py + sy, "N": pn + sn};
                zTree.setting.check.chkboxType = type;
                showCode('setting.check.chkboxType = { "Y" : "' + type.Y + '", "N" : "' + type.N + '" };');
            }

            function showCode(str) {
                if (!code) code = $("#code");
                code.empty();
                code.append("<li>" + str + "</li>");
            }


            $.fn.zTree.init($("#treeDemo"), setting, zNodes);
            fuzzySearch('treeDemo', '#key', null, true); //初始化模糊搜索方法
            setCheck();
            $("#py").bind("change", setCheck);
            $("#sy").bind("change", setCheck);
            $("#pn").bind("change", setCheck);
            $("#sn").bind("change", setCheck);

            this.SetEchart()

        },
        created() {
            this.$axios.get('/sep_tree!queryTreeByType.action', {
                params: {
                    type: 1,
                    parentId: 0
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    }
</script>

<style>
    .ztree li span.button.ico_open, .ztree li span.button.ico_close {
        line-height: 0;
        margin: 0;
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: middle;
        border: 0 none;
        cursor: pointer;
        outline: none;
        background-color: transparent;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-image: url("../../assets/PeiDianJianCe/icon_wjb(1).png");
        background-position: 0 0;
        /**background-image: url(./img/zTreeStandard.gif);*/
    }

    /*icon_wj*/
    .ztree li span.button.ico_docu {
        line-height: 0;
        margin: 0;
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: middle;
        border: 0 none;
        cursor: pointer;
        outline: none;
        background-color: transparent;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-image: url("../../assets/PeiDianJianCe/icon_wj.png");
        background-position: 0 0;
        /**background-image: url(./img/zTreeStandard.gif);*/
    }

    .ztree li span.node_name {
        margin-left: 4px;
        font-size: 12px;
        font-family: HiraginoSansGB-W3;
        font-weight: normal;
        color: rgba(254, 254, 254, 1);
    }

    .ztree li span.button.chk.checkbox_false_full, .ztree li span.button.chk.checkbox_false_full_focus {
        width: 16px;
        height: 16px;
        background: url("../../assets/PeiDianJianCe/icon_wxz.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.chk.checkbox_false_part, .ztree li span.button.chk.checkbox_false_part_focus, .ztree li span.button.chk.checkbox_true_full, .ztree li span.button.chk.checkbox_true_full_focus, .ztree li span.button.chk.checkbox_true_part, .ztree li span.button.chk.checkbox_true_part_focus {
        width: 16px;
        height: 16px;
        background: url("../../assets/PeiDianJianCe/icon_xz.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.roots_open, .ztree li span.button.bottom_open, .ztree li span.button.center_open {

        background: url("../../assets/PeiDianJianCe/icon_zk.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.bottom_close, .ztree li span.button.center_close, .ztree li span.button.roots_close {
        background: url("../../assets/PeiDianJianCe/icon_dj.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.chk.radio_true_full, .ztree li span.button.chk.radio_true_full_focus {
        background-position: 0 0;
    }

    .ztree li span.button.radio_true_full, .ztree li span.button.radio_true_full_focus, .ztree li span.button.chk.radio_true_part, .ztree li span.button.chk.radio_true_part_focus {
        width: 16px;
        height: 16px;
        background: url("../../assets/NengHaoChaXun/icon_xz.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.radio_false_full, .ztree li span.button.radio_false_full_focus, .ztree li span.button.radio_false_part, .ztree li span.button.radio_false_part_focus {
        width: 14px;
        height: 14px;
        background: url("../../assets/NengHaoChaXun/椭圆 884.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.chk.radio_false_full, .ztree li span.button.chk.radio_false_full_focus, .ztree li span.button.radio_false_part, .ztree li span.button.radio_false_part_focus {
        background-position: 0 0;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .ztree li span.button.chk.radio_false_part, .ztree li span.button.chk.radio_false_part_focus {
        background-position: 0 0;
    }


</style>


<style lang="scss" scoped>
    @media screen and (max-width: 1500px) {

    }

    .RTData {
        width: 100%;
        height: 100%;

        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;

        .left-branch {
            width: 245px;
            height: 100%;
            min-height: 500px;
            box-sizing: border-box;
            /*margin-bottom: 40px;*/
            /*float: left;*/
            /*margin-right: 24px;*/
            position: relative;
            /*border: 1px solid red;*/

            background: #0A3E6E;
            border: 1px solid #199AB7;
            /*box-shadow:0px 0px 9px 0px rgba(1,16,31,1), 0px 0px 30px 0px rgba(42,244,255,0.84);*/
            /*opacity:0.51;*/
            box-shadow: 0px 3px 9px 0px #01101f, 0px 3px 30px 2px #1A8EA0 inset;
            border-radius: 3px;
            padding: 14px 13px;
            .tabTit {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                span {
                    font-size: 12px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: bold;
                    color: rgba(97, 213, 255, 1);
                    margin-right: 27px;
                    cursor: pointer;
                    &.cur {
                        font-size: 12px;
                        font-family: HiraginoSansGB-W6;
                        font-weight: bold;
                        color: rgba(45, 243, 255, 1);
                        padding-bottom: 3px;
                        border-bottom: 2px solid #2DF3FF;
                    }
                }
            }
            .inputBox {
                position: relative;
                .icon-ss {
                    display: inline-block;
                    position: absolute;
                    right: 15px;
                    bottom: 6px;
                    float: right;
                    width: 14px;
                    height: 14px;
                    background: url("../../assets/PeiDianJianCe/icon_ss（1）.png") no-repeat;
                    z-index: 5;
                }
            }
            .empty {
                width: 223px;
                height: 28px;
                border: 1px solid rgba(45, 243, 255, 1);
                border-radius: 14px;
                background-color: #0A3E6E;
                margin-top: 20px;
                padding: 0 14px;
                box-sizing: border-box;
                position: relative;
                &:before {
                    content: '';

                }
            }
            .ztree {
                margin-top: 20px;
            }

            .tit {
                font-size: 18px;
                font-family: 'HiraginoSansGB-W3';
                font-weight: bold;
                /*font-weight: 500;*/
                color: rgba(254, 254, 255, 1);
            }
            .butt {
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                box-sizing: border-box;
                padding: 9px 12px;
                border-top: 1px solid #1A9BB8;
                ul {
                    list-style: none;
                    margin-top: 5px;
                    li {
                        line-height: 30px;
                        span {
                            font-size: 12px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: normal;
                            color: rgba(254, 254, 254, 1);
                            margin-left: 12px;
                        }
                    }
                }
            }
            .icon-not {
                width: 12px;
                height: 12px;
                display: inline-block;
                background: url("../../assets/PeiDianJianCe/组 97.png") no-repeat;
            }
            .icon-yes {
                width: 12px;
                height: 12px;
                display: inline-block;
                background: url("../../assets/PeiDianJianCe/椭圆 884.png") no-repeat;
            }

        }
        .btn {
            cursor: pointer;
            width: 24px;
            height: 90px;
            text-align: center;
            /*line-height: 9px;*/
            box-sizing: border-box;
            padding: 12px 0;

            /*background:rgba(32,155,185,1);*/
            /*border:1px solid rgba(0,229,255,1);*/
            background: url("../../assets/PeiDianJianCe/矩形-943.png") no-repeat;
            font-size: 12px;
            font-family: HiraginoSansGB-W3;
            font-weight: bold;
            color: rgba(254, 254, 255, 1);
        }
        .shrinkBtn {
            position: absolute;
            left: -20px;
            top: 0;
        }

        .main {
            width: 100%;
            height: 100%;
            min-height: 500px;
            overflow-y: auto;
            overflow-x: hidden;

            position: relative;
            margin-left: 4px;
            .contrast {
                width: 100%;
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                margin-top: 24px;
                @media screen and (max-width: 1500px) {
                    flex-direction: column;
                }
                .lists {

                    @media screen and (min-width: 1500px) {
                        &:not(:first-child) {
                            margin-left: 25px;
                        }
                    }
                    @media screen and (max-width: 1500px) {
                        margin-left: 0;
                        margin-top: 20px;
                    }
                    width: 100%;

                    display: flex;
                    flex-direction: column;
                    .item-icon-hz {
                        /*line-height: 90px;*/
                        width: 43px;
                        height: 43px;
                        display: inline-block;
                        background: url("../../assets/PeiDianJianCe/icon_hz2.png") no-repeat;
                    }
                    .item-icon-pjf {
                        /*line-height: 90px;*/
                        width: 40px;
                        height: 37px;
                        display: inline-block;
                        background: url("../../assets/PeiDianJianCe/icon_pjf.png") no-repeat;
                    }
                    .item-icon-max {
                        /*line-height: 90px;*/
                        width: 59px;
                        height: 21px;
                        display: inline-block;
                        background: url("../../assets/PeiDianJianCe/max.png") no-repeat;
                    }
                    .item-icon-min {
                        /*line-height: 90px;*/
                        width: 60px;
                        height: 24px;
                        display: inline-block;
                        background: url("../../assets/PeiDianJianCe/mIN.png") no-repeat;
                    }
                    .item-icon-tb {
                        /*line-height: 90px;*/
                        width: 41px;
                        height: 34px;
                        display: inline-block;
                        background: url("../../assets/PeiDianJianCe/icon_tb.png") no-repeat;
                    }
                    .current-period {
                        /*width: calc(100% - 25px);*/
                        width: 100%;
                        height: 90px;
                        box-sizing: border-box;
                        /*padding: 20px 0;*/

                        border: 1px solid rgba(42, 244, 255, 1);
                        box-shadow: 0px 0px 10px 0px rgba(23, 48, 80, 1), 0px 0px 30px 0px rgba(42, 244, 255, 0.84) inset;
                        /*opacity:0.5;*/
                        border-radius: 3px;

                        .item-left {
                            width: 90px;
                            height: 90px;
                            box-sizing: border-box;
                            /*padding: ;*/
                            float: left;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            background-color: #01A8F2;
                            border-radius: 3px 3px 0px 0px;
                            margin-top: -1px;
                            margin-left: -1px;

                        }
                        .item-right {
                            box-sizing: border-box;
                            /*padding-left: 90px;*/
                            /*box-sizing: border-box;*/
                            /*padding: 20px 0;*/
                            padding: 20px 20px 20px 110px;
                            p {
                                font-size: 14px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: normal;
                                color: rgba(223, 253, 255, 1);
                            }
                            .kwh {
                                margin-top: 6px;
                                display: flex;
                                justify-content: space-between;
                            }
                            .number {
                                font-size: 18px;
                                font-family: DigitaldreamFat;
                                font-weight: 400;
                                color: rgba(44, 244, 242, 1);
                            }
                            .unit {
                                font-size: 14px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: normal;
                                color: rgba(223, 253, 255, 1);
                            }

                        }
                    }
                    .before {
                        width: 100%;
                        height: 90px;
                        box-sizing: border-box;
                        margin-top: 25px;
                        /*padding: 20px 0;*/

                        border: 1px solid rgba(42, 244, 255, 1);
                        box-shadow: 0px 0px 10px 0px rgba(23, 48, 80, 1), 0px 0px 30px 0px rgba(42, 244, 255, 0.84) inset;
                        /*opacity:0.5;*/
                        border-radius: 3px;
                        .item-left {
                            width: 90px;
                            height: 90px;
                            box-sizing: border-box;
                            /*padding: ;*/
                            float: left;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            background-color: #5361DB;
                            border-radius: 3px 3px 0px 0px;
                            margin-top: -1px;
                            margin-left: -1px;
                            .item-icon-hz {
                                /*line-height: 90px;*/
                                width: 43px;
                                height: 43px;
                                display: inline-block;
                                background: url("../../assets/PeiDianJianCe/icon_hz2.png") no-repeat;
                            }
                        }
                        .item-right {
                            box-sizing: border-box;
                            /*padding-left: 90px;*/
                            /*box-sizing: border-box;*/
                            /*padding: 20px 0;*/
                            padding: 20px 20px 20px 110px;
                            p {
                                font-size: 14px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: normal;
                                color: rgba(223, 253, 255, 1);
                            }
                            .kwh {
                                margin-top: 6px;
                                display: flex;
                                justify-content: space-between;
                            }
                            .number {
                                font-size: 18px;
                                font-family: DigitaldreamFat;
                                font-weight: 400;
                                color: rgba(44, 244, 242, 1);
                            }
                            .unit {
                                font-size: 14px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: normal;
                                color: rgba(223, 253, 255, 1);
                            }

                        }
                    }
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
            .filtrate-box {
                width: 100%;
                /*height: 292px;*/
                position: relative;
                box-sizing: border-box;
                padding: 15px 20px 9px 20px;
                background-color: #0B3F6F;
                .interval {
                    font-size: 14px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: bold;
                    color: rgba(45, 243, 255, 1);
                }
                .fl {
                    float: left;
                }
                .icon-time {
                    width: 14px;
                    height: 15px;
                    display: inline-block;
                    background: url("../../assets/PeiDianJianCe/icon_sj.png") no-repeat;
                    margin-right: 5px;
                }
                .count {
                    width: 80px;
                    height: 28px;
                    margin-left: 12px;
                    position: relative;
                    border: 1px solid #29D1E5;
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
                        color: rgba(219, 253, 255, 1);
                        option {
                            background-color: #0B3F6F;
                        }
                    }
                }
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
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    h3 {
                        font-size: 16px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: bold;
                        color: rgba(254, 254, 255, 1);
                    }
                    .updataTime {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        span {
                            font-size: 12px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: bold;
                            color: rgba(183, 208, 210, 1);
                            margin-right: 19px;
                        }
                    }
                    .off {
                        cursor: pointer;
                        width: 40px;
                        height: 24px;
                        background: url("../../assets/PeiDianJianCe/btn_kq.png") no-repeat;
                    }
                    .no {
                        cursor: pointer;
                        width: 40px;
                        height: 24px;
                        background: url("../../assets/PeiDianJianCe/btn_gb.png") no-repeat;
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
                        .icon-lx {
                            display: inline-block;
                            width: 15px;
                            height: 11px;
                            background: url("../../assets/NengHaoChaXun/icon _fxff.png") no-repeat;
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
                        .item-input {
                            /*margin-right: 1rem;*/
                            @media screen and (min-width: 1200px) {
                                /*margin-left: 0;*/
                                /*margin-top: 15px;*/
                                margin-right: 70px;
                            }
                            span {
                                font-size: 14px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: bold;
                                color: rgba(223, 253, 255, 1);
                            }
                            input {
                                background-color: #174B7B;
                                width: 200px;
                                height: 28px;
                                border: 1px solid rgba(45, 243, 255, 1);
                                border-radius: 2px;
                                box-sizing: border-box;
                                padding: 0 13px;
                            }
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
                    .item-row-br {
                        @media screen and (max-width: 1200px) {
                            height: auto;
                            justify-content: flex-start;
                            flex-direction: column;
                            align-items: flex-start
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
                        /*margin-top: 17px;*/
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
            .data-box {
                width: 100%;
                position: relative;
                height: 436px;
                margin-top: 24px;
                box-sizing: border-box;
                padding: 15px 20px;
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
                .my-charts {
                    margin-top: 13px;
                    width: 100%;
                    height: 100%;
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
        .mainShow {
            width: calc(100% - 273px);
        }
    }
</style>
