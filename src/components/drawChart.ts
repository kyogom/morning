import * as d3 from 'd3';
import { ScaleTime, ScaleLinear, ScaleOrdinal, Line, Selection, DSVRowString, Axis } from 'd3';
import reducers from '../reducers';

export const drawChart = (data, heightUser) => {

    // Data
    const objKey = 'user';
    const objY = 'msPass';
    const objX = 'date';

    const dataGroup: any = d3.nest().key((d) => d[objKey]).entries(data);

    // format
    const dateFormat = '%Y%m%d';
    const timeFormat = '%H:%M';

    // Margins
    const margins = { top: 20, right: 80, bottom: 30, left: 50 };
    let width = parseInt(d3.select("#chart").style("width")) - margins.left - margins.right;
    let height = heightUser - margins.top - margins.bottom;

    const svg: Selection<Element, {}, HTMLElement, any> = d3.select("#chart");
    svg.attr("height", height);

    // Scales, domain and axis
    const xScale: ScaleTime<number, number> = d3.scaleTime();
    const yScale: ScaleTime<number, number> = d3.scaleTime();
    xScale.domain(d3.extent(data, (d) => +d[objX]));
    yScale.domain(d3.extent(data, (d) => +d[objY]));
    xScale.range([margins.left, width]);
    yScale.range([margins.top, height - margins.bottom]);
    const xAxis: Axis<{}> = d3.axisBottom(xScale);
    const yAxis: Axis<{}> = d3.axisLeft(yScale);

    const parseDate = d3.timeFormat(dateFormat);
    const parseTime = d3.timeFormat(timeFormat);

    // Lines
    const lineGen: Line<[number, number]> = d3.line().x((d) => xScale(d[objX])).y((d) => yScale(d[objY]));

    // Define the div for the tooltip
    const div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    svg.append("svg:g")
        .attr("class", "scale")
        .attr("transform", "translate(0," + (height - margins.bottom) + ")")
        .call(xAxis) // Drawing axis X

    svg.append("svg:g")
        .attr("class", "scale")
        .attr("transform", "translate(" + (margins.left) + ",0)")
        .call(yAxis) // Drawing axis Y
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("fill", "#000")
        .attr("y", 10)

    dataGroup.forEach((d, i, n) => {
        svg.append('svg:path')
            .attr("class", "line" + i)
            .attr('d', lineGen(d.values)) // Drawing line
            .attr('stroke', (d, j) => "hsl(" + i * 50 % 360 + ",100%,50%)")  // Setting color
            .attr('stroke-width', 3)
            .attr('class', 'blur')
            .attr('fill', 'none')
            .on("mouseover", function (this: any) {
                d3.select(this).attr("class", "visible")
            })
            .on("mouseout", function (this: any) {
                d3.select(this).attr("class", "blur")
            })
        svg.append('svg:text')
            .attr("class", "textKey" + i)
            .attr("transform", "translate(" + xScale(d.values[d.values.length - 1][objX]) + "," + yScale(d.values[d.values.length - 1][objY]) + ")")
            .style("font", "12px sans-serif")
            .text(
                () => {
                    const user = data.filter((data) => data.user === d.key);
                    if (user.length === 0) {
                        return d.key;
                    }
                    return user[0].realName;
                }); // Showing data keys

        // Add the scatterplot
        svg.selectAll("dot")
            .data(d.values)
            .enter().append("circle")
            .attr("r", 5)
            .attr("class", "circle")
            .attr("opacity", 0)
            .attr("cx", (d) => xScale(d[objX]))
            .attr("cy", (d) => yScale(d[objY]))
            .on("mouseover", function (this: any, d) {
                div.style("opacity", 1);
                div.html("<img src=\"" + d.image24 + "\">" + parseTime(d.msPass) + ":" + d.realName + ":" + d.text)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", (d) => {
                div.style("opacity", 0);
            });
    });
}