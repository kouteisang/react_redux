import { ADD_PERSON } from "../constant"

const initState = [{id:1, name:'Cheng', age:22}]
export default function addPerson(preState = initState, action) {
    const {type, data} = action
    switch(type){
        case ADD_PERSON:
            console.log("CASE ADD_PERSON")
            return [data, ...preState]
        default:
            console.log('DEFAULT')
            return preState
    }
}