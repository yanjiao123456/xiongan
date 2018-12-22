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
                                        <span v-bind:class="{'water-icon':d.view==1 ,'yd-icon':d.view==2,'hidden-sm-and-down':true}"></span>
                                        <div class="see-blank">
                                            <p>{{d.title}}</p>
                                            <span class="led-text">{{d.data}}</span>
                                            <small>T</small>
                                        </div>
                                        <div class="tong-huan-bi hidden-md-and-down">
                                            <p class="tongbi">
                                                <span>同比：</span>
                                                <span class="tongbi-detail">{{d.tongbi}}<small>%</small></span>
                                                
                                                <i :class="d.class1"></i>
                                            </p>
                                            <p class="huanbi">
                                                <span>环比：</span>
                                                <span class="hunabi-detail">{{d.huanbi}}<small>%</small></span>
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
                                            <span class="b-name">{{buildingTltle}}</span>
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
                                            <div  v-for="kpi in kpiList">
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
                                    <select>
                                        <option>日</option>
                                        <option>月</option>
                                        <option>年</option>
                                    </select>
                                </div>
                                <el-container style="padding-left:10px;height:339px;">
                                    <el-aside width="30px" style="padding-top:60px;">
                                        <div @click="btns=index" :class="{butCur:btns==index,'butCircle':true}" v-for="(btn,index) in energyBtn">{{btn}}</div>
                                    </el-aside>
                                    <el-main style="padding:0;">
                                        <div id="qushi" style="width:100%;height:100%;"></div>
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
                                <h3>清洁能源占比</h3>
                                <div class="shouye-sel">
                                        <div class="sel-bg"></div>
                                        <select>
                                            <option>日</option>
                                            <option>月</option>
                                            <option>年</option>
                                        </select>
                                    </div>
                                <el-container>
                                    <!-- <div class="cav">
                                        
                                    </div> -->
                                    <div class="cav"> 
                                        <div class="cav-flex">
                                            <div  v-for="v in list1">
                                                <p><span class="rec" v-bind:style="{background:color1}"></span> {{v.title}}</p>
                                                <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                            </div>
                                            <div  v-for="v in list2">
                                                <p> <span class="rec" v-bind:style="{background:color2}"></span> {{v.title}}</p>
                                                <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
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
                                    <select>
                                        <option>日</option>
                                        <option>月</option>
                                        <option>年</option>
                                    </select>
                                </div>
                                <el-container>
                                    <div class="cav"> 
                                        <div class="cav-flex">
                                            <div  v-for="v in list3">
                                                <p><span class="rec" v-bind:style="{background:color3}"></span> {{v.title}}</p>
                                                <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                            </div>
                                            <div  v-for="v in list4">
                                                <p> <span class="rec" v-bind:style="{background:color4}"></span> {{v.title}}</p>
                                                <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                            </div>
                                        </div>  
                                        <div class="cav-flex">
                                                <div  v-for="v in list5">
                                                    <p><span class="rec" v-bind:style="{background:color5}"></span> {{v.title}}</p>
                                                    <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                                </div>
                                                <div  v-for="v in list6">
                                                    <p> <span class="rec" v-bind:style="{background:color6}"></span> {{v.title}}</p>
                                                    <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
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
                                <h3>区域位置占比</h3>
                                <div class="shouye-sel">
                                        <div class="sel-bg"></div>
                                        <select>
                                            <option>日</option>
                                            <option>月</option>
                                            <option>年</option>
                                        </select>
                                    </div>
                                <el-container>
                                        <div class="cav"> 
                                                <div class="cav-flex">
                                                    <div  v-for="v in list7">
                                                        <p><span class="rec" v-bind:style="{background:color7}"></span> {{v.title}}</p>
                                                        <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                                    </div>
                                                    <div  v-for="v in list8">
                                                        <p> <span class="rec" v-bind:style="{background:color8}"></span> {{v.title}}</p>
                                                        <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                                    </div>
                                                </div>  
                                                <div class="cav-flex">
                                                        <div  v-for="v in list9">
                                                            <p><span class="rec" v-bind:style="{background:color9}"></span> {{v.title}}</p>
                                                            <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                                        </div>
                                                        <div  v-for="v in list10">
                                                            <p> <span class="rec" v-bind:style="{background:color10}"></span> {{v.title}}</p>
                                                            <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                                        </div>
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
                                <h3>支路用电占比</h3>
                                <div class="shouye-sel">
                                        <div class="sel-bg"></div>
                                        <select>
                                            <option>日</option>
                                            <option>月</option>
                                            <option>年</option>
                                        </select>
                                    </div>
                                <el-container>
                                        <div class="cav"> 
                                                <div class="cav-flex">
                                                    <div  v-for="v in list11">
                                                        <p><span class="rec" v-bind:style="{background:color1}"></span> {{v.title}}</p>
                                                        <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                                    </div>
                                                    <div  v-for="v in list12">
                                                        <p> <span class="rec" v-bind:style="{background:color2}"></span> {{v.title}}</p>
                                                        <span>{{v.per}}</span><small>%</small> <span>{{v.val}}</span><small>kWh</small>
                                                    </div>    
                                                </div>  
                                            </div>
                                    <div id="zhilu" style="width:100%;height:100%;"></div>
                                </el-container>      
                            </div>
                        </div>       
                    </div>  
                </el-col>   
            </el-row>   
        </div>
        <!-- <div class="six-line">
                <el-row :gutter="20">
                    <el-col :lg="12" :md="24" :sm="24" :xs="24">
                        <div class="sliderCon">
                            <div class="sbg"></div>
                            <div class="slider-inner">
                                <div class="title">
                                    <h3>区域位置用电量对比</h3>
                                    <el-container style="padding-left:30px;padding-top:27px;">
                                            <div id="duibi" style="width:100%;height:100%;"></div>
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
                                    <h3>区域位置用电增减幅</h3>
                                    <el-container>
                                        <div id="zengjian" style="width:100%;height:100%;"></div>
                                    </el-container>      
                                </div>
                            </div>       
                        </div>  
                    </el-col>  
                </el-row>   
            </div> -->
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
                isActiv:true,
                show:true,
                btns:0,
                color1:'#00E099',
                color2:'#1A9BFF',
                color3:'#20C0F4',
                color4:'#00E099',
                color5:'#1A9BFF',
                color6:'#00CFDF',
                color7:'#00CFDF',
                color8:'#1A9BFF',
                color9:'#FF9602',
                color10:'#B791F7',
                // buildingImg:'../../assets/ShouYe/pp.jpg',
                buildingTltle:'金风园区智慧楼',
                buildingDetail:'位于北京市经济开发区博兴一路8号，总面积63889平方米，其中 1#天诚厂房建筑面积42154平方米，总面积63889平方米，其中 1#天诚厂房建筑面积42154平方米',
                energyBtn:['总','电','水','气'],
                defalut:0,
                kpiList:[
                    {
                        gbt:'国际标准',
                        gb:20.1,
                        qwt:'期望值',
                        qw:19
                    },
                    {
                        gbt:'国际标准',
                        gb:70,
                        qwt:'期望值',
                        qw:65
                    },
                    {
                        gbt:'国际标准',
                        gb:0.25,
                        qwt:'期望值',
                        qw:0.21
                    },
                ],
                list1:[
                    {
                    title:'风机',
                    per:60,
                    val:10570.45
                    }
                ],
                list2:[
                    {
                    title:'光伏',
                    per:40,
                    val:9450.45
                    }
                ],
                list3:[
                    {
                    title:'温室',
                    per:40,
                    val:9450.45
                    }
                ],
                list4:[
                    {
                    title:'发电',
                    per:40,
                    val:9450.45
                    }
                ],
                list5:[
                    {
                    title:'用电',
                    per:40,
                    val:9450.45
                    }
                ],
                list6:[
                    {
                    title:'区插电用电',
                    per:40,
                    val:9450.45
                    }
                ],
                list7:[
                    {
                    title:'生产厂房',
                    per:40,
                    val:9450.45
                    }
                ],
                list8:[
                    {
                    title:'办公楼',
                    per:40,
                    val:9450.45
                    }
                ],
                list9:[
                    {
                    title:'食堂',
                    per:40,
                    val:9450.45
                    }
                ],
                list10:[
                    {
                    title:'门卫',
                    per:40,
                    val:9450.45
                    }
                ],
                list11:[
                    {
                    title:'1#进线',
                    per:40,
                    val:9450.45
                    }
                ],
                list12:[
                    {
                    title:'2#进线',
                    per:40,
                    val:9450.45
                    }
                ],
                energyList:[
                    {energy:'总'},
                    {energy:'电'},
                    {energy:'水'},
                    {energy:'气'}
                    // {energy:'冷'},
                    // {energy:'热'}
                ],
                Data:{
                    sliderData1:[
                    {
                        title:'今日用水',
                        view:1,
                        data:62.86,
                        tongbi:32.12,
                        class1:'icon-tb',
                        huanbi:12.10,
                        class2:'icon-hb'
                    },
                    {
                        title:'今月用水',
                        view:1,
                        data:1062.86,
                        tongbi:0.13,
                        class1:'icon-tb',
                        huanbi:0.10,
                        class2:'icon-hb'
                    },
                    {
                        title:'今年用水',
                        view:1,
                        data:20562.86,
                        tongbi:0.14,
                        class1:'icon-tb',
                        huanbi:0.10,
                        class2:'icon-hb'
                    }
                ],
                sliderData2:[
                    {
                        title:'今日用电',
                        view:2,
                        data:62.86,
                        tongbi:32.12,
                        class1:'icon-tb',
                        huanbi:12.10,
                        class2:'icon-hb'
                    },
                    {
                        title:'12313今月用电',
                        view:2,
                        data:1062.86,
                        tongbi:0.13,
                        class1:'icon-tb',
                        huanbi:0.10,
                        class2:'icon-hb'
                    },
                    {
                        title:'今年用电',
                        view:2,
                        data:20562.86,
                        tongbi:0.14,
                        class1:'icon-tb',
                        huanbi:0.10,
                        class2:'icon-hb'
                    }
                ],
                },
                
                
                img:'../../assets/ShouYe/pp.jpg',
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
            SetEchart() {
                window.onresize = function () {
                    gonglvChart.resize();
                }
                var gonglv = document.getElementById('gonglv');
                var gonglvChart = echarts.init(gonglv);
                var highlight = '#03b7c9';
                
                var demoData = [
                    { name: '单位面积综合能耗\n(kgce.a)', value: 15,  pos: ['16.6%', '35%'], range: [0, 50] },
                    { name: '单位面积电耗\n(kWh.a)', value: 50,  pos: ['49.8%', '35%'], range: [0, 100] },
                    { name: '单位面积热能耗\n(Gj/m².a)', value: 0.2, pos: ['83%', '35%'], range: [0.1, 1.0], splitNum: 9 }
                    
                ];
                var option = {
                        series: (function() {
                            var result = [];
                            demoData.forEach(function(item) {
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


                // 能耗趋势与对比
                var qushi = document.getElementById('qushi');
                var qushiChart = echarts.init(qushi);
                var qu1 = [224, 220, 335, 188, 350, 230, 354, 261,220,231,241,351,254,123,255,154,365,234,125,421,322,122,352,421];
                var qu2 = [124, 120, 235, 288, 250, 330, 254, 361,320,331,141,351,224,220,335,188,350,230,354,261,220,231,241,351];
                var qu3 = [114, 110, 135, 218, 210, 130, 214, 311,120,131,111,151,124,210,135,118,150,130,154,211,120,211,141,151];
                var option1 = {
                    color: ['#2EA0FF', '#FA4133', '#FFF350', '#CFDB48', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                    legend: {
                        data: ['总能耗', '环比总能耗','去年同期总消耗'],
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
                        data: ['0', '1', '2','3','4','5', '6', '7','8','9','10','11','12','13','14','15', '16', '17','18','19','20','21','22','23'],
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
                    series: [{
                        name: '总能耗',
                        type: 'bar',
                        smooth: true,
                        symbolSize: 0,
                        data: qu1,
                        },
                        {
                        name: '环比总能耗',
                        type: 'bar',
                        smooth: true,
                        symbolSize: 0,
                        data: qu2,
                        },
                        {
                        name: '去年同期总消耗',
                        type: 'line',
                        symbolSize: 8,
                        smooth: true,
                        data: qu3,
                        }
                    ]
                }
                qushiChart.setOption(option1);
                // 用能种类占比
                var yongneng = document.getElementById('yongneng');
                var yongnengChart = echarts.init(yongneng);
                var option2 = {
                    color: ['#2EA0FF', '#FA4133', '#FFF350', '#CFDB48', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
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
                        name: '新能源占比',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: ['0', '60%'],
                        center: ['50%', '40%'],
                        color: ['#1a9bff', '#00e099','#386AB7'],
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
                        data: [{
                            value: 3661,
                            name: '光伏'
                        },
                            {
                                value: 5100,
                                name: '风机'
                            }]
                    }]
                }
                yongnengChart.setOption(option2);
                // 用电分项
                 var fenxiang = document.getElementById('fenxiang');
                var fenxiangChart = echarts.init(fenxiang);
                var option3 = {
                    color: ['#20C0F4', '#00E099', '#1A9BFF', '#00CFDF', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
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
                        data: [{
                            value: 2061,
                            name: '温室'
                            },
                            {
                                value: 610,
                                name: '发电'
                            },
                            {
                                value: 1039,
                                name: '用电'
                            },{
                                value: 510,
                                name: '区插电用电'
                            }]
                    }]
                }
                fenxiangChart.setOption(option3);
                // 区域用电占比
                var quyu = document.getElementById('quyu');
                var quyuChart = echarts.init(quyu);
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
                        data: [{
                            value: 2061,
                            name: '生产厂房'
                            },
                            {
                                value: 610,
                                name: '办公楼'
                            },
                            {
                                value: 1039,
                                name: '食堂'
                            },{
                                value: 510,
                                name: '门卫'
                            }]
                    }]
                }
                quyuChart.setOption(option4);

                // 支路
                var zhilu = document.getElementById('zhilu');
                var zhiluChart = echarts.init(zhilu);
                var option5 = {
                    color: ['#2EA0FF', '#FA4133', '#FFF350', '#CFDB48', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
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
                        name: '支路',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: ['0', '60%'],
                        center: ['50%', '40%'],
                        color: ['#1a9bff', '#00e099','#386AB7'],
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
                        data: [{
                            value: 3661,
                            name: '1#进线'
                        },
                            {
                                value: 5100,
                                name: '2#进线'
                            }]
                    }]
                }
                zhiluChart.setOption(option5);

                // 对比
                // var duibi = document.getElementById('duibi');
                // var duibiChart = echarts.init(duibi);
                // var db1 = [224,124];
                // var option6 = {
                //     legend: {
                //         data: ['总能耗'],
                //         // align: 'left',
                //         x: 'center',
                //         right: '4%',
                //         // icon: 'rect',
                //         itemWidth: 10, 
                //         itemHeight: 10, 
                //         itemGap: 30,
                //         textStyle: {
                //             color: 'rgb(91,227,224)',
                //             fontSize: 12
                //         }
                //     },
                //     grid: {
                //         left: '2%',
                //         right: '2%',
                //         bottom: '2%',
                //         top: '15%',
                //         containLabel: true
                //     },
                //     tooltip: {
                //         trigger: 'axis',
                //         axisPointer: {
                //             lineStyle: {
                //                 type: 'shadow',
                //                 color: '#778AA8'
                //             }
                //         }
                //     },
                //     xAxis: [{
                //         data: ['温室用电', '木屋用电'],
                //         type: 'category',
                //         // boundaryGap: false,
                //         axisLine: {
                //             lineStyle: {
                //                 color: 'rgb(91,227,224)'//x轴坐标颜色
                //             }
                //         }
                //     }],
                //     yAxis: [
                //         {
                //             type: 'value',
                //             name: '单位（kw）',
                //             axisTick: {
                //                 show: false
                //             },
                //             axisLine: {
                //                 lineStyle: {
                //                     color: 'rgb(223,253,255)'
                //                 }
                //             },
                //             axisLabel: {
                //                 margin: 10,
                //                 textStyle: {
                //                     fontSize: 14
                //                 }
                //             },
                //             splitLine: {
                //                 lineStyle: {
                //                     color: 'rgb(42,81,125)'
                //                 }
                //             }
                //         }
                //     ],
                //     series: [{
                //         name: '总能耗',
                //         type: 'bar',
                //         barWidth:'20%',
                //         data: db1,
                //         itemStyle:{
                //             normal: {
                //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                     offset: 0,
                //                     color: 'rgba(46, 160, 255, 1)'
                //                 }, {
                //                     offset: 0.8,
                //                     color: 'rgba(86, 213, 254, 1)'
                //                 }], false),
                //                 shadowColor: 'rgba(0, 0, 0, 0.1)',
                //                 shadowBlur: 10
                //             }
                //         },
                        
                //     }]
                // }
                // duibiChart.setOption(option6);


                // // 增减
                // var zengjian = document.getElementById('zengjian');
                // var zengjianChart = echarts.init(zengjian);
                // var zj1 = [224,124];
                // var zj2 = [120,200];
                // var zj3 = [100,150];
                // var option7 = {
                //     legend: {
                //         data: ['昨日','今日','增减幅'],
                //         // align: 'left',
                //         x: 'center',
                //         right: '4%',
                //         // icon: 'rect',
                //         itemWidth: 10, 
                //         itemHeight: 10, 
                //         itemGap: 30,
                //         textStyle: {
                //             color: 'rgb(91,227,224)',
                //             fontSize: 12
                //         }
                //     },
                //     grid: {
                //         left: '2%',
                //         right: '2%',
                //         bottom: '2%',
                //         top: '15%',
                //         containLabel: true
                //     },
                //     tooltip: {
                //         trigger: 'axis',
                //         axisPointer: {
                //             lineStyle: {
                //                 type: 'shadow',
                //                 color: '#778AA8'
                //             }
                //         }
                //     },
                //     xAxis: [{
                //         data: ['温室用电', '木屋用电'],
                //         type: 'category',
                //         // boundaryGap: false,
                //         axisLine: {
                //             lineStyle: {
                //                 color: 'rgb(91,227,224)'//x轴坐标颜色
                //             }
                //         }
                //     }],
                //     yAxis: [
                //         {
                //             type: 'value',
                //             name: '单位（kw）',
                //             axisTick: {
                //                 show: false
                //             },
                //             axisLine: {
                //                 lineStyle: {
                //                     color: 'rgb(223,253,255)'
                //                 }
                //             },
                //             axisLabel: {
                //                 margin: 10,
                //                 textStyle: {
                //                     fontSize: 14
                //                 }
                //             },
                //             splitLine: {
                //                 lineStyle: {
                //                     color: 'rgb(42,81,125)'
                //                 }
                //             }
                //         }
                //     ],
                //     series: [{
                //         name: '昨日',
                //         type: 'bar',
                //         barWidth:'20%',
                //         data: zj1,
                //         itemStyle:{
                //             normal: {
                //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                     offset: 0,
                //                     color: 'rgba(46, 160, 255, 1)'
                //                 }, {
                //                     offset: 0.8,
                //                     color: 'rgba(86, 213, 254, 1)'
                //                 }], false),
                //                 shadowColor: 'rgba(0, 0, 0, 0.1)',
                //                 shadowBlur: 10
                //             }
                //         },
                        
                //     },{
                //         name: '今日',
                //         type: 'bar',
                //         barWidth:'20%',
                //         data: zj2,
                //         itemStyle:{
                //             normal: {
                //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                     offset: 0,
                //                     color: 'rgba(116, 201, 54, 1)'
                //                 }, {
                //                     offset: 0.8,
                //                     color: 'rgba(37, 250, 170, 1)'
                //                 }], false),
                //                 shadowColor: 'rgba(0, 0, 0, 0.1)',
                //                 shadowBlur: 10
                //             }
                //         },
                        
                //     },{
                //         name: '增减幅',
                //         type: 'line',
                //         barWidth:'20%',
                //         data: zj3,
                //         itemStyle:{
                //             normal: {
                //                 color: '#FFF350'
                //             }
                //         },
                        
                //     }
                //     ]
                // }
                // zengjianChart.setOption(option7);
                // 自适应
                window.onresize = function () {
                    gonglvChart.resize();
                    qushiChart.resize();
                    yongnengChart.resize();
                    fenxiangChart.resize();
                    zhiluChart.resize();
                    quyuChart.resize();
                    // duibiChart.resize();
                    // zengjianChart.resize();
                    };
            },
        },
        mounted() {
            this.SetEchart();
        }
    };
