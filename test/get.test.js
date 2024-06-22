const request = require('supertest');
const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const expect = chai.expect;
chai.use(chaiJsonSchema);

const baseUrl = 'https://reqres.in/api';

const userSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        avatar: { type: 'string' }
      },
      required: ['id', 'email', 'first_name', 'last_name', 'avatar']
    }
  },
  required: ['data']
};

describe('GET /users/2', () => {
  it('should return user details with status 200', (done) => {
    request(baseUrl)
      .get('/users/2')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.jsonSchema(userSchema);
        done();
      });
  });
});
