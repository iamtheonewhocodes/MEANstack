 'use strict';

(function(){

  class MappingComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket=socket;
      this.Movies = [];
      // this.awesomeThings = [];
      this.mapping =[];

      $scope.$on('$destroy', function(){
        socket.unsyncUpdates('mappingendpoint');
      });

    }
  $onInit(){
    this.$http.get('/api/searchmoviesendpoints')
      .then(response => {
        this.Movies = response.data;
        this.socket.syncUpdates('searchmoviesendpoints', this.Movies);

      });

    this.$http.get('/api/theatresendpoints')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
      this.$http.get('/api/mappingendpoints')
        .then(response => {
          this.mapping = response.data;
          this.socket.syncUpdates('thing', this.mapping);
        });
  }

  AddMapping(){
    alert('Mapping done');
    this.$http.post('/api/mappingendpoints',{
      mydate: this.mydate,
      time: this.time,
      //variable names have to be same as model,js and html
      original_title: this.original_title,
      year: this.year,
      city: this.city,
      TheatreName: this.TheatreName,
      TheatreLocation:this.TheatreLocation
    });
  }


  deleteThing(mapping) {

    this.$http.delete(' /api/mappingendpoints/' + mapping._id);

  }
}

angular.module('finalProject2App')
  .component('mapping', {
    templateUrl: 'app/mapping/mapping.html',
    controller: MappingComponent,
    controllerAs: 'mappingCtrl'
  });

})();
