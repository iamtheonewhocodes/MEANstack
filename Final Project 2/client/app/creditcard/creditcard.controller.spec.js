'use strict';

describe('Component: CreditcardComponent', function () {

  // load the controller's module
  beforeEach(module('finalProject2App'));

  var CreditcardComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CreditcardComponent = $componentController('creditcard', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
