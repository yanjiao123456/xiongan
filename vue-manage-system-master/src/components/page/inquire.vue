<template>
    <div class="Inquire">
        <div class="filtrate-box">
            <div class="bg"></div>
            <div class="title"><h3>筛选条件</h3></div>
            <!-- 展示收缩 -->
            <div @click="filtrateShow=!filtrateShow"
                 :class="{'shift-knob-t':filtrateShow,'shift-knob-b':!filtrateShow}"></div>
            <el-collapse-transition>
                <div v-show="filtrateShow" class="filtrate-show">
                    <div class="item-row">
                        <el-radio class="choice" v-model="radio" label="1">电</el-radio>
                        <el-radio class="choice" v-model="radio" label="2">水</el-radio>
                        <el-radio class="choice" v-model="radio" label="3">冷热</el-radio>
                        <!-- <el-radio class="choice" v-model="radio" label="4">压缩空气</el-radio> -->
                    </div>
                    <div class="item-row item2">
                        <div class="more-box">
                            <!-- <el-checkbox v-model="checked">支路:</el-checkbox> -->
                            <!-- 后期改为单选其他禁用就定义多个if  判断label其他禁用   selectData1 2 3 4  可以是一个  model不一样只是四个框赋值不一样 -->
                            <el-radio class="choice" @change="checkedChange(1,1)" v-model="checked" label="1">支路:</el-radio>
                            <el-select class="select select_ts"  @change="selectChange(1)" filterable multiple collapse-tags v-model="select1" placeholder="请选择支路">
                                <el-option
                                        v-for="item in selectData1"
                                        :key="item.key"
                                        :label="item.value"
                                        :value="item.key">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="more-box">
                            <!-- <el-checkbox class="ml92" v-model="checked">分项:</el-checkbox> -->
                            <el-radio class="choice" @change="checkedChange(2,4)" v-model="checked" label="2">分项:</el-radio>
                            <el-select class="select select_ts" filterable @change="selectChange(2)" multiple collapse-tags v-model="select2" placeholder="请选择分项">
                                <el-option
                                        v-for="item in selectData2"
                                        :key="item.key"
                                        :label="item.value"
                                        :value="item.key">
                                </el-option>
                            </el-select>
                        </div>
                        <!-- <div v-show="sw" class="item-show more-box">
                            <el-checkbox class="ml92" v-model="checked3">部门:</el-checkbox>
                            <el-radio class="choice" @change="checkedChange(3,null)" v-model="checked" label="3">部门:</el-radio>
                            <el-select class="select" @change="selectChange(3)" multiple collapse-tags v-model="select3" placeholder="请选择部门">
                                <el-option
                                        v-for="item in selectData3"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div> -->
                        <div v-show="sw" class="item-show more-box">
                            <!-- <el-checkbox class="ml92" v-model="checked4">位置:</el-checkbox> -->
                            <el-radio class="choice" @change="checkedChange(4,2)" v-model="checked" label="4">位置:</el-radio>
                            <el-select class="select select_ts" filterable @change="selectChange(4)" multiple collapse-tags v-model="select4" placeholder="请选择位置">
                                <el-option
                                        v-for="item in selectData4"
                                        :key="item.key"
                                        :label="item.value"
                                        :value="item.key">
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
                                    @change="pickerBtn"
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
                        <div class="fl days-box" v-if="daysnum">
                        <span class="days-tit date-select">
                            <i class="el-icon-search"></i>
                            快捷查询:
                        </span>
                            <div class="days-btn">
                                <span @click="daysBtn(0)" :class="{cur:days==0}">前1天</span>
                                <span @click="daysBtn(1)" :class="{cur:days==1}">前3天</span>
                                <span @click="daysBtn(2)" :class="{cur:days==2}">前7天</span>
                                <span @click="daysBtn(3)" :class="{cur:days==3}">前1月</span>
                            </div>
                        </div>
                        <!--</el-col>-->
                    </div>

                    <div class="btns-box">
                        <div @click="btnser(0)" :class="{'btn-item':true,cur:btns==0}">查询</div>
                        <div @click="btnser(1)" :class="{'btn-item':true,cur:btns==1}">重置</div>
                        <div @click="btnser(2)" :class="{'btn-item':true,cur:btns==2}">个性化</div>
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
                    </el-table>
            </div>
            <pages :total="totalSize" @returnPageNum="getDates"></pages>
            <!-- <template-table :data-tit="tableTitle"></template-table> -->
            <!-- <div class="selector">
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
            </div> -->
        </div>

    </div>
