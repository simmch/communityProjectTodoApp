import { GET_NOTES, GET_DEL } from '../actionTypes';
import React from 'react';
import axios from 'axios';
import thunk from 'redux-thunk';


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