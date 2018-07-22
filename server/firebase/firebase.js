/**
 * Firebase Database Configuration
 */
var admin = require("firebase-admin")
    ,serviceAccount = require("./communityprojecttodoapp-firebase-adminsdk-xnblx-5230935499.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://communityprojecttodoapp.firebaseio.com"
});

const db = admin.database();
const notes = db.ref("/NOTES")
     ,users = db.ref("/USERS");
 
module.exports = {
    notes,
    users
}
