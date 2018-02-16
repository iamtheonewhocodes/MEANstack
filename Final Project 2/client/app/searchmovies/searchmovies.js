'use strict';

angular.module('finalProject2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/searchmovies', {
        template: '<searchmovies></searchmovies>',
        // authenticate:'admin'
      });
  });
