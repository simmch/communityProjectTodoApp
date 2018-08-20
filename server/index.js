require('dotenv').config();
const server = require('./server')

const port = process.env.PORT || 3031;

server.listen(port, ()=> {console.log(`Server now listening on Port: ${port}`)})