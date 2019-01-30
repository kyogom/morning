import React, { Component } from 'react';

class MorningChart extends Component {

    componentDidMount() {
        this.props.getChart();
        // const { dispatch } = this.props
        // dispatch(this.propsfetchProject())
    }
    render() {
        console.log(this.props.data);
        return (<h1 >hi this will be chart</h1>
        );
    }
}

export default MorningChart;
