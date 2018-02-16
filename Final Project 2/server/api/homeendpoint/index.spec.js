'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var homeendpointCtrlStub = {
  index: 'homeendpointCtrl.index',
  show: 'homeendpointCtrl.show',
  create: 'homeendpointCtrl.create',
  update: 'homeendpointCtrl.update',
  destroy: 'homeendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var homeendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './homeendpoint.controller': homeendpointCtrlStub
});

describe('Homeendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(homeendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/homeendpoints', function() {

    it('should route to homeendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'homeendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/homeendpoints/:id', function() {

    it('should route to homeendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'homeendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/homeendpoints', function() {

    it('should route to homeendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'homeendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/homeendpoints/:id', function() {

    it('should route to homeendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'homeendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/homeendpoints/:id', function() {

    it('should route to homeendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'homeendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/homeendpoints/:id', function() {

    it('should route to homeendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'homeendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
