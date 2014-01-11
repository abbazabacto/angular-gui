'use strict';

angular.module('toolApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
      })
      .when('/thomas', {
        templateUrl: 'views/thomas.html',
        controller: 'ThomasCtrl'
      })
      .when('/carousel/', {
        templateUrl: 'views/carousel.html',
        controller: 'CarouselCtrl',
        reloadOnSearch: false
      })
      .when('/carousel/:action', {
        templateUrl: 'views/carousel.html',
        controller: 'CarouselCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
