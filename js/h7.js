/*
 * @Author: ChenShan 
 * @Date: 2019-11-19 19:37:03 
 * @Last Modified by: ChenShan
 * @Last Modified time: 2019-11-19 19:47:35
 */

var m = [30, 10, 10, 10],
    w = 960 - m[1] - m[3],
    h = 500 - m[0] - m[2];

var x = d3.scale.ordinal().rangePoints([0, w], .5),
    y = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    background,
    foreground;

var svg = d3.select("body").append("svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
  .append("g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

d3.csv("../data/h7.csv", function(error, cities) {
  if (error) throw error;
 
x.domain(dimensions = d3.keys(cities[0]).filter(function(d) {
    return d != "City" && (y[d] = d3.scale.linear()
        .domain(d3.extent(cities, function(p) { return +p[d]; }))
        .range([h, 0]));
  }));

  background = svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(cities)
    .enter().append("path")
      .attr("d", path);

  foreground = svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(cities)
    .enter().append("path")
      .attr("d", path);

  var g = svg.selectAll(".dimension")
      .data(dimensions)
    .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

  g.append("g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
    .append("text")
      .attr("text-anchor", "middle")
      .attr("y", -9)
      .text(String);

  g.append("g")
      .attr("class", "brush")
      .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);
});

function path(d) {
  return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
}

function brush() {
  var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
      extents = actives.map(function(p) { return y[p].brush.extent(); });
  foreground.style("display", function(d) {
    return actives.every(function(p, i) {
      return extents[i][0] <= d[p] && d[p] <= extents[i][1];
    }) ? null : "none";
  });
}
