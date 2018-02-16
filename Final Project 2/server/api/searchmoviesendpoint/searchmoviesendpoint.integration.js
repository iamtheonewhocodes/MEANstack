'use strict';

var app = require('../..');
import request from 'supertest';

var newSearchmoviesendpoint;

describe('Searchmoviesendpoint API:', function() {

  describe('GET /api/searchmoviesendpoints', function() {
    var searchmoviesendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/searchmoviesendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          searchmoviesendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(searchmoviesendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/searchmoviesendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/searchmoviesendpoints')
        .send({
          name: 'New Searchmoviesendpoint',
          info: 'This is the brand new searchmoviesendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSearchmoviesendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created searchmoviesendpoint', function() {
      expect(newSearchmoviesendpoint.name).to.equal('New Searchmoviesendpoint');
      expect(newSearchmoviesendpoint.info).to.equal('This is the brand new searchmoviesendpoint!!!');
    });

  });

  describe('GET /api/searchmoviesendpoints/:id', function() {
    var searchmoviesendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/searchmoviesendpoints/' + newSearchmoviesendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          searchmoviesendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      searchmoviesendpoint = {};
    });

    it('should respond with the requested searchmoviesendpoint', function() {
      expect(searchmoviesendpoint.name).to.equal('New Searchmoviesendpoint');
      expect(searchmoviesendpoint.info).to.equal('This is the brand new searchmoviesendpoint!!!');
    });

  });

  describe('PUT /api/searchmoviesendpoints/:id', function() {
    var updatedSearchmoviesendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/searchmoviesendpoints/' + newSearchmoviesendpoint._id)
        .send({
          name: 'Updated Searchmoviesendpoint',
          info: 'This is the updated searchmoviesendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSearchmoviesendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSearchmoviesendpoint = {};
    });

    it('should respond with the updated searchmoviesendpoint', function() {
      expect(updatedSearchmoviesendpoint.name).to.equal('Updated Searchmoviesendpoint');
      expect(updatedSearchmoviesendpoint.info).to.equal('This is the updated searchmoviesendpoint!!!');
    });

  });

  describe('DELETE /api/searchmoviesendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/searchmoviesendpoints/' + newSearchmoviesendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when searchmoviesendpoint does not exist', function(done) {
      request(app)
        .delete('/api/searchmoviesendpoints/' + newSearchmoviesendpoint._id)
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
