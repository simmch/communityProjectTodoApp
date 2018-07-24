import { auth, googleProvider } from '../components/firebase/firebase';

export function googleLogin() {
    return dispatch => 
    auth.signInWithPopup(googleProvider)
        .then((res)=> {
            console.log(`Welcome back, ${res.user.displayName}!`)
        })
        .catch((error)=> {
            console.log(`There has been a login error:${error}`);
        })
};