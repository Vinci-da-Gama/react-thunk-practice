export default (state = null, action) => {
    switch (action.type) {
        case 'Selected_Book':
            return action.bookSelected;
    }

    return state;
}
