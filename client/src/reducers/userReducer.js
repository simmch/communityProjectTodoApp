import { GET_USER } from '../actionTypes';

export default (state = {uid: 'default'}, action) => {
    switch(action.type) {
        case GET_USER:
            return action.payload
        default:
            return state;
    }
};