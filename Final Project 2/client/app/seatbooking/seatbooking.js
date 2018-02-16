'use strict';

angular.module('finalProject2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/seatbooking', {
        template: '<seatbooking></seatbooking>'
      });
  });
