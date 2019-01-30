import { connect } from 'react-redux';
import { getChart } from '../actions/index';
import MorningChart from '../components/MorningChart';

const mapStateToProps = (state) => ({
    data: state.morningChart
});

const mapDispatchToProps = (dispatch) => ({
    getChart: () => {
        dispatch(getChart());
    },
});

const GetChart = connect(mapStateToProps, mapDispatchToProps)(MorningChart);
export default GetChart;