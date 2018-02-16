'use strict';

angular.module('finalProject2App.auth', ['finalProject2App.constants', 'finalProject2App.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
