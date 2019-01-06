import * as types from '../actions/types';

export const changeOpacity = () => {
    return {
        type: types.CHANGE_OPACITY,
        payload: Math.floor(Math.random()*10)/10
    }
}
 