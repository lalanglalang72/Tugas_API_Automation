const request = require('supertest');
const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const expect = chai.expect;
chai.use(chaiJsonSchema);

const baseUrl = 'https://reqres.in/api';

const updateUserSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    job: { type: 'string' },
    updatedAt: { type: 'string' }
  },
  required: ['name', 'job', 'updatedAt']
};

describe('PUT /users/2', () => {
  it('should update user details', (done) => {
    const user = {
      name: 'morpheus',
      job: 'zion resident'
    };

    request(baseUrl)
      .put('/users/2')
      .send(user)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.jsonSchema(updateUserSchema);
        done();
      });
  });
});
