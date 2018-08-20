const db = require('../firebase/firebase')

/**
 * Add new note to Firebase
 * Real-Time Database
 */

function addNote (req, res) {
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
            crt_timestamp: crt_timestamp
        })
      res.send("success")    
};

/**
 * Remove date from Firebase
 * Real-Time Database
 */

function del (req,res) {
    db.notes.child(req.body.id).remove();
    res.send("removed");
};

/**
 * Receive all data from Firebase
 * Real-Time Database
 */

function all (req, res) {
      db.notes.orderByChild('/crt_timestamp').once('value', snapshot => { 
        var data = snapshot.val();
        res.send(data);
        
        })        
};

module.exports = {
    addNote,
    del,
    all
}