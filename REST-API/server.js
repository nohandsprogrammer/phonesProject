const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// JSON handling data Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});