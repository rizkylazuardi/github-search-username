import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';
import searchReducer from './search-reducer';

// compose reducer into one reducer
const appReducers = combineReducers({
    routing : routerReducer,  
    searchReducer,
});

export default appReducers;
