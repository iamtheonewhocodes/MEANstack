'use strict';

angular.module('finalProject2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theatres', {
        template: '<theatres></theatres>',
        authenticate:'admin'
      });
  });
