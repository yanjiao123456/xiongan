<template>
    <div class="RTData Inquire">
        <transition name="el-zoom-in-center">
            <div v-show="leftShow" class="left-branch">
                <div class="tabTit">
          <span
                  v-for="(v,index) in tabTitleArr"
                  @click="bindTabTit(index+1)"
                  :class="{cur:tabTit==index+1}"
          >{{ v }}</span>
                </div>
                <!--<div class="tit">选择支路</div>-->
                <div class="inputBox">
                    <i class="icon-ss"></i>
                    <input placeholder="请输入支路名称" type="text" id="key" value class="empty">
                    <br>
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
                <div class="title">
                    <h3>筛选条件</h3>
                </div>
                <div
                        @click="filtrateShow=!filtrateShow"
                        :class="{'shift-knob-t':filtrateShow,'shift-knob-b':!filtrateShow}"
                ></div>
                <el-collapse-transition>
                    <div v-show="filtrateShow" class="filtrate-show">
                        <div class="item-row">

                            <i class="icon-lx"></i>
                            <span class="checkbox-tit">分析方法:</span>
                            <div class="count">
                                <!--<div class="bg"></div>-->
                                <select v-model="compareVal">
                                    <option value="tongbi">同比</option>
                                    <option value="huanbi">环比</option>
                                    <option value="zibi">自比</option>
                                </select>
                            </div>


                            <!--v-show="compareVal == 15"-->
                        </div>
                        <div v-show="compareVal == 'zibi'" class="item-row">
                            <div class="fl">
                                <span class="date-select">时间选择</span>
                                <el-date-picker
                                        class
                                        v-model="userDefined"
                                        type="datetimerange"
                                        range-separator="—"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                ></el-date-picker>
                            </div>
                        </div>
                        <div class="item-row">
                            <i class="icon-wd"></i>
                            <span class="checkbox-tit">维度:</span>
                            <el-radio class="choice" v-model="dateType" label="hour">时</el-radio>
                            <el-radio class="choice" v-model="dateType" label="day">天</el-radio>
                            <el-radio class="choice" v-model="dateType" label="month">月</el-radio>
                        </div>
                        <!--value-format="yyyy-MM-dd HH:mm:ss"-->
                        <!--value-format="timestamp"-->
                        <div class="item-row item-row-br">
                            <div class="fl">
                                <span class="date-select">时间选择</span>
                                <el-date-picker
                                        class
                                        v-model="value4"
                                        type="datetimerange"
                                        value-format="timestamp"
                                        range-separator="—"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                ></el-date-picker>
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
                            <div @click="bindQuery" :class="{'btn-item':true,cur:btns==0}">查询</div>
                            <div @click="btns=1" :class="{'btn-item':true,cur:btns==1}">重置</div>
                        </div>
                    </div>
                </el-collapse-transition>
            </div>

            <!--对比-->
            <div class="contrast">
                <div class="lists" v-for="(v,index) in lists">
                    <div class="current-period">
                        <div class="item-left">
                            <i :class="v.icon"></i>
                        </div>
                        <div class="item-right">
                            <p>{{ v.title }}</p>
                            <div class="kwh">
                                <span v-if="dataShow" class="number">{{ yls[index].key1 }}</span>
                                <span v-if="!dataShow" class="number">0</span>
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
                                <span v-if="dataShow" class="number">{{ yls[index].key2 }}</span>
                                <span v-if="!dataShow" class="number">0</span>
                                <span class="unit">kWh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="data-box">
                <div class="bg"></div>
                <div class="title">
                    <h3>光伏发电量监测</h3>
                </div>
                <div class="my-charts">
                    <div id="chart" style="width:100%;height:100%;"></div>
                </div>
            </div>

            <div class="Table">
                <div class="bg"></div>
                <div class="title">
                    <h3>数据列表</h3>
                    <div class="head-right">
                        <i class="icon-pdf"></i>
                        <i class="icon-excel"></i>
                    </div>
                </div>

                <!--<template-table :data-tit="tableTitle"></template-table>-->
                <div class="table-box">
                    <div class="table-tit">【 2018-09-18 00:00:00 至 2018-09-18 20:00:00 能耗数据 】</div>
                    <el-table :data="tableData" border stripe style="width: 100%">
                        <el-table-column
                                :key="index"
                                v-for="(v,index) in titArr"
                                class="trs"
                                :prop="v.prop"
                                :label="v.label"
                        ></el-table-column>
                        prop: "id",
                        label: "日期",
                        sortable: false
                    </el-table>
                </div>
                <pages :total="totalSize" @returnPageNum="getDate"></pages>
                <!--<div class="selector">-->
                    <!--<i @click="pageA" class="icon-front"></i>-->
                    <!--<i @click="pageB" class="icon-prev"></i>-->
                    <!--<div class="page-num">-->
                        <!--<div class="bg"></div>-->
                        <!--<input type="text" v-model="pageNum">-->
                    <!--</div>-->

                    <!--<span v-show="!pageShow" class="page-all">/共1页</span>-->
                    <!--<span v-show="pageShow" class="page-all">/共{{ pageAll }}页</span>-->
                    <!--<i @click="nextB" class="icon-next"></i>-->
                    <!--<i @click="nextA" class="icon-last"></i>-->
                    <!--<div class="count">-->
                        <!--<div class="bg"></div>-->
                        <!--<select v-model="newPage">-->
                            <!--<option>10</option>-->
                            <!--<option>20</option>-->
                            <!--<option>50</option>-->
                            <!--<option>100</option>-->
                        <!--</select>-->
                    <!--</div>-->
                <!--</div>-->
            </div>


        </div>
    </div>
