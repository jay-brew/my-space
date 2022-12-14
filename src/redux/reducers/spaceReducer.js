import { combineReducers } from "redux";
import { ADD_SPACE } from '../actions/spaceAction';

// 초기값
let initialState = {
    text:""
}

function addSpace(state = initialState, action){
    let {type, payload} = action;
    switch(type){
        case ADD_SPACE :
            return {
                ...state,
                text : payload.text
            }
        default : 
            return state;
    }
}

const spaceAll = combineReducers({
    addSpace
})

export default spaceAll;
