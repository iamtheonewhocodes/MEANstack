'use strict';

describe('Component: HomeComponent', function () {

  // load the controller's module
  beforeEach(module('finalProject2App'));

  var HomeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    HomeComponent = $componentController('home', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
