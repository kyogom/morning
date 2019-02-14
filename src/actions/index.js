import axios from 'axios';
import env from '../env/load-env';

export const getChartSuccess = (data) => ({
    type: 'GET_CHART',
    data: data
});

export const getChart = () => {
    return (dispatch) => {
        console.log();
        return axios.get(`${env.env.API_PATH}/api/morning`)
            .then(response => {
                dispatch(getChartSuccess(response.data));
            });
    };
};

export const updateSelectedUser = (userId) => ({
    type: 'UPDATE_SELECTED_USER',
    userId: userId
});