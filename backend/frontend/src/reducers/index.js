import { combineReducers } from 'redux';
import blogs from './blogs';
import errors from './errors';
import messages from "./messages";

export default combineReducers({
    blogs,
    errors,
    messages
});
