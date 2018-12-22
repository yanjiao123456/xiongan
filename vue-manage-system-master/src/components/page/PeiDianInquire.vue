<template>
    <div class="Inquire">
        <div v-show="gxhShow || treeShow" class="gxhPop">
            <div class="bgc"></div>
            <div v-show="treeShow" class="tree-block">
                <div class="bg-box">
                    <div class="block-bg"></div>
                    <div class="details">
                        <i @click="treeShow=false" class="icon-close"></i>
                        <div class="title">个性化查询</div>
                        <div class="tree-content">
                            <div class="import-box">
                                <input id="key" type="text" class="import" placeholder="请输入您所需查询的信息">
                            </div>
                            <!--树-->
                            <ul id="treeDemo" class="ztree"></ul>
                        </div>
                        <div class="tree-btns">
                            <span>提交</span>
                            <span>重置</span>
                        </div>

                    </div>
                </div>
            </div>
            <div v-show="gxhShow" class="block">
                <div class="bg-box">
                    <div class="block-bg"></div>
                    <div class="details">
                        <i @click="gxhShow=false" class="icon-close"></i>
                        <div class="title">个性化查询</div>
                        <div class="list-box">
                            <ul>
                                <li>
                                    <p>生产一车间二组</p>
                                    <div class="compile">
                                        <span class="item-span">第二生产线前1月用电</span>
                                        <span class="item-span">2017-10-12</span>
                                        <div class="btns">
                                            <span>编辑</span>
                                            <span>编辑</span>
                                            <span>编辑</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>生产一车间二组</p>
                                    <div class="compile">
                                        <span class="item-span">第二生产线前1月用电</span>
                                        <span class="item-span">2017-10-12</span>
                                        <div class="btns">
                                            <span>编辑</span>
                                            <span>编辑</span>
                                            <span>编辑</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="import-box">
                            <input type="text" class="import" placeholder="请输入您所要添加的个性化查询条件">
                            <span class="save">保存当前查询条件</span>
                        </div>
                    </div>
                </div>


                <!--1321231231-->
            </div>
        </div>
        <div class="filtrate-box">
            <div class="bg"></div>
            <div class="title"><h3>筛选条件</h3></div>
            <div @click="filtrateShow=!filtrateShow"
                 :class="{'shift-knob-t':filtrateShow,'shift-knob-b':!filtrateShow}"></div>
            <el-collapse-transition>
                <div v-show="filtrateShow" class="filtrate-show">

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
                    <div class="item-row">
                        <el-checkbox class="ml92 checkbox-tit" v-model="checked5">参数:</el-checkbox>
                        <el-checkbox class="" v-model="checked6">电压</el-checkbox>
                        <el-checkbox class="ml92" v-model="checked7">电流</el-checkbox>
                        <el-checkbox class="ml92" v-model="checked8">功率</el-checkbox>
                        <el-checkbox class="ml92" v-model="checked9">标底</el-checkbox>
                        <el-checkbox class="ml92" v-model="checked10">功率因数</el-checkbox>

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
                        <div @click="btns=1,treeShow=true" :class="{'btn-item':true,cur:btns==1}">重置</div>
                        <div @click="btns=2,gxhShow=true" :class="{'btn-item':true,cur:btns==2}">个性化</div>
                    </div>

                </div>
            </el-collapse-transition>

        </div>

        <!--能耗-->

        <!--能耗-->

        <!--能耗大数据图表 start-->
        <div class="energy-Echarts">
            <div class="bg"></div>
            <div class="title"><h3>实时数据</h3></div>
            <div class="myChart" id="myChart" style="width: 100%;height: 100%;"></div>
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
                // 指定图表的配置项和数据


                var option = {
                    color: ['#637EF9', '#1C97FF', '#38E68D', '#CFDB48', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                   
                    legend: {
                        data: ['5AA102-25TR当前正向有功总电能'],
                        // align: 'left',
                        x: 'center',
                        right: '4%',
                        // icon: 'rect',
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
                            lineStyle: {
                                type: 'shadow',
                                color: '#778AA8'
                            }
                        }
                    },
                    xAxis: [{
                        data: ['2018年10月16日', '2018年10月17日', '2018年10月18日', '2018年10月19日', '2018年10月20日', '2018年10月21日', '2018年10月22日', '2018年10月23日'],
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(91,227,224)'//x轴坐标颜色
                            }
                        }
                    }],
                    yAxis: [
                        {
                            type: 'value',
                            name: '单位（kw）',
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
                        name: '5AA102-25TR当前正向有功总电能',
                        type: 'line',
                        // symbol: 'circle',
                        symbolSize: 8,
                        // showAllSymbol: true,
                        // color: '#637EF9',
                        // lineStyle: {
                        //     color: "#637EF9"
                        // },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(99, 126, 249, 0.9)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(99, 126, 249, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        data: one,
                        markPoint: {
                            label:{
                                show:true,
                                formatter:'{c}'
                            },
                            // symbol:'image://././assets/PeiDianJianCe/data_k.png',
                            symbol:'roundRect',
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                                // {coord:[41,15],name:'15',value:15} 
                            ]
                        },
                        }
                    ]
                }


                // 使用刚指定的配置项和数据显示图表。
                growRankingChart.setOption(option);
                window.onresize = function () {
                    growRankingChart.resize();
                    };
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

            var setting = {
                check: {
                    enable: true,

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

            var zNodes = [
                {
                    id: 1,
                    pId: 0,
                    name: "随意勾选 1",
                    open: true,
                    // iconSkin: "icon01"
                },
                {
                    id: 11,
                    pId: 1,
                    name: "随意勾选 1-1",
                    open: true,
                    // iconSkin: "icon01"
                },
                {
                    id: 111,
                    pId: 11,
                    name: "随意勾选 1-1-1"
                },
                {
                    id: 111,
                    pId: 11,
                    name: "随意勾选 1-1-1",
                    open:true
                },
                {
                    id: 111,
                    pId: 11,
                    name: "随意勾选 1-1-1",
                    open:true
                },
                {
                    id: 111,
                    pId: 11,
                    name: "随意勾选 1-1-1",
                    open:true
                },{
                    id: 111,
                    pId: 11,
                    name: "随意勾选 1-1-1",
                    open:true
                },

                {
                    id: 112,
                    pId: 11,
                    name: "随意勾选 1-1-2",
                    open:true
                },
                {
                    id: 1121,
                    pId: 111,
                    name: "随意勾选 1-1-21",
                    // open:true
                },
                {
                    id: 1111,
                    pId: 111,
                    name: "随意勾选 1-1-21",
                    // open:true
                },
                {
                    id: 1112,
                    pId: 111,
                    name: "随意勾选 1-1-21",
                    // open:true
                },{
                    id: 1113,
                    pId: 111,
                    name: "随意勾选 1-1-21",
                    // open:true
                },
                {
                    id: 1114,
                    pId: 111,
                    name: "随意勾选 1-1-21",
                    // open:true
                },
                {
                    id: 1115,
                    pId: 111,
                    name: "随意勾选 1-1-21",
                    // open:true
                },{
                    id: 1116,
                    pId: 111,
                    name: "随意勾选 1-1-21",
                    // open:true
                },


                {
                    id: 112,
                    pId: 12,
                    name: "随意勾选 1-1-1"
                },
                {
                    id: 12,
                    pId: 1,
                    name: "随意勾选 1-2",
                    open: true,
                    // iconSkin: "icon01"
                },
                {
                    id: 121,
                    pId: 12,
                    name: "随意勾选 1-2-1"
                },
                {
                    id: 122,
                    pId: 12,
                    name: "随意勾选 1-2-2"
                },
                {
                    id: 2,
                    pId: 0,
                    name: "随意勾选 2",
                    checked: true,
                    open: true,
                    // iconSkin: "icon01"
                },
                {
                    id: 21,
                    pId: 2,
                    name: "随意勾选 2-1"
                },
                {
                    id: 22,
                    pId: 2,
                    name: "随意勾选 2-2",
                    open: true,
                    // iconSkin: "icon01"
                },
                {
                    id: 221,
                    pId: 22,
                    name: "随意勾选 2-2-1",
                    // checked: true,
                },
                {
                    id: 222,
                    pId: 22,
                    name: "随意勾选 2-2-2"
                },
                {
                    id: 23,
                    pId: 2,
                    name: "随意勾选 2-3"
                }
            ];

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
                        .tree-btns{
                            display: flex;
                            justify-content: flex-end;
                            margin-top: 11px;
                            span{
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
