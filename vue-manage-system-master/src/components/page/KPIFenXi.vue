<template>
    <div class="RTData Inquire">

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
                            <i class="icon-fx"></i>
                            <span class="checkbox-tit">分析方法:</span>
                            <el-select class="select" v-model="select1" placeholder="请选择支路">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>

                        </div>
                        <div class="item-row item2">
                            <div class="more-box">
                                <el-radio class="choice" v-model="radio" label="0">部门:</el-radio>

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
                            <div v-show="sw" class="more-box">
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
                            <div v-show="sw" class="more-box">
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

                            <div @click="sw=!sw" class="no-off more-box">
                                <i :class="{'icon-left':sw,'icon-right':!sw}"></i>
                                <span v-show="sw">收缩</span>
                                <span v-show="!sw">更多</span>
                            </div>


                        </div>


                        <div class="item-row">
                            <i class="icon-wd"></i>
                            <span class="checkbox-tit">维度:</span>
                            <el-radio class="choice" v-model="radio1" label="1">时</el-radio>
                            <el-radio class="choice" v-model="radio1" label="2">天</el-radio>
                            <el-radio class="choice" v-model="radio1" label="3">月</el-radio>
                        </div>
                        <div class="item-row item-row-br">
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

                        </div>


                        <div class="btns-box">
                            <div @click="btns=0" :class="{'btn-item':true,cur:btns==0}">查询</div>
                            <div @click="btns=1" :class="{'btn-item':true,cur:btns==1}">重置</div>
                            <div @click="btns=2" :class="{'btn-item':true,cur:btns==2}">个性化</div>
                        </div>

                    </div>
                </el-collapse-transition>

            </div>
            <!--对比-->
            <div class="contrast">
                <div class="lists" v-for="v in lists">
                    <div class="current-period">
                        <div :style="{background:v.color}" class="item-left">
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
                </div>
            </div>

            <div class="data-box">
                <div class="bg"></div>
                <div class="title"><h3>KPI分析</h3>
                    <div class="head-right">
                        <div class="choice-box">
                            <!-- `checked` 为 true 或 false -->
                            <el-checkbox class="col1" v-model="checked1">备选项</el-checkbox>
                            <el-checkbox class="col2" v-model="checked2">备选项</el-checkbox>
                            <el-checkbox class="col3" v-model="checked3">备选项</el-checkbox>
                            <el-checkbox class="col4" v-model="checked4">备选项</el-checkbox>
                        </div>
                        <div class="count">
                            <div class="bg"></div>
                            <select>
                                <option>总能耗</option>
                                <option>10</option>
                                <option>15</option>
                                <option>30</option>
                                <option>60</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div class="my-charts">
                    <div id="base" style="width:100%;height:100%;"></div>
                </div>
            </div>


            <div class="Table">
                <div class="bg"></div>
                <div class="title"><h3>数据列表</h3>
                    <div class="head-right">

                        <i class="icon-pdf"></i><i class="icon-excel"></i></div>
                </div>

                <div class="table-box">
                    <div class="table-tit">【xx部门 2018－01至2018－12 单位产品能耗报表】</div>

                    <table border="0">
                        <tr>
                            <th v-for="v in 5">仪表类型</th>
                            <!--<th>操作</th>-->
                        </tr>
                        <tr v-for="(v,index) in 5">
                            <td v-for="v in 5">电表</td>
                            <!--<td v-show="setId!=index ||setShow"><i class="icon-xg"></i><span @click="setShow = false,setId=index" class="set">修改</span></td>-->
                            <!--<td v-show="setId==index && !setShow">-->
                            <!--<div class="item1">-->
                            <!--<i class="icon-xg-ing"></i>-->
                            <!--<span>修改</span>-->
                            <!--</div>-->
                            <!--<div class="item1">-->
                            <!--<i class="icon-bc"></i>-->
                            <!--<span @click="setShow = true" class="bc">保存</span>-->
                            <!--</div>-->
                            <!--</td>-->
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
    </div>
</template>

