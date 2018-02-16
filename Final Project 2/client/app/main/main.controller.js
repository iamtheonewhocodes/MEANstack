'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      this.MovieData;
      this.Movies=[];


      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/searchmoviesendpoints')
        .then(response => {
          this.Movies = response.data;
          this.socket.syncUpdates('searchmoviesendpoints', this.Movies);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }
   // sessionStorage.setItem('MovieData',movies.original_title);}

  angular.module('finalProject2App')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'searchmoviesCtrl'
    });
})();
