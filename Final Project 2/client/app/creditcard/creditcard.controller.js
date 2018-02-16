'use strict';

(function(){

class CreditcardComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('finalProject2App')
  .component('creditcard', {
    templateUrl: 'app/creditcard/creditcard.html',
    controller: CreditcardComponent,
    controllerAs: 'creditcardCtrl'
  });

})();
