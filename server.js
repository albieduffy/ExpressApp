const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

let reversed;

server.get('/', (req, res) => res.send('Hello, client!'))

// Reverse index route
server.get('/reverse', (req, res) => res.send('Hello'))

server.post('/reverse', (req, res) => {
    let newMessage = JSON.parse(req.body);
    console.log(newMessage);
    reversed = newMessage.split('').reverse().join('');
    res.send(JSON.stringify(reversed));

})

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))
