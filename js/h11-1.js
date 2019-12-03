/*
 * @Author: ChenShan 
 * @Date: 2019-12-03 20:07:05 
 * @Last Modified by: ChenShan
 * @Last Modified time: 2019-12-03 20:17:55
 */
function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4><table>"+
        "<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
        "<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
        "<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
        "</table>";
}

var sampleData ={};	/* Sample random data. */	
['JXI', 'LIA', 'TIB', 'NMG', 'SHH', 'CHQ', 'XIN', 'SHD', 'HEN', 'GUD', 'GUI', 'BEJ', 'MAC', 'TAJ', 'HLJ', 'HEB', 'ZHJ', 'ANH', 'GXI', 'HAI', 'JIL', 'SHX', 'HUN', 'YUN', 'FUJ', 'HUB', 'SHA', 'HKG', 'QIH', 'GAN', 'JSU', 'SCH', 'NXA', 'TAI']
    .forEach(function(d){ 
        var low=Math.round(100*Math.random()), 
            mid=Math.round(100*Math.random()), 
            high=Math.round(100*Math.random());
        sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
                avg:Math.round((low+mid+high)/3), color:d3.interpolate("#FFF0F5", "#ffb6c1")(low/100)}; 
    });

/* draw states on id #statesvg */	
uStates.draw("#statesvg", sampleData, tooltipHtml);