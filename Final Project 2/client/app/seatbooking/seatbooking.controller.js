'use strict';

(function(){

class SeatbookingComponent {
  constructor() {
    this.message = 'Hello';
  //   var SeatNo=[];
  //   // $(document).ready (function() {
  //   //   alert("hello");
  //   //   $('.seat').click(function(){
  //   //     $(this).toggleClass('seatselect');
  //   //     var seatid=$(this).attr('id');
  //   //     SeatNo.push(seatid);
  //   //     alert(SeatNo);
  //     });
  //   });
  }
}

angular.module('finalProject2App')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl'
  });

})();
