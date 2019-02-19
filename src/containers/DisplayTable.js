import { connect } from 'react-redux';
import { getChart } from '../actions/index';
import { updateSelectedUser } from '../actions/index';
import MorningTable from '../components/MorningTable';

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

const GetChart = connect(mapStateToProps, mapDispatchToProps)(MorningTable);
export default GetChart;