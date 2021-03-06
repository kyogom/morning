import * as d3 from 'd3';
import { ScaleTime, Line, Selection, Axis } from 'd3';

export const drawChart = (data, heightUser, self) => {
    d3.select("#chart").selectAll("*").remove();
    // Data
    const objKey = 'user';
    const objY = 'msPass';
    const objX = 'date';

    const dataGroup: any = d3.nest().key((d) => d[objKey]).entries(data);

    // format
    const timeFormat = '%H:%M';

    // min-height
    const minHeight = 200;

    // Margins
    const margins = { top: 50, right: 80, bottom: 30, left: 100 };
    let width = parseInt(d3.select("#chart").style("width")) - margins.left - margins.right;
    let height = width * 0.4 - margins.top - margins.bottom;

    if (height < minHeight) {
        height = minHeight;
    }

    const svg: Selection<Element, {}, HTMLElement, any> = d3.select("#chart");
    svg.attr("height", height);

    // Scales, domain and axis
    const xScale: ScaleTime<number, number> = d3.scaleTime();
    const yScale: ScaleTime<number, number> = d3.scaleTime();
    xScale.domain(d3.extent(data, (d) => +d[objX]));
    yScale.domain(d3.extent(data, (d) => +d[objY]));
    xScale.range([margins.left, width]);
    yScale.range([margins.top, height - margins.bottom]);
    const xAxis: Axis<{}> = d3.axisBottom(xScale).tickValues(data.map(d=> d.date)).tickFormat(d3.timeFormat("%Y-%m-%d"));
    const yAxis: Axis<{}> = d3.axisLeft(yScale);
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
            .attr('d', lineGen(d.values))
            .attr('stroke', (d, j) => "hsl(" + i * 50 % 360 + ",100%,50%)")  // Setting color
            .attr('stroke-width', 5)
            .attr('class', 'blur')
            .attr('fill', 'none')
            .attr('class', function (this: any) {
                if (d.key === self.props.selectedUser) {
                    return 'visible';
                }
                else {
                    return 'blur';
                }
            })
            .on("mouseover", function (this: any) {
                d3.select(this).attr("class", "visible")
                self.props.updateSelectedUser(d.key);
            })
            .on("mouseout", function (this: any) {
                d3.select(this).attr("class", "blur")
                self.props.updateSelectedUser('');
            })

        const marginLeft = 5;
        const marginTop = 3;
        svg.append('svg:text')
            .attr("class", "textKey" + i)
            .attr("transform", "translate(" + (xScale(d.values[0][objX]) + marginLeft) + "," + (yScale(d.values[0][objY]) + marginTop) + ")")
            .style("font", "12px sans-serif")
            .text(
                () => {
                    const user = data.filter((data) => data.user === d.key);
                    if (user.length === 0) {
                        return d.key;
                    }
                    return user[0].realName;
                });

        // Add the scatterplot
        svg.selectAll("dot")
            .data(d.values)
            .enter().append("circle")
            .attr("r", 5)
            .attr("class", "circle")
            .attr("opacity", 0)
            .attr("cx", (d) => xScale(d[objX]))
            .attr("cy", (d) => yScale(d[objY]))
            .style('fill', (d, j) => "hsl(" + i * 50 % 360 + ",100%,50%)")  // Setting color
            .on("mouseover", function (this: any, d) {
                d3.selectAll('.tooltip').style('opacity', 0)
                div.style("opacity", 1);
                div.html("<img src=\"" + d.image24 + "\">" + parseTime(d.msPass) + ":" + d.realName + ":<br>" + d.text)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
                self.props.updateSelectedUser(d.user);
            })
            .on("mouseout", (d) => {
                div.style("opacity", 0);
                self.props.updateSelectedUser('');
            });
    });
}