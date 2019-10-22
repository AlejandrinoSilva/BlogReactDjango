import { combineReducers } from 'redux';
import blogs from './blogs';
import errors from './errors';

export default combineReducers({
    blogs,
    errors
});
