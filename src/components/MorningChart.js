import React, { Component } from 'react';
import { drawChart } from './drawChart.ts';


class MorningChart extends Component {

    componentDidMount() {
        this.props.getChart();
    }
    componentDidUpdate() {
        this.props.data.forEach((element) => {
            element.date = new Date(element.date);
        });
        drawChart(this.props.data, 500);
    }
    render() {
        return (
            <svg id="chart"></svg>
        );
    }
}

export default MorningChart;
