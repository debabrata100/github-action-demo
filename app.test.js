const request = require('supertest');
const app = require('./app'); // Assuming app.js exports the app instance for testing

describe('GET /', () => {
  it('should respond with Hello World! and 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
