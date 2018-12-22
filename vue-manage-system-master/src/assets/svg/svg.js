var svgDoc;
var svgele;
var elerelation;
var types;
var typeColors;
var typeAttributes;
var eleColor = "#DCDDDD";
var eleAttributeType = "inkscape:label";

//获取SVG对象
function getSVG(elesvg) {
    return document.getElementById(elesvg).getSVGDocument();
}

//初始化SVG对象元素
function InitSVG(evt, isFlow) {
    InitSVG(evt, isFlow, "");
}

//初始化SVG对象元素
//evt:SVG元素名称  isFlow:是否刷新颜色, svgelerelation：红叉于数据元素的对应关系
function InitSVG(evt, isFlow, svgelerelation) {
    svgele = evt;

    if (isFlow = true) {
        InitTypeInfo();
        window.setInterval("RefreshEleColor()", 1000);
    }


    elerelation = svgelerelation;
    if (elerelation !== "") {
        window.setInterval("setConduitUnobstructed()", 500);
    }
}

//初始化刷新颜色元素内容
function InitTypeInfo() {
    //刷新类型
    if (types == null) {
        types = new Array("#blueJT", "#OrangeJT", "#GreenJT", "#lines", "#GStreams", "#YellowJT");
    }

    //刷新颜色
    if (typeColors == null) {
        typeColors = new Array("#2E87C1", "#E99415", "#92C16A", "#145F99", "#92C16A", "#F5E52B");
    }

    //刷新属性
    if (typeAttributes == null) {
        typeAttributes = new Array("fill", "fill", "fill", "stroke", "fill", "fill");
    }
}

//获取SVG对象
function GetSvgDoc() {
    if (svgele != "") {
        if (!svgDoc)
            svgDoc = getSVG(svgele);
    }
}

//刷新颜色
function RefreshEleColor() {
    GetSvgDoc();    //获取SVG对象
    if (svgDoc == null)
        return;

    InitTypeInfo(); //初始化刷新颜色元素内容

    var node = svgDoc.documentElement;
    var child;
    if (node == null)
        return;

    //遍历SVG内子元素
    for (var i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes.item(i).nodeType != 3) {
            child = node.childNodes.item(i);
            if (child != null) {
                //获取元素类型
                var type = getEleAttributeByEle(child, eleAttributeType);// "inkscape:label");
                if (type != null && type != "") {
                    if (isRefreshEle(type)) {
                        setRefreshEleColor(child, type); //刷新元素颜色
                    }
                }
            }
        }
    }
}

//刷新元素颜色
//ele：元素对象  type：元素类型
function setRefreshEleColor(ele, type) {
    var newColor = eleColor;//  "#DCDDDD"; //设定基本颜色，初始白色

    var colorAttribute = getColorAttribute(type);      //获取刷新属性
    if (colorAttribute == null || colorAttribute == "")
        return;

    var oldColor = getEleAttributeByEle(ele, colorAttribute);  //获取元素当前颜色

    if (newColor.toLowerCase() == oldColor.toLowerCase()) {
        newColor = getSetColor(type)       //获取元素刷新颜色
    }

    //元素刷新颜色
    setEleAttributeByEle(ele, colorAttribute, newColor);
}

//判断元素是否需要刷新
function isRefreshEle(type) {
    for (var i = 0; i < types.length; i++) {
        if (types[i].toLowerCase() == type.toLowerCase())
            return true;
    }

    return false;
}

//判断元素是否存在
function getEleExist(sElementName) {
    GetSvgDoc();
    var ele = svgDoc.getElementById(sElementName);
    if (!ele)
        return false;
    else
        return true;
}

//获取颜色属性
function getColorAttribute(type) {
    for (var i = 0; i < types.length; i++) {
        if (type.toLowerCase() == types[i].toLowerCase())
            return typeAttributes[i];
    }
}

//获取颜色
function getSetColor(type) {
    for (var i = 0; i < types.length; i++) {
        if (type.toLowerCase() == types[i].toLowerCase())
            return typeColors[i];
    }
}

