import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
const rootReducer = combineReducers({
    authReducer,
});
export default rootReducer;
