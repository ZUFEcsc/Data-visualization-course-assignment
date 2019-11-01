/*
 * @Author: ChenShan 
 * @Date: 2019-11-01 12:37:31 
 * @Last Modified by: ChenShan
 * @Last Modified time: 2019-11-01 13:14:05
 */

var width = 800;
var height = 800;
var svg = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

var marge = {top:10,bottom:10,left:10,right:10}

var g = svg.append("g")
    .attr("transform","translate("+marge.top+","+marge.left+")");

var nodes = [
    {name:"浙江省",group:2.5},
    {name:"杭州",group:2},
    {name:"宁波",group:2},
    {name:"温州",group:2},
    {name:"绍兴",group:2},
    {name:"湖州",group:2},
    {name:"嘉兴",group:2},
    {name:"金华",group:2},
    {name:"衢州",group:2},
    {name:"台州",group:2},
    {name:"丽水",group:2},
    {name:"舟山",group:2},
    {name:"上城区",group:1.5},
    {name:"下城区",group:1.5},
    {name:"江干区",group:1.5},
    {name:"拱墅区",group:1.5},
    {name:"西湖区",group:1.5},
    {name:"滨江区",group:1.5},
    {name:"余杭区",group:1.5},
    {name:"萧山区",group:1.5},
    {name:"富阳区",group:1.5},
    {name:"临安区",group:1.5},
    {name:"建德市",group:1.5},
    {name:"桐庐县",group:1.5},
    {name:"淳安县",group:1.5},
    {name:"鹿城区",group:1.5},
    {name:"龙湾区",group:1.5},
    {name:"瓯海区",group:1.5},
    {name:"洞头区",group:1.5},
    {name:"瑞安市",group:1.5},
    {name:"乐清市",group:1.5},
    {name:"永嘉县",group:1.5},
    {name:"平阳县",group:1.5},
    {name:"苍南县",group:1.5},
    {name:"文成县",group:1.5},
    {name:"泰顺县",group:1.5},
    {name:"龙港市",group:1.5},
    {name:"安阳街道",group:1},
    {name:"玉海街道",group:1},
    {name:"锦湖街道",group:1},
    {name:"潘岱街道",group:1},
    {name:"东山街道",group:1},
    {name:"上望街道",group:1},
    {name:"莘塍街道",group:1},
    {name:"汀田街道",group:1},
    {name:"飞云街道",group:1},
    {name:"云舟街道",group:1},
    {name:"仙降街道",group:1},
    {name:"南滨街道",group:1},
    {name:"芳庄乡",group:1},
    {name:"北麂乡",group:1},
    {name:"塘下镇",group:1},
    {name:"陶山镇",group:1},
    {name:"桐浦镇",group:1},
    {name:"湖岭镇",group:1},
    {name:"林川镇",group:1},
    {name:"马屿镇",group:1},
    {name:"曹村镇",group:1},
    
    {name:"高楼镇",group:1},
    {name:"平阳坑镇",group:1},
];
var edges = [
    {source:0,target:1,value:2}, 
    {source:0,target:2,value:2},
    {source:0,target:3,value:2},
    {source:0,target:4,value:2},
    {source:0,target:5,value:2},
    {source:0,target:6,value:2},
    {source:0,target:7,value:2},
    {source:0,target:8,value:2},
    {source:0,target:9,value:2},
    {source:0,target:10,value:2},
    {source:0,target:11,value:2},
    {source:1,target:12,value:1.5},
    {source:1,target:13,value:1.5},
    {source:1,target:14,value:1.5},
    {source:1,target:15,value:1.5},
    {source:1,target:16,value:1.5},
    {source:1,target:17,value:1.5},
    {source:1,target:18,value:1.5},
    {source:1,target:19,value:1.5},
    {source:1,target:20,value:1.5},
    {source:1,target:21,value:1.5},
    {source:1,target:22,value:1.5},
    {source:1,target:23,value:1.5},
    {source:1,target:24,value:1.5},
    {source:3,target:25,value:1.5},
    {source:3,target:26,value:1.5},
    {source:3,target:27,value:1.5},
    {source:3,target:28,value:1.5},
    {source:3,target:29,value:1.5},
    {source:3,target:30,value:1.5},
    {source:3,target:31,value:1.5},
    {source:3,target:32,value:1.5},
    {source:3,target:33,value:1.5},
    {source:3,target:34,value:1.5},
    {source:3,target:35,value:1.5},
    {source:3,target:36,value:1.5},
    {source:29,target:37,value:1},
    {source:29,target:38,value:1},
    {source:29,target:39,value:1},
    {source:29,target:40,value:1},
    {source:29,target:41,value:1},
    {source:29,target:42,value:1},
    {source:29,target:43,value:1},
    {source:29,target:44,value:1},
    {source:29,target:45,value:1},
    {source:29,target:46,value:1},
    {source:29,target:47,value:1},
    {source:29,target:48,value:1},
    {source:29,target:49,value:1},
    {source:29,target:50,value:1},
    {source:29,target:51,value:1},
    {source:29,target:52,value:1},
    {source:29,target:53,value:1},
    {source:29,target:54,value:1},
    {source:29,target:55,value:1},
    {source:29,target:56,value:1},
    {source:29,target:57,value:1},
    {source:29,target:58,value:1},
    {source:29,target:59,value:1},
    
];

