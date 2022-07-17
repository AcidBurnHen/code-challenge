const express = require('express');
const auth = require('./middleware/authorization');
const encode = require('./encode');
const app = express();

const login = require('./login');

app.use(express.json());

/* I am making sure that the user is authenticated by including the middleware function before the encode function */
app.post('/encode', auth, encode);

app.post('/login', login);

module.exports = app;
