const express = require('express');
const auth = require('./middleware/authorization');
const encoded = require('./encoded');
const app = express();

const login = require('./login');

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use(express.json());

/* I am making sure that the user is authenticated by including the middleware function before the encode function */
app.post('/encode', auth, encoded);

app.post('/login', login);

module.exports = app;
