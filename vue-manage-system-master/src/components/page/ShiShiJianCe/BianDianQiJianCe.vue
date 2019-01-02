<template>
    <div class="bigBox">

        <div class="itemBox">
            <div class="bg"></div>
            <div class="list-content">
                <div class="head-box">
                    <h3>变压器状态</h3>
                    <div class="head-right">
                        <span>更新时间：2018年10-18日 16:05:30</span>
                    </div>
                </div>
                <div class="lists">
                    <div v-for="v in bianYaQi" class="item-box">
                        <div :style="{'background-color': v.bgCol}" class="item-top">
                            <i :class="v.iconClass"></i>
                            <span>{{ v.tiele }}</span>
                        </div>
                        <div class="item-main">
                            <div v-for="item in v.itemList " class="item-row">
                                <span :style="{backgroundColor:v.bgCol}" class="diamonds"></span>
                                <div class="text">
                                    {{ item.text }}
                                    <span :style="{color:v.txtCol}" class="num">{{ item.num }}</span>
                                    {{ item.unit }}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="HCharts">
            <div class="bg"></div>
            <div class="charts-content">
                <div class="head-box">
                    <h3>当日逐时用电曲线</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "biandianqijiance",
        data() {
            return {
               bianYaQi:[
                   {
                       iconClass:'icon-fh',
                       tiele:'A楼变压器 - 负荷',
                       bgCol:'#5374E1',
                       txtCol:'#8BA7FF',
                       itemList:[
                           {
                               text:'额定容量：',
                               num:'156',
                               unit:'kVA'
                           },
                           {
                               text:'视在功率：',
                               num:'40.56',
                               unit:'kVA'
                           },
                           {
                               text:'负荷率：',
                               num:'12.45',
                               unit:'%'
                           }
                       ]
                   },
                   {
                       iconClass:'icon-gl',
                       tiele:'A楼变压器 - 功率',
                       bgCol:'#1988E6',
                       txtCol:'#7BD2FF',
                       itemList:[
                           {
                               text:'有功功率：',
                               num:'156',
                               unit:'kW'
                           },
                           {
                               text:'无功功率：',
                               num:'40.56',
                               unit:'kVar'
                           },
                           {
                               text:'功率因数：',
                               num:'122',
                               unit:''
                           }
                       ]
                   },
                   {
                       iconClass:'icon-dl',
                       tiele:'A楼变压器 - 电流',
                       bgCol:'#30C78B',
                       txtCol:'#37DF9A',
                       itemList:[
                           {
                               text:'A相电流：',
                               num:'156',
                               unit:'A'
                           },
                           {
                               text:'B相电流：',
                               num:'40.56',
                               unit:'A'
                           },
                           {
                               text:'C相电流：',
                               num:'122',
                               unit:'A'
                           }
                       ]
                   },
                   {
                       iconClass:'icon-dy',
                       tiele:'A楼变压器 - 电压',
                       bgCol:'#A9BE53',
                       txtCol:'#C1D85D',
                       itemList:[
                           {
                               text:'Uab线电压：',
                               num:'156',
                               unit:'V'
                           },
                           {
                               text:'Uac线电压：',
                               num:'40.56',
                               unit:'V'
                           },
                           {
                               text:'Uca线电压：',
                               num:'122',
                               unit:'V'
                           }
                       ]
                   },
                   {
                       iconClass:'icon-wd2',
                       tiele:'A楼变压器 - 温度',
                       bgCol:'#AE8B50',
                       txtCol:'#EFBE6D',
                       itemList:[
                           {
                               text:'A相绕组温度：',
                               num:'156',
                               unit:'℃'
                           },
                           {
                               text:'B相绕组温度：',
                               num:'40.56',
                               unit:'℃'
                           },
                           {
                               text:'C相绕组温度：',
                               num:'122',
                               unit:'℃'
                           }
                       ]
                   },

               ]


            }
        }
    }
</script>

