<template>
    <div class="Dashboard">
        <div class="bg"></div>
        <div class="tabNav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="tabNav-list">

                            <span @click="tabId=index" v-for="(v,index) in tabNavList.list1"
                                  :class="{'tabNav-item':true,able:index==tabId}">
                                <el-tooltip effect="dark" :content="v" placement="bottom">
                                <span>
                                    {{ v }}
                                    <i class="icon-xl el-icon-arrow-down"></i>
                                </span>

                                </el-tooltip>

                            </span>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="tabNav-list">
                            <span @click="tabId=index" v-for="(v,index) in tabNavList.list1"
                                  :class="{'tabNav-item':true,able:index==tabId}">
                            {{ v }}
                                <i class="icon-xl el-icon-arrow-down"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>

        </div>
        <div class="tab-main">
            <div class="bg"></div>
            <div class="tab-content">
                <div class="head-box">
                    <h3>天诚楼5和6变压器</h3>
                    <div class="head-right">
                        <div @click="imgToSize(100)" :class="{pushBtn:1,btnCur:btnCur==0}">
                            <i class="icon-fd"></i>
                            <span>放大</span>
                        </div>
                        <div @click="imgToSize(-100)" :class="{pushBtn:1,btnCur:btnCur==1}">
                            <i class="icon-sx"></i>
                            <span>缩小</span>
                        </div>
                        <div @click="imgToSize(0)" :class="{pushBtn:1,btnCur:btnCur==2}">
                            <i class="icon-hy"></i>
                            <span>还原</span>
                        </div>
                    </div>
                </div>
                <div class="form-title">
                    【天诚楼5#、5#变接线图（ 2018-10-16绘制)】
                </div>
                <!--onmousedown="handleEvent(evt)"-->
                <!--onmouseup="handleEvent(evt)"-->
                <!--onmousemove="handleEvent(evt)"-->
                <!--<span @click="$router.push('pop')">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>-->
                <div class="svg-box">
                    <div id="imageView_container"
                         style="overflow: hidden; position: relative; width: 1487.5px; height: 700px; ">

                        <div id="imgBox" style="width: 100%;height: 100%; position: absolute;cursor:move">
                            <embed style="width: 100%;height: 100%; position: absolute;cursor:move" id="rotImg"
                                   :src="dlz" wmode="transparent" type="image/svg+xml"/>
                        </div>
                        <!--<div v-drag style="width: 100px;height: 100px;position: absolute;background-color:red;"></div>-->


                        <!--<object data="../../assets/svg/dlz.svg" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />-->

                        <!--<iframe id="rotImg" :src="dlz" width="100%" height="100%"></iframe>-->

                        <!--<embed style="" src="../../assets/svg/dlz.svg" wmode="transparent" id="ofelec1"/>-->
                        <!--<img src="../../assets/svg/dlz.svg" id="rotImg" style="cursor: move; visibility: visible; position: absolute; width: 100%; height: 100%;"/>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Schart from "vue-schart";
    import bus from "../common/bus";
    import Swiper from "swiper";


    export default {
        name: "dashboard",
        data() {
            return {
                dlz: require('../../assets/svg/dlz.svg'),
                w: '1000px',
                // name: localStorage.getItem("ms_username"),
                btnCur: -1,
                tabId: 0,
                tabNavList: {
                    list1: [
                        "主配",
                        "办公室配电室",
                        "生产区西南角配电室",
                        "生产一层2号货梯...",
                        "生产辅房三层配电室",
                        "生产一层实验仓",
                        "生产二层生产区域...",
                        "生产四层2号货梯..."
                    ]
                },
                data: [
                    {
                        name: "2018/09/04",
                        value: 1083
                    },
                    {
                        name: "2018/09/05",
                        value: 941
                    },
                    {
                        name: "2018/09/06",
                        value: 1139
                    },
                    {
                        name: "2018/09/07",
                        value: 816
                    },
                    {
                        name: "2018/09/08",
                        value: 327
                    },
                    {
                        name: "2018/09/09",
                        value: 228
                    },
                    {
                        name: "2018/09/10",
                        value: 1065
                    }
                ]
            };
        },
        //组件内的拖拽指令
        directives: {
            drag(el) {
                el.onmousedown = function (e) {
                    var disx = e.pageX - el.offsetLeft;
                    var disy = e.pageY - el.offsetTop;
                    document.onmousemove = function (e) {
                        el.style.left = e.pageX - disx + 'px';
                        el.style.top = e.pageY - disy + 'px';
                    }
                    document.onmouseup = function (e) {
                        document.onmouseup = document.onmousemove = null
                    }
                    e.preventDefault();
                }
            }

        },
//大致的框架就是这样其中el指的是绑定的元素，value就是传的值了，
        components: {
            Schart
        },
        computed: {
            role() {
                // return this.name === "admin" ? "超级管理员" : "普通用户";
            }
        },
        created() {
            this.handleListener();
            this.changeDate();
        },
        activated() {
            this.handleListener();
        },
        deactivated() {
            window.removeEventListener("resize", this.renderChart);
            bus.$off("collapse", this.handleBus);
        },
        methods: {
            popup(id) {
                alert(id);
            },
            imgToSize(size) {

                var img = $('#rotImg');
                if (size == 0) {
                    img.width('100%');
                    img.height('100%');
                } else {
                    var oWidth = img.width(); //取得图片的实际宽度
                    var oHeight = img.height(); //取得图片的实际高度

                    img.width(oWidth + size);
                    img.height(oHeight + (size / oWidth) * oHeight);
                }

            },
            changeDate() {
                const now = new Date().getTime();
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth() +
                    1}/${date.getDate()}`;
                });
            },
            handleListener() {
                bus.$on("collapse", this.handleBus);
                // 调用renderChart方法对图表进行重新渲染
                window.addEventListener("resize", this.renderChart);
            },
            handleBus(msg) {
                setTimeout(() => {
                    this.renderChart();
                }, 300);
            },
            renderChart() {
                //   this.$refs.bar.renderChart();
                //   this.$refs.line.renderChart();
            }
        },
        mounted() {

            var _this = this;
            var mySwiper = new Swiper(".swiper-container", {
                // autoplay: true,
                // loop: true
                initialSlide: 0,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                // 如果需要分页器
                pagination: {
                    el: ".swiper-pagination"
                }
            });
            // setTimeout()
            var ss = document.getElementById('rotImg');

            ss.src = _this.dlz;
            ss.onload = function () {
                var aaa = ss.getSVGDocument();
                // console.log();
                var svg = ss.getSVGDocument();
                var text = svg.getElementsByTagName('text');


                // console.log(text.length);
                // console.log(text);
                // outerHTML

                var myArr = [];


                for (let i = 0; i < text.length; i++) {
                    let outerHtml = text[i].outerHTML
                    // console.log(outerHtml);
                    var substr = outerHtml.match(/stroke="(\S*)"/);
                    // console.log(substr[1]);
                    if (substr[1] != '#ffffff' && substr[1] != '#FFFFFF') {


                        var str = trimStr(text[i].innerHTML);

                        // console.log(str);
                        if (str != 'Ia' && str != 'P' && str != 'Q' && str != 'COSϕ') {
                            // console.log(str);
                            myArr.push(text[i]);
                        }


                    }
                }

                console.log(myArr);


                $(myArr).css('cursor', 'pointer');
                $(myArr).click(function () {
                    _this.$router.push('pop');
                })


            }

            function trimStr(str) {
                return str.replace(/(^\s*)|(\s*$)/g, "");
            }


        }
    }
</script>
<style>
    .Dashboard .swiper-pagination-bullet-active {
        background: #fff;
    }
</style>

<style lang="scss" scoped>
    .Dashboard {
        width: 100%;
        height: 100%;
        position: relative;

        .tab-main {
            width: 100%;
            height: 840px;
            margin-bottom: 30px;
            position: relative;
            .bg {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 0;
                border: 1px solid rgba(42, 244, 255, 1);
                box-shadow: 0px 3px 9px 0px rgba(1, 16, 31, 1),
                0px 3px 30px 0px rgba(42, 244, 255, 0.84) inset;
                opacity: 0.51;
                border-radius: 3px;
            }
            .tab-content {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 22px 9px 35px 20px;
                z-index: 10;
                position: relative;
                overflow: hidden;
                h3 {
                    color: #fff;
                }
                .head-right {
                    float: right;
                    margin-top: -25px;
                    .pushBtn {
                        float: left;
                        display: flex;
                        cursor: pointer;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 61px;
                        height: 57px;
                        background: url("../../assets/PeiDianJianCe/btn1.png") no-repeat;
                        text-align: center;
                        i {
                            display: inline-block;
                            width: 16px;
                            height: 15px;
                            text-align: center;
                        }
                        span {
                            margin-top: 4px;
                            font-size: 12px;
                            font-family: HiraginoSansGB-W3;
                            font-weight: normal;
                            color: rgba(254, 254, 254, 1);
                        }
                        .icon-fd {
                            background: url("../../assets/PeiDianJianCe/icon_fd.png") no-repeat;
                        }
                        .icon-sx {
                            background: url("../../assets/PeiDianJianCe/icon_sx.png") no-repeat;
                        }
                        .icon-hy {
                            background: url("../../assets/PeiDianJianCe/icon_hy.png") no-repeat;
                        }
                        .btnCur {
                            background: url("../../assets/PeiDianJianCe/btn选中.png") no-repeat;

                        }
                    }
                }
                .form-title {
                    width: 100%;
                    margin-top: 25px;
                    text-align: center;
                    font-size: 14px;
                    font-family: Adobe Heiti Std R;
                    font-weight: normal;
                    color: rgba(95, 251, 248, 1);
                }
                .svg-box {
                    width: 1612px;
                    height: 711px;
                    margin-top: 10px;
                    background: #072042;
                }
            }
        }
    }

    .tabNav-list {
        width: 100%;
        height: 66px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .tabNav-item {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1;
            cursor: pointer;
            text-align: center;
            height: 45px;
            line-height: 45px;
            background: url("../../assets/PeiDianJianCe/tab-2(2).png") no-repeat;
            background-size: 100% 100%;
            font-size: 14px;
            font-family: HiraginoSansGB-W3;
            font-weight: normal;
            color: #FEFEFE;
            text-shadow: 0px 1px 2px rgba(0, 2, 14, 1);
            position: relative;
            .icon-xl {
                position: absolute;
                right: 15px;
                top: 50%;
                margin-top: -8px;

            }
        }
        .able {
            background: url("../../assets/PeiDianJianCe/tab-2.png") no-repeat;
            background-size: 100% 100%;
            color: #2DF3FF;
        }

    }

    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 300px;
    }
</style>
