const db = require('../firebase/firebase')

/**
 * Add new note to Firebase
 * Real-Time Database
 */

function addNote (req, res) {
        db.notes.push(req.body.note)
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