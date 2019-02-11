import axios from 'axios';

export const getChartSuccess = (data) => ({
    type: 'GET_CHART',
    data: data
});

export const getChart = () => {
    return (dispatch) => {
        // return axios.get('https://us-central1-morning-40d4c.cloudfunctions.net/api/morning')
        return axios.get('http://localhost:5000/morning-40d4c/us-central1/api/morning')
            .then(response => {
                dispatch(getChartSuccess(response.data));
            });
    };
};

export const updateSelectedUser = (userId) => ({
    type: 'UPDATE_SELECTED_USER',
    userId: userId
});