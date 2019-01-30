const morningCharts = (state = [], action) => {
    switch (action.type) {
        case 'GET_CHART':
            return action.data;
        default:
            return state;
    }
};

export default morningCharts;
