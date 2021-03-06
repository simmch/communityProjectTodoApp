/**
 * Library imports
 */

const express = require('express')
    ,bodyParser = require('body-parser')
    ,path=require('path');

/**
 * Small server config
 */

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// Tasks API
const tasks = require('./routes/taskRoutes')
app.use('/', tasks);

module.exports = app;