'use strict';

angular.module('toolApp')
  .directive('iframe', [function () {
    return {
      restrict: 'E',
      controller: ['$scope', '$attrs', '$element', function ($scope, $attrs, $element){
        $element[0].src = 'http://localhost:9000/#/' + $scope.component.title + '/' + ($scope.component.settings ? $scope.component.settings + '&' : '?') + 'bust' + Math.ceil(Math.random()*1000);
      }]
    };
  }]);

