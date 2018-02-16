'use strict';

angular.module('finalProject2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user', {
        template: '<user></user>'
      });
  });
