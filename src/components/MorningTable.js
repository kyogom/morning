import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as d3 from 'd3';


class MorningTable extends Component {

    componentDidMount() {
        this.props.getChart();
    }
    componentDidUpdate() {
        if (typeof this.props.data === 'undefined') return;
    }
    render() {
        const parseTime = d3.timeFormat('%H:%M');
        const columns = [
            {
                Header: '',
                accessor: 'image24',
                maxWidth: 60,
                Cell: props => <div><img height={34} alt='user_face' src={props.original.image24} /></div>
            },
            {
                Header: 'Name',
                accessor: 'realName',
                maxWidth: 140,
                filterable: true
            }, {
                Header: 'Date',
                accessor: 'msPass',
                maxWidth: 140,
                Cell: props => {
                    if (typeof props.original.date === 'string') {
                        return <div>{props.original.date.substring(0, 10)}</div>;
                    }
                    return '';
                }
            }, {
                Header: 'Time',
                accessor: 'msPass',
                maxWidth: 140,
                Cell: props => <div>{parseTime(props.original.msPass)}</div>
            },
            {
                Header: 'message',
                accessor: 'text'
            }
        ];
        return <ReactTable
            style={{ 'padding': '20' }}
            data={this.props.data}
            columns={columns}
        />;
    }
}

export default MorningTable;
