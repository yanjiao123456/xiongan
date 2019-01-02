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
            <div class="charts">
                <div id="dingbiao" style="width:100%;height:100%;"></div>
            </div>

        </div>


        <div class="Table">
            <div class="bg"></div>
            <div class="title"><h3>数据列表</h3>
                <!-- <div class="head-right">

                    <i class="icon-pdf"></i><i class="icon-excel"></i></div> -->
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
    import TemplateTable from '../../views/template-table'

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

                var dingbiao = document.getElementById('dingbiao');
                var dingbiaoChart = echarts.init(dingbiao);
                var lifepectancy=[81.7, 82.5, 83.1, 81.1, 80.4, 83.2, 81.7, 81.1, 82.7, 82.2, 79.2, 84.2, 82, 82.3, 80.2, 80.8, 83.7, 82.1, 82.6, 81.9, 82.4, 81, 81, 81.6, 80.6, 83.3, 82.8, 78.8, 81.1, 79, 77, 81.5, 80.3, 80.7, 78.3, 77.6, 73.5, 82, 74.4, 76.4, 81.2, 77.1, 75.3, 74.3, 76.5, 77.5, 76.7, 76.4, 70.3, 74.8, 74.5, 71.5, 77, 75.8, 77.4, 74.3, 69.6, 75.6, 74.9, 72.9, 77.8, 76.2, 73.3, 74.6, 70.5, 79.6, 75, 79.6, 75.6, 75, 75.5, 74.4, 75, 74, 78, 79.5, 77, 70.9, 74.7, 73.6, 76.6, 75.5, 75, 74.9, 71.1, 74.2, 74.8, 74.6, 76.1, 76, 70.2, 69.8, 75.2, 75.8, 74.2, 77.9, 71.3, 75, 73.7, 73, 73, 71.8, 70.1, 73.7, 77, 69.4, 71.7, 64.5, 64.9, 73, 71.3, 65.7, 69.1, 73.1, 75.9, 68.3, 73.3, 68.7, 57.7, 70.8, 69.6, 73.5, 74.3, 75.2, 72.1, 65.1, 66.5, 69.3, 69.6, 73.3, 68.3, 69.9, 68.5, 72.1, 62.9, 57.9, 66.2, 66.6, 72, 61.5, 60.8, 66.6, 68.8, 70, 66.1, 62.2, 66.4, 48.9, 69.7, 52.7, 65.5, 53.1, 56, 62.8, 59.2, 68.1, 63.2, 65.5, 64.7, 63.6, 50.1, 66.9, 63.1, 59.2, 63.7, 60.2, 59.8, 64.1, 60.7, 63.9, 51.9, 62.3, 60.5, 64.6, 58.5, 59.1, 61.2, 55.5, 64.2, 51.3, 55.5, 56.1, 59.2, 57.1, 59, 51.9, 61.9, 51.5, 71.6];
                var GNI=[67614, 42822, 56364, 45000, 44519, 78162, 46326, 43798, 37065, 42582, 53245, 54265, 32870, 46251, 75065, 37931, 37268, 34541, 31215, 62471, 38085, 41243, 38868, 43609, 28664, 33573, 32779, 28144, 24808, 72843, 26362, 47979, 29459, 29500, 129916, 24117, 26006, 21665, 51320, 26764, 26104, 66203, 23394, 22589, 20945, 20291, 37236, 15410, 23286, 19428, 76075, 15629, 34402, 14952, 19148, 16261, 22093, 21565, 24620, 13771, 19470, 20907, 23886, 17948, 28049, 14006, 12202, 7455, 16395, 8856, 18705, 15129, 10789, 22436, 10252, 13312, 16383, 16413, 14145, 11502, 10091, 12405, 13533, 8189, 7361, 10111, 11295, 14519, 10536, 13345, 8245, 10449, 9791, 8350, 12762, 10096, 16018, 10249, 12756, 10372, 5284, 14303, 7375, 5372, 10383, 5748, 5026, 14663, 19044, 8182, 10064, 14026, 10053, 5256, 5335, 8395, 7732, 6155, 12087, 3097, 11608, 6049, 7195, 4747, 7063, 9770, 6884, 3291, 2601, 4466, 5663, 7081, 5371, 2805, 5503, 21517, 2475, 5049, 3341, 3839, 3464, 3070, 3095, 2337, 4943, 2881, 5031, 7522, 2441, 6291, 2467, 5443, 2894, 2712, 1588, 1561, 3527, 1320, 1617, 1335, 3319, 2250, 1657, 1670, 3846, 1262, 1979, 2300, 1871, 1073, 3163, 3216, 1541, 1523, 2218, 680, 683, 1369, 1490, 1529, 1098, 1882, 1058, 691, 1537, 1991, 889, 587, 14447];
                var redata=[
                    [81.7, 67614],
                    [82.5, 42822],
                    [83.1, 56364],
                    [81.1, 45000],
                    [80.4, 44519],
                    [83.2, 78162],
                    [81.7, 46326],
                    [81.1, 43798],
                    [82.7, 37065],
                    [82.2, 42582],
                    [79.2, 53245],
                    [84.2, 54265],
                    [82, 32870],
                    [82.3, 46251],
                    [80.2, 75065],
                    [80.8, 37931],
                    [83.7, 37268],
                    [82.1, 34541],
                    [82.6, 31215],
                    [81.9, 62471],
                    [82.4, 38085],
                    [81, 41243],
                    [81, 38868],
                    [81.6, 43609],
                    [80.6, 28664],
                    [83.3, 33573],
                    [82.8, 32779],
                    [78.8, 28144],
                    [81.1, 24808],
                    [79, 72843],
                    [77, 26362],
                    [81.5, 47979],
                    [80.3, 29459],
                    [80.7, 29500],
                    [78.3, 129916],
                    [77.6, 24117],
                    [73.5, 26006],
                    [82, 21665],
                    [74.4, 51320],
                    [76.4, 26764],
                    [81.2, 26104],
                    [77.1, 66203],
                    [75.3, 23394],
                    [74.3, 22589],
                    [76.5, 20945],
                    [77.5, 20291],
                    [76.7, 37236],
                    [76.4, 15410],
                    [70.3, 23286],
                    [74.8, 19428],
                    [74.5, 76075],
                    [71.5, 15629],
                    [77, 34402],
                    [75.8, 14952],
                    [77.4, 19148],
                    [74.3, 16261],
                    [69.6, 22093],
                    [75.6, 21565],
                    [74.9, 24620],
                    [72.9, 13771],
                    [77.8, 19470],
                    [76.2, 20907],
                    [73.3, 23886],
                    [74.6, 17948],
                    [70.5, 28049],
                    [79.6, 14006],
                    [75, 12202],
                    [79.6, 7455],
                    [75.6, 16395],
                    [75, 8856],
                    [75.5, 18705],
                    [74.4, 15129],
                    [75, 10789],
                    [74, 22436],
                    [78, 10252],
                    [79.5, 13312],
                    [77, 16383],
                    [70.9, 16413],
                    [74.7, 14145],
                    [73.6, 11502],
                    [76.6, 10091],
                    [75.5, 12405],
                    [75, 13533],
                    [74.9, 8189],
                    [71.1, 7361],
                    [74.2, 10111],
                    [74.8, 11295],
                    [74.6, 14519],
                    [76.1, 10536],
                    [76, 13345],
                    [70.2, 8245],
                    [69.8, 10449],
                    [75.2, 9791],
                    [75.8, 8350],
                    [74.2, 12762],
                    [77.9, 10096],
                    [71.3, 16018],
                    [75, 10249],
                    [73.7, 12756],
                    [73, 10372],
                    [73, 5284],
                    [71.8, 14303],
                    [70.1, 7375],
                    [73.7, 5372],
                    [77, 10383],
                    [69.4, 5748],
                    [71.7, 5026],
                    [64.5, 14663],
                    [64.9, 19044],
                    [73, 8182],
                    [71.3, 10064],
                    [65.7, 14026],
                    [69.1, 10053],
                    [73.1, 5256],
                    [75.9, 5335],
                    [68.3, 8395],
                    [73.3, 7732],
                    [68.7, 6155],
                    [57.7, 12087],
                    [70.8, 3097],
                    [69.6, 11608],
                    [73.5, 6049],
                    [74.3, 7195],
                    [75.2, 4747],
                    [72.1, 7063],
                    [65.1, 9770],
                    [66.5, 6884],
                    [69.3, 3291],
                    [69.6, 2601],
                    [73.3, 4466],
                    [68.3, 5663],
                    [69.9, 7081],
                    [68.5, 5371],
                    [72.1, 2805],
                    [62.9, 5503],
                    [57.9, 21517],
                    [66.2, 2475],
                    [66.6, 5049],
                    [72, 3341],
                    [61.5, 3]
                ];

                var myRegression = ecStat.regression('exponential', redata);
                myRegression.points.sort(function(a, b) {
                    return a[0] - b[0];
                });

                var bin1 = ecStat.histogram(lifepectancy);
                var bin2 = ecStat.histogram(GNI);
                var tmp=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
                var mydata=[53, 32, 32, 15, 14, 9, 7, 6, 6, 3, 3, 3, 2, 2, 1, 3];
                option = {
                    title:{
                        text:"国民人均收入和预期寿命散点图"
                    },
                    tooltip:{
                        show:true,
                        axisPointer:{
                            type:'cross'
                        },
                        formatter:function (params) {
                            if(params.value[1]>55)  {
                                return params.name + '<br/>'
                                +"GNI: "+params.value[1]+ '美元<br/>'
                                +'年龄: '+params.value[0];
                            }
                            else{
                                return params.name+' '+params.value;
                            }
                        }
                    },
                    toolbox:{
                        right:20,
                        feature:{
                            dataZoom: {},
                            saveAsImage: {},
                            restore: {},
                            magicType: {
                                type:['line','bar']
                            },
                            // brush: {},
                        }
                    },
                    grid:[{
                            show: true,
                            left: 23,
                            top: '5%',
                            containLabel: true,
                            width: '73%',
                            height:'25%'
                        },
                        {
                            show:true,
                            left:0,
                            top:"32%",
                            containLabel:true,
                            width:"75.9%",
                            height:"66%"
                        },
                        {
                            show:true,
                            left:"68%",
                            height:"66%",
                            width:"30%",
                            top:"32%",
                            containLabel:true
                        }],
                    xAxis:[{
                        gridIndex:0,
                        type:'value',
                        scale:true,
                        axisLabel:{
                            show:false
                        }
                    },
                    {
                        gridIndex:1,
                        min:40,
                        name:"年龄",
                        nameLocation:'center',
                        // axisPointer:{
                        //     show:true
                        // }
                    },
                    {
                        gridIndex:2,
                        type:'value',

                    }],
                    yAxis:[{
                        gridIndex:0,
                        type:'value',
                        name:"频数：个",
                        nameLocation:'center',
                        nameGap:28
                    },
                    {
                        gridIndex:1,
                        max:80000,
                        name:"GNI",
                        nameLocation:'end',
                        nameGap:10,
                        // axisPointer:{
                        //     show:true
                        // }
                    },
                    {
                        gridIndex:2,
                        type:"category",
                        axisLabel:{
                            show:false
                        },
                        splitLine:{
                            show:true,
                            interval:3
                        },
                        axisTick:{
                            interval:3
                        },
                        data:['0~5,000','5,000~10,000','10,000~15,000','15,000~20,000','20,000~25,000','25,000~30,000','30,000~35,000','35,000~40,000','40,000~45,000','45,000~50,000','50,000~55,000','55,000~60,000','60,000~65,000','65,000~70,000','70,000-75,000','75,000~80,000']
                    }],
                    series: [{
                        xAxisIndex:0,
                        yAxisIndex:0,
                        type: 'bar',
                        animationDuration: function (idx) {
                            // 越往后的数据延迟越大
                            return idx * 500;
                        },
                        itemStyle:{
                            normal:{
                                color:"skyblue"
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'top',
                                formatter: function(params) {
                                    return params.value[1];
                                }
                            }
                        },
                        data:bin1.data
                    },
                    // {
                    //     xAxisIndex:1,
                    //     yAxisIndex:1,
                    //     name:"china",
                    //     type:"effectScatter",
                    //     data:[{name:"China",value:[75.963,13345]},
                    //     {name:'Japan',value:[83.684,37268],
                    //         itemStyle:{
                    //             normal:{
                    //                 color:'purple'
                    //         }
                    //         },
                    //         label:{
                    //             normal:{
                    //                 color:'purple'
                    //             }
                    //         }
                    //     },
                    //     // {name:"United States",value:[79.222,53245],
                    //     // itemStyle:{
                    //     //         normal:{
                    //     //             color:'green'
                    //     //     }
                    //     //     },
                    //     //     label:{
                    //     //         normal:{
                    //     //             color:'green'
                    //     //         }
                    //     //     }
                    //     // }
                    //     ],
                    //     showEffectOn: 'render',
                    //     rippleEffect: {
                    //             brushType: 'stroke'
                    //         },
                    //         hoverAnimation: true,
                    //         label: {
                    //             normal: {
                    //                 formatter: '{b}',
                    //                 position: 'right',
                    //                 show: true,
                    //                 color:'red'
                    //             }
                    //         },
                    //         symbolSize:15,
                    //         itemStyle: {
                    //             normal: {
                    //                 color: 'red',
                    //                 shadowBlur: 10,
                    //                 shadowColor: '#333'
                    //             }
                    //         },
                    //         zlevel: 1
                    // },
                    {
                        xAxisIndex:1,
                        yAxisIndex:1,
                        name: 'line',
                        type: 'line',
                        showSymbol: false,
                        smooth: true,
                        data: myRegression.points,
                        itemStyle:{
                            normal:{
                                color:"black"
                            }
                        },
                        markPoint: {
                            itemStyle: {
                                normal: {
                                    color: 'transparent'
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'left',
                                    formatter: myRegression.expression,
                                    textStyle: {
                                        color: 'black',
                                        fontSize: 14
                                    }
                                }
                            },
                            data: [{
                                coord: myRegression.points[myRegression.points.length - 1]
                            }]
                        }
                    },
                    {
                        xAxisIndex:1,
                        yAxisIndex:1,
                        type:'scatter',
                        itemStyle:{
                            normal:{
                                color:"skyblue"
                            }
                        },
                        data:[
                            {name:"Norway",value:[81.711,67614]},
                            {name:"Australia",value:[82.537,42822]},
                            {name:"Switzerland",value:[83.133,56364]},
                            {name:"Germany",value:[81.092,45000]},
                            {name:"Denmark",value:[80.412,44519]},
                            {name:"Singapore",value:[83.209,78162]},
                            {name:"Netherlands",value:[81.706,46326]},
                            {name:"Ireland",value:[81.052,43798]},
                            {name:"Iceland",value:[82.724,37065]},
                            {name:"Canada",value:[82.224,42582]},
                            {name:"United States",value:[79.222,53245]},
                            {name:"Hong Kong, China (SAR)",value:[84.163,54265]},
                            {name:"New Zealand",value:[82.026,32870]},
                            {name:"Sweden",value:[82.347,46251]},
                            {name:"Liechtenstein",value:[80.161,75065]},
                            {name:"United Kingdom",value:[80.849,37931]},
                            {name:"Japan",value:[83.684,37268]},
                            {name:"Korea (Republic of)",value:[82.128,34541]},
                            {name:"Israel",value:[82.561,31215]},
                            {name:"Luxembourg",value:[81.881,62471]},
                            {name:"France",value:[82.359,38085]},
                            {name:"Belgium",value:[80.984,41243]},
                            {name:"Finland",value:[81.006,38868]},
                            {name:"Austria",value:[81.583,43609]},
                            {name:"Slovenia",value:[80.575,28664]},
                            {name:"Italy",value:[83.338,33573]},
                            {name:"Spain",value:[82.767,32779]},
                            {name:"Czech Republic",value:[78.775,28144]},
                            {name:"Greece",value:[81.071,24808]},
                            {name:"Brunei Darussalam",value:[79.019,72843]},
                            {name:"Estonia",value:[77.012,26362]},
                            {name:"Andorra",value:[81.458,47979]},
                            {name:"Cyprus",value:[80.332,29459]},
                            {name:"Malta",value:[80.726,29500]},
                            // {name:"Qatar",value:[78.323,129916]},
                            {name:"Poland",value:[77.62,24117]},
                            {name:"Lithuania",value:[73.495,26006]},
                            {name:"Chile",value:[81.956,21665]},
                            {name:"Saudi Arabia",value:[74.444,51320]},
                            {name:"Slovakia",value:[76.409,26764]},
                            {name:"Portugal",value:[81.183,26104]},
                            {name:"United Arab Emirates",value:[77.119,66203]},
                            {name:"Hungary",value:[75.313,23394]},
                            {name:"Latvia",value:[74.342,22589]},
                            {name:"Argentina",value:[76.457,20945]},
                            {name:"Croatia",value:[77.495,20291]},
                            {name:"Bahrain",value:[76.715,37236]},
                            {name:"Montenegro",value:[76.401,15410]},
                            {name:"Russian Federation",value:[70.264,23286]},
                            {name:"Romania",value:[74.837,19428]},
                            {name:"Kuwait",value:[74.549,76075]},
                            {name:"Belarus",value:[71.464,15629]},
                            {name:"Oman",value:[76.97,34402]},
                            {name:"Barbados",value:[75.773,14952]},
                            {name:"Uruguay",value:[77.351,19148]},
                            {name:"Bulgaria",value:[74.322,16261]},
                            {name:"Kazakhstan",value:[69.588,22093]},
                            {name:"Bahamas",value:[75.556,21565]},
                            {name:"Malaysia",value:[74.901,24620]},
                            {name:"Palau",value:[72.87,13771]},
                            {name:"Panama",value:[77.755,19470]},
                            {name:"Antigua and Barbuda",value:[76.236,20907]},
                            {name:"Seychelles",value:[73.303,23886]},
                            {name:"Mauritius",value:[74.595,17948]},
                            {name:"Trinidad and Tobago",value:[70.52,28049]},
                            {name:"Costa Rica",value:[79.613,14006]},
                            {name:"Serbia",value:[75.049,12202]},
                            {name:"Cuba",value:[79.573,7455]},
                            {name:"Iran (Islamic Republic of)",value:[75.581,16395]},
                            {name:"Georgia",value:[75.02,8856]},
                            {name:"Turkey",value:[75.528,18705]},
                            {name:"Venezuela (Bolivarian Republic of)",value:[74.387,15129]},
                            {name:"Sri Lanka",value:[75.049,10789]},
                            {name:"Saint Kitts and Nevis",value:[73.979,22436]},
                            {name:"Albania",value:[77.968,10252]},
                            {name:"Lebanon",value:[79.537,13312]},
                            {name:"Mexico",value:[76.972,16383]},
                            {name:"Azerbaijan",value:[70.896,16413]},
                            {name:"Brazil",value:[74.748,14145]},
                            {name:"Grenada",value:[73.557,11502]},
                            {name:"Bosnia and Herzegovina",value:[76.634,10091]},
                            {name:"The former Yugoslav Republic of Macedonia",value:[75.532,12405]},
                            {name:"Algeria",value:[75.027,13533]},
                            {name:"Armenia",value:[74.886,8189]},
                            {name:"Ukraine",value:[71.129,7361]},
                            {name:"Jordan",value:[74.175,10111]},
                            {name:"Peru",value:[74.814,11295]},
                            {name:"Thailand",value:[74.616,14519]},
                            {name:"Ecuador",value:[76.121,10536]},
                            {name:"China",value:[75.963,13345]},
                            {name:"Fiji",value:[70.151,8245]},
                            {name:"Mongolia",value:[69.806,10449]},
                            {name:"Saint Lucia",value:[75.199,9791]},
                            {name:"Jamaica",value:[75.82,8350]},
                            {name:"Colombia",value:[74.229,12762]},
                            {name:"Dominica",value:[77.854,10096]},
                            {name:"Suriname",value:[71.277,16018]},
                            {name:"Tunisia",value:[74.982,10249]},
                            {name:"Dominican Republic",value:[73.65,12756]},
                            {name:"Saint Vincent and the Grenadines",value:[73.043,10372]},
                            {name:"Tonga",value:[72.989,5284]},
                            {name:"Libya",value:[71.763,14303]},
                            {name:"Belize",value:[70.076,7375]},
                            {name:"Samoa",value:[73.673,5372]},
                            {name:"Maldives",value:[76.959,10383]},
                            {name:"Uzbekistan",value:[69.4,5748]},
                            {name:"Moldova (Republic of)",value:[71.731,5026]},
                            {name:"Botswana",value:[64.508,14663]},
                            {name:"Gabon",value:[64.936,19044]},
                            {name:"Paraguay",value:[73.004,8182]},
                            {name:"Egypt",value:[71.325,10064]},
                            {name:"Turkmenistan",value:[65.734,14026]},
                            {name:"Indonesia",value:[69.052,10053]},
                            {name:"Palestine, State of",value:[73.068,5256]},
                            {name:"Viet Nam",value:[75.939,5335]},
                            {name:"Philippines",value:[68.34,8395]},
                            {name:"El Salvador",value:[73.271,7732]},
                            {name:"Bolivia (Plurinational State of)",value:[68.743,6155]},
                            {name:"South Africa",value:[57.658,12087]},
                            {name:"Kyrgyzstan",value:[70.791,3097]},
                            {name:"Iraq",value:[69.626,11608]},
                            {name:"Cabo Verde",value:[73.538,6049]},
                            {name:"Morocco",value:[74.31,7195]},
                            {name:"Nicaragua",value:[75.212,4747]},
                            {name:"Guatemala",value:[72.062,7063]},
                            {name:"Namibia",value:[65.062,9770]},
                            {name:"Guyana",value:[66.499,6884]},
                            {name:"Micronesia (Federated States of)",value:[69.268,3291]},
                            {name:"Tajikistan",value:[69.582,2601]},
                            {name:"Honduras",value:[73.334,4466]},
                            {name:"India",value:[68.322,5663]},
                            {name:"Bhutan",value:[69.852,7081]},
                            {name:"Timor-Leste",value:[68.514,5371]},
                            {name:"Vanuatu",value:[72.107,2805]},
                            {name:"Congo",value:[62.892,5503]},
                            {name:"Equatorial Guinea",value:[57.909,21517]},
                            {name:"Kiribati",value:[66.229,2475]},
                            {name:"Lao People's Democratic Republic",value:[66.598,5049]},
                            {name:"Bangladesh",value:[71.985,3341]},
                            {name:"Ghana",value:[61.531,3839]},
                            {name:"Zambia",value:[60.819,3464]},
                            {name:"Sao Tome and Principe",value:[66.582,3070]},
                            {name:"Cambodia",value:[68.807,3095]},
                            {name:"Nepal",value:[69.989,2337]},
                            {name:"Myanmar",value:[66.118,4943]},
                            {name:"Kenya",value:[62.164,2881]},
                            {name:"Pakistan",value:[66.365,5031]},
                            {name:"Swaziland",value:[48.943,7522]},
                            {name:"Syrian Arab Republic",value:[69.652,2441]},
                            {name:"Angola",value:[52.698,6291]},
                            {name:"Tanzania (United Republic of)",value:[65.512,2467]},
                            {name:"Nigeria",value:[53.057,5443]},
                            {name:"Cameroon",value:[55.958,2894]},
                            {name:"Papua New Guinea",value:[62.769,2712]},
                            {name:"Zimbabwe",value:[59.2,1588]},
                            {name:"Solomon Islands",value:[68.107,1561]},
                            {name:"Mauritania",value:[63.239,3527]},
                            {name:"Madagascar",value:[65.515,1320]},
                            {name:"Rwanda",value:[64.749,1617]},
                            {name:"Comoros",value:[63.567,1335]},
                            {name:"Lesotho",value:[50.08,3319]},
                            {name:"Senegal",value:[66.929,2250]},
                            {name:"Haiti",value:[63.119,1657]},
                            {name:"Uganda",value:[59.209,1670]},
                            {name:"Sudan",value:[63.732,3846]},
                            {name:"Togo",value:[60.175,1262]},
                            {name:"Benin",value:[59.76,1979]},
                            {name:"Yemen",value:[64.053,2300]},
                            {name:"Afghanistan",value:[60.704,1871]},
                            {name:"Malawi",value:[63.88,1073]},
                            {name:"Côte d'Ivoire",value:[51.889,3163]},
                            {name:"Djibouti",value:[62.297,3216]},
                            {name:"Gambia",value:[60.463,1541]},
                            {name:"Ethiopia",value:[64.602,1523]},
                            {name:"Mali",value:[58.474,2218]},
                            {name:"Congo (Democratic Republic of the)",value:[59.057,680]},
                            {name:"Liberia",value:[61.188,683]},
                            {name:"Guinea-Bissau",value:[55.486,1369]},
                            {name:"Eritrea",value:[64.186,1490]},
                            {name:"Sierra Leone",value:[51.317,1529]},
                            {name:"Mozambique",value:[55.478,1098]},
                            {name:"South Sudan",value:[56.134,1882]},
                            {name:"Guinea",value:[59.215,1058]},
                            {name:"Burundi",value:[57.118,691]},
                            {name:"Burkina Faso",value:[59.007,1537]},
                            {name:"Chad",value:[51.897,1991]},
                            {name:"Niger",value:[61.936,889]},
                            {name:"Central African Republic",value:[51.458,587]}
                            // {name:"World",value:[71.6234530481016,14447]}
                            ],
                        // markLine : {
                        //     lineStyle: {
                        //         normal: {
                        //             type: 'solid',
                        //             color:'green'
                        //         }
                        //     },
                        //     animationDuration:3000,
                        //     label:{
                        //         show:false,
                        //         position:'middle',
                        //         formatter:'{b}:{c}'
                        //     },
                        //     data : [
                        //         {type : 'average', name: '平均值',valueIndex:0},
                        //         {type : 'average', name: '平均值',valueIndex:1}
                        //         // { xAxis: 170 }
                        //     ]
                        // },
                        // markPoint:{
                        //     data : [
                        //             {type : 'max', name: '最大值',valueIndex:1},
                        //             {type : 'min', name: '最小值',valueIndex:1},
                        //             // {type : 'max', name: '最大值',valueIndex:1},
                        //             // {type : 'min', name: '最小值',valueIndex:1},
                        //         ],
                        //     itemStyle:{
                        //         normal:{
                        //             color:"green"
                        //         }
                        //     }
                        // }
                    },
                    {
                        xAxisIndex:2,
                        yAxisIndex:2,
                        type:'bar',
                        itemStyle:{
                            normal:{
                                color:"skyblue"
                            }
                        },
                        animationDuration: function (idx) {
                            // 越往后的数据延迟越大
                            return Math.abs(idx-16) * 500;
                        },
                        barCategoryGap:0.0000001,
                        data:mydata,
                        label: {
                            normal: {
                                show: false,
                                position: 'right',
                                formatter: function(params) {
                                    return params.value[1];
                                }
                            }
                        },
                    }],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function (idx) {
                        return idx * 5;
                    }
                };

                // 使用刚指定的配置项和数据显示图表。
                dingbiaoChart.setOption(option);
                window.onresize=function(){
                    dingbiaoChart.resize();
                }
            },
        },
        mounted() {
            this.SetEchart();
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
                            background: url("../../../assets/NengHaoChaXun/icon_gb 拷贝.png") no-repeat;
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
                                background: url("../../../assets/NengHaoChaXun/矩形 831.png") no-repeat;
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
                                                background: url("../../../assets/NengHaoChaXun/矩形 1.png") no-repeat;
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
                            background: url("../../../assets/NengHaoChaXun/icon_gb 拷贝.png") no-repeat;
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
                                                background: url("../../../assets/NengHaoChaXun/矩形 1.png") no-repeat;
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
                background: url("../../../assets/NengHaoChaXun/bt_zk.png") no-repeat;
                position: absolute;
                left: 50%;
                bottom: -20px;
                margin-left: -30px;
            }
            .shift-knob-b {
                width: 61px;
                height: 20px;
                background: url("../../../assets/NengHaoChaXun/bt_ss.png") no-repeat;
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
                        background: url("../../../assets/PeiDianJianCe/icon_lx.png") no-repeat;
                    }
                    .icon-jh{
                        width: 14px;
                        height: 16px;
                        display: inline-block;
                        background: url("../../../assets/PeiDianJianCe/icon_jh1.png") no-repeat;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-wd {
                        display: inline-block;
                        width: 16px;
                        height: 15px;
                        background: url("../../../assets/NengHaoChaXun/icon_wd.png") no-repeat;
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
                            background: url("../../../assets/NengHaoChaXun/icon_ss.png") no-repeat;
                        }
                        .icon-right {
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            background: url("../../../assets/NengHaoChaXun/icon_gd.png") no-repeat;
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
                        background: url("../../../assets/NengHaoChaXun/bt_wxz.png") no-repeat;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .cur {
                        background: url("../../../assets/NengHaoChaXun/bt_xz.png") no-repeat;
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
                        background: url("../../../assets/NengHaoChaXun/icon_nh.png") no-repeat;
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
                            background: url("../../../assets/NengHaoChaXun/point.png") no-repeat;
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
                    background: url("../../../assets/NengHaoChaXun/pdf.png") no-repeat;
                    margin-right: 20px;
                }
                .icon-excel {
                    display: inline-block;
                    width: 21px;
                    height: 21px;
                    background: url("../../../assets/NengHaoChaXun/excel.png") no-repeat;
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
                width: 100%;
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
                    background: url("../../../assets/PeiDianJianCe/icon_bxz.png") no-repeat;
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
                    background: url("../../../assets/NengHaoChaXun/icon_zz.png") no-repeat;
                }
                .icon-prev {
                    width: 8px;
                    height: 14px;
                    display: inline-block;
                    transform: rotate(180deg);
                    margin-left: 10px;
                    background: url("../../../assets/NengHaoChaXun/箭头2.png") no-repeat;
                }
                .icon-next {
                    width: 8px;
                    height: 14px;
                    display: inline-block;
                    margin-left: 20px;
                    background: url("../../../assets/NengHaoChaXun/箭头2.png") no-repeat;
                }
                .icon-last {
                    margin-left: 10px;
                    width: 10px;
                    height: 14px;
                    display: inline-block;
                    background: url("../../../assets/NengHaoChaXun/icon_yy.png") no-repeat;
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
