import React, { Component } from 'react';

class Table extends Component {

    componentDidMount() {
        // this.props.getChart();
    }
    componentDidUpdate() {
        // if (typeof this.props.data === 'undefined') return;
    }
    render() {
        return (
            <div style={{ 'height': 300 }}>
                this will be table
            </div>
        );
    }
}

export default Table;
