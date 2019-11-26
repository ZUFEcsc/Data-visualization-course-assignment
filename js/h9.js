/*
 * @Author: ChenShan 
 * @Date: 2019-11-26 19:21:04 
 * @Last Modified by: ChenShan
 * @Last Modified time: 2019-11-26 19:24:30
 */
const width = 500;
const height = 500;
const color = d3.scaleOrdinal(d3.schemeCategory10);
const svg = d3
  .select('.id')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const layout = cloud()
  .size([500, 500])
  .words(
    data.map(function(d) {
      return { text: d, size: 10 + Math.random() * 90 };
    })
  )
  .padding(5)
  .rotate(function() {
    return Math.random() * 45;
  })
  .font('Impact')
  .fontSize(function(d) {
    return d.size;
  })
  .on('end', draw);

layout.start();

function draw(words) {
  svg
    .append('g')
    .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
    .selectAll('text')
    .data(words)
    .enter()
    .append('text')
    .attr('fill', (_, i) => color(i))
    .style('font-size', function(d) {
      return `${d.size}px`;
    })
    .style('font-family', 'Impact')
    .attr('text-anchor', 'middle')
    .attr('transform', function(d) {
      return `translate(${[d.x, d.y]})rotate(${d.rotate})`;
    })
    .text(function(d) {
      return d.text;
    });
}
