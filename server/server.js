/**
 * Library imports
 */
require('dotenv').config();
const express = require('express')
    ,bodyParser = require('body-parser')
    ,db = require('./firebase/firebase');

/**
 * Server config
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server now listening on Port: ${port}`);
})

/**
 * Firebase Custom Token
 */
const token = 'custom-uid';

db.admin.auth().createCustomToken(token)
        .then((customToken)=> {
            console.log(customToken);
        })
        .catch((error)=> {
            console.log('Error creating custom token: ', error);
});

/**
 * Testing 
 */
app.use('/test', (req,res)=> {
    console.log('Test has been hit\nLoading Data...');
    var testNote = "This is a test note.";
    db.notes.push({
        note: testNote
    }, console.log('Test has been completed successfully.'))
    .catch((error)=> {
        console.log('Execution failed dut to error: ', error)
    })
})