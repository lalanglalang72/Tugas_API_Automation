const request = require('supertest');
const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const expect = chai.expect;
chai.use(chaiJsonSchema);

const baseUrl = 'https://reqres.in/api';

const createUserSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    job: { type: 'string' },
    id: { type: 'string' },
    createdAt: { type: 'string' }
  },
  required: ['name', 'job', 'id', 'createdAt']
};

describe('POST /users', () => {
  it('should create a new user', (done) => {
    const user = {
      name: 'morpheus',
      job: 'leader'
    };

    request(baseUrl)
      .post('/users')
      .send(user)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.jsonSchema(createUserSchema);
        done();
      });
  });
});
