'use strict';

(function(){

  class TheatresComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/theatresendpoints')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });


    }

    addThing() {alert("successss");
      if (this.TheatreName&&this.TheatreLocation&&this.city) {
        this.$http.post('/api/theatresendpoints', {
          TheatreName: this.TheatreName,
          TheatreLocation: this.TheatreLocation,
          city: this.city

        });
      }
    }
z
    deleteThing(thing) {
      this.$http.delete('/api/theatresendpoints/' + thing._id);
    }
  }


angular.module('finalProject2App')
  .component('theatres', {
    templateUrl: 'app/theatres/theatres.html',
    controller: TheatresComponent,
    controllerAs: 'theatresCtrl'
  });

})();
