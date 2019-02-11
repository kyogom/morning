import { connect } from 'react-redux';
import { getChart } from '../actions/index';
import { updateSelectedUser } from '../actions/index';
import MorningChart from '../components/MorningChart';

const mapStateToProps = (state) => ({
    ...state.morningChart,
    ...state.selectedUser
});

const mapDispatchToProps = (dispatch) => ({
    getChart: () => {
        dispatch(getChart());
    },
    updateSelectedUser: (userId) => {
        dispatch(updateSelectedUser(userId));
    }
});

const GetChart = connect(mapStateToProps, mapDispatchToProps)(MorningChart);
export default GetChart;