<template>
    <div class="bootPages">
        <i class="icon-front" @click="onFirstClick"></i>
        <i class="icon-prev" @click="onPrevClick"></i>
        <div class="page-num">
            <div class="bg"></div>
            <input type="text" readonly="true" v-model="activeNum">
        </div>

        <span class="page-all">
                        /共{{pages}}页
                    </span>
        <i class="icon-next" @click="onNextClick"></i>
        <i class="icon-last" @click="onLastClick"></i>
        <div class="count">
            <div class="bg"></div>
            <select v-model="pagesize" @change="setPageSize">
                <option selected>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pages",
        data() {
            return {
                pagesize:10,
                activeNum:1,
                pages:1,
            };
        },
        props:['total'],
        methods: {
            //发送父组件需要的当前页和每页显示的条数
            sendPageNum(pageNum,pagesize){
                this.$emit("returnPageNum",pageNum,pagesize);
            },
            getPages(){
                this.pages = Math.ceil(this.total / this.pagesize);
            },
            // 上一页
            onPrevClick () {
                // 当前页是否为当前最小页码
                if (this.activeNum > 1) {
                    this.activeNum = this.activeNum - 1;
                } else {
                    this.activeNum=1;
                }
                this.sendPageNum(this.activeNum,this.pagesize);
            },

            // 下一页
            onNextClick () {
                // 当前页是否为当前最大页码
                if (this.activeNum < this.pages) {
                    this.activeNum = this.activeNum + 1
                } else {
                   this.activeNum=this.pages;
                }
                this.sendPageNum(this.activeNum,this.pagesize);
            },

            // 第一页
            onFirstClick () {
                this.activeNum=1;
                this.sendPageNum(this.activeNum,this.pagesize);
            },

            // 最后一页
            onLastClick () {
               this.activeNum=this.pages;
                this.sendPageNum(this.activeNum,this.pagesize);
            },
            setPageSize(){
                this.activeNum=1;
                this.sendPageNum(this.activeNum,this.pagesize);
                this.getPages();
            }
        },
        mounted: function () {
            this.getPages();
        }
    }
</script>

<style lang="scss" scoped>
    .bootPages {
        position: relative;
        z-index: 5;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        align-items: center;
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
</style>
