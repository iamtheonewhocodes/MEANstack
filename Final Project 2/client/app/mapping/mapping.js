'use strict';

angular.module('finalProject2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mapping', {
        template: '<mapping></mapping>',
        authenticate:'admin'
      });
  });
