<template>
    <div class="diyLine" id="diyLine" style="width: 100%;height: 100%;">

    </div>
</template>

<script>
    var echarts = require('echarts');
    export default {
        props:['option','size'],
        name: "template-popEcharts",
        data(){
            return {

            }
        },
        mounted(){
            console.log(this.size);
            var diyLine=document.getElementById('diyLine');
            var diyLineChart=echarts.init(diyLine);

            diyLineChart.setOption(this.option);
        }
    }
</script>

<style lang="scss" scoped>
.diyLine{
    box-sizing: border-box;
    padding: 10px;
}
</style>
