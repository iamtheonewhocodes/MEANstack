'use strict';

angular.module('finalProject2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/creditcard', {
        template: '<creditcard></creditcard>'
      });
  });