//获取元素Attribute属性值
function getEleAttributeByEleName(sElementName, attributeName) {
    GetSvgDoc();
    var ele = svgDoc.getElementById(sElementName)
    getEleAttributeByEle(ele, attributeName);
}

//获取元素Attribute属性值
function getEleAttributeByEle(ele, attributeName) {
    if (ele == null)
        return;

    var attributeValue = ele.getAttribute(attributeName);
    if (attributeValue == null)
        return;
    else
        return attributeValue;
}

//设置元素Attribute属性值
function setEleAttributeByEleName(sElementName, attributeName, attributeValue) {
    GetSvgDoc();
    var ele = svgDoc.getElementById(sElementName)
    setEleAttributeByEle(ele, attributeName, attributeValue)
}

//设置元素Attribute属性值
function setEleAttributeByEle(ele, attributeName, attributeValue) {
    if (ele == null)
        return;

    ele.setAttribute(attributeName, attributeValue);
}

//ajax操作对象
function ajaxGetDataData(elesvg, url) {
    //创建XMLHttpRequest象
    var xmlHttp = new XM对LHttpRequest();
    var unionCodeObj = getSVGUnionCodes(elesvg);
    var ip = document.getElementById('ip').value;
    var port = document.getElementById('port').value;

    var params = "?itemUnionCodes="+unionCodeObj.codes+"&ip="+ip+"&port="+port;
    //配置XMLHttpRequest对象
    xmlHttp.open("POST", url+params);
    //设置回调函数
    xmlHttp.onreadystatechange = function () {
        var svg = getSVG(elesvg);

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {     //ajax正常状态
//            analyticalData(svg, xmlHttp.responseText);
            setSVGTextValue(svg,unionCodeObj.ids,xmlHttp.responseText);
        }
        else if(xmlHttp.readyState !=1 && xmlHttp.readyState !=2 && xmlHttp.readyState !=3)//ajax错误状态
        {
            setSVGValue(svg);
            //alert('abc');
        }
    }
    //发送请求
    xmlHttp.send(null);
}
function addArray(value,array){
    for (var i = 0; i < array.length; i++) {
        if(array[i] == value){
            return ;
        }
    }
    array.push(value);
}

//设置所有数据元素为空
function setSVGTextValue(svg,ids,result) {
    try {
        //var svg = document.getElementById('WaterHeatingSVG').getSVGDocument();
        var data = JSON.parse(result).data;
        var dataMap = {};
        for(var i = 0; i < data.length; i++){
            dataMap[data[i].code] = data[i];
        }
        for (var i = 0; i < ids.length; i++) {
            var str = ids[i].split('-');
            var textnode = svg.getElementById(ids[i]);
            if(dataMap[str[0]] == undefined || dataMap[str[0]][str[1]] == undefined){
                console.log(ids[i]);
                continue;
            }
            if(textnode !=null )
//    			console.log(textnode.firstChild.nodeValue );
                addClickEvent(textnode);
            textnode.firstChild.nodeValue = dataMap[str[0]][str[1]];
        }
    }
    catch (o) {
        //log the error
//    	console.log(o);
    }
}


function getSVGUnionCodes(elesvg){
    var codes = [];
    var ids = [];
    var reg = /^(\w*)_([\d]{3})_([\d]{3})-(\w+)$/;
//	var ma = /(\w*)_([\d]{3})_([\d]{3})/;
    try {
        var svg = document.getElementById(elesvg).getSVGDocument();
        var node = svg.getElementsByTagName('text');
        for(var i = 0;i<node.length;i++){
            if(reg.test(node[i].id)){
                removeClickEvent(node[i]);
//        		 addClickEvent(textnode);
                addArray(node[i].id.split('-')[0],codes);
                addArray(node[i].id,ids);
            }
        }
    }
    catch (o) {
        //log the error
        console.log(o)
    }
    // console.log(ids);
    return {codes:codes.join('/'),ids:ids};
}

