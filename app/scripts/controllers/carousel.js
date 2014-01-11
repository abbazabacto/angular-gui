'use strict';

angular.module('toolApp')
  .controller('CarouselCtrl', ['$scope', function ($scope) {
    $scope.slides = [
      {
        title: 'First Slide',
        img: 'http://lorempixel.com/610/200/sports/?0'
      },
      {
        title: 'Second Slide',
        img: 'http://lorempixel.com/610/200/sports/?1'
      },
      {
        title: 'Third Slide',
        img: 'http://lorempixel.com/610/200/sports/?2'
      }
    ];
  }]);
