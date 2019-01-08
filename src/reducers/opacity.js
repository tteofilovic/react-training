import * as types from '../actions/types';

const initialState = {
    1
};

const opacity = (state = initialState, action) => {
    switch (action.type){
        case types.CHANGE_OPACITY:
            return action.payload;
        default:
            return state;
    }
}

export default opacity;