//添加点击事件
function addClickEvent(dom){
    dom.style.cursor="pointer";
    EventUtil.addHandler(dom,"click",getDataByItemCode);
}
//添加点击事件
function removeClickEvent(dom){
    EventUtil.removeHandler(dom,"click",getDataByItemCode)
}

function getDataByItemCode(evt){

    var date = getNowDate('yyyy-MM-dd');
    var date2 = getNowDate('yyyy-MM-dd HH:mm:ss');
    var itemCode = evt.target.id.split('-')[0];
    var param = {
        "itemCode":itemCode,
        "startTime":date + " 00:00:00",
        "endTime":date2,
        "period":1
        //"paramType":"A01,A02,A03,V05,V06,V07,W01,E01"
    }
    parent.getData(param);

}
window.onresize = function () {
    //resizeenEnergyQuery();
    try{
        powerChart.resize();
        dianyaChart.resize();
        dianliuChart.resize();
        biaodiChart.resize();
    }catch(e){

    }
};
//echarts初始化

//能耗查询图
//var powerDiv= parent.document.getElementById('powerDiv');
//var dianyaDiv= parent.document.getElementById('dianyaDiv');
//var dianliuDiv= parent.document.getElementById('dianliuDiv');
////var biaodiDiv= parent.document.getElementById('biaodiDiv');
//
//var echarts = parent.echarts ? parent.echarts:echarts;
//console.log(echarts);
//var powerChart=echarts.init(powerDiv);
//var dianyaChart=echarts.init(dianyaDiv);
//var dianliuChart=echarts.init(dianliuDiv);
////var biaodiChart=echarts.init(biaodiDiv);
//var commonOption = {
//    color:['#53E69D','#775588','#00BFC7','#FB9678','#EB7071','#99D683','#B4C1D7','#E0E2E4','#53E69D','#FF7676'],//#775588,#00BFC7,'#FB9678',#EB7071,#99D683,#B4C1D7,#E0E2E4,#53E69D,#FF7676
//    tooltip: {
//        trigger: 'axis',
//        axisPointer: {
//            lineStyle: {
//                color: '#fff'
//            }
//        }
//    },
//    legend: {
//        icon: 'rect',
//        itemWidth: 14,
//        itemHeight: 5,
//        itemGap: 13,
//        type: 'scroll',
//        data: [],
//        right: 'center',
//        textStyle: {
//            fontSize: 12,
//            color: '#fff'
//        }
//    },
//    grid: {
//        left: '2%',
//        top:'10%',
//        right: '2%',
//        bottom: '15%',
//        containLabel: true
//    },
//    xAxis: [{
//        type: 'category',
//        boundaryGap: false,
//        axisLine: {
//            lineStyle: {
//                color: '#fff'
//            }
//        },
//        data: []
//    }],
//    yAxis: [{
//        type: 'value',
//        name: '单位（kw）',
//        axisTick: {
//            show: false
//        },
//        axisLine: {
//            lineStyle: {
//                color: '#fff'
//            }
//        },
//        axisLabel: {
//            margin: 10,
//            textStyle: {
//                fontSize: 14
//            }
//        },
//        splitLine: {
//            lineStyle: {
//                color: 'rgba(75, 211, 255, 0.5)',
//                type: 'dashed'
//            }
//        }
//    }],
//    dataZoom: [{
//        type: 'inside',
//        start: 0,
//        end: 100,
//        bottom:'1%'
//    }, {
//        start: 0,
//        end: 100,
//        textStyle:{
//            color:'#fff'
//        },
//        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
//        handleSize: '80%',
//        handleStyle: {
//            color: '#fff',
//            shadowBlur: 3,
//            shadowColor: 'rgba(0, 0, 0, 0.6)',
//            shadowOffsetX: 2,
//            shadowOffsetY: 2
//        }
//    }],
//    series: []
//};

/**
 * Created by asus on 2016/11/1.
 */
