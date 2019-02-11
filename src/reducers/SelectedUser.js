const selectedUser = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_SELECTED_USER':
            if (action.userId === state.selectedUser) {
                return state;
            }
            return { 'selectedUser': action.userId };
        default:
            return state;
    }
};

export default selectedUser;
