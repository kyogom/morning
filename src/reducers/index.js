import { combineReducers } from 'redux';
import morningChart from './MorningChart';
import selectedUser from './SelectedUser';

export default combineReducers({
    morningChart,
    selectedUser
});