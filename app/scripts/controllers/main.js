'use strict';

angular.module('toolApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.components = [
      {
        title: 'carousel',
        settings: '?interval=3000'
        //settings: '?interval=3000&slides=[{%22title%22:%22Dit%20is%20een%20voorbeeld%22,%22img%22:%22http:%2F%2Florempixel.com%2F800%2F200%2Fsports%2F%3F0%22},{%22title%22:%22AngularJS%22,%22img%22:%22http:%2F%2Florempixel.com%2F800%2F200%2Fsports%2F%3F1%22},{%22title%22:%22Karma%22,%22img%22:%22http:%2F%2Florempixel.com%2F800%2F200%2Fsports%2F%3F2%22}]'
      }
    ];
  }]);
