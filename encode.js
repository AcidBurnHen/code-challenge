const encoder = require('./utils/encoder');

module.exports = function encode(req, res) {
  const { text } = req.body;

  /* The route is supposed to only accept a string */
  if (typeof text !== 'string') {
    res.status(400).send('The encoder only accepts strings/text');
  }

  /* A regular expression to see if the input only has alphabetical characters */
  if (!/^[a-zA-Z\s.,]+$/.test(text)) {
    res.status(400).send('The input must only contain alphabetic characters');
  }

  const encode = encoder(text);

  res.send({ encodedString: encode });
};
