const request = require('supertest');
const app = require('../app');

describe('POST /greet', () => {
    it('should greet the user', async () => {
        const response = await request(app)
            .post('/greet')
            .send({ name: 'TestUser' });

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, TestUser');
    });
});

describe('GET /secret', () => {
    it('should return the secret', async () => {
        const response = await request(app).get('/secret');

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('SuperSecretPassword123');
    });
});