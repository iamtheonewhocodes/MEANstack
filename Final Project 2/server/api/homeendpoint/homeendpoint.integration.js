'use strict';

var app = require('../..');
import request from 'supertest';

var newHomeendpoint;

describe('Homeendpoint API:', function() {

  describe('GET /api/homeendpoints', function() {
    var homeendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/homeendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          homeendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(homeendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/homeendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/homeendpoints')
        .send({
          name: 'New Homeendpoint',
          info: 'This is the brand new homeendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newHomeendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created homeendpoint', function() {
      expect(newHomeendpoint.name).to.equal('New Homeendpoint');
      expect(newHomeendpoint.info).to.equal('This is the brand new homeendpoint!!!');
    });

  });

  describe('GET /api/homeendpoints/:id', function() {
    var homeendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/homeendpoints/' + newHomeendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          homeendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      homeendpoint = {};
    });

    it('should respond with the requested homeendpoint', function() {
      expect(homeendpoint.name).to.equal('New Homeendpoint');
      expect(homeendpoint.info).to.equal('This is the brand new homeendpoint!!!');
    });

  });

  describe('PUT /api/homeendpoints/:id', function() {
    var updatedHomeendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/homeendpoints/' + newHomeendpoint._id)
        .send({
          name: 'Updated Homeendpoint',
          info: 'This is the updated homeendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedHomeendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedHomeendpoint = {};
    });

    it('should respond with the updated homeendpoint', function() {
      expect(updatedHomeendpoint.name).to.equal('Updated Homeendpoint');
      expect(updatedHomeendpoint.info).to.equal('This is the updated homeendpoint!!!');
    });

  });

  describe('DELETE /api/homeendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/homeendpoints/' + newHomeendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when homeendpoint does not exist', function(done) {
      request(app)
        .delete('/api/homeendpoints/' + newHomeendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
