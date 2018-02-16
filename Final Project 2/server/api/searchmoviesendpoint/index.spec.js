'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var searchmoviesendpointCtrlStub = {
  index: 'searchmoviesendpointCtrl.index',
  show: 'searchmoviesendpointCtrl.show',
  create: 'searchmoviesendpointCtrl.create',
  update: 'searchmoviesendpointCtrl.update',
  destroy: 'searchmoviesendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var searchmoviesendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './searchmoviesendpoint.controller': searchmoviesendpointCtrlStub
});

describe('Searchmoviesendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(searchmoviesendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/searchmoviesendpoints', function() {

    it('should route to searchmoviesendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'searchmoviesendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/searchmoviesendpoints/:id', function() {

    it('should route to searchmoviesendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'searchmoviesendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/searchmoviesendpoints', function() {

    it('should route to searchmoviesendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'searchmoviesendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/searchmoviesendpoints/:id', function() {

    it('should route to searchmoviesendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'searchmoviesendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/searchmoviesendpoints/:id', function() {

    it('should route to searchmoviesendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'searchmoviesendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/searchmoviesendpoints/:id', function() {

    it('should route to searchmoviesendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'searchmoviesendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
