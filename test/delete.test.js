const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const baseUrl = 'https://reqres.in/api';

describe('DELETE /users/2', () => {
  it('should delete the user with status 204', (done) => {
    request(baseUrl)
      .delete('/users/2')
      .expect(204, done);
  });
});
