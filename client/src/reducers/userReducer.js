import { GET_USER } from '../actionTypes';

export default (state = 'start', action) => {
    switch(action.type) {
        case GET_USER:
            return action.payload
        default:
            return state;
    }
};