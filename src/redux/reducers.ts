import { combineReducers } from '@reduxjs/toolkit';
import cityReducer from "./city/slice";

const rootReducer = combineReducers({
    city: cityReducer,
});

export default rootReducer;
