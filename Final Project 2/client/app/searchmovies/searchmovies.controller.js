'use strict';

(function(){
  class SearchmoviesComponent {
    constructor($http, $scope, socket) {
      this.$http =$http;
      this.socket = socket;
      this.MovieData;
      this.Movies=[];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit(){
      this.$http.get('/api/searchmoviesendpoints')
        .then(response => {
          this.Movies = response.data;
          this.socket.syncUpdates('searchmoviesendpoints', this.Movies);
          // sessionStorage.setItem('mysessionObj',"mysessionValue");
          var Pranav="hello";


        });
      }

    findMovie(){

      this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=d4c649935ca27415d0d0cc51047e1ca4&query='+this.MovieName+'&year='+this.Year).then(response => {
          alert(response.data.results[0].id);

          var MovieID = response.data.results[0].id;
          this.$http.get('https://api.themoviedb.org/3/movie/'+MovieID+'?api_key=d4c649935ca27415d0d0cc51047e1ca4').then(movieres => {
            this.MovieData = movieres.data;
            console.log(this.MovieData);
          });
     });
    }

    AddMovie() {
      alert(" added successss");
      //  if (this.MovieName&&this.Year) {
        this.$http.post('/api/searchmoviesendpoints', {
          poster_path: this.MovieData.poster_path,
          original_title: this.MovieData.original_title,
          release_date:this.MovieData.release_date,
          runtime: this.MovieData.runtime


        });
      }
        deleteThing(Movies) {
          this.$http.delete('/api/searchmoviesendpoints/' + Movies._id);



        }
    //  }
  }

angular.module('finalProject2App')
  .component('searchmovies', {
    templateUrl: 'app/searchmovies/searchmovies.html',
    controller: SearchmoviesComponent,
    controllerAs: 'searchmoviesCtrl'
  });

})();