var EventUtil={
    /*检测绑定事件*/
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }
        else if(element.attachEvent){
            element.attachEvent('on'+type,handler);
        }
        else{
            element["on"+type]=handler /*直接赋给事件*/
        }

    },
    /*通过removeHandler*/
    removeHandler:function(element,type,handler) {   /*Chrome*/
        if (element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if (element.deattachEvent) {               /*IE*/
            element.deattachEvent('on' + type, handler);
        }
        else {
            element["on" + type] = null;
            /*直接赋给事件*/
        }
    }

};


//设置所有数据元素为空
function setSVGValue(svg) {
    try {
        //var svg = document.getElementById('WaterHeatingSVG').getSVGDocument();
        var node = svg.documentElement;
        var child;
        if (node == null)
            return;
        for (var i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes.item(i).nodeType != 3) {
                child = node.childNodes.item(i);
                if (child != null) {
                    if (child.id != null) {
                        if (child.id.indexOf("k_") != -1) {
                            //if (child.id.indexOf("k_err") < 0)
                            if (svg.getElementById(child.id).tagName == "text")
                                setElementTextValue(svg, child.id, "");
                        }
                    }
                }
            }
        }
    }
    catch (o) {
        //log the error
    }
}

//遍历数据，更新对象值
function analyticalData(svg, msg)
{

    setSVGValue(svg);

    //alert("1--------"+svg);
    var data = eval(msg);
    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            setElementTextValue(svg, data[i].id, data[i].value);
        }
    }
    //else
    //    setSVGValue(svg);
    //setConduitUnobstructed(svg);
}

//修改SVG中TEXT对象
function setElementTextValue(svg, elename, value)
{
    try {
        var textnode = svg.getElementById(elename)
        if(textnode !=null)
            textnode.firstChild.nodeValue = value;

        //if (elename == "watertemperature")
        //    if (textnode == null)
        //        alert("false");
        //    else
        //        alert("true");

    }
    catch(o){
        //log the error
    }
}

//获取SVG中TEXT对象
function getElementTextValue(svg, elename) {
    //var textnode = getSVGele(svg, elename)
    var textnode = svg.getElementById(elename)
    if (!textnode || textnode == null)
        return ""
    else
        return textnode.firstChild.nodeValue;

    //if (!textnode && textnode != null) {
    //    //alert('1');
    //    return textnode.firstChild.nodeValue;
    //}
    //else
    //    return "";
}


//设置所有数据元素为空
function getSVGele(svg,elename) {
    var node = svg.documentElement;
    if (!node || node == null)
        return null;

    var child;
    for (var i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes.item(i).nodeType != 3) {
            child = node.childNodes.item(i);
            if (child.id == elename)
                return child;
        }
    }
    return null;
}

//检查相应内容，如果为空则显示出叉图
function setConduitUnobstructed() {

    GetSvgDoc();

    //setSVGValuetest(svgDoc);
    if (elerelation == "")
        return;

    var ar = new Array();

    var s1 = elerelation.split(";");
    for (var i = 0; i < s1.length; i++) {
        ar[i] = s1[i];
    }


    //遍历与红叉相关量是否有值
    for (var j = 0; j < ar.length; j++) {
        var s2 = ar[j].split("=");
        if (s2.length > 0) {
            var s3 = s2[0].split(",");
            var istrue = false;
            for (var k = 0; k < s3.length; k++) {

                var txtvalue = getElementTextValue(svgDoc, s3[k]);
                if (txtvalue != "" && txtvalue != "######") {
                    istrue = true;
                    break;
                }
                else {
                    //alert("b");
                }
            }

            var ele = getSVGele(svgDoc, s2[1])
            if (ele != null) {

                var eledisplay = "block"
                if (istrue) {
                    eledisplay = "none";
                }

                //设置页面红叉显示状态
                //ele.getStyle().setProperty('display', eledisplay);
                //ele.style.display = eledisplay;
                setEleAttributeByEle(ele, "display", eledisplay);
            }
        }
    }
}

