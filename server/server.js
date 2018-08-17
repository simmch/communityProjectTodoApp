/**
 * Library imports
 */
require('dotenv').config();
const express = require('express')
    ,bodyParser = require('body-parser')
    ,db = require('./firebase/firebase');

/**
 * Small server config
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3031;

app.listen(port, ()=> {
    console.log(`Server now listening on Port: ${port}`);
})

/**
 * Add new note to Firebase
 * Real-Time Database
 */
app.post('/addNote', (req, res)=> {

    var title = req.body.note.title;
    var body  = req.body.note.body;
    var userId= req.body.note.uid;
    let photo = req.body.note.photo;
    var displayName = req.body.note.displayName;
    var timestamp = req.body.note.timestamp;
    // Created Time Timestamp
    var crt_timestamp= req.body.note.crt_timestamp;
    
        db.notes.push({
            title: title,
            body: body,
            uid: userId,
            displayName: displayName,
            image: photo,
            timestamp: timestamp, 
            crt_timestamp: crt_timestamp
        })
      res.send("success")    
})

/**
 * Remove date from Firebase
 * Real-Time Database
 */

app.use('/del', (req,res)=> {
    db.notes.child(req.body.id).remove();
    res.send("removed");
})

/**
 * Receive all data from Firebase
 * Real-Time Database
 */
app.get('/all', (req, res)=> {
      db.notes.orderByKey().once('value', snapshot => { 
        var data = snapshot.val();
        res.send(data);
        
        })        
})