<style lang="scss" scoped>
    .bigBox {
        width: 100%;
        height: 100%;
        position: relative;
        .head-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            h3 {
                font-size: 16px;
                font-family: HiraginoSansGB-W3;
                font-weight: bold;
                color: rgba(254, 254, 255, 1);
            }
            .head-right {
                span {
                    font-size: 12px;
                    font-family: HiraginoSansGB-W3;
                    font-weight: bold;
                    color: rgba(183, 208, 210, 1);
                }
                /*float: right;!**!*/
                .tabBox {
                    span {
                        cursor: pointer;
                        width: 45px;
                        height: 35px;
                        line-height: 35px;
                        display: inline-block;
                        font-size: 12px;
                        font-family: HiraginoSansGB-W3;
                        font-weight: bold;
                        color: rgba(97, 213, 255, 1);
                        text-align: center;
                        background: url("../../../assets/PeiDianJianCe/bt_wxz.png") no-repeat;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                        &.cur {
                            background: url("../../../assets/PeiDianJianCe/bt_xz.png") no-repeat;
                            -webkit-background-size: 100% 100%;
                            background-size: 100% 100%;
                            font-size: 12px;
                            font-family: HiraginoSansGB-W6;
                            font-weight: bold;
                            color: rgba(45, 243, 255, 1);
                        }
                    }
                }
            }
        }
        .bg {
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: #0A3E6E;
            top: 0;
            left: 0;
            border: 1px solid rgba(42, 244, 255, 1);
            box-shadow: 0px 3px 10px 0px rgba(23, 48, 80, 1),
            0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
            opacity: 0.5;
            border-radius: 3px;
            z-index: 0;
        }
        .irregularityList {
            position: relative;
            width: 100%;
            display: flex;
            /*flex-wrap: nowrap;*/
            justify-content: space-between;
            @media screen and (max-width: 1500px) {
                flex-direction: column;
                .list-box {
                    margin-top: 18px;
                }
            }
            .list-box {
                position: relative;
                &:nth-child(2) {
                    .lists .item {
                        border: 1px solid #247881;
                        .titBox {
                            background-color: #1E6575;
                        }
                        .num {
                            color: rgba(96, 255, 174, 1);
                        }
                    }
                }
                &:nth-child(3) {
                    .lists .item {
                        border: 1px solid #487066;
                        .titBox {
                            background-color: #3C645E;
                        }
                        .num {
                            color: rgba(216, 228, 83, 1);
                        }
                    }
                }
            }

            .list-content {
                position: relative;
                z-index: 5;
                box-sizing: border-box;
                padding: 15px 22px;

                .lists {
                    margin-top: 17px;

                    display: flex;
                    justify-content: space-between;
                    .item {
                        width: 120px;
                        height: 120px;
                        border: 1px solid #126D94;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        box-sizing: border-box;
                        padding-top: 11px;
                        background-color: #0A3E6E;
                        margin-right: 19px;
                        &:nth-last-child(1) {
                            margin-right: 0;
                        }
                        .icon-dydj {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_dydj1.png") no-repeat;
                        }
                        .icon-byqsl {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_byqsl1.png") no-repeat;
                        }
                        .icon-zjrl {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_zjrl1.png") no-repeat;
                        }
                        .icon-xmxb {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_xmxb1.png") no-repeat;
                        }
                        .icon-yggl {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_yggl1.png") no-repeat;
                        }
                        .icon-wggl {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_wggl1.png") no-repeat;
                        }
                        .icon-wd {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_wd1.png") no-repeat;
                        }
                        .icon-ycyx {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_ycyx1.png") no-repeat;
                        }
                        .icon-yxbw {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_yxbw1.png") no-repeat;
                        }
                        .icon-gz {
                            display: inline-block;
                            width: 24px;
                            height: 24px;
                            background: url("../../../assets/PeiDianJianCe/icon_gz1.png") no-repeat;
                        }
                        p {
                            .num {
                                font-size: 16px;
                                font-family: DigitaldreamFat;
                                font-weight: 400;
                                color: rgba(44, 244, 242, 1);
                            }
                            .unit {
                                font-size: 12px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: normal;
                                color: rgba(223, 253, 255, 1);
                            }
                        }
                        .titBox {
                            width: 100%;
                            height: 34px;
                            text-align: center;
                            line-height: 34px;
                            font-size: 14px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: normal;
                            color: rgba(232, 238, 234, 1);
                            background-color: #0E4C86;

                        }

                    }
                }
            }
        }
        .itemBox {
            position: relative;
            box-sizing: border-box;
            padding: 23px 20px;
            /*margin-top: 24px;*/
            .list-content {
                position: relative;
                .lists {
                    width: 100%;
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    @media screen and (max-width: 1500px) {
                        flex-direction: column;
                        .item-box {
                            margin-top: 25px;
                        }
                    }
                    .item-box {
                        width: 100%;
                        background-color: #0F4B81;
                        margin-right: 25px;
                        &:nth-last-child(1) {
                            margin-right: 0;
                        }
                        .item-top {
                            height: 38px;
                            width: 100%;
                            line-height: 38px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            box-sizing: border-box;
                            padding: 0 15px;
                            span {
                                font-size: 14px;
                                font-family: HiraginoSansGB-W6;
                                font-weight: normal;
                                color: rgba(232, 238, 234, 1);
                                margin-left: 7px;
                            }
                            .icon-fh {
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                background: url("../../../assets/PeiDianJianCe/icon_fh1.png") no-repeat;
                            }
                            .icon-gl {
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                background: url("../../../assets/PeiDianJianCe/icon_gl1.png") no-repeat;
                            }
                            .icon-dl {
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                background: url("../../../assets/PeiDianJianCe/icon_dl1.png") no-repeat;
                            }
                            .icon-gy {
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                background: url("../../../assets/PeiDianJianCe/icon_dy1.png") no-repeat;
                            }
                            .icon-wd2 {
                                width: 20px;
                                height: 20px;
                                display: inline-block;
                                background: url("../../../assets/PeiDianJianCe/icon_wd2.png") no-repeat;
                            }
                        }
                        .item-left {
                            float: left;
                            width: 90px;
                            height: 90px;
                            display: flex;
                            /*text-align: center;*/
                            justify-content: center;
                            align-items: center;
                            .icon-jt {
                                display: inline-block;
                                width: 33px;
                                height: 34px;
                                background: url("../../../assets/PeiDianJianCe/icon_jt.png") no-repeat;
                            }
                            .icon-zt {
                                display: inline-block;
                                width: 33px;
                                height: 34px;
                                background: url("../../../assets/PeiDianJianCe/icon_zt1.png") no-repeat;
                            }
                            .icon-hb {
                                display: inline-block;
                                width: 35px;
                                height: 33px;
                                background: url("../../../assets/PeiDianJianCe/icon_hb1.png") no-repeat;
                            }
                            .icon-max {
                                display: inline-block;
                                width: 70px;
                                height: 24px;
                                background: url("../../../assets/PeiDianJianCe/mAX1.png") no-repeat;
                            }
                            .icon-pjf {
                                display: inline-block;
                                width: 40px;
                                height: 37px;
                                background: url("../../../assets/PeiDianJianCe/icon_pjf1.png") no-repeat;
                            }
                        }
                        .item-main {
                            box-sizing: border-box;
                            padding: 21px 22px;
                            display: flex;
                            height: 125px;
                            flex-direction: column;
                            justify-content: space-between;
                            .item-row {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                .text {
                                    margin-left: 10px;
                                    font-size: 14px;
                                    font-family: HiraginoSansGB-W3;
                                    font-weight: normal;
                                    color: rgba(183, 208, 210, 1);
                                    .num {
                                        font-size: 14px;
                                        font-family: DigitaldreamFat;
                                        font-weight: 400;
                                        color: rgba(139, 167, 255, 1);
                                    }
                                }
                            }
                            .diamonds {
                                display: inline-block;
                                width: 9px;
                                height: 9px;
                                background: rgba(81, 113, 222, 1);
                            }
                        }
                        .item-right {
                            box-sizing: border-box;
                            padding: 15px 15px 15px 100px;
                            .title {
                                font-size: 14px;
                                font-family: HiraginoSansGB-W3;
                                font-weight: normal;
                                color: rgba(223, 253, 255, 1);
                                display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/

                                -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/

                                -webkit-line-clamp: 1; /** 显示的行数 **/

                                overflow: hidden; /** 隐藏超出的内容 **/
                            }
                            p {
                                margin-top: 18px;
                                display: flex;
                                justify-content: space-between;
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
                                    color: rgba(223, 253, 255, 1);
                                }
                            }
                        }
                    }
                }
            }
        }
        .HCharts {
            position: relative;
            box-sizing: border-box;
            height: 475px;
            margin-bottom: 40px;
            padding: 23px 20px;
            margin-top: 24px;
            .charts-content {
                position: relative;
            }
        }
    }
</style>