function setSVGStyle(divname) {

    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    if (window.ActiveXObject)
    {
        Sys.ie = ua.match(/msie ([\d.]+)/)[1]
        if (Sys.ie < 9) {
            document.getElementById(divname).style.paddingTop = "15px";
            //document.getElementById(divname).style.width = "1120px";
            document.getElementById(divname).style.height = "97%";
            ////document.getElementById(divname).style.paddingLeft = "5%";
            //document.getElementById(divname).style.position = "absolute";
            //document.getElementById(divname).style.top = "28px";
            //document.getElementById(divname).style.zIndex = "-1";
            //document.getElementById(divname).style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.../Content/images/C8F0716B.png', sizingMethod='scale')";
            //document.getElementById(divname).style
        }
    }
    //filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.../Content/images/C8F0716B.png', sizingMethod='scale');
    //-ms-filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../Content/images/C8F0716B.png', sizingMethod='scale')";
    //
    //以下进行测试
    //if (Sys.ie) alert('IE: ' + Sys.ie); // document.write('IE: ' + Sys.ie);
}

var _width = 1000;
var _height = 800;

function zoomOut(svgobj, k) {//k放大倍数，zoomIn参数互为倒数。
    //var _self = document.getElementById("ttttttttttttttttttttt").getSVGDocument();//this;
    var _self = document.getElementById(svgobj).getSVGDocument();

    if (_self.rootElement.currentScale > 10) {
        alert("已经最大,无法再进行放大!");
        return;
    }
    var factor = _self.rootElement.currentScale * (k - 1) / 2;
    _self.rootElement.currentScale *= k;

    _self.rootElement.currentTranslate.x -= _width * factor;
    _self.rootElement.currentTranslate.y -= _height * factor;
}

function zoomIn(svgobj, k) {
    //k缩小倍数，zoomOut参数互为倒数。
    var _self = document.getElementById(svgobj).getSVGDocument();
    if (_self.rootElement.currentScale < 0.4) {
        alert("已经最小,无法再进行缩小!");
        return;
    }
    var factor = _self.rootElement.currentScale * (k - 1) / 2;
    _self.rootElement.currentScale *= k;

    _self.rootElement.currentTranslate.x -= _width * factor;
    _self.rootElement.currentTranslate.y -= _height * factor;
}
window.onload=function(){
    //setTimeout("zoomrestore('ofelec1')", 3000);
};
//SVG图还原
function zoomrestore(svgobj, svgname) {
    var _self = document.getElementById(svgobj).getSVGDocument();//this;
    _self.rootElement.currentScale = 1.0;
    _self.rootElement.currentTranslate.x = 0;
    _self.rootElement.currentTranslate.y = 0;

    var svg = _self.getElementById("图层_1");
    var viewVal = svg.getAttribute("viewBox").split(" ");
    var maxX = viewVal[2];
    var maxY = viewVal[3];
    viewVal[0] = 0;
    viewVal[1] = 0;
    viewVal[2] = maxX;
    viewVal[3] = maxY;
    svg.setAttribute('viewBox', viewVal.join(' '));

}

function handleWisely(evt) {

    //if (evt.detail == 2)
    //{
    //    alert("abc");
    //}
    if (evt.type != "click") {
        alert("abc");
    }

    //switch (which) {
    //    case " click":
    //        //savEvent = which;
    //        //d = new Date();
    //        //savEvtTime = d.getTime();
    //        //savTO = setTimeout(" doClick(savEvent)", dcTime);
    //        break;
    //    case " dblclick":
    //        //doDoubleClick(which);
    //        alert("abc");
    //        break;
    //    default:
    //}
}

