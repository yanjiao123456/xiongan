<template>
    <div class="table-box">
        <div class="table-tit">{{ dataTit.title }}</div>
        <el-table
                :data="tableData6"
                border
                stripe
                show-summary
                style="width: 100%">
            <el-table-column :key="index" v-for="(v,index) in dataTit.titArr" class="trs" :prop="v.prop" :label="v.label"></el-table-column>
            <!--<el-table-column-->
                    <!--class="trs"-->
                    <!--prop="id"-->
                    <!--label="ID"-->
                    <!--width="180">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--class="trs"-->
                    <!--prop="name"-->
                    <!--label="姓名">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--class="trs"-->
                    <!--prop="amount1"-->
                    <!--sortable-->
                    <!--label="数值 1">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--class="trs"-->
                    <!--prop="amount2"-->
                    <!--sortable-->
                    <!--label="数值 2">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--prop="amount3"-->
                    <!--sortable-->
                    <!--label="数值 3">-->
            <!--</el-table-column>-->
        </el-table>
    </div>
</template>

<script>
    export default {
        props:['dataTit'],
        name: "template-table",
        data() {
            return {
                tableData6: [{
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }],

            }
        },

    }
</script>
<style>
    /*.table-box .el-table--border, .el-table--group {*/
        /*border: 0;*/
    /*}*/

    /*.table-box .el-table td, .el-table th.is-leaf {*/
        /*border-bottom: 0;*/
    /*}*/

    /*.table-box .el-table_2_column_6 {*/
        /*background-color: #1A6191;*/
    /*}*/

    /*.table-box .el-table th, .el-table tr {*/
        /*background: #185588;*/
    /*}*/

    /*.table-box .el-table--striped .el-table__body tr.el-table__row--striped td {*/
        /*background: #0A3E6E;*/
    /*}*/

    /*.table-box .el-table tr:hover {*/
        /*background: #085E96;*/
    /*}*/

    /*.table-box .el-table--enable-row-hover .el-table__body tr:hover > td {*/
        /*background: #085E96;*/
    /*}*/

    /*.table-box .el-table .cell, .el-table th div, .el-table--border th:first-child .cell {*/
        /*padding-left: 10px;*/
        /*font-size: 14px;*/
        /*font-family: HiraginoSansGB-W6;*/
        /*font-weight: normal;*/
        /*color: rgba(95, 251, 248, 1);*/
        /*text-align: center;*/
    /*}*/

    /*.table-box .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {*/
        /*border-right: 1px solid #14658F;*/
    /*}*/

    /*.table-box .el-table__footer-wrapper tbody td, .el-table__header-wrapper tbody td {*/
        /*background-color: #104C7B;*/
        /*color: #606266;*/
        /*border-top: 0;*/
        /*border-bottom: 0;*/
    /*}*/

    /*.table-box .el-table::before {*/
        /*left: 0;*/
        /*bottom: 0;*/
        /*width: 100%;*/
        /*height: 0;*/
    /*}*/

    /*.table-box .el-table--border::after, .el-table--group::after {*/
        /*top: 0;*/
        /*right: 0;*/
        /*width: 0;*/
        /*height: 100%;*/
    /*}*/

    /*.table-box .el-table--striped .el-table__body tr.el-table__row--striped td.el-table_1_column_1 {*/
        /*!*background:rgba(45,243,255,1);*!*/
        /*!*opacity:0.08;*!*/
    /*}*/

    /*.table-box td.el-table_1_column_1, .table-box th.el-table_1_column_1 {*/
        /*position: relative;*/
    /*}*/

    /*.table-box td.el-table_1_column_1 {*/
        /*position: relative;*/

    /*}*/

    /*.table-box .el-table td .cell {*/
        /*font-size: 14px;*/
        /*font-family: HiraginoSansGB-W3;*/
        /*font-weight: normal;*/
        /*color: rgba(223, 253, 255, 1);*/
    /*}*/

    /*.table-box td.el-table_1_column_1::before {*/
        /*content: '';*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*background: rgba(45, 243, 255, 1);*/
        /*opacity: 0.08;*/
    /*}*/

    /*.table-box th.el-table_1_column_1 {*/
        /*position: relative;*/
    /*}*/

    /*.table-box th.el-table_1_column_1::before {*/
        /*content: '';*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*background: rgba(45, 243, 255, 1);*/
        /*opacity: 0.08;*/
    /*}*/

    /*.table-box .has-gutter tr th {*/
        /*position: relative;*/

    /*}*/

    /*.table-box .has-gutter tr th::before {*/
        /*content: '';*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*background:rgba(58,138,197,1);*/
        /*opacity:0.3;*/
    /*}*/

</style>
<style lang="scss" scoped>
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
</style>
