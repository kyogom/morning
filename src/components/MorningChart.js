import React, { Component } from 'react';
import { dataHardcoded } from './dataHardcoded.ts';
import { drawChart } from './drawChart.ts';


class MorningChart extends Component {

    componentDidMount() {
        this.props.getChart();
        drawChart(dataHardcoded, 'Price, €', 500, '%Y%m%d');
    }
    render() {
        return (
            <svg id="chart"></svg>
        );
    }
}

export default MorningChart;
