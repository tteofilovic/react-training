import { combineReducers } from 'redux';
import opacityReducer from './opacity';

export default combineReducers({
    opacity: opacityReducer
});