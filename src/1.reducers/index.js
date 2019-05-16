import AuthReducer from './authReduce'
import {combineReducers} from 'redux'


export default combineReducers({
    auth : AuthReducer
})