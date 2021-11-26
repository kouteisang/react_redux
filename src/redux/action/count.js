import {ADD, SUB} from '../constant'

export const add = data =>({type:ADD, data})

export const sub = data =>({type:SUB, data})

export const addAsync = (data, time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(add(data))
        }, time)
    }
}