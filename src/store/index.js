/**
 * @author akbar.pambudi
 * this code use create store and register reducer of application
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducer';

//create a store 
const store = createStore(appReducers, applyMiddleware(thunk));// create store

export default store;