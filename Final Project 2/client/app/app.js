'use strict';

angular.module('finalProject2App', ['finalProject2App.auth', 'finalProject2App.admin',
    'finalProject2App.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'btford.socket-io', 'validation.match','ui.filters'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/searchmovies',{
      templateUrl:'app/searchmovies/searchmovies.html',
      controller:'searchmovies.controller',
      access:{restricted :false}
    })

    .when('/theatres',{
      templateUrl:'app/theatres/theatres.html',
      controller:'theatres.controller',
      access:{restricted:true}
})
      .when('/seatbooking',{
        templateUrl:'app/seatbooking/seatbooking.html',
        controller:'seatbooking.controller',
        access:{restricted:true}
})

        .when('/main',{
          templateUrl:'app/main/main.html',
          controller:'main.controller',
          access:{restricted:false}
        })
        .when('/user',{
          templateUrl:'app/user/user.html',
          controller:'user.controller',
          access:{restricted:false}
        })
        .when('/creditcard',{
          templateUrl:'app/creditcard/creditcard.html',
          controller:'creditcard.controller',
          access:{restricted :false}
        })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  });
