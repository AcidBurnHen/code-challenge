const app = require('../app.js');
const request = require('supertest');

describe('Encode endpoint', () => {
  /* If this route gets a POST request before user is signed in, the middleware function will return a 401 status code */
  it('returns status code 401 when user is not logged in', async () => {
    const res = await request(app).post('/encode');

    expect(res.statusCode).toEqual(401);
  });

  /* If the user was logged in the route would return status code 200 and an encoded string */
  it('returns encoded string and status code 200', async () => {
    const res = await request(app)
      .post('/encode')
      /* Setting the authorization key will simulate a logged in user for the purpose of the test */
      .set('authorization', 'xyz0987654321')
      /* Sending mock data for the purpose of testing the encoded string response */
      .send({ input: 'Testing' });

    /* Testing to see if the encoded string matches the desired response of alphabetical and numeric characters */
    expect(res.body.encodedString).toMatch(/^[a-zA-Z0-9]*$/);
    expect(res.statusCode).toEqual(200);
  });
});