var colorScale = d3.scaleOrdinal()
    .domain(d3.range(nodes.length))
    .range(d3.schemeCategory10);


var forceSimulation = d3.forceSimulation()
    .force("link",d3.forceLink())
    .force("charge",d3.forceManyBody())
    .force("center",d3.forceCenter());

forceSimulation.nodes(nodes)
    .on("tick",ticked);
    
forceSimulation.force("link")
    .links(edges)
    .distance(function(d){
        return d.value*100;
    })
    
forceSimulation.force("center")
    .x(width/2)
    .y(height/2);

console.log(nodes);
console.log(edges);

var links = g.append("g")
    .selectAll("line")
    .data(edges)
    .enter()
    .append("line")
    .attr("stroke",function(d,i){
        return colorScale(d.value);  
    })
    .attr("stroke-width",1);

var linksText = g.append("g")
    .selectAll("text")
    .data(edges)
    .enter()
    .append("text")
    .text(function(d){
        return d.relation;
    })
    
var gs = g.selectAll(".circleText")
    .data(nodes)
    .enter()
    .append("g")
    .attr("transform",function(d,i){
        var cirX = d.x;
        var cirY = d.y;
        return "translate("+cirX+","+cirY+")";
    })
    .call(d3.drag()
        .on("start",started)
        .on("drag",dragged)
        .on("end",ended)
    );

gs.append("circle")
    .attr("r",function (d,i) {   
        return d.group*15;
    })
    .attr("fill",function(d,i){
        return colorScale(d.group);
    })
    
gs.append("text")
    .attr("x",-25)
    .attr("y",-5)
    .attr("dy",10)
    .text(function(d){
        return d.name;
    })
function ticked(){
    links
        .attr("x1",function(d){return d.source.x;})
        .attr("y1",function(d){return d.source.y;})
        .attr("x2",function(d){return d.target.x;})
        .attr("y2",function(d){return d.target.y;});

    linksText
        .attr("x",function(d){
            return (d.source.x+d.target.x)/2;
        })
        .attr("y",function(d){
            return (d.source.y+d.target.y)/2;
        });

    gs
        .attr("transform",function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function started(d){
    if(!d3.event.active){
        forceSimulation.alphaTarget(0.8).restart();
    }
    d.fx = d.x;
    d.fy = d.y;
}
function dragged(d){
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}
function ended(d){
    if(!d3.event.active){
        forceSimulation.alphaTarget(0);
    }
    d.fx = null;
    d.fy = null;
}
