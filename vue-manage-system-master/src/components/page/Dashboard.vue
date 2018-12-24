<template>
    <div class="Dashboard">
        <div class="bg"></div>
        <div class="index-slider">
            <el-carousel height="150px">
                <el-carousel-item v-for="(all,item) in Data" :key="item">
                    <el-row :gutter="20">
                        <el-col :key="index" v-for="(d,index) in all" :span="8">
                            <div class="sliderCon">
                                <div class="sbg"></div>
                                <div class="slider-inner">
                                    <span v-bind:class="{'water-icon':d.view==2 ,'yd-icon':d.view==1,'rl-icon':d.view==4 ,'ll-icon':d.view==3,
                                        'hidden-sm-and-down':true}"></span>
                                    <div class="see-blank">
                                        <p>{{d.title}}</p>
                                        <span class="led-text">{{d.data}}</span>
                                        <small>{{d.dw}}</small>
                                    </div>
                                    <div class="tong-huan-bi hidden-md-and-down">
                                        <p class="tongbi">
                                            <span>{{d.name1}}</span>
                                            <span class="tongbi-detail">{{d.tongbi}}</span>

                                            <i :class="d.class1"></i>
                                        </p>
                                        <p class="huanbi">
                                            <span>{{d.name2}}</span>
                                            <span class="hunabi-detail">{{d.huanbi}}</span>
                                            <i :class="d.class2"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="second-line">
            <el-row :gutter="20">
                <el-col :lg="12" :md="24" :sm="24" :xs="24">
                    <div class="sliderCon">
                        <div class="sbg"></div>
                        <div class="slider-inner">
                            <div class="title">
                                <h3>企业信息</h3>
                                <el-container style="padding-left:30px;padding-top:27px;">
                                    <el-aside width="300px" class="hidden-sm-and-down">
                                        <!-- <img :src="buildingImg" alt=""> -->
                                        <img src="../../assets/ShouYe/pp.jpg" alt="">
                                    </el-aside>
                                    <el-main>
                                        <div class="b-descrip">
                                            <span class="b-name">{{buildingTitle}}</span>
                                            {{buildingDetail}}
                                        </div>
                                    </el-main>
                                </el-container>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :lg="12" :md="24" :sm="24" :xs="24">
                    <div class="sliderCon">
                        <div class="sbg"></div>
                        <div class="slider-inner">
                            <div class="title">
                                <h3>单位面积能耗</h3>
                                <el-container>
                                    <div class="cav" style="font-size:14px;width:95%;bottom:-16px;">
                                        <div class="cav-flex">
                                            <div v-for="kpi in kpiList">
                                                <p> <span>{{kpi.gbt}}：</span> <span>{{kpi.gb}}</span></p>
                                                <p> <span>{{kpi.qwt}}：</span> <span>{{kpi.qw}}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="gonglv" style="width:100%;height:100%;"></div>
                                </el-container>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="three-line">
            <el-row :gutter="20">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="sliderCon">
                        <div class="sbg"></div>
                        <div class="slider-inner">
                            <div class="title">
                                <h3>能耗趋势与对比</h3>
                                <div class="shouye-sel">
                                    <div class="sel-bg"></div>
                                    <select @change="getNH()" v-model="selectValbar">
                                        <option value="hour">日</option>
                                        <option value="day">月</option>
                                        <option value="month">年</option>
                                    </select>
                                </div>
                                <el-container style="padding-left:10px;height:339px;">
                                    <el-aside width="30px" style="padding-top:35px;">
                                        <div @click="btns='all',QushiData()" :class="{butCur:btns=='all','butCircle':true}">总</div>
                                        <div @click="btns='A',QushiData()" :class="{butCur:btns=='A','butCircle':true}">电</div>
                                        <div @click="btns='B',QushiData()" :class="{butCur:btns=='B','butCircle':true}">水</div>
                                        <div @click="btns='D1',QushiData()" :class="{butCur:btns=='D1','butCircle':true}">冷</div>
                                        <div @click="btns='D2',QushiData()" :class="{butCur:btns=='D2','butCircle':true}">热</div>
                                    </el-aside>
                                    <el-main style="padding:0;">
                                        <div id="qushi" style="width:100%;height:100%;overflow: hidden;"></div>
                                    </el-main>
                                </el-container>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="five-line">
            <el-row :gutter="20">
                <el-col :lg="6" :md="12" :sm="24" :xs="24">
                    <div class="sliderCon">
                        <div class="sbg"></div>
                        <div class="slider-inner">
                            <div class="title">
                                <h3>能源种类占比</h3>
                                <div class="shouye-sel">
                                    <div class="sel-bg"></div>
                                    <select @change="getDate()" v-model="selectVal">
                                        <option value="day">日</option>
                                        <option value="month">月</option>
                                        <option value="year">年</option>
                                    </select>
                                </div>
                                <el-container>
                                    <!-- <div class="cav">
                                        
                                    </div> -->
                                    <div class="cav">
                                        <div class="cav-flex">
                                            <div>
                                                <p><span class="rec" v-bind:style="{background:color1}"></span> {{list1.name}}</p>
                                                <span>{{list1.per}}</span><small>%</small> <span>{{list1.value}}</span><small>kgce</small>
                                            </div>
                                            <div>
                                                <p> <span class="rec" v-bind:style="{background:color2}"></span> {{list2.name}}</p>
                                                <span>{{list2.per}}</span><small>%</small> <span>{{list2.value}}</span><small>kgce</small>
                                            </div>
                                        </div>
                                        <div class="cav-flex">
                                            <div>
                                                <p><span class="rec" v-bind:style="{background:color9}"></span> {{list3.name}}</p>
                                                <span>{{list3.per}}</span><small>%</small> <span>{{list3.value}}</span><small>kgce</small>
                                            </div>
                                            <div>
                                                <p><span class="rec" v-bind:style="{background:color6}"></span> {{list4.name}}</p>
                                                <span>{{list4.per}}</span><small>%</small> <span>{{list4.value}}</span><small>kgce</small>
                                            </div>
                                        </div>

                                    </div>
                                    <div id="yongneng" style="width:100%;height:100%;"></div>
                                </el-container>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :lg="6" :md="12" :sm="24" :xs="24">
                    <div class="sliderCon">
                        <div class="sbg"></div>
                        <div class="slider-inner">
                            <div class="title">
                                <h3>用电分项占比</h3>
                                <div class="shouye-sel">
                                    <div class="sel-bg"></div>
                                    <select @change="getFX()" v-model="selectValPie2">
                                        <option value="day">日</option>
                                        <option value="month">月</option>
                                        <option value="year">年</option>
                                    </select>
                                </div>
                                <el-container>
                                    <div class="cav">
                                        <div class="cav-flex">
                                            <div>
                                                <p><span class="rec" v-bind:style="{background:color3}"></span> {{list5.name}}</p>
                                                <span>{{list5.per}}</span><small>%</small> <span>{{list5.value}}</span><small>kWh</small>
                                            </div>
                                            <div>
                                                <p> <span class="rec" v-bind:style="{background:color4}"></span> {{list6.name}}</p>
                                                <span>{{list6.per}}</span><small>%</small> <span>{{list6.value}}</span><small>kWh</small>
                                            </div>
                                        </div>
                                        <div class="cav-flex">
                                            <div>
                                                <p><span class="rec" v-bind:style="{background:color5}"></span> {{list7.name}}</p>
                                                <span>{{list7.per}}</span><small>%</small> <span>{{list7.value}}</span><small>kWh</small>
                                            </div>
                                            <div>
                                                <p> <span class="rec" v-bind:style="{background:color6}"></span> {{list8.title}}</p>
                                                <span>{{list8.per}}</span><small>%</small> <span>{{list8.value}}</span><small>kWh</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="fenxiang" style="width:100%;height:100%;"></div>
                                </el-container>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :lg="6" :md="12" :sm="24" :xs="24">
                    <div class="sliderCon">
                        <div class="sbg"></div>
                        <div class="slider-inner">
                            <div class="title">
                                <h3>楼层能耗占比</h3>
                                <div class="shouye-sel">
                                    <div class="sel-bg"></div>
                                    <select @change="getLC()" v-model="selectValPie3">
                                        <option value="day">日</option>
                                        <option value="month">月</option>
                                        <option value="year">年</option>
                                    </select>
                                </div>
                                <el-container>
                                    <div class="cav">
                                        <div class="cav-flex">
                                            <div>
                                                <p><span class="rec" v-bind:style="{background:color7}"></span> {{list9.name}}</p>
                                                <span>{{list9.per}}</span><small>%</small> <span>{{list9.value}}</span><small>kgce</small>
                                            </div>
                                            <div>
                                                <p> <span class="rec" v-bind:style="{background:color8}"></span> {{list10.name}}</p>
                                                <span>{{list10.per}}</span><small>%</small> <span>{{list10.value}}</span><small>kgce</small>
                                            </div>
                                        </div>
                                        <div class="cav-flex" style="width:50%;">
                                            <div>
                                                <p><span class="rec" v-bind:style="{background:color9}"></span> {{list11.name}}</p>
                                                <span>{{list11.per}}</span><small>%</small> <span>{{list11.value}}</span><small>kgce</small>
                                            </div>
                                            <!-- <div  v-for="v in list10">
                                                            <p> <span class="rec" v-bind:style="{background:color10}"></span> {{v.title}}</p>
                                                            <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                                        </div> -->
                                        </div>
                                    </div>
                                    <div id="quyu" style="width:100%;height:100%;"></div>
                                </el-container>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :lg="6" :md="12" :sm="24" :xs="24">
                    <div class="sliderCon">
                        <div class="sbg"></div>
                        <div class="slider-inner">
                            <div class="title">
                                <h3>能耗TOP排名</h3>
                                <div class="shouye-sel">
                                    <div class="sel-bg"></div>
                                    <select @change="getTOP()" v-model="selectValPie4">
                                        <option value="day">日</option>
                                        <option value="month">月</option>
                                        <option value="year">年</option>
                                    </select>
                                </div>
                                <el-container>
                                    <div id="zhilu" style="width:100%;height:100%;"></div>
                                </el-container>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    // import Schart from "vue-schart";
    import bus from "../common/bus";
    import Swiper from "swiper";
    import 'element-ui/lib/theme-chalk/display.css';
    var echarts = require('echarts');
    export default {
        name: "dashboard",
        data() {
            return {
                isActiv: true,
                show: true,
                selectValbar: 'hour',
                selectVal: 'day',
                selectValPie2: 'day',
                selectValPie3: 'day',
                selectValPie4: 'day',
                btns: 'all',
                color1: '#00E099',
                color2: '#1A9BFF',
                color3: '#20C0F4',
                color4: '#B791F7',
                color5: '#1A9BFF',
                color6: '#74C936',
                color7: '#00CFDF',
                color8: '#1A9BFF',
                color9: '#FF9602',
                color10: '#B791F7',
                buildingId:1,
                buildingImg: ' ',
                buildingTitle: '金风科技',
                buildingDetail: '位于北京市经济开发区博兴一路8号，总面积63889平方米，其中 1#天诚厂房建筑面积42154平方米，总面积63889平方米，其中 1#天诚厂房建筑面积42154平方米',
                energyBtn: ['总', '电', '水', '冷', '热'],
                defalut: 0,
                kpiList: [
                    {
                        gbt: '国际标准',
                        gb: 20.1,
                        qwt: '期望值',
                        qw: 19
                    },
                    {
                        gbt: '国际标准',
                        gb: 70,
                        qwt: '期望值',
                        qw: 65
                    },
                    {
                        gbt: '国际标准',
                        gb: 0.25,
                        qwt: '期望值',
                        qw: 0.21
                    },
                ],
                list1: [],
                list2: [],
                list3: [],
                list4: [],
                list5: [],
                list6: [],
                list7: [],
                list8: [],
                list9: [],
                list10: [],
                list11: [],
                list12: [],
                energyList: [
                    { energy: '总' },
                    { energy: '电' },
                    { energy: '水' },
                    { energy: '气' }
                    // {energy:'冷'},
                    // {energy:'热'}
                ],
                Data: {
                    sliderData2: [
                        {
                            title: '今日用水',
                            view: 1,
                            data: 62.86,
                            tongbi: 32.12,
                            class1: 'icon-tb',
                            huanbi: 12.10,
                            class2: 'icon-hb'
                        },
                        {
                            title: '今月用水',
                            view: 1,
                            data: 1062.86,
                            tongbi: 0.13,
                            class1: 'icon-tb',
                            huanbi: 0.10,
                            class2: 'icon-hb'
                        },
                        {
                            title: '今年用水',
                            view: 1,
                            data: 20562.86,
                            tongbi: 0.14,
                            class1: 'icon-tb',
                            huanbi: 0.10,
                            class2: 'icon-hb'
                        }
                    ],
                    sliderData1: [
                        {
                            title: '今日用电',
                            view: 2,
                            data: 62.86,
                            tongbi: 32.12,
                            class1: 'icon-tb',
                            huanbi: 12.10,
                            class2: 'icon-hb'
                        },
                        {
                            title: '今月用电',
                            view: 2,
                            data: 1062.86,
                            tongbi: 0.13,
                            class1: 'icon-tb',
                            huanbi: 0.10,
                            class2: 'icon-hb'
                        },
                        {
                            title: '今年用电',
                            view: 2,
                            data: 20562.86,
                            tongbi: 0.14,
                            class1: 'icon-tb',
                            huanbi: 0.10,
                            class2: 'icon-hb'
                        }
                    ],
                    sliderData4: [
                        {
                            title: '今日用热',
                            name1: '同比',
                            name2: '环比',
                            dw:'kgce',
                            view: 3,
                            data: 62.86,
                            tongbi: 32.12,
                            class1: 'icon-tb',
                            huanbi: 12.10,
                            class2: 'icon-hb'
                        },
                        {
                            title: '12313今月用热',
                            view: 3,
                            data: 1062.86,
                            tongbi: 0.13,
                            class1: 'icon-tb',
                            huanbi: 0.10,
                            class2: 'icon-hb'
                        },
                        {
                            title: '今年用热',
                            view: 3,
                            data: 20562.86,
                            tongbi: 0.14,
                            class1: 'icon-tb',
                            huanbi: 0.10,
                            class2: 'icon-hb'
                        }
                    ],
                    sliderData3:[
                        {
                            title:'今日用冷',
                            view:2,
                            data:62.86,
                            tongbi:32.12,
                            class1:'icon-tb',
                            huanbi:12.10,
                            class2:'icon-hb'
                        },
                        {
                            title:'12313今月用冷',
                            view:2,
                            data:1062.86,
                            tongbi:0.13,
                            class1:'icon-tb',
                            huanbi:0.10,
                            class2:'icon-hb'
                        },
                        {
                            title:'今年用冷',
                            view:2,
                            data:20562.86,
                            tongbi:0.14,
                            class1:'icon-tb',
                            huanbi:0.10,
                            class2:'icon-hb'
                        }
                    ],
                },


                img: '../../assets/ShouYe/pp.jpg',
            };
        },
        components: {

        },
        computed: {
            role() {
                // return this.name === "admin" ? "超级管理员" : "普通用户";
            }
        },

        methods: {
            // 建筑id截取
            parseRouter() {
                // console.log(window.location.href);
                // console.log();  // true
                var buildingId;
                // 如果找到ip里有buildingId
                if (window.location.href.indexOf("?") != -1 ) {
                    // 截取字符串
                    buildingId = window.location.href.split("?")[1].split("=")[1];
                    // 如果有buildingId，将截取后的buildingId赋值给localStorage
                    if (buildingId) {
                        this.buildingId=buildingId;
                        localStorage.setItem('buildingId',buildingId);
                        // 如果没有buildingId，就取本地赋值的id
                    }else{
                        this.buildingId=1
                    }
                }else{
                    // 如果没有buildingId，就取本地赋值的id
                    buildingId=localStorage.getItem('buildingId');
                    // 如果有buildingId，将截取后的buildingId赋值给localStorage
                    if (buildingId) {
                        this.buildingId=buildingId;
                        // localStorage.setItem('buildingId',buildingId);
                        // 如果没有buildingId，就取本地赋值的id
                    }else{
                        this.buildingId=1
                    }
                }
            },

          

            getDate() {
                // var date=this.selectVal
                this.ClassData();
            },
            getNH() {
                this.QushiData();
            },
            getFX() {
                this.FenXiangData();
            },
            getLC() {
                this.LouCengData();
            },
            getTOP() {
                this.PaiMingData();
            },
            SliderData() {
                var that = this;
                this.$axios.get(
                    '/xa_index!searchIndexTop.action',
                    {
                        params: {
                            buildingId: that.buildingId
                            // dateType: 'day'
                        }
                    }
                )
                    .then(function (response) {
                        var data = response.data.theObj;
                        console.log(data);
                        data.sliderData1[0].dw="kWh";
                        data.sliderData1[1].dw="kWh";
                        data.sliderData1[2].dw="m³";
                        data.sliderData2[0].dw="m³";
                        data.sliderData2[1].dw="m³";
                        data.sliderData2[2].dw="m³";
                        data.sliderData3[0].dw="kw";
                        data.sliderData3[1].dw="kw";
                        data.sliderData3[2].dw="kw";
                        data.sliderData4[0].dw="GJ";
                        data.sliderData4[1].dw="GJ";
                        data.sliderData4[2].dw="GJ";
                        for (var key in data) {

                            var temp = data[key];
                            for (var i = 0; i < temp.length; i++) {
                                temp[i].name1 = '同比：';
                                temp[i].name2 = '环比：';
                                temp[i].tongbi = temp[i].tongbi + '%';
                                temp[i].huanbi = temp[i].huanbi + '%';
                                temp[i].view = key.substring(key.length - 1, key.length);
                                if (temp[i].class1 == '+') {
                                    temp[i].class1 = 'icon-tb';
                                }
                                if (temp[i].class1 == '-') {
                                    temp[i].class1 = 'icon-hb';
                                }
                                if (temp[i].class2 == '+') {
                                    temp[i].class2 = 'icon-tb';
                                }
                                if (temp[i].class2 == '-') {
                                    temp[i].class2 = 'icon-hb';
                                }
                                if (temp[i].title == "今年用电" || temp[i].title == "今年用水" || temp[i].title == "今年用冷" || temp[i].title == "今年用热") {
                                    temp[i].tongbi = '';
                                    delete temp[i]['class1'];
                                    delete temp[i]['name1'];
                                }
                            }
                        }
                        
                        that.Data = response.data.theObj;
                        //   for(var i=0;i<response.data.theObj.length;i++){
                        //       if(response.data.theObj[i][i].class2=="+"){
                        //           console.log("+");
                        //       }
                        //   }
                        //   console.log(response.data.theObj);
                        // that.Data=response.data.theObj[0];
                        // console.log(that.Data);

                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            KPI() {
                var that = this;
                this.$axios.get(
                    '/xa_index!searchBuildingKpi.action', {
                        params: {
                            buildingId: that.buildingId
                            // dateType: 'day'
                        }
                    }).then(function (response) {
                        that.kpiList = response.data.theObj.list;
                        // KPI
                        var gonglv = document.getElementById('gonglv');
                        var gonglvChart = echarts.init(gonglv);
                        var highlight = '#03b7c9';

                        var demoData = [
                            { name: '单位面积综合能耗\n(kgce.a)', value: response.data.theObj.echarts['0'], pos: ['16.6%', '35%'], range: [0, 50] },
                            { name: '单位面积电耗\n(kWh.a)', value: response.data.theObj.echarts['A'], pos: ['49.8%', '35%'], range: [0, 100] },
                            { name: '单位面积热能耗\n(Gj/m².a)', value: response.data.theObj.echarts['D2'], pos: ['83%', '35%'], range: [0.1, 1.0], splitNum: 9 }

                        ];
                        var option = {
                            series: (function () {
                                var result = [];
                                demoData.forEach(function (item) {
                                    result.push(
                                        // 外围刻度
                                        {
                                            type: 'gauge',
                                            center: item.pos,
                                            radius: '45%',  // 1行3个
                                            splitNumber: item.splitNum || 10,
                                            min: item.range[0],
                                            max: item.range[1],
                                            startAngle: 225,
                                            endAngle: -45,
                                            axisLine: {
                                                show: true,
                                                lineStyle: {
                                                    width: 1,
                                                    shadowBlur: 0,
                                                    color: [
                                                        [1, highlight]
                                                    ]
                                                }
                                            },
                                            axisTick: {
                                                show: true,
                                                lineStyle: {
                                                    color: highlight,
                                                    width: 1
                                                },
                                                length: -3,
                                                splitNumber: 1
                                            },
                                            splitLine: {
                                                show: false,
                                                length: -14,
                                                lineStyle: {
                                                    color: highlight,
                                                }
                                            },
                                            axisLabel: {
                                                distance: -5,
                                                textStyle: {
                                                    color: highlight,
                                                    fontSize: '10'
                                                    // fontWeight: 'bold'
                                                }
                                            },
                                            pointer: {
                                                show: 0
                                            },
                                            detail: {
                                                show: 0
                                            }
                                        },

                                        // 内侧指针、数值显示
                                        {
                                            name: item.name,
                                            type: 'gauge',
                                            center: item.pos,
                                            radius: '42%',
                                            startAngle: 225,
                                            endAngle: -45,
                                            min: item.range[0],
                                            max: item.range[1],
                                            axisLine: {
                                                lineStyle: {
                                                    color: [
                                                        [0.6, '#fb5310'],
                                                        [0.85, '#fbe010'],
                                                        [1, "#3fa7dc"]
                                                    ],
                                                    width: 15
                                                }
                                            },
                                            axisTick: {
                                                show: 0,
                                            },
                                            splitLine: {
                                                show: 0,
                                            },
                                            axisLabel: {
                                                show: 0
                                            },
                                            pointer: {
                                                show: true,
                                                length: '100%'
                                            },
                                            detail: {
                                                show: true,
                                                offsetCenter: [0, '130%'],
                                                textStyle: {
                                                    fontSize: 18,
                                                    color: '#2DF3FF'
                                                },
                                                formatter: [
                                                    '{value} ' + (item.unit || ''),
                                                    '{name|' + item.name + '}'
                                                ].join('\n'),
                                                rich: {
                                                    name: {
                                                        fontSize: 14,
                                                        lineHeight: 20,
                                                        color: '#2DF3FF'
                                                    }
                                                }
                                            },
                                            itemStyle: {
                                                normal: {
                                                    color: highlight,
                                                }
                                            },
                                            data: [{
                                                value: item.value
                                            }]
                                        }
                                    );
                                });

                                return result;
                            })()
                        };
                        gonglvChart.setOption(option);
                        window.onresize = function () {
                            gonglvChart.resize();
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            },
            QiYeData() {
                var that = this;
                this.$axios.get(
                    '/xa_index!searchBuildingInfo.action', {
                        params: {
                            buildingId: that.buildingId
                            // dateType: 'day'
                        }
                    }).then(function (response) {
                        //   console.log(response.data);
                        //   console.log(response.data.theObj);
                        that.buildingDetail = response.data.theObj.buildingDetail;
                        that.buildingTitle = response.data.theObj.buildingTitle;
                        that.buildingImg = response.data.theObj.buildingImg;
                        // that.Data=response.data.theObj[0];
                        // console.log(that.Data);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            QushiData() {
                var that = this;
                this.$axios.get(
                    '/xa_index!searchEnergyTrend.action', {
                        params: {
                            buildingId: that.buildingId,
                            dateType: that.selectValbar,
                            energyType: that.btns
                        }
                    }).then(function (response) {
                        //   console.log(response.data);

                        // 能耗趋势与对比
                        var LegendName = [];
                        for (var i = 0; i < response.data.theObj.dataList.length; i++) {
                            LegendName.push(response.data.theObj.dataList[i].name);
                            response.data.theObj.dataList[0].type = "bar";
                            response.data.theObj.dataList[1].type = "bar";
                            response.data.theObj.dataList[2].type = "line";
                            response.data.theObj.dataList[2].symbolSize = 8;
                            response.data.theObj.dataList[2].smooth = 'true';
                        }
                        var qushi = document.getElementById('qushi');
                        var qushiChart = echarts.init(qushi);
                        var option1 = {
                            color: ['#2EA0FF', '#FA4133', '#FFF350', '#CFDB48', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                            legend: {
                                data: LegendName,
                                // align: 'left',
                                x: 'center',
                                right: '4%',
                                // icon: 'rect',
                                itemWidth: 10,
                                itemHeight: 10,
                                itemGap: 30,
                                textStyle: {
                                    color: 'rgb(91,227,224)',
                                    fontSize: 12
                                }
                            },
                            grid: {
                                left: '2%',
                                right: '2%',
                                bottom: '2%',
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
                                data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                                type: 'category',
                                // boundaryGap: false,
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
                            series: response.data.theObj.dataList
                            // [{
                            //     name: '总能耗',
                            //     type: 'bar',
                            //     data: qu1,
                            //     },
                            //     {
                            //     name: '环比总能耗',
                            //     type: 'bar',
                            //     data: qu2,
                            //     },
                            //     {
                            //     name: '去年同期总消耗',
                            //     type: 'line',
                            //     symbolSize: 8,
                            //     smooth: true,
                            //     data: qu3,
                            //     }
                            // ]
                        }
                        qushiChart.setOption(option1);
                        window.onresize = function () {
                            qushiChart.resize();
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            ClassData() {
                var that = this;
                this.$axios.get(
                    '/xa_index!searchEnergyTypePro.action', {
                        params: {
                            buildingId: that.buildingId,
                            dateType: that.selectVal
                        }
                    })
                    .then(function (response) {
                        that.list1 = response.data.theObj[0];
                        that.list2 = response.data.theObj[1];
                        that.list3 = response.data.theObj[2];
                        that.list4 = response.data.theObj[3];
                        // console.log(response.data.theObj[0]);
                        // 用能种类占比
                        var yongneng = document.getElementById('yongneng');
                        var yongnengChart = echarts.init(yongneng);
                        var yongnengdata = response.data.theObj;
                        var option2 = {
                            // color: ['#2EA0FF', '#FA4133', '#FFF350', '#CFDB48', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                            grid: {
                                left: '2%',
                                right: '2%',
                                bottom: '2%',
                                top: '15%',
                                containLabel: true
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            series: [{
                                name: '能源种类占比',
                                type: 'pie',
                                selectedMode: 'single',
                                radius: ['0', '60%'],
                                center: ['50%', '40%'],
                                color: ['#1a9bff', '#00e099', '#FF9602', '#74C936'],
                                label: {
                                    normal: {
                                        show: false
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data: yongnengdata
                            }]
                        }
                        yongnengChart.setOption(option2);
                        window.onresize = function () {
                            yongnengChart.resize();
                        }

                        //   console.log(response.data.theObj);
                        // that.Data=response.data.theObj[0];
                        // console.log(that.Data);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            FenXiangData() {
                var that = this;
                this.$axios.get(
                    '/xa_index!searchElectricTypePro.action', {
                        params: {
                            buildingId:that.buildingId,
                            dateType: that.selectValPie2
                        }
                    })
                    .then(function (response) {
                        that.list5 = response.data.theObj[0];
                        that.list6 = response.data.theObj[1];
                        that.list7 = response.data.theObj[2];
                        that.list8 = response.data.theObj[3];
                        console.log(response.data.theObj[0]);
                        // 用电分项
                        var fenxiang = document.getElementById('fenxiang');
                        var fenxiangChart = echarts.init(fenxiang);
                        var fenxiangdata = response.data.theObj;
                        var option3 = {
                            color: ['#20C0F4', '#B791F7', '#1A9BFF', '#74C936', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                            grid: {
                                left: '2%',
                                right: '2%',
                                bottom: '2%',
                                top: '15%',
                                containLabel: true
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            series: [{
                                name: '用电分项占比',
                                type: 'pie',
                                selectedMode: 'single',
                                radius: ['0', '60%'],
                                center: ['50%', '40%'],
                                // color: ['#1a9bff', '#00e099','#386AB7'],
                                label: {
                                    normal: {
                                        show: false
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data: fenxiangdata
                            }]
                        }
                        fenxiangChart.setOption(option3);
                        window.onresize = function () {
                            fenxiangChart.resize();
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            LouCengData() {
                var that = this;
                this.$axios.get(
                    '/xa_index!searchBuildingFloorPro.action', {
                        params: {
                            buildingId: that.buildingId,
                            dateType: that.selectValPie3
                        }
                    })
                    .then(function (response) {
                        that.list9 = response.data.theObj[0];
                        that.list10 = response.data.theObj[1];
                        that.list11 = response.data.theObj[2];
                        // console.log(response.data.theObj);
                        // 楼层能耗占比
                        var quyu = document.getElementById('quyu');
                        var quyuChart = echarts.init(quyu);
                        var quyudata = response.data.theObj;
                        //  [{
                        //     value: 2061,
                        //     name: '一层'
                        //     },
                        //     {
                        //         value: 610,
                        //         name: '二层'
                        //     },
                        //     {
                        //         value: 1039,
                        //         name: '三层'
                        //     }];
                        var option4 = {
                            color: ['#00CFDF', '#1A9BFF', '#FF9602', '#B791F7', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                            grid: {
                                left: '2%',
                                right: '2%',
                                bottom: '2%',
                                top: '15%',
                                containLabel: true
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            series: [{
                                name: '楼层能耗占比',
                                type: 'pie',
                                selectedMode: 'single',
                                radius: ['0', '60%'],
                                center: ['50%', '40%'],
                                // color: ['#1a9bff', '#00e099','#386AB7'],
                                label: {
                                    normal: {
                                        show: false
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data: quyudata
                            }]
                        }
                        quyuChart.setOption(option4);
                        window.onresize = function () {
                            quyuChart.resize();
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            PaiMingData() {
                var that = this;
                this.$axios.get(
                    '/xa_index!searchEnergyUnitAreaTop3.action', {
                        params: {
                            buildingId: that.buildingId,
                            dateType: that.selectValPie4
                        }
                    })
                    .then(function (response) {
                        // console.log(response.data.theObj);
                        // 排名
                        var datas = [];
                        var Ydata = [];
                        var zhilu = document.getElementById('zhilu');
                        var zhiluChart = echarts.init(zhilu);
                        for (var i = 0; i < response.data.theObj.length; i++) {
                            datas.push(response.data.theObj[i].value);
                            Ydata.push(response.data.theObj[i].treeName);
                        }
                        var option5 = {
                            color: ['#75C8F0', '#3E62AC', '#52A991', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                            tooltip: {
                                formatter: '{b} ({c})',
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                top: '15%',
                                left: '5%',
                                right: '5%',
                                bottom: '5%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'value',
                                gridIndex: 0,
                                boundaryGap: [0, 0.01],
                                axisLine: { show: false },
                                axisTick: { show: false },
                                axisLabel: { show: false },
                                splitLine: { show: false }
                            },
                            yAxis: {
                                type: 'category',
                                interval: 0,
                                gridIndex: 0,
                                axisTick: { show: false },
                                axisLabel: { show: true },
                                axisLine: {
                                    lineStyle: {
                                        color: '#2DF3FF'
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                data: Ydata
                            },
                            series: [
                                {
                                    name: '能耗',
                                    type: 'bar',
                                    xAxisIndex: 0,
                                    yAxisIndex: 0,
                                    barWidth: '40%',
                                    label: { normal: { show: true, position: "right", textStyle: { fontWeight: "bold" } } },
                                    data: datas.sort()
                                }
                            ]
                        }
                        zhiluChart.setOption(option5);
                        window.onresize = function () {
                            zhiluChart.resize();
                        }
                        // zhiluChart.resize();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            SetEchart() {
                // 自适应
                window.onresize = function () {
                    SliderData();
                    QiYeData();
                    KPI();
                    ClassData();
                    FenXiangData();
                    LouCengData();
                    PaiMingData();
                    QushiData();
                    // duibiChart.resize();
                    // zengjianChart.resize();
                };
            },
        },
        mounted() {
            // this.parseRouter();this.parseRouter();
            this.SetEchart();

        },
        created() {
            this.parseRouter();
            this.SliderData();
            this.QiYeData();
            this.KPI();
            this.ClassData();
            this.FenXiangData();
            this.LouCengData();
            this.PaiMingData();
            this.QushiData();
        }
    };
</script>
<style>
    .cav-flex {
        display: flex;
        justify-content: space-around;
        padding-bottom: 6px;
    }

    .rec {
        display: inline-block;
        width: 10px;
        height: 10px;
        /* background:#00E099; */
    }

    .cav {
        font-size: 12px;
        color: #2DF3FF;
        position: absolute;
        bottom: 0;
        width: 93%;
        height: 80px;
        /* background: yellow; */
        /* display: flex;
        justify-content: space-around; */
    }

    .el-aside .butCur {
        background: rgba(0, 255, 255, 1);
    }

    .butCircle {
        width: 28px;
        height: 28px;
        background: rgba(16, 124, 157, 1);
        opacity: 0.7;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        line-height: 28px;
        font-size: 12px;
        margin-bottom: 30px;
    }

    .sel-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 30px;
        border: 1px solid rgba(146, 226, 234, 1);
        box-shadow: 0px 0px 18px 0px rgba(52, 150, 174, 1) inset;
        border-radius: 3px;
    }

    .shouye-sel {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .shouye-sel select {
        border: 0px;
        outline: none;
        cursor: pointer;
        position: relative;
        padding: 5px 10px;
        z-index: 5;
        width: 60px;
        height: 30px;
        background: rgba(26, 96, 134, 0);
        font-size: 12px;
        font-family: HiraginoSansGB-W3;
        font-weight: bold;
        color: #fff;
    }

    .shouye-sel select option {
        background: rgba(26, 96, 134, 1);
    }

    .second-line,
    .three-line,
    .foru-line,
    .five-line,
    .six-line {
        margin-bottom: 20px;
    }

    .b-descrip {
        color: #DFFDFF;
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .b-name {
        color: #2CF4F2;
    }

    .Dashboard .title {
        width: 100%;
        padding: 15px;
    }

    img {
        width: 100%;
        height: 95%;
    }

    .Dashboard .title>h3 {
        padding-bottom: 10px;
        color: #FEFEFF;
        text-align: left;
        width: 100%;
        display: flex;
        font-size: 16px;
    }

    .el-container {
        /* padding-left:30px; */
        height: 239px;
    }

    /* .title img{
        margin:0 30px;
    } */
    .cbg {
        width: 98%;
        height: 100%;
        position: absolute;
        /* top: 0;
    left: 0; */
        border: 1px solid #2af4ff;
        -webkit-box-shadow: 0px 3px 10px 0px #173050, 0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
        box-shadow: 0px 3px 10px 0px #173050, 0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
        opacity: 0.5;
        border-radius: 3px;
        z-index: 0;
    }



    .el-carousel__container {
        height: 100%;
    }

    .Dashboard .swiper-pagination-bullet-active {
        background: #fff;
    }

    .sliderCon {
        position: relative;
    }

    .sbg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #2af4ff;
        -webkit-box-shadow: 0px 3px 10px 0px #173050, 0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
        box-shadow: 0px 3px 10px 0px #173050, 0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
        opacity: 0.5;
        border-radius: 3px;
        z-index: 0;
    }

    .slider-inner {
        width: 100%;
        display: flex;
        justify-content: space-around;
        position: relative;
    }

    .el-carousel__indicators {
        bottom: 20px;
    }

    .water-icon {
        width: 92px;
        height: 104px;
        line-height: 124px;
        flex-grow: 0;
        position: relative;
        flex-shrink: 1;
        margin-top: 20px;
        margin-left: 4%;
        background: url("../../assets/ShouYe/icon_water.png") no-repeat;
    }

    .yd-icon {
        width: 92px;
        height: 104px;
        line-height: 124px;
        flex-grow: 0;
        position: relative;
        flex-shrink: 1;
        margin-top: 20px;
        margin-left: 4%;
        background: url("../../assets/ShouYe/icon_yd.png") no-repeat;
    }

    .rl-icon {
        width: 92px;
        height: 104px;
        line-height: 124px;
        flex-grow: 0;
        position: relative;
        flex-shrink: 1;
        margin-top: 20px;
        margin-left: 4%;
        background: url("../../assets/ShouYe/icon_rl@2x.png") no-repeat;
    }

    .ll-icon {
        width: 92px;
        height: 104px;
        line-height: 124px;
        flex-grow: 0;
        position: relative;
        flex-shrink: 1;
        margin-top: 20px;
        margin-left: 4%;
        background: url("../../assets/ShouYe/icon_ll@2x.png") no-repeat;
    }

    .see-blank {
        position: relative;
        height: 100px;
        color: #E8EEEA;
        font-family: 'DS-Digital';
        font-size: 16px;
        margin-top: 33px;
        /* margin-left:20px; */
        flex-grow: 1;
    }

    .see-blank small {
        padding-left: 5%;
    }

    .see-blank>small {
        color: #2CF4F2;
        font-size: 16px;
        margin-top: 15px;
        font-family: "microsoft yahei";
    }

    .led-text {
        color: #2CF4F2;
        display: inline-block;
        font-size: 30px;
        margin-top: 15px;
    }

    .el-carousel {
        height: 100%;
    }

    .icon-tb {
        background: url("../../assets/ShouYe/icon_tb.png") no-repeat;
        width: 11px;
        height: 14px;
        position: relative;
        display: inline-block;
    }

    .icon-hb {
        background: url("../../assets/ShouYe/icon_hb.png") no-repeat;
        width: 11px;
        height: 14px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
    }

    .tong-huan-bi {
        color: #E8EEEA;
        font-size: 14px;
        margin-top: 40px;
        text-align: left;
        flex-grow: 1;
        /* margin-right:10%; */
    }

    .tongbi .tongbi-detail {
        /* color:#2FA1FF; */
        width: 50px;
        display: inline-block;
    }

    .tongbi {
        margin-bottom: 13px;
    }

    .huanbi .hunabi-detail {
        /* color:#FE6134; */
        width: 50px;
        display: inline-block;
    }
</style>