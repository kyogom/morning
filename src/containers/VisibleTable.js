import { connect } from 'react-redux';
import { updateSelectedUser } from '../actions/index';
import Table from '../components/Table';

const mapStateToProps = (state) => ({
    ...state.morningChart,
    ...state.selectedUser
});

const mapDispatchToProps = (dispatch) => ({
    updateSelectedUser: (userId) => {
        dispatch(updateSelectedUser(userId));
    }
});

const VisibleTable = connect(mapStateToProps, mapDispatchToProps)(Table);
export default VisibleTable;