import { auth, googleProvider, facebookProvider, twitterProvider } from '../components/firebase/firebase';
import { GET_USER } from '../actionTypes';

export function googleLogin() {
    return dispatch => 
    auth.signInWithPopup(googleProvider)
        .catch((error)=> {
            console.log(`There has been a login error: ${error}`);
        })
};

export function logout() {
    return dispatch => auth.signOut();
}

export function getUser() {
    return dispatch => {
        /**
        * The state changes upon logout and login
        */
        auth.onAuthStateChanged(user => {
            if(user != null) {
                dispatch({
                    type: GET_USER,
                    payload: user
                })
            } else {
                user = 'default';
                dispatch({
                    type: GET_USER,
                    payload: user
                })
            }
            
        })
    }
}