/*
 * @Author: ChenShan 
 * @Date: 2019-12-04 17:00:34 
 * @Last Modified by:   ChenShan 
 * @Last Modified time: 2019-12-04 17:00:34 
 */
var startLong = 106.652024;
        var startLat = 26.617221;
        var endLong = 106.652024;
        var endLat = 26.614221;
        
        var startLongR = 106.652024;
        var startLatR = 26.617221;
        var endLongR = 106.652024;
        var endLatR = 26.614221;
        
        
     
        var linesPoints = null;
        // 百度地图API功能
        var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(106.652024,26.617221), 15);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("贵阳");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
       
       setInterval(goWay,500);
       var carMk;
       var myIcon = new BMap.Icon("../data/h13.png", new BMap.Size(37,25), {imageOffset: new BMap.Size(0, 0)});//卡车
       
       function goWay(){
           startLong = endLong;
           startLat = endLat;
           endLong = getRound(endLong);
           endLat = getRound(endLat);
           
           drawIcon(startLong,startLat,endLong,endLat);
           //drawRedLine();
       }
       
       function getRound(temp){
           var i = Math.round(Math.random()*9+1);
           if(i%2==0){
               return temp + i*0.0001;
           }else{
               return temp - i*0.0001;
           }
       }
       function getRound1(temp){
           var i = Math.round(Math.random()*9+1);
           if(i%2==0){
               return temp + i*0.0002;
           }else{
               return temp - i*0.0002;
           }
       }
       
       function drawGreenLine(startLong,startLat,endLong,endLat){
           var polyline = new BMap.Polyline([
                                              new BMap.Point(startLong,startLat),//起始点的经纬度
                                              new BMap.Point(endLong,endLat)//终止点的经纬度
                                              ], {strokeColor:"green",//设置颜色 
                                              strokeWeight:3, //宽度
                                              strokeOpacity:1});//透明度
           map.addOverlay(polyline);
       }
       
       function drawRedLine(){
           startLongR = endLongR;
           startLatR = endLatR;
           endLongR = getRound1(endLongR);
           endLatR = getRound1(endLatR);
           var polyline1 = new BMap.Polyline([
                                              new BMap.Point(startLongR,startLatR),//起始点的经纬度
                                              new BMap.Point(endLongR,endLatR)//终止点的经纬度
                                              ], {strokeColor:"red",//设置颜色 
                                              strokeWeight:3, //宽度
                                              strokeOpacity:1});//透明度
           map.addOverlay(polyline1);
       }
     
       function drawIcon(startLong,startLat,endLong,endLat){
           if(carMk){
               map.removeOverlay(carMk);
           }
           carMk = new BMap.Marker(
                       new BMap.Point(endLong,endLat),//起始点的经纬度
                      {icon:myIcon});
           map.addOverlay(carMk);
           drawGreenLine(startLong,startLat,endLong,endLat);
       }