</template>

<script>
    import pages from "../common/pages";

    var echarts = require("echarts");
    export default {
        name: "nenghaoqushi",
        data() {
            return {
                newPage:10,
                pageNum:1,
                pageShow:false,
                page:0,
                pageSize:10,

                dateType: 'hour',
                totalSize:1,
                // pickerOptions2: {
                //     shortcuts: [{
                //         text: '最近一周',
                //         onClick(picker) {
                //             const end = new Date();
                //             const start = new Date();
                //             start.setTime(start.getTime() - 3600 * 1000 * 1);
                //             picker.$emit('pick', [start, end]);
                //         }
                //     }, {
                //         text: '最近一个月',
                //         onClick(picker) {
                //             const end = new Date();
                //             const start = new Date();
                //             start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                //             picker.$emit('pick', [start, end]);
                //         }
                //     }, {
                //         text: '最近三个月',
                //         onClick(picker) {
                //             const end = new Date();
                //             const start = new Date();
                //             start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                //             picker.$emit('pick', [start, end]);
                //         }
                //     }]
                // },
                // value4: [new Date().setTime(new Date().getTime() - 3600 * 1000 * 1), new Date().getTime()],
                value4: [],
                startDate: '',
                endDate: '',
                cpStartDate: '',
                cpEndDate: '',
                legend: [],
                datas: [],
                xisDatas: [],
                userDefined: '',
                tabTitleArr: ["分项", "部门", "位置", "支路"],
                titArr: [
                    {
                        prop: "dateTime",
                        label: "日期",
                        sortable: false
                    },
                    {
                        prop: "curValue",
                        label: "本期能耗",
                        sortable: false
                    },
                    {
                        prop: "cpValue",
                        label: "对比期能耗",
                        sortable: false
                    },
                    {
                        prop: "percentValue",
                        label: "同比/环比",
                        sortable: false
                    },

                ],
                zNodes: [],
                compareVal: "tongbi",
                compareShow: false,
                dataShow: false,
                tableData6: [
                    {
                        id: "12987122",
                        name: "王小虎",
                        amount1: "234",
                        amount2: "3.2",
                        amount3: 10
                    },
                    {
                        id: "12987123",
                        name: "王小虎",
                        amount1: "165",
                        amount2: "4.43",
                        amount3: 12
                    },
                    {
                        id: "12987124",
                        name: "王小虎",
                        amount1: "324",
                        amount2: "1.9",
                        amount3: 9
                    },
                    {
                        id: "12987125",
                        name: "王小虎",
                        amount1: "621",
                        amount2: "2.2",
                        amount3: 17
                    },
                    {
                        id: "12987126",
                        name: "王小虎",
                        amount1: "539",
                        amount2: "4.1",
                        amount3: 15
                    }
                ],
                tableData: [],
                lists: [
                    {
                        title: "本期汇总",
                        icon: "item-icon-hz",
                        title2: "同期汇总"
                    },
                    {
                        title: "本期平均",
                        icon: "item-icon-pjf",
                        title2: "同期平均"
                    },
                    {
                        title: "本期最大值",
                        icon: "item-icon-max",
                        title2: "同期最大值"
                    },
                    {
                        title: "本期最小值 ",
                        icon: "item-icon-min",
                        title2: "同期最小值"
                    },
                    {
                        title: "本期同比",
                        icon: "item-icon-tb",
                        title2: "同期同比"
                    }
                ],
                yls: [],
                treeId: "",
                option: "2",
                tabTit: 1,
                radio: 2,
                leftShow: true,
                filtrateShow: true,
                btns: 0,
                no2off: true,
                value6: "",
                days: 2,
                checked5: true,
                checked6: true,
                checked7: true,
                checked8: false,
                checked9: false,
                checked10: false,

            };
        },
        components: {
            pages
        },
        computed:{
            pageAll(){
                Math.ceil(this.totalSize/this.newPage)　　// 3
            }
        },
        //2018-12-23 00:00:00
        methods: {
            pageA(){

            },
            pageB(){

            },
            nextA(){

            },
            nextB(){

            },
            getDate(page,pageSize){
                this.page=page;
                this.pageSize=pageSize;
                this.getTableData();
            },
            bindQuery() {
                this.getMainData();

                this.btns = 0
            },
            bindAdd(date, part, value) {
                value *= 1;
                if (isNaN(value)) {
                    value = 0;
                }
                switch (part) {
                    case "y":
                        date.setFullYear(date.getFullYear() + value);
                        break;
                    case "m":
                        date.setMonth(date.getMonth() + value);
                        break;
                    case "d":
                        date.setDate(date.getDate() + value);
                        break;
                    case "h":
                        date.setHours(date.getHours() + value);
                        break;
                    case "n":
                        date.setMinutes(date.getMinutes() + value);
                        break;
                    case "s":
                        date.setSeconds(date.getSeconds() + value);
                        break;
                    default:

                }

            },
            format(date) {
                // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
                date.getTime();
                // var date = new Date(1398250549490);
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                let D = date.getDate() + ' ';
                let h = date.getHours() + ':';
                let m = date.getMinutes() + ':';
                let s = date.getSeconds();

                m = m.length == 2 ? '0' + m : m;
                h = h.length == 2 ? '0' + h : h;
                s = s.length == 2 ? '0' + s : s;

                // console.log(m.length);
                // console.log(Y+M+D+h+m+s); //呀麻碟
                return Y + M + D + h + m + s;
            },

            bindTabTit(index) {
                this.tabTit = index;
                this.getTreeData();
            },
            zTreeOnCheck(event, treeId, setting) {
                //   console.log("treeId", treeId);
                // console.log("setting", setting);
                this.treeId = setting.id;
                this.getMainData();
                this.getTableData();
            },
            treeDom() {
                let treeUl = $("#treeDemo");
                for (let i = 0; i < array.length; i++) {
                }
            },
            messageErr() {
                this.$message.error(' 该支路下没有绑定实体表 ');
            },
            getTableData() {
                this.bindss();
                let _this = this;
                //树型导航
                this.$axios
                    .get("/xa_energy_analysis!queryTableData.action", {
                        params: {
                            treeType: _this.tabTit,
                            treeId: _this.treeId,
                            dateType: _this.dateType,
                            beginTime: _this.startDate,
                            endTime: _this.endDate,
                            compareBeginTime: _this.cpStartDate,
                            compareEndTime: _this.cpEndDate,
                            pageStart: (_this.page*_this.pageSize),
                            pageSize: _this.pageSize
                            // buildingId: 1
                        }
                    })
                    .then(function (response) {
                        var data = response.data.data;
                        console.log(data);
                        if (data.message == " 该支路下没有绑定实体表 ") {
                            // _this.messageErr();
                        } else {
                            _this.tableData = data;

                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            bindss() {

                this.startDate = this.format(new Date(this.value4[0]));
                this.endDate = this.format(new Date(this.value4[1]));
                var start = this.value4[0];
                var end = this.value4[1];


                if (this.compareVal == 'tongbi' || this.dateType == 'month') {
                    let startdate = new Date(start);
                    let enddate = new Date(end);
                    this.bindAdd(startdate, 'y', -1);
                    this.bindAdd(enddate, 'y', -1);
                    this.cpStartDate = this.format(startdate);
                    this.cpEndDate = this.format(enddate);


                } else if (this.compareVal == 'huanbi') {
                    let startdate = new Date(start);
                    let enddate = new Date(end);
                    this.bindAdd(startdate, 'd', -1);
                    this.bindAdd(enddate, 'd', -1);
                    this.cpStartDate = this.format(startdate);
                    this.cpEndDate = this.format(enddate);


                    if (this.dateType == 'day') {
                        let startdate = new Date(start);
                        let enddate = new Date(end);
                        this.bindAdd(startdate, 'm', -1);
                        this.bindAdd(enddate, 'm', -1);
                        this.cpStartDate = this.format(startdate);
                        this.cpEndDate = this.format(enddate);
                    }
                } else if (this.compareVal == 'zibi') {
                    console.log(this.userDefined);
                    this.cpStartDate = this.userDefined[0];
                    this.cpEndDate = this.userDefined[1];
                }
            },
            getMainData() {
                this.bindss();
                var _this = this;
                console.log('_this.dateType', _this.dateType);
                console.log('_this.startDate', _this.startDate);
                console.log('_this.endDate', _this.endDate);
                console.log('_this.cpStartDate', _this.cpStartDate);
                console.log('_this.cpEndDate', _this.cpEndDate);
                //树型导航
                this.$axios
                    .get("/xa_energy_analysis!queryOverData.action", {
                        params: {
                            treeType: _this.tabTit,
                            treeId: _this.treeId,
                            dateType: _this.dateType,
                            beginTime: _this.startDate,
                            endTime: _this.endDate,
                            compareBeginTime: _this.cpStartDate,
                            compareEndTime: _this.cpEndDate,
                            pageStart: 0,
                            pageSize: 10
                            // buildingId: 1
                        }
                    })
                    .then(function (response) {
                        var data = response.data.data;
                        // console.log(data);
                        if (data.message == " 该支路下没有绑定实体表 ") {
                            _this.messageErr();
                        } else {

                            _this.totalSize=data.totalSize;

                            _this.dataShow = true;
                            // console.log(data.yls);
                            _this.yls = data.yls;
                            _this.legend = data.legend;
                            _this.xisDatas = data.xisDatas;
                            _this.datas = data.datas;
                            // console.log(_this.xisDatas);
                            _this.SetEchart();
                            _this.getTableData();

                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getTreeData() {
                let _this = this;
                //树型导航
                this.$axios
                    .get("/sep_tree!queryTreeByType.action", {
                        params: {
                            type: _this.tabTit,
                            parentId: 0,
                            buildingId: 1
                        }
                    })
                    .then(function (response) {
                        _this.zNodes = response.data.data;
                        // console.log(_this.zNodes);
                        _this.treeInit();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            SetEchart() {
                let _this = this;
                var chart = document.getElementById("chart");
                var chartChart = echarts.init(chart);
                var option = {
                    tooltip: {
                        color: ["#FFF350", "#C09DFF", "#00FFFF"],
                        trigger: "axis",
                        axisPointer: {
                            lineStyle: {
                                type: "shadow",
                                color: "#778AA8"
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
                        data: _this.legend,
                        textStyle: {
                            color: "rgb(91,227,224)" //示例标识文字颜色
                        }
                    },
                    xAxis: [
                        {
                            type: "category",
                            axisLine: {
                                lineStyle: {
                                    color: "rgb(91,227,224)" //x轴坐标颜色
                                }
                            },
                            boundaryGap: true,
                            data: _this.xisDatas
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            name: "",
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "rgb(110,131,162)"
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
                                    color: "rgb(42,81,125)"
                                }
                            }
                        }
                    ],
                    series: [

                        {
                            name: _this.legend[0],
                            data: _this.datas[0],
                            type: "line",
                            symbol: "circle",
                            symbolSize: 8,
                            color: "#04B8CE",
                            lineStyle: {
                                color: "rgba(192, 157, 255, 1)"
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgba(192, 157, 255, 1)" // 描边线条上的圆圈颜色及示例指示标颜色
                                }
                            }
                        },
                        {
                            name: _this.legend[1],
                            data: _this.datas[1],
                            type: "line",
                            symbol: "circle",
                            symbolSize: 8,
                            color: "#04B8CE",
                            lineStyle: {
                                color: "rgba(0, 255, 255, 1)"
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgba(0, 255, 255, 1)" // 描边线条上的圆圈颜色及示例指示标颜色
                                }
                            }
                        }
                    ]
                };
                chartChart.setOption(option);
                window.onresize = function () {
                    chartChart.resize();
                };
            },
            treeInit() {
                let _this = this;
                var setting = {
                    check: {
                        enable: true,
                        // enable: true,
                        chkStyle: "radio",
                        radioType: "all"
                    },
                    callback: {
                        onCheck: _this.zTreeOnCheck
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

                var code;

                function setCheck() {
                    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                        py = $("#py").attr("checked") ? "p" : "",
                        sy = $("#sy").attr("checked") ? "s" : "",
                        pn = $("#pn").attr("checked") ? "p" : "",
                        sn = $("#sn").attr("checked") ? "s" : "",
                        type = {Y: py + sy, N: pn + sn};
                    zTree.setting.check.chkboxType = type;
                    showCode(
                        'setting.check.chkboxType = { "Y" : "' +
                        type.Y +
                        '", "N" : "' +
                        type.N +
                        '" };'
                    );
                }

                function showCode(str) {
                    if (!code) code = $("#code");
                    code.empty();
                    code.append("<li>" + str + "</li>");
                }

                console.log("3", _this.zNodes);
                $.fn.zTree.init($("#treeDemo"), setting, _this.zNodes);
                fuzzySearch("treeDemo", "#key", null, true); //初始化模糊搜索方法
                setCheck();
                $("#py").bind("change", setCheck);
                $("#sy").bind("change", setCheck);
                $("#pn").bind("change", setCheck);
                $("#sn").bind("change", setCheck);
            }
        },
        mounted() {
            this.SetEchart();

            // console.log();
            var prev = new Date().setTime(new Date().getTime() - 3600 * 1000 * 1);
            var now = new Date().getTime();
            this.value4[0] = prev;
            this.value4[1] = now;

            // this.value4[0]=this.format(prev);
            // this.value4[1]=this.format(now);
            // console.log(this.value4);


        },
        created() {
            this.getTreeData();
        }
    };
</script>

<style>
    .ztree li span.button.ico_open,
    .ztree li span.button.ico_close {
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

    .ztree li span.button.chk.checkbox_false_full,
    .ztree li span.button.chk.checkbox_false_full_focus {
        width: 16px;
        height: 16px;
        background: url("../../assets/PeiDianJianCe/icon_wxz.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.chk.checkbox_false_part,
    .ztree li span.button.chk.checkbox_false_part_focus,
    .ztree li span.button.chk.checkbox_true_full,
    .ztree li span.button.chk.checkbox_true_full_focus,
    .ztree li span.button.chk.checkbox_true_part,
    .ztree li span.button.chk.checkbox_true_part_focus {
        width: 16px;
        height: 16px;
        background: url("../../assets/PeiDianJianCe/icon_xz.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.roots_open,
    .ztree li span.button.bottom_open,
    .ztree li span.button.center_open {
        background: url("../../assets/PeiDianJianCe/icon_zk.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.bottom_close,
    .ztree li span.button.center_close,
    .ztree li span.button.roots_close {
        background: url("../../assets/PeiDianJianCe/icon_dj.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.chk.radio_true_full,
    .ztree li span.button.chk.radio_true_full_focus {
        background-position: 0 0;
    }

    .ztree li span.button.radio_true_full,
    .ztree li span.button.radio_true_full_focus,
    .ztree li span.button.chk.radio_true_part,
    .ztree li span.button.chk.radio_true_part_focus {
        width: 16px;
        height: 16px;
        background: url("../../assets/NengHaoChaXun/icon_xz.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.radio_false_full,
    .ztree li span.button.radio_false_full_focus,
    .ztree li span.button.radio_false_part,
    .ztree li span.button.radio_false_part_focus {
        width: 14px;
        height: 14px;
        background: url("../../assets/NengHaoChaXun/椭圆 884.png") no-repeat;
        background-position: 0 0;
    }

    .ztree li span.button.chk.radio_false_full,
    .ztree li span.button.chk.radio_false_full_focus,
    .ztree li span.button.radio_false_part,
    .ztree li span.button.radio_false_part_focus {
        background-position: 0 0;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .ztree li span.button.chk.radio_false_part,
    .ztree li span.button.chk.radio_false_part_focus {
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

            background: #0a3e6e;
            border: 1px solid #199ab7;
            /*box-shadow:0px 0px 9px 0px rgba(1,16,31,1), 0px 0px 30px 0px rgba(42,244,255,0.84);*/
            /*opacity:0.51;*/
            box-shadow: 0px 3px 9px 0px #01101f, 0px 3px 30px 2px #1a8ea0 inset;
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
                        border-bottom: 2px solid #2df3ff;
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
                background-color: #0a3e6e;
                margin-top: 20px;
                padding: 0 14px;
                box-sizing: border-box;
                position: relative;
                &:before {
                    content: "";
                }
            }
            .ztree {
                margin-top: 20px;
            }

            .tit {
                font-size: 18px;
                font-family: "HiraginoSansGB-W3";
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
                border-top: 1px solid #1a9bb8;
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

                    width: 100%;
                    @media screen and (min-width: 1500px) {
                        &:not(:first-child) {
                            margin-left: 25px;
                        }
                    }
                    @media screen and (max-width: 1500px) {
                        margin-left: 0;
                        margin-top: 20px;
                    }


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
                        /*width: 45%;*/
                        height: 90px;
                        box-sizing: border-box;
                        /*padding: 20px 0;*/

                        border: 1px solid rgba(42, 244, 255, 1);
                        box-shadow: 0px 0px 10px 0px rgba(23, 48, 80, 1),
                        0px 0px 30px 0px rgba(42, 244, 255, 0.84) inset;
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
                            background-color: #01a8f2;
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
                        /*width: 45%;*/
                        height: 90px;
                        /*margin-left: 10%;*/
                        box-sizing: border-box;
                        margin-top: 25px;
                        /*padding: 20px 0;*/

                        border: 1px solid rgba(42, 244, 255, 1);
                        box-shadow: 0px 0px 10px 0px rgba(23, 48, 80, 1),
                        0px 0px 30px 0px rgba(42, 244, 255, 0.84) inset;
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
                            background-color: #5361db;
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
                box-shadow: 0px 3px 10px 0px rgba(23, 48, 80, 1),
                0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
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
                background-color: #0b3f6f;
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
                    border: 1px solid #29d1e5;
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
                            background-color: #0b3f6f;
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
                        background-color: #174b7b;
                        display: flex;
                        align-items: center;
                        border-bottom: 2px solid #0b3f6f;
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
                                background-color: #174b7b;
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
                                background: linear-gradient(
                                                180deg,
                                                rgba(6, 88, 110, 1),
                                                rgba(27, 138, 168, 1)
                                );
                                border: 1px solid rgba(153, 236, 241, 1);
                                box-shadow: 0px 1px 1px 0px rgba(12, 28, 79, 0.2);
                                border-radius: 2px;
                                color: #2df3ff;
                            }
                        }
                    }
                    .item-row-br {
                        @media screen and (max-width: 1200px) {
                            height: auto;
                            justify-content: flex-start;
                            flex-direction: column;
                            align-items: flex-start;
                        }
                    }
                    .item-row-2 {
                        height: auto;
                        width: 100%;
                        padding: 13px 10px;
                        background-color: #174b7b;
                        display: block;

                        border-bottom: 2px solid #0b3f6f;
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
                                background-color: #0b3f6f;
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
                    border: 1px solid #15759a;
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
                                background-color: #0b3f6f;
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
