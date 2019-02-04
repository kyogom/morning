import React, { Component } from 'react';


class MorningChart extends Component {

    componentDidMount() {
        this.props.getChart();
    }
    render() {
        return (
            <div>
                hello
            </div>
        );
    }
}

export default MorningChart;