var dragging = null;
var diffX = 0;
var diffY = 0;
function handleEvent(event) {
    //获取事件和目标
    svgRoot = document.getElementById("图层_1");
    //if (svgRoot.attachEvent) {
    //    svgRoot.attachEvent('onmousewheel', function () {
    //        alert("abc");
    //    });
    //}
    svgRoot.style.cursor = 'pointer';

    if (document.rootElement.currentScale == 1 && document.rootElement.currentTranslate.x == 0 &&
        document.rootElement.currentTranslate.y == 0)
        return;

    //确定事件类型
    switch (event.type) {
        case "mousedown":
            dragging = 1;
            diffX = event.clientX;
            diffY = event.clientY;
            break;
        case "mousemove":
            /////*IE注册事件*/
            //if (document.attachEvent) {
            //    if (document.onmousewheel)
            //        {
            //        document.attachEvent('onmousewheel', function () {
            //            alert("abc");
            //        }
            //        }
            //    );
            //}

            if (dragging !== null) {
                svgRoot.style.cursor = 'move';
                //指定位置
                var i = event.clientX - diffX;
                var j = event.clientY - diffY;

                uviewBox(svgRoot, i, j);

                diffX = event.clientX;
                diffY = event.clientY;
            }
            break;
        case "mouseup":
            dragging = null;
            svgRoot.style.cursor = 'pointer';
            break;
    }
}


function uviewBox(svgRoot, mx, my) {

    //svgRoot = document.getElementById("图层_1");// svgDoc.documentElement;

    var viewVal = svgRoot.getAttribute("viewBox").split(" ");

    var minX = parseFloat(viewVal[0]);
    if (mx != 0)
        minX = parseFloat(viewVal[0]) - mx;


    var minY = parseFloat(viewVal[1]);
    if (my != 0)
        minY = parseFloat(viewVal[1]) - my;

    var maxX = viewVal[2];
    var maxY = viewVal[3];
    viewVal[0] = minX;
    viewVal[1] = minY;
    viewVal[2] = maxX;
    viewVal[3] = maxY;
    svgRoot.setAttribute('viewBox', viewVal.join(' '));
}


function zoomdownimg(itype) {
    var zoomobj = null;
    switch (itype) {
        case 0:
            zoomobj = document.getElementById("imgzoomout");
            zoomobj.src = "images/Images/zommout2.png";
            break;
        case 1:
            zoomobj = document.getElementById("imgzoomin");
            zoomobj.src = "images/Images/zommin2.png";
            break;
        case 2:
            zoomobj = document.getElementById("imgzoomrestore");
            zoomobj.src = "images/Images/zoomrestore2.png";
            break;
    }
}

function zoomupimg(itype) {
    var zoomobj = null;
    switch (itype) {
        case 0:
            zoomobj = document.getElementById("imgzoomout");
            zoomobj.src = "images/Images/zommout1.png";
            break;
        case 1:
            zoomobj = document.getElementById("imgzoomin");
            zoomobj.src = "images/Images/zommin1.png";
            break;
        case 2:
            zoomobj = document.getElementById("imgzoomrestore");
            zoomobj.src = "images/Images/zoomrestore1.png";
            break;
    }
}

function pathonmouseover(index) {
    var svg = document.getElementById("图层_1");
    var p = svg.getElementById("p" + index.toString());
    if (p != null)
        setEleAttributeByEle(p, "fill", "#DCDDDD");

    setlinecolor(index, "#DCDDDD", 5, "block");

    var m = svg.getElementById("m" + index.toString());
    if (m != null)
        setEleAttributeByEle(m, "display", "block");
}

function pathonmouseout(index) {
    var svg = document.getElementById("图层_1");
    var p = svg.getElementById("p" + index.toString());
    if (p != null)
        setEleAttributeByEle(p, "fill", "#252525");

    setlinecolor(index, "#EA5728", 2, "none");

    var m = svg.getElementById("m" + index.toString());
    if (m != null)
        setEleAttributeByEle(m, "display", "none");
}

function setlinecolor(index, color, strokewidth, display) {
    var linename = "line" + index + "_";
    var i = 1;
    while (true) {
        var svg = document.getElementById("图层_1");
        var line = svg.getElementById(linename + i.toString());
        if (line == null)
            return;


        setEleAttributeByEle(line, "display", display);
        setEleAttributeByEle(line, "stroke", color);
        setEleAttributeByEle(line, "stroke-width", strokewidth);

        i = i + 1;
    }
}
