import React, { Component } from 'react';
import { drawChart } from './drawChart.ts';


class MorningChart extends Component {

    componentDidMount() {
        this.props.getChart();
    }
    componentDidUpdate() {
        if (typeof this.props.data === 'undefined') return;
        this.props.data.forEach((element) => {
            element.date = new Date(element.date);
        });
        drawChart(this.props.data, 500, this);
    }
    render() {
        return (
            <svg id="chart"></svg>
        );
    }
}

export default MorningChart;
