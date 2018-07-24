import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC4AaKKE0-IGd2v0LPN1BQcAETbLdGDp18",
    authDomain: "communityprojecttodoapp.firebaseapp.com",
    databaseURL: "https://communityprojecttodoapp.firebaseio.com",
    projectId: "communityprojecttodoapp",
    storageBucket: "communityprojecttodoapp.appspot.com",
    messagingSenderId: "475038181847"
  };
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();