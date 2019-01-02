<template>
    <div class="bigBox">
        <div class="irregularityList">
            <div class="list-box">
                <div class="bg"></div>
                <div class="list-content">
                    <div class="head-box">
                        <h3>配电室基本信息</h3>
                    </div>
                    <div class="lists">
                        <div v-for="v in peiDianJiBen" class="item">
                            <i :class="v.iconClass"></i>
                            <p class="p">
                                <span class="num">{{ v.num }}</span>
                                <span class="unit">{{ v.unit }}</span>
                            </p>
                            <div class="titBox">{{ v.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-box">
                <div class="bg"></div>
                <div class="list-content">
                    <div class="head-box">
                        <h3>当前变压器运行状态数据</h3>
                    </div>
                    <div class="lists">
                        <div v-for="v in bianYaQiData" class="item">
                            <i :class="v.iconClass"></i>
                            <p class="p">
                                <span class="num">{{ v.num }}</span>
                                <span class="unit">{{ v.unit }}</span>
                            </p>
                            <div class="titBox">{{ v.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-box">
                <div class="bg"></div>
                <div class="list-content">
                    <div class="head-box">
                        <h3>当日配电室报警信息</h3>
                    </div>
                    <div class="lists">
                        <div v-for="v in baoJingData" class="item">
                            <i :class="v.iconClass"></i>
                            <p class="p">
                                <span class="num">{{ v.num }}</span>
                                <span class="unit">{{ v.unit }}</span>
                            </p>
                            <div class="titBox">{{ v.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemBox">
            <div class="bg"></div>
            <div class="list-content">
                <div class="head-box">
                    <h3>用电概况</h3>
                    <div class="head-right">
                        <div class="tabBox">
                            <span @click="timeCur=0" :class="{cur:timeCur==0}">日</span>
                            <span @click="timeCur=1" :class="{cur:timeCur==1}">月</span>
                            <span @click="timeCur=2" :class="{cur:timeCur==2}">年</span>
                        </div>
                    </div>
                </div>
                <div class="lists">
                    <div v-for="v in yongDianData" class="item-box">
                        <div :style="{'background-color': v.col}" class="item-left">
                            <i :class="v.iconClass"></i>
                        </div>
                        <div class="item-right">
                            <span class="title">{{ v.title }}</span>
                            <p>
                                <span class="num">{{ v.num }}</span>
                                <span class="unit">{{ v.unit }}</span>
                            </p>
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
        name: "BianDianSuoZongLan",
        data() {
            return {
                timeCur:0,
                yongDianData:[
                    {
                        title:'今日用电',
                        col:'#656EE8',
                        iconClass:'icon-jt',
                        num:'14',
                        unit:'kWh'
                    },
                    {
                        title:'昨日同期',
                        col:'#00C3F4',
                        iconClass:'icon-zt',
                        num:'14',
                        unit:'kWh'
                    },
                    {
                        title:'环比',
                        col:'#B3BD45',
                        iconClass:'icon-hb',
                        num:'14',
                        unit:'%'
                    },
                    {
                        title:'今日最大用电时间段',
                        col:'#D69B44',
                        iconClass:'icon-max',
                        num:'14',
                        unit:''
                    },
                    {
                        title:'今日最大用电时间段平均功率',
                        col:'#2CD27D',
                        iconClass:'icon-pjf',
                        num:'14',
                        unit:'KW'
                    }
                ],
                peiDianJiBen: [
                    {
                        iconClass: 'icon-dydj',
                        num: '0.4',
                        unit: 'kV',
                        title: '电压等级'
                    },
                    {
                        iconClass: 'icon-byqsl',
                        num: '1',
                        unit: '台',
                        title: '变压器数量'
                    },
                    {
                        iconClass: 'icon-zjrl',
                        num: '150',
                        unit: 'kVA',
                        title: '装机容量'
                    },
                    {
                        iconClass: 'icon-xmxb',
                        num: '150',
                        unit: 'kW',
                        title: '申报需量'
                    }
                ],
                bianYaQiData: [
                    {
                        iconClass: 'icon-yggl',
                        num: '39.2',
                        unit: 'kW',
                        title: '有功功率'
                    },
                    {
                        iconClass: 'icon-wggl',
                        num: '111',
                        unit: 'kVar',
                        title: '无功功率'
                    },
                    {
                        iconClass: 'icon-wd',
                        num: '150',
                        unit: '℃',
                        title: '温度'
                    },
                    {
                        iconClass: 'icon-xmxb',
                        num: '10',
                        unit: '%',
                        title: '湿度'
                    }
                ],
                baoJingData: [
                    {
                        iconClass: 'icon-ycyx',
                        num: '30',
                        unit: '次',
                        title: '遥测越线'
                    },
                    {
                        iconClass: 'icon-yxbw',
                        num: '111',
                        unit: '次',
                        title: '遥信变位'
                    },
                    {
                        iconClass: 'icon-gz',
                        num: '0',
                        unit: '个',
                        title: '通讯故障'
                    },

                ],
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
            justify-content:space-between;
            h3 {
                font-size: 16px;
                font-family: HiraginoSansGB-W3;
                font-weight: bold;
                color: rgba(254, 254, 255, 1);
            }
            .head-right{
                /*float: right;!**!*/
                .tabBox{
                    span{
                        cursor: pointer;
                        width: 45px;
                        height: 35px;
                        line-height: 35px;
                        display: inline-block;
                        font-size:12px;
                        font-family:HiraginoSansGB-W3;
                        font-weight:bold;
                        color:rgba(97,213,255,1);
                        text-align: center;
                        background: url("../../../assets/PeiDianJianCe/bt_wxz.png") no-repeat;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                        &.cur{
                            background: url("../../../assets/PeiDianJianCe/bt_xz.png") no-repeat;
                            -webkit-background-size: 100% 100%;
                            background-size: 100% 100%;
                            font-size:12px;
                            font-family:HiraginoSansGB-W6;
                            font-weight:bold;
                            color:rgba(45,243,255,1);
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
            margin-top: 24px;
            .list-content {
                position: relative;
                .lists{
                    width: 100%;
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    @media screen and (max-width: 1500px) {
                        flex-direction: column;
                        .item-box{
                            margin-top: 25px;
                        }
                    }
                    .item-box{
                        width: 100%;
                        background-color: #0F4B81;
                        margin-right: 25px;
                        &:nth-last-child(1){
                            margin-right: 0;
                        }
                        .item-left{
                            float: left;
                            width: 90px;
                            height: 90px;
                            display: flex;
                            /*text-align: center;*/
                            justify-content:center;
                            align-items:center;
                            .icon-jt{
                                display: inline-block;
                                width: 33px;
                                height: 34px;
                                background: url("../../../assets/PeiDianJianCe/icon_jt.png") no-repeat;
                            }
                            .icon-zt{
                                display: inline-block;
                                width: 33px;
                                height: 34px;
                                background: url("../../../assets/PeiDianJianCe/icon_zt1.png") no-repeat;
                            }
                            .icon-hb{
                                display: inline-block;
                                width: 35px;
                                height: 33px;
                                background: url("../../../assets/PeiDianJianCe/icon_hb1.png") no-repeat;
                            }
                            .icon-max{
                                display: inline-block;
                                width: 70px;
                                height: 24px;
                                background: url("../../../assets/PeiDianJianCe/mAX1.png") no-repeat;
                            }
                            .icon-pjf{
                                display: inline-block;
                                width: 40px;
                                height: 37px;
                                background: url("../../../assets/PeiDianJianCe/icon_pjf1.png") no-repeat;
                            }
                        }
                        .item-right{
                            box-sizing: border-box;
                            padding: 15px 15px 15px 100px;
                            .title{
                                font-size:14px;
                                font-family:HiraginoSansGB-W3;
                                font-weight:normal;
                                color:rgba(223,253,255,1);
                                display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/

                                -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/

                                -webkit-line-clamp: 1; /** 显示的行数 **/

                                overflow: hidden;  /** 隐藏超出的内容 **/
                            }
                            p{
                                margin-top: 18px;
                                display: flex;
                                justify-content:space-between;
                                .num{
                                    font-size:18px;
                                    font-family:DigitaldreamFat;
                                    font-weight:400;
                                    color:rgba(44,244,242,1);
                                }
                                .unit{
                                    font-size:14px;
                                    font-family:HiraginoSansGB-W3;
                                    font-weight:normal;
                                    color:rgba(223,253,255,1);
                                }
                            }
                        }
                    }
                }
            }
        }
        .HCharts{
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
