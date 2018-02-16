'use strict';

(function(){

class UserComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.mapping =[];
    this.bookingdetails =[];


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('bookingdetails');
    });
}

$onInit(){
  //get the movie data
  // this.$http.get('/api/mappinge')
  //   .then(response => {
  //     this.MovieData = response.data;
  //     this.socket.syncUpdates('thing', this.MovieData);
  //   });



      this.$http.get('/api/mappingendpoints')
        .then(response => {
          this.mapping = response.data;
          this.socket.syncUpdates('thing', this.mapping);
        });
      this.$http.get('/api/bookingendpoints')
        .then(response => {
          this.bookingdetails = response.data;
          this.socket.syncUpdates('thing', this.bookingdetails);
        });
    // var k = sessionStorage.getItem('MovieData');
}

saveValue(){
  alert("save value working");
  this.$http.post('/api/bookingendpoints',{
    date: this.mydate,
    time: this.time,
    original_title: this.original_title,
    year: this.year,
    city: this.city,
    mytheatre: this.mytheatre
  });
  }




    }

angular.module('finalProject2App')
  .component('user', {
    templateUrl: 'app/user/user.html',
    controller: UserComponent,
    controllerAs: 'userCtrl'
  });

})();
