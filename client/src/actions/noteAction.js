import { GET_NOTES, GET_DEL } from '../actionTypes';
import axios from 'axios';


export function getNotes(){
    return dispatch => {
        axios.get('/all')
            .then(response => {
                dispatch({type: GET_NOTES, payload: response.data})
            })
    }
}

export function deleteNote(id) {
    return dispatch => {
        axios.post('/del', {id})
            .then(res => {
                dispatch({type: GET_DEL, payload: res})
                this.getNotes();
            })
            .catch((err)=> {
                dispatch({type: GET_DEL, payload: err})
            })
    }
}