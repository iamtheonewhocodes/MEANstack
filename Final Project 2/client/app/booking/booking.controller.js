'use strict';

(function(){

class BookingComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('finalProject2App')
  .component('booking', {
    templateUrl: 'app/booking/booking.html',
    controller: BookingComponent,
    controllerAs: 'bookingCtrl'
  });

})();
