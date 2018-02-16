'use strict';

angular.module('finalProject2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        template: '<home></home>'
      });
  });
