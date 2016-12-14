import { ASYN_THUNK_TYPE } from '../actions/index';

// const InitState = { all: [] }

const ReceivedUsers = (state = null, action) => {
    switch (action.type) {
        case ASYN_THUNK_TYPE:
            return action.payload.data;
        default:
            return state;
    }
}

export default ReceivedUsers;