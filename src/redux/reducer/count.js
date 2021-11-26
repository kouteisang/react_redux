import {ADD, SUB} from '../constant'

const initState = 0
export default function countReducer(preState = initState, action){
    const {type, data} = action
    switch(type){
        case ADD:
            return preState + data
        case SUB:
            return preState - data
        default:
            return preState
    }
}