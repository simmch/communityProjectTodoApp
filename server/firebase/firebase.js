/**
 * Firebase Database Configuration
 */

var express = require('express');
var router = express.Router();
var admin = require("firebase-admin")
    ,serviceAccount = require("./communityprojecttodoapp-firebase-adminsdk-xnblx-5230935499.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://communityprojecttodoapp.firebaseio.com"
});

const db = admin.database();
const notes = db.ref("/NOTES")
     ,users = db.ref("/USERS");

router.get('/', (req, res)=> {
    console.log('Practicing with Router.');
    res.send('GET the firebase shit!');
})

// var email = "simmch@gmail.com";
// var password = "P@ssw0rd"

// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch((error)=> {
//         console.log(error);
// })

 
module.exports = {
    notes,
    users,
    admin   
}
