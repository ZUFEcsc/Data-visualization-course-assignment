/*
 * @Author: ChenShan 
 * @Date: 2019-10-15 19:20:10 
 * @Last Modified by: ChenShan
 * @Last Modified time: 2019-10-15 19:58:14
 */
var body = d3.select("body");

var popData = [
        {age:"80 and up", value:1.6,position:0},
        {age:"75 and 79", value:1.5,position:1},
        {age:"70 and 74", value:2.1,position:2},
        {age:"65 and 69", value:2.6,position:3},
        {age:"60 and 64", value:3.4,position:4},
        {age:"55 and 59", value:4.5,position:5},
        {age:"50 and 54", value:5.1,position:6},
        {age:"45 and 49", value:6.0,position:7},
        {age:"40 and 44", value:6.6,position:8},
        {age:"35 and 39", value:7.1,position:9},
        {age:"30 and 34", value:7.3,position:10},
        {age:"25 and 29", value:8.1,position:11},
        {age:"20 and 24", value:8.9,position:12},
        {age:"15 and 19", value:8.8,position:13},
        {age:"10 and 14", value:8.6,position:14},
        {age:"5 and 9", value:8.8,position:15},
        {age:"0 and 4", value:9.3,position:16}];

var axisData = [0,2.5,5.0,7.5];

var maxDataset = d3.max(popData,function(element){
    return element.value;
});

var barHeight = 20, 
    barGap = 5,
    barSpacing = barHeight+barGap,
    width = 400,
    scaleFactor = width/maxDataset,
    topMargin = 30,
    leftMargin = 100,
    tickGap = 5,
    tickHeight = 10,
    translateText="translate(" + leftMargin + "," + topMargin + ")",
    scaleText="scale(" + scaleFactor + ",1)";

body.append("h2")
    .text("Age distribution of the word,2010");

body.append("div")
    .attr("class","top-label age-label")
.append("p")
    .text("age group");

body.append("div")
    .attr("class","top-label")
.append("p")
    .text("portion of the population");

body.append("div")
    .attr("class","clearfix");

var svg = body.append("svg");

var barGroup = svg.append("g")
                .attr("transform",translateText+" "+scaleText)
                .attr("class","bar");
barGroup.selectAll("rect")
        .data(popData)
        .enter()
        .append("rect")
        .attr("x",0)
        .attr("y",function(d){return d.position*barSpacing})
        .attr("width",function(d){return d.value})
        .attr("height",barHeight)
        .on("mouseover",function(d,i){
            d3.select(this).transition().duration(1000).attr("fill","DarkSlateBlue");
        })
        .on("mouseout",function(d,i){
            d3.select(this).transition().duration(1000).attr("fill","rgb(193,210,240)");
        });

var barLabelGroup = svg.append("g")
    .attr("transform",translateText)
    .attr("class","bar-label");
barLabelGroup.selectAll("text")
                .data(popData)
                .enter()
                .append("text")
                .attr("x",-10)
                .attr("y",function(d){return d.position*barSpacing+barHeight*(2/3)})
                .text(function(d){return d.age});

var axisTickGroup = svg.append("g")
                        .attr("transform",translateText)
                        .attr("stroke","black");
axisTickGroup.selectAll("line")
                .data(axisData)
                .enter()
                .append("line")
                .attr("x1",function(d){ return d*scaleFactor})
                .attr("x2",function(d){return d*scaleFactor})
                .attr("y1",0)
                .attr("y2",-tickHeight);

var axisLabelGroup = svg.append("g")
                        .attr("transform",translateText)
                        .attr("class","axis-label");
axisLabelGroup.selectAll("text")
                .data(axisData)
                .enter()
                .append("text")
                .attr("x",function(d){return d*scaleFactor})
                .attr("y",-tickHeight-tickGap)
                .text(function(d){return d + "%"});

var myCircle=d3.select("circle");
d3.select("#header")
    .append("p")
    .text("I am an appended parpgraph")
    .style("color","grey")
    .style("font-style","italic");