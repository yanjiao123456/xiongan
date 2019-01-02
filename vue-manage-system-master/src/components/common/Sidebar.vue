<template>
    <div class="sidebar">
        <div v-show="!collapse" class="seek-box">
            <el-input class="seek" v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
        </div>
        <el-menu style="border-right:none;" class="sidebar-el-menu ul-box" :default-active="onRoutes" :collapse="collapse"
                 active-text-color="#2DF3FF" unique-opened router>

            <template v-for="item in screet">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>

                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title"><i :class="subItem.icon"></i>{{ subItem.title }}</template>

                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    <i :class="threeItem.icon"></i>{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                <i :class="subItem.icon"></i>{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from "../common/bus";

    export default {
        data() {
            return {
                input: "",
                collapse: false,
                items: [
                    {
                        icon: "ml5 icon-all icon-home",
                        index: "dashboard",
                        title: "系统首页"
                    },
                    {
                        icon: "ml5 icon-all icon-ssjc",
                        index: "table",
                        title: "实时监测",
                        subs: [
                            {
                                icon: "ml5 icon-all icon-pdjc",
                                index: "form",
                                title: "配电检测",
                                subs: [
                                    {
                                        icon: "ml20",
                                        index: "peidiantu",
                                        title: "配电图"
                                    },
                                    {
                                        icon: "ml20",
                                        index: "shishishuju",
                                        title: "实时数据"
                                    },
                                    {
                                        icon: "ml20",
                                        index: "PeiDianInquire",
                                        title: "数据查询"
                                    },
                                    {
                                        icon: "ml20",
                                        index: "shujuduibi",
                                        title: "数据对比"
                                    },
                                    {
                                        icon: "ml20",
                                        index: "yunxingbaobiao",
                                        title: "运行报表"
                                    },
                                    {
                                        icon: "ml20",
                                        index: "yuanchengchaobiao",
                                        title: "远程抄表"
                                    }
                                ]
                            },
                            // {
                            //     icon: "ml5 icon-all icon-jsjc",
                            //     index: "geishuijiance",
                            //     title: "给水检测",
                            //     subs: [
                            //         {
                            //             index: "editor",
                            //             title: "富文本编辑器"
                            //         },
                            //         {
                            //             index: "markdown",
                            //             title: "markdown编辑器"
                            //         }
                            //     ]
                            // },
                            // {
                            //     icon: "ml5 icon-all icon-lrjc",
                            //     index: "lengrejiance",
                            //     title: "冷热检测"
                            // },
                            // {
                            //     icon: "ml5 icon-all icon-yskqzl",
                            //     index: "yskqjc",
                            //     title: "压缩空气监测"
                            // },
                            // {
                            //     icon: "ml5 icon-all icon-wsd",
                            //     index: "wsd",
                            //     title: "温湿度监测"
                            // },
                            // {
                            //     icon: "ml5 icon-all icon-gf",
                            //     index: "gf",
                            //     title: "光伏监测"
                            // },
                            {
                                icon: "ml5 icon-all icon-bdsjk",
                                index: "bdsjk",
                                title: "变电所监控",
                                subs:[
                                    {
                                        icon: "ml20",
                                        index: "biandiansuozonglan",
                                        title: "变电所总览"
                                    },
                                    {
                                        icon: "ml20",
                                        index: "biandianqijiance",
                                        title: "变电器监测"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        icon: "ml5 icon-all icon-nhcx",
                        index: "nhcx",
                        title: "能耗查询",
                        subs: [
                            {
                                icon: "ml5 icon-all icon-sjcx",
                                index: "inquire",
                                title: "数据查询"
                            }
                        ]
                    },
                    {
                        icon: "ml5 icon-all icon-nxfx",
                        index: "nxfx",
                        title: "能效分析",
                        subs: [
                            {
                                icon: "ml5 icon-all icon-nhqs",
                                index: "nenghaoqushi",
                                title: "能耗趋势"
                            },
                            {
                                icon: "ml5 icon-all icon-nhcb",
                                index: "nenghaochengben",
                                title: "能耗成本"
                            },
                            {
                                icon: "ml5 icon-all icon-dbfx",
                                index: "duibifenxi",
                                title: "对比分析"
                            },
                            {
                                icon: "ml5 icon-all icon-nyjh",
                                index: "nengyuanjihua",
                                title: "能源计划"
                            },
                            {
                                icon: "ml5 icon-all icon-fhfx",
                                index: "fuhefenxi",
                                title: "负荷分析",
                                subs: [
                                    {
                                        icon: "ml5 icon-all",
                                        index: "rifuhe",
                                        title: "日负荷"
                                    }
                                ]
                            },
                            {
                                icon: "ml5 icon-all icon-fgyd",
                                index: "fengguyongdian",
                                title: "峰谷用电"
                            },
                            {
                                icon: "ml5 icon-all icon-kpigl",
                                index: "kpiguanli",
                                title: "KPI管理",
                                subs: [
                                    {
                                        icon: "ml5 icon-all",
                                        index: "dingbiaoguanli",
                                        title: "定标管理"
                                    },
                                    {
                                        icon: "ml5 icon-all",
                                        index: "kpifenxi",
                                        title: "KPI分析"
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        icon: "ml5 icon-all icon-bjgl",
                        index: "bjgl",
                        title: "报警管理",
                        subs: [
                            {
                                icon: "ml5 icon-all icon-bjgl1",
                                index: "baojingguanli",
                                title: "报警管理"
                            },
                            {
                                icon: "ml5 icon-all icon-bjdy",
                                index: "baojingdingyi",
                                title: "报警定义"
                            },

                        ]
                    },
                    {
                        icon: "ml5 icon-all icon-sbgl",
                        index: "sbgl",
                        title: "设备管理",
                        subs: [
                            {
                                icon: "ml5 icon-all icon-ybtz",
                                index: "yibiaotaizhang",
                                title: "仪表台账"
                            },
                            {
                                icon: "ml5 icon-all icon-zdsb",
                                index: "zhongdianshebei",
                                title: "重点设备",
                                subs: [
                                    {
                                        icon: "ml20",
                                        index: "shebeizonglan",
                                        title: "设备总览",
                                    },
                                    {
                                        icon: "ml20",
                                        index: "shebeidangan",
                                        title: "设备档案",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        icon: "ml5 icon-all icon-dnzl",
                        index: "dnzl",
                        title: "电能质量",
                        subs: [
                            {
                                icon: "ml5 icon-all icon-glys",
                                index: "gonglvyinshu",
                                title: "功率因数",
                            }
                        ]
                    },
                    // {
                    //     icon: "ml5 icon-all icon-bbsc",
                    //     index: "bbsc",
                    //     title: "报表输出"
                    // },
                    // {
                    //     icon: "ml5 icon-all icon-rgtb",
                    //     index: "rgtb",
                    //     title: "人工填报"
                    // },
                    // {
                    //     icon: "ml5 icon-all icon-nhbg",
                    //     index: "nhbg",
                    //     title: "能耗报告"
                    // },
                    // {
                    //     icon: "ml5 icon-all icon-jlwl",
                    //     index: "jlwl",
                    //     title: "计量网络"
                    // },
                    // {
                    //     icon: "ml5 icon-all icon-gjyy",
                    //     index: "gjyy",
                    //     title: "高级应用"
                    // },
                    // {
                    //     icon: "ml5 icon-all icon-xtgl",
                    //     index: "xtgl",
                    //     title: "系统管理"
                    // }
                    // {
                    //   icon: "el-icon-lx-emoji",
                    //   index: "icon",
                    //   title: "自定义图标"
                    // },
                    // {
                    //   icon: "el-icon-lx-favor",
                    //   index: "charts",
                    //   title: "schart图表"
                    // },
                    // {
                    //   icon: "el-icon-rank",
                    //   index: "drag",
                    //   title: "拖拽列表"
                    // },
                    // {
                    //   icon: "el-icon-lx-warn",
                    //   index: "6",
                    //   title: "错误处理",
                    //   subs: [
                    //     {
                    //       index: "permission",
                    //       title: "权限测试"
                    //     },
                    //     {
                    //       index: "404",
                    //       title: "404页面"
                    //     }
                    //   ]
                    // }
                ]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace("/", "");
            },
            screet() {
                if (this.input == "") {
                    return this.items;
                } else {
                    var _this = this;
                    //逻辑-->根据input的value值筛选goodsList中的数据
                    var arrByZM = []; //声明一个空数组来存放数据
                    for (var i = 0; i < this.items.length; i++) {
                        //for循环数据中的每一项（根据title值）
                        if (this.items[i].title.search(this.input) != -1) {
                            //判断输入框中的值是否可以匹配到数据，如果匹配成功
                            arrByZM.push(this.items[i]);
                            //向空数组中添加数据
                        }
                        if (this.items[i].subs) {
                            for (let k = 0; k < this.items[i].subs.length; k++) {
                                if (this.items[i].subs[k].title.search(this.input) != -1) {
                                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                                    arrByZM.push(this.items[i].subs[k]);
                                    //向空数组中添加数据
                                }
                                //第三层
                                if (this.items[i].subs[k].subs) {
                                    for (let l = 0; l < this.items[i].subs[k].subs.length; l++) {
                                        if (this.items[i].subs[k].subs[l].title.search(this.input) != -1) {
                                            //判断输入框中的值是否可以匹配到数据，如果匹配成功
                                            arrByZM.push(this.items[i].subs[k].subs[l]);
                                            //向空数组中添加数据
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return arrByZM;
                }
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on("collapse", msg => {
                this.collapse = msg;
            });
        }
    };
</script>
<style>
    .seek-box input {
        width: 100%;
        height: 30px;
        background: rgba(45, 83, 123, 1);
        border-radius: 3px;
        border: 0;
        color: #fff;
    }

    .ul-box .el-menu-item {
        height: 30px;
        line-height: 30px;
        padding: 0 26px;
        font-size: 14px;
        font-family: HiraginoSansGB-W3;
        font-weight: normal;
        border-left: 2px solid rgba(248, 248, 248, 0);

        background-color: #1a3459;
        color: #f9fffb;
    }

    .ul-box .el-submenu__title {
        height: 30px;
        line-height: 30px;
        color: #f9fffb;
        background-color: #1a3459;
    }

    .ul-box .is-active .el-menu--inline .el-menu-item,
    .ul-box .is-active .el-submenu__title {
        background-color: #132d52;
    }

    .ul-box .is-active > .el-submenu__title {
        background-color: #132d52;
        color: #2df3ff;
    }

    .ul-box .el-menu-item.is-active {
        background: url(../../assets/PeiDianJianCe/矩形-9.png) no-repeat;
        border-left: 2px solid #2df3ff;
    }

    .ul-box .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
        transform: rotateZ(90deg);
        color: #2df3ff;
    }

    .ul-box .el-submenu__title i {
        color: #f9fffb;
        transform: rotateZ(-90deg);
    }

    .ul-box .el-submenu__title .icon-all {
        transform: rotateZ(0deg);
    }
</style>

<style lang="scss" scoped>
    .sidebar {
        display: block;
        width: 230px;
        position: absolute;
        left: 0;
        top: 80px;
        bottom: 0;
        overflow-y: scroll;
        background-color: #1a3459;
        .seek-box {
            width: 100%;
            margin-top: 14px;
            box-sizing: border-box;
            padding: 0 22px;
        }
        .ul-box {
            margin-top: 26px;
            background-color: #1a3459;
            .icon-all {
                display: inline-block;
                width: 15px;
                height: 15px;
                margin-right: 10px;
            }
            .ml5 {
                margin-left: 5px;
            }
            .ml10 {
                margin-left: 10px;
            }
            .ml20 {
                margin-left: 20px;
            }

            .icon-home {
                background: url("../../assets/PeiDianJianCe/home8.png") no-repeat;
            }
            .icon-ssjc {
                background: url("../../assets/PeiDianJianCe/icon_ssjc1.png") no-repeat;
            }
            .icon-pdjc {
                background: url("../../assets/PeiDianJianCe/icon_pdjc-1.png") no-repeat;
            }
            .icon-jsjc {
                background: url("../../assets/PeiDianJianCe/icon_jsjc.png") no-repeat;
            }
            .icon-lrjc {
                background: url("../../assets/PeiDianJianCe/icon_lr.png") no-repeat;
            }
            .icon-yskqzl {
                background: url("../../assets/PeiDianJianCe/icon_yskqzl.png") no-repeat;
            }
            .icon-wsd {
                background: url("../../assets/PeiDianJianCe/icon_wsd.png") no-repeat;
            }
            .icon-gf {
                background: url("../../assets/PeiDianJianCe/icon_gf.png") no-repeat;
            }
            .icon-bdsjk {
                background: url("../../assets/PeiDianJianCe/icon_bdsjk.png") no-repeat;
            }
            .icon-nhcx {
                background: url("../../assets/PeiDianJianCe/icon_nhcx.png") no-repeat;
            }
            /*.icon-nhcx {*/
            /*background: url("../../assets/NengHaoChaXun/icon_nhcx.png") no-repeat;*/
            /*}*/
            .icon-nxfx {
                background: url("../../assets/PeiDianJianCe/icon_nxfx.png") no-repeat;
            }
            .icon-bjgl {
                background: url("../../assets/PeiDianJianCe/icon_bjgl.png") no-repeat;
            }
            .icon-sbgl {
                background: url("../../assets/PeiDianJianCe/icon_sbgl.png") no-repeat;
            }
            .icon-dnzl {
                background: url("../../assets/PeiDianJianCe/icon_dnzl.png") no-repeat;
            }
            .icon-bbsc {
                background: url("../../assets/PeiDianJianCe/icon_bb.png") no-repeat;
            }
            .icon-rgtb {
                background: url("../../assets/PeiDianJianCe/icon_qb.png") no-repeat;
            }
            .icon-nhbg {
                background: url("../../assets/PeiDianJianCe/icon_nhbg.png") no-repeat;
            }
            .icon-jlwl {
                background: url("../../assets/PeiDianJianCe/icon_jlwl.png") no-repeat;
            }
            .icon-gjyy {
                background: url("../../assets/PeiDianJianCe/icon_yy.png") no-repeat;
            }
            .icon-xtgl {
                background: url("../../assets/PeiDianJianCe/icon_xtgl.png") no-repeat;
            }
            .icon-sjcx {
                background: url("../../assets/PeiDianJianCe/icon_sjcx-1.png") no-repeat;
            }
            /*---------------*/
            .icon-nhqs {
                background: url("../../assets/PeiDianJianCe/icon_nhqs-xz-1.png") no-repeat;
            }
            .icon-nhcb {
                background: url("../../assets/NengHaoChaXun/icon_nhcb.png") no-repeat;
            }
            .icon-dbfx {
                background: url("../../assets/NengHaoChaXun/icon_db.png") no-repeat;
            }
            .icon-nyjh {
                background: url("../../assets/NengHaoChaXun/icon_nyjh.png") no-repeat;
            }
            .icon-fhfx {
                background: url("../../assets/NengHaoChaXun/icon_fhfx.png") no-repeat;
            }
            .icon-fgyd {
                background: url("../../assets/NengHaoChaXun/icon_fgyd.png") no-repeat;
            }
            .icon-kpigl {
                background: url("../../assets/NengHaoChaXun/icon_kpi.png") no-repeat;
            }
            .icon-bjgl1 {
                background: url("../../assets/PeiDianJianCe/icon_bjgl1.png") no-repeat;
            }
            .icon-bjdy {
                background: url("../../assets/PeiDianJianCe/icon_bjdy.png") no-repeat;
            }
            .icon-ybtz {
                background: url("../../assets/PeiDianJianCe/icon_ybtz1.png") no-repeat;
            }
            .icon-zdsb {
                background: url("../../assets/PeiDianJianCe/icon_sb.png") no-repeat;
            }
            .icon-glys {
                background: url("../../assets/PeiDianJianCe/icon_glys-xz-1.png") no-repeat;
            }

            /*------------------------------------------------------------------------------*/

            .is-active>.el-submenu__title, .is-active>{

                .icon-home {
                    background: url("../../assets/PeiDianJianCe/home－xz.png") no-repeat;
                }
                .icon-ssjc {
                    background: url("../../assets/PeiDianJianCe/icon_ssjc.png") no-repeat;
                }
                .icon-pdjc {
                    background: url("../../assets/PeiDianJianCe/icon_pdjc.png") no-repeat;
                }
                .icon-jsjc {
                    background: url("../../assets/PeiDianJianCe/icon_jsjc.png") no-repeat;
                }
                .icon-lrjc {
                    background: url("../../assets/PeiDianJianCe/icon_lr.png") no-repeat;
                }
                .icon-yskqzl {
                    background: url("../../assets/PeiDianJianCe/icon_yskqzl.png") no-repeat;
                }
                .icon-wsd {
                    background: url("../../assets/PeiDianJianCe/icon_wsd.png") no-repeat;
                }
                .icon-gf {
                    background: url("../../assets/PeiDianJianCe/icon_gf.png") no-repeat;
                }
                .icon-bdsjk {
                    background: url("../../assets/PeiDianJianCe/icon_bdsjk1.png") no-repeat;
                }
                /*.icon-nhcx {*/
                /*background: url("../../assets/PeiDianJianCe/icon_nhcx.png") no-repeat;*/
                /*}*/
                .icon-nhcx {
                    background: url("../../assets/NengHaoChaXun/icon_nhcx.png") no-repeat;
                }
                .icon-nxfx {
                    background: url("../../assets/PeiDianJianCe/icon_nxfx-xz.png") no-repeat;
                }
                .icon-bjgl {
                    background: url("../../assets/PeiDianJianCe/icon_bjgl-xz.png") no-repeat;
                }
                .icon-sbgl {
                    background: url("../../assets/PeiDianJianCe/icon_sbgl.png") no-repeat;
                }
                .icon-dnzl {
                    background: url("../../assets/PeiDianJianCe/icon_dnzl-xz.png") no-repeat;
                }
                .icon-bbsc {
                    background: url("../../assets/PeiDianJianCe/icon_bb.png") no-repeat;
                }
                .icon-rgtb {
                    background: url("../../assets/PeiDianJianCe/icon_qb.png") no-repeat;
                }
                .icon-nhbg {
                    background: url("../../assets/PeiDianJianCe/icon_nhbg.png") no-repeat;
                }
                .icon-jlwl {
                    background: url("../../assets/PeiDianJianCe/icon_jlwl.png") no-repeat;
                }
                .icon-gjyy {
                    background: url("../../assets/PeiDianJianCe/icon_yy.png") no-repeat;
                }
                .icon-xtgl {
                    background: url("../../assets/PeiDianJianCe/icon_xtgl.png") no-repeat;
                }
                .icon-sjcx {
                    background: url("../../assets/NengHaoChaXun/icon_sjcx.png") no-repeat;
                }
                /*---------------*/
                .icon-nhqs {
                    background: url("../../assets/PeiDianJianCe/icon_nhqs-xz.png") no-repeat;
                }
                .icon-nhcb {
                    background: url("../../assets/PeiDianJianCe/icon_nhcb-xz.png") no-repeat;
                }
                .icon-dbfx {
                    background: url("../../assets/PeiDianJianCe/icon_db-xz.png") no-repeat;
                }
                .icon-nyjh {
                    background: url("../../assets/PeiDianJianCe/icon_nyjh-xz.png") no-repeat;
                }
                .icon-fhfx {
                    background: url("../../assets/PeiDianJianCe/icon_fhfx-xz.png") no-repeat;
                }
                .icon-fgyd {
                    background: url("../../assets/PeiDianJianCe/icon_fgyd-xz.png") no-repeat;
                }
                .icon-kpigl {
                    background: url("../../assets/PeiDianJianCe/icon_kpi-xz.png") no-repeat;
                }
                .icon-bjgl1 {
                    background: url("../../assets/PeiDianJianCe/icon_bjgl-xz-1.png") no-repeat;
                }
                .icon-bjdy {
                    background: url("../../assets/PeiDianJianCe/icon_bjdy1.png") no-repeat;
                }
                .icon-ybtz {
                    background: url("../../assets/PeiDianJianCe/icon_ybtz.png") no-repeat;
                }
                .icon-zdsb {
                    background: url("../../assets/PeiDianJianCe/icon_zdsb.png") no-repeat;
                }
                .icon-glys {
                    background: url("../../assets/PeiDianJianCe/icon_glys-xz.png") no-repeat;
                }

            }
        }
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 230px;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
