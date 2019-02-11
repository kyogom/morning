const morningChart = (state = [], action) => {
    switch (action.type) {
        case 'GET_CHART':
            return { 'data': action.data };
        default:
            return state;
    }
};

export default morningChart;
