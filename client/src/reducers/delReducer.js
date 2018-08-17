import {GET_DEL} from '../actionTypes';

export default function(state={}, action){
    switch(action.type) {
        case GET_DEL:
            return action.payload
        default:
            return state;
    }
}