</script>
<style>
    .cav-flex{
        display: flex;
        justify-content: space-around;
        padding-bottom:6px;
    }
    .rec{
        display: inline-block;
        width:10px;
        height:10px;
        /* background:#00E099; */
    }
    .cav{
        font-size:12px;
        color:#2DF3FF;
        position: absolute;
        bottom: 0;
        width: 93%;
        height: 80px;
        /* background: yellow; */
        /* display: flex;
        justify-content: space-around; */
    }
    .el-aside .butCur{
        background:rgba(0,255,255,1);
    }
    .butCircle{
        width:28px;
        height:28px;
        background:rgba(16,124,157,1);
        opacity:0.7;
        border-radius:50%;
        color:#fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        line-height:28px;
        font-size:12px;
        margin-bottom:30px;
    }
    .sel-bg{
        position: absolute;
        top: 0;
        left: 0;
        width:60px;
        height:30px;
        border:1px solid rgba(146, 226, 234, 1);
        box-shadow:0px 0px 18px 0px rgba(52,150,174,1) inset;
        border-radius:3px;
    }
    .shouye-sel{
        position: absolute;
        right:20px;
        top:20px;
    }
    .shouye-sel select{
        border: 0px;
        outline: none;
        cursor: pointer;
        position: relative;
        padding:5px 10px;
        z-index: 5;
        width: 60px;
        height: 30px; 
        background: rgba(26, 96, 134, 0);
        font-size: 12px;
        font-family: HiraginoSansGB-W3;
        font-weight: bold;
        color: #fff;
    }
    .shouye-sel select option{
        background: rgba(26, 96, 134, 1);
    }
    .second-line,.three-line,.foru-line,.five-line,.six-line{
        margin-bottom:20px;
    }
    .b-descrip{
        color:#DFFDFF;
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .b-name{
        color:#2CF4F2;
    }
    .Dashboard .title{
        width:100%;
        padding:15px;
    }
    img{
        width:100%;
        height:95%;
    }
    .Dashboard .title>h3{
        padding-bottom:10px;
        color:#FEFEFF;
        text-align: left;
        width:100%;
        display: flex;
        font-size:16px;
    }
    .el-container{
        /* padding-left:30px; */
        height:239px;
    }
    /* .title img{
        margin:0 30px;
    } */
    .cbg{
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


    
    .el-carousel__container{
        height:100%;
    }
    .Dashboard .swiper-pagination-bullet-active {
        background: #fff;
    }
    .sliderCon{
        position:relative;
    }
    .sbg{
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
    .slider-inner{
        width:100%;
        display: flex;
        justify-content: space-around;
        position: relative;
    }
    .el-carousel__indicators{
        bottom:20px;
    }
    .water-icon{
        width:92px;
        height:104px;
        line-height:124px;
        flex-grow:0;
        position:relative;
        flex-shrink:1;
        margin-top:20px;
        margin-left:4%;
        background: url("../../assets/ShouYe/icon_water.png") no-repeat;
    }
    .yd-icon{
        width:92px;
        height:104px;
        line-height:124px;
        flex-grow:0;
        position:relative;
        flex-shrink:1;
        margin-top:20px;
        margin-left:4%;
        background: url("../../assets/ShouYe/icon_yd.png") no-repeat;
    }
    .see-blank{
        position:relative;
        height:100px;
        color:#E8EEEA;
        font-family:'DS-Digital';
        font-size:16px;
        margin-top:33px;
        /* margin-left:20px; */
        flex-grow:1;
    }
    .see-blank small{
        padding-left:5%;
    }
    .see-blank>small{
        color:#2CF4F2;
        font-size: 16px;
        margin-top:15px;
    }
    .led-text{
        color:#2CF4F2;
        display: inline-block;
        font-size:30px;
        margin-top:15px;
    }
    .el-carousel{
        height:100%;
    }
    .icon-tb{
        background: url("../../assets/ShouYe/icon_tb.png") no-repeat;
        width:11px;
        height:14px;
        position:relative;
        display: inline-block;
    }
    .icon-hb{
        background: url("../../assets/ShouYe/icon_hb.png") no-repeat;
        width:11px;
        height:14px;
        position:relative;
        display: inline-block;
        vertical-align: middle;
    }
    .tong-huan-bi{
        color:#E8EEEA;
        font-size: 14px;
        margin-top:40px;
        text-align: left;
        flex-grow:1;
        /* margin-right:10%; */
    }
    .tongbi .tongbi-detail{
        color:#2FA1FF;
        width:50px;
        display: inline-block;
    }
    .tongbi{
        margin-bottom:13px;
    }
    .huanbi .hunabi-detail{
        color:#FE6134;
        width:50px;
        display: inline-block;
    }
</style>