</template>

<script>
    import TemplateTable from '../views/template-table'
    import pages from "../common/pages";
    var echarts = require('echarts');
    export default {
        name: "inquire",
        data() {
            return {
                radio: '1',                 //筛选条件 水电冷压缩
                filtrateShow: true,         //筛选条件展示收缩
                days: null,                    //快速查询label
                daysnum:true,
                count: '',
                totalSize:1,  
                btns: null,                    //查询重置按钮选中添加颜色
                checked:"1",             //支路
                selectNum:[],             //筛选条件数据
                indexData:"",             //筛选做处理
                startTime:"",             //开始时间
                endTime:"",               //结束时间
                branchs:"",
                dataTli:[],
                powers:"",
                tableData:[],
                titArr: [
                    // {
                    //     prop: "dateTime",
                    //     label: "日期",
                    //     sortable: false
                    // }
                ],
                location:"",
                one:[],
                two:[],
                three:[],
                four:[],
                titles:[],
                selectData1:[],           //支出初始框
                selectData2:[],
                selectData3:[],
                selectData4:[],
                select1: [],                //支路select
                select2: [],
                buildingId:1,                  
                select3: [],
                select4: [],
                sw: true,
                value6: '',
                options: [],
                consumptionData: [],
                page:1,
                pageSize:10
            }
        },
        components: {
            TemplateTable,
            pages
        },
        created() {
            this.buildingId=localStorage.getItem('buildingId')
        },
        methods: {
            getDates(page,pageSize){
                this.page=page;
                this.pageSize=pageSize;
                this.labelData();
            },
            pickerBtn(){
                var preDate = new Date(this.value6[0]); //前一天
                    var Y = preDate.getFullYear() + '-';
                    var M = (preDate.getMonth()+1 < 10 ? '0'+(preDate.getMonth()+1) : preDate.getMonth()+1) + '-';
                    var D = preDate.getDate();
                    this.startTime=Y+M+D;

                var preDate = new Date(this.value6[1]); //前一天
                    var Y = preDate.getFullYear() + '-';
                    var M = (preDate.getMonth()+1 < 10 ? '0'+(preDate.getMonth()+1) : preDate.getMonth()+1) + '-';
                    var D = preDate.getDate();
                    this.endTime=Y+M+D;
                    
                    this.days=null
            },
            checkedChange(index,row){ //条件切换单选，条件内容为空
                this.select1=[];
                this.select2=[];
                this.select3=[];
                this.select4=[];
                this.selectData1=[];
                this.selectData2=[];
                this.selectData3=[];
                this.selectData4=[];
                this.selectNum=[];
                this.indexData = '';
                this.selectList(index,row)
            },
            alertMessage(){
                this.$message({
                    message: '最多选择 4 条数据',
                    type: 'warning'
                });
            },
            selectChange(row){
                this.indexData = '';
                this.selectNum=[];
                if(row==1){    //支路
                    if(this.select1.length>4){
                       this.alertMessage()
                       this.select1=[];
                    }else{
                        this.selectNum=this.select1;
                    }
                }else if(row==2){  //分项
                 if(this.select2.length>4){
                       this.alertMessage()
                       this.select2=[];
                    }else{
                        this.selectNum=this.select2;
                    }
                    // this.selectNum=this.select2;
                }else if(row==3){  //部门
                 if(this.select3.length>4){
                       this.alertMessage()
                       this.select3=[];
                    }else{
                        this.selectNum=this.select3;
                    }
                    // this.selectNum=this.select3;
                }else if(row==4){  //位置
                 if(this.select4.length>4){
                       this.alertMessage()
                       this.select4=[];
                    }else{
                        this.selectNum=this.select4;
                    }
                    // this.selectNum=this.select4;
                }else{
                    this.selectNum=[];
                }
                for(var i=0;i<this.selectNum.length;i++){
                    if(!this.indexData){      	//得到多行的id
                        this.indexData += this.selectNum[i];
                    }else{
                        this.indexData += ','+this.selectNum[i];
                    }
                }
            },
            creatList(){
                // this.$axios.get('/sep_tree!queryTreeByType.action', {
                //     params: {
                //         type: 1,
                //         parentId: 0
                //     }
                //  }).then(function (res) {
                //     console.log(response);
                // }).catch(function (error){
                //     console.log(error);
                // });
            },
            labelData(){
                var params={
                    energyType:this.radio,      //水电冷热
                    branch:this.branchs,        //支路
                    // branch:'237,323,324',        //支路
                    buildingId:this.buildingId,       //后期改变
                    power:this.powers,         //分项
                    location:this.location,      //位置
                    beginTime:this.startTime,  //开始时间
                    endTime:this.endTime,     //结束时间
                    pageNum:this.page,  //分页
                    pageSize:this.pageSize//一页展示多少条
                };
                this.$axios.get('/energy_query!queryTable.action', {params}).then((response)=> {
                    let Do=response;
                    if(Do.status==200){
                        this.titArr=[];
                        this.tableData=Do.data.result.page.list;
                        this.totalSize=Do.data.result.page.total;
                        for(var i=0;i<this.tableData.length;i++){
                            this.tableData.dateTime=this.tableData[i].dateTime.split(".")[0];
                        }
                        for(var i=0;i<Do.data.result.page.titleList.length;i++){
                            var json={
                                prop:"",
                                label:"",
                                sortable: false
                            }; 
                            json.prop=Do.data.result.page.titleList[i];
                            json.label=Do.data.result.page.titleList[i];
                            this.titArr.push(json)
                        }
                        for(var i=0;i<this.titArr.length;i++){
                            if(this.titArr[i].prop=="时间"){
                                this.titArr[i].prop="dateTime"
                            }else if(this.titArr[i].prop=="汇总"){
                                this.titArr[i].prop="total"
                            }
                        }
                        console.log(this.titArr)
                    }
                }).catch((error)=>{
                    console.log(error);
                });
            },
            inquLre(){
                this.branchs="";
                this.powers="";
                this.location="";
                if(this.checked==1){
                    this.branchs=this.indexData;
                }else if(this.checked==2){
                    this.powers=this.indexData;
                }else{
                    this.location=this.indexData;
                };
                var params={
                        energyType:this.radio,      //水电冷热
                        branch:this.branchs,        //支路
                        // branch:'237,323,324',        //支路
                        buildingId:this.buildingId,       //后期改变
                        power:this.powers,         //分项
                        location:this.location,      //位置
                        beginTime:this.startTime,  //开始时间
                        endTime:this.endTime     //结束时间
                };
                this.$axios.get('/energy_query!queryChart.action', {params}).then((response)=> {
                    let Do=response;
                    if(Do.status==200){
                        this.consumptionData=Do.data.result.consumptionData;
                        for(var i=0;i<this.consumptionData.length;i++){
                            this.consumptionData[i].class='consumption-item';
                            if(i==0){
                                this.consumptionData[0].col='head col1';
                            }else if(i==1){
                                this.consumptionData[1].col='head col2';
                            }else if(i==2){
                                this.consumptionData[2].col='head col3';
                            }else{
                                this.consumptionData[3].col='head col4';
                            }
                        }
                        this.one = Do.data.result.energyChart.one;
                        this.two = Do.data.result.energyChart.two;
                        this.three = Do.data.result.energyChart.three;
                        this.titles =Do.data.result.energyChart.title;
                        // this.four=Do.data.result.energyChart.four;
                        this.dataTli=Do.data.result.energyChart.date;
                        for(var j=0;j<this.dataTli.length;j++){
                            this.dataTli[j]=this.dataTli[j].split(" ")[0];
                        };
                        this.SetEchart();
                    }
                }).catch((error)=>{
                    console.log(error);
                });
            },
            btnser(row){        //查询  重置    个性化按钮
                // row==0?this.btns=0:(row==1?this.btns=1:this.btns=2);
                if(row==0){ //查询按钮
                    this.btns=0;    //添加css颜色
                    this.inquLre();
                    this.labelData();
                }else if(row==1){   //重置按钮
                    this.btns=1;  
                    this.selectNum=[];
                    this.value6="";
                    this.select1=[];
                    this.select2=[];
                    this.select3=[];
                    this.select4=[];
                    this.days=null;
                    this.radio=""
                }else if(row==2){      //个性化按钮
                    this.btns=2;    //添加css颜色
                }else{
                    this.inquLre();
                    this.labelData();
                }
            },
            newDatas(news,ends){
                var curDate = new Date();
                    var preDate = new Date(curDate.getTime() - 24*60*60*1000*news); //前一天
                    var Y = preDate.getFullYear() + '-';
                    var M = (preDate.getMonth()+1 < 10 ? '0'+(preDate.getMonth()+1) : preDate.getMonth()+1) + '-';
                    var D = preDate.getDate();
                    this.startTime=Y+M+D;   //开始时间

                    var endDate = new Date();
                    var endDates = new Date(endDate.getTime() - 24*60*60*1000*ends); //前一天
                    var Y = endDates.getFullYear() + '-';
                    var M = (endDates.getMonth()+1 < 10 ? '0'+(endDates.getMonth()+1) : endDates.getMonth()+1) + '-';
                    var D = endDates.getDate();
                    this.endTime=Y+M+D;//结束时间
                    console.log(this.startTime,this.endTime)
            },
            newMonth(){
                var nowdays = new Date();
                var year = nowdays.getFullYear();
                var month = nowdays.getMonth();
                if(month==0)
                {
                    month=12;
                    year=year-1;
                }
                if (month < 10) {
                    month = "0" + month;
                }
                this.startTime = year + "-" + month + "-" + "01";//上个月的第一天
                var myDate = new Date(year, month, 0);
                this.endTime = year + "-" + month + "-" + myDate.getDate();//上个月的最后一天
            },
            daysBtn(row){          //快速查询按钮
                //  row==0?this.days=0:(row==1?this.days=1:(row==2?this.days=2:this.days=3));
                this.value6="";
                if(row==0){
                    this.days=0;
                    this.newDatas(1,1)
                }else if(row==1){
                    this.days=1
                     this.newDatas(3,1)
                }else if(row==2){
                    this.days=2
                    this.newDatas(7,1)
                }else if(row==3){
                     this.days=3
                     this.newMonth()
                }
            },
            SetEchart() {
                // 基于准备好的dom，初始化echarts实例
                // var growRanking = echarts.init(document.getElementById('myChart'));

                var growRanking = document.getElementById('myChart');
                var growRankingChart = echarts.init(growRanking);
                var color = "#fff";
                // 指定图表的配置项和数据


                var option = {
                    color: ['#637EF9', '#1C97FF', '#38E68D', '#CFDB48', '#66A9C9', '#00BFC7', '#99D683', '#B4C1D7', '#21834B'],
                    legend: {
                        data: this.titles,
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
                        data: this.dataTli,
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
                        name: this.titles[0],
                        type: 'bar',
                        data: this.one
                    }, {
                        name: this.titles[1],
                        type: 'bar',
                        data: this.two
                    }, {
                        name: this.titles[2],
                        type: 'bar',
                        data: this.three
                    }]
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
            },
            selectList(index,row){
                this.$axios.get('/jinfeng/sep_tree!queryListByType.action?', {
                    params: {
                        parentId:0,
                        buildingId:this.buildingId,       //后期改变
                        type:row
                    }
                }).then((response)=> {
                    let Do=response;
                    if(Do.status==200){
                        if(index==1){
                            this.selectData1=Do.data.data
                        }else if(index==2){
                            this.selectData2=Do.data.data
                        }else if(index==3){
                            this.selectData3=Do.data.data
                        }else{
                            this.selectData4=Do.data.data
                        }
                    }
                }).catch((error)=>{
                    console.log(error);
                });
            }
        },
        mounted() {
            this.checkedChange(1,1)
            this.newDatas(0,0);//当前天数
            this.btnser(8);
            this.SetEchart()
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
                        .el-tag{
                            background-color: none !important;
                        }
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
<style>
    .el-select-dropdown /deep/ .selected{
        background: none !important;
    }
    .select /deep/ .el-tag{
        background: none;
    }
    .select_ts{
        width: 230px;
    }
</style>
