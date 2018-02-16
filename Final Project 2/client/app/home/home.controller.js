'use strict';

(function(){

class HomeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('finalProject2App')
  .component('home', {
    templateUrl: 'app/home/home.html',
    controller: HomeComponent,
    controllerAs: 'homeCtrl'
  });

})();
