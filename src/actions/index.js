import axios from 'axios';

export const getChartSuccess = (data) => ({
    type: 'GET_CHART',
    data: data
});

export const getChart = () => {
    return (dispatch) => {
        return axios.get('http://localhost:5000/morning-40d4c/us-central1/api/morning')
            .then(response => {
                dispatch(getChartSuccess(response.data));
            });
    };
};