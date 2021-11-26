//引入combineReducers
import { combineReducers } from 'redux'
import count from './count'
import people from './people'

export default combineReducers({
    count,
    people
})