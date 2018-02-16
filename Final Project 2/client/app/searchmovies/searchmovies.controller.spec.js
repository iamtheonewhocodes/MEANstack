'use strict';

describe('Component: SearchmoviesComponent', function () {

  // load the controller's module
  beforeEach(module('finalProject2App'));

  var SearchmoviesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SearchmoviesComponent = $componentController('searchmovies', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
