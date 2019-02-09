import axios from 'axios';

export const getChartSuccess = (data) => ({
    type: 'GET_CHART',
    data: data
});

export const getChart = () => {
    return (dispatch) => {
        return axios.get('https://us-central1-morning-40d4c.cloudfunctions.net/api/morning')
            .then(response => {
                dispatch(getChartSuccess(response.data));
            });
    };
};