<script>
    import TemplateTable from '../views/template-table'

    // let echarts = require('echarts');
    // let echarts = require('echarts');

    export default {
        name: "kpifenxi",
        data() {
            return {
                checked1:false,
                checked2:false,
                checked3:false,
                checked4:false,

                lists: [
                    {
                        title: '本企业总值',
                        icon: 'item-icon-hz',
                        color: '#00C3F4'
                    },
                    {
                        title: '本企业平均值',
                        icon: 'item-icon-pjf',
                        color: '#2CD27D'
                    },
                    {
                        title: '本企业最佳值',
                        icon: 'item-icon-max',
                        color: '#D69B44'
                    },
                    {
                        title: '本企业最差值 ',
                        icon: 'item-icon-min',
                        color: '#C6D242'
                    },

                ],
                sw: true,
                option: '2',
                tabTit: 0,
                radio: 2,
                radio1: 1,
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                select1: '',
                select2: '',
                select3: '',
                select4: '',
                leftShow: false,
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


            }
        },
        mounted() {



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
            height: 894px;
            box-sizing: border-box;
            margin-bottom: 40px;
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
            height: 894px;
            /*overflow-y: auto;*/
            /*overflow-x: hidden;*/

            position: relative;
            /*margin-left: 4px;*/
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
                        .icon-fx {
                            display: inline-block;
                            width: 15px;
                            height: 11px;
                            background: url("../../assets/NengHaoChaXun/icon _fxff.png") no-repeat;
                        }
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
                    .head-right{
                        display: flex;
                        justify-content:space-between;
                        .choice-box{
                            font-size:14px;
                            font-family:HiraginoSansGB-W3;
                            font-weight:bold;
                            color:rgba(223,253,255,1);
                            display: flex;
                            align-items:center;
                            label{
                                display: flex;
                                align-items:center;
                            }
                            input{
                                margin-left: 20px;
                                width: 15px;
                                height: 15px;
                                border:none;
                                outline:medium;
                                background-color: #FF7C2D;
                                color: #FF7C2D;
                            }

                            .my-check-.my-check-label{
                                display: inline;
                            }


                            .regular-checkbox {
                                display: none;
                            }


                            .regular-checkbox + .my-check-label {
                                background-color: #fafafa;
                                border: 1px solid #cacece;
                                box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
                                padding: 5px;
                                border-radius: 3px;
                                display: inline-block;
                                position: relative;
                            }


                            .regular-checkbox + .my-check-label:active, .regular-checkbox:checked + .my-check-label:active {
                                box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
                            }


                            .regular-checkbox:checked + .my-check-label {
                                background-color: #fd8540;
                                border: 1px solid white;
                                box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
                                color: #99a1a7;
                            }


                            .regular-checkbox:checked + .my-check-label:after {
                                content: '\2714';
                                font-size: 10px;
                                position: absolute;
                                top: -3px;
                                left: 1px;
                                color: white;
                            }

                            /*input:checked{-webkit-appearance:none;background-color: #f4a100;}*/




                        }
                    }
                    .count {
                        width: 70px;
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
                            color: rgba(45, 243, 255, 1);
                            option {
                                background-color: #0B3F6F;
                            }
                        }
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
            .content-table {
                position: relative;
                width: 100%;
                height: 577px;
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
                .table-box {
                    width: 100%;
                    height: 528px;
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
                .charts-left{
                    position: relative;
                    float: left;
                    width: calc(100% - 515px);
                    min-width: 600px;
                    height: 530px;
                    overflow: hidden;
                    @media screen and (max-width: 1600px) {
                        width: 100%;
                    }
                    .charts1{
                        width: 100%;
                        height: 265px;
                        background-color: #72ff94;
                    }
                    .charts2{
                        width: 100%;
                        height: 265px;
                        background-color: #ff9c99;
                    }
                }
                .charts-right{
                    overflow: hidden;
                    float: left;
                    width: 514px;
                    height: 530px;
                    /*height: 265px;*/
                    position: relative;
                    @media screen and (max-width: 1600px) {
                        width: 100%;
                        height: auto;
                    }
                    display: flex;
                    align-items:flex-end;
                    /*overflow: hidden;*/
                    .charts3{
                        overflow: hidden;
                        width: 100%;
                        height: 265px;
                        background-color: #fff;
                        /*position: absolute;*/
                        /*bottom: 0;*/
                        /*left: 0;*/
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
        .mainShow {
            width: calc(100% - 273px);
        }
    }
</style>
