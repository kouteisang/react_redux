import { createStore, applyMiddleware } from "redux";
import allReducers from './reducer/index'
import thunk from 'redux-thunk'

export default createStore(allReducers, applyMiddleware(thunk))