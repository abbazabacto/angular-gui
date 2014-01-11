'use strict';

angular.module('toolApp')
  .directive('gui', ['$parse', '$location', '$routeParams', '$rootScope', 'Gui', function ($parse, $location, $routeParams, $rootScope, Gui) {
    var maybeJSON = function(str){
      try{ str = JSON.parse(str); } catch (exp){}
      return str;
    };

    return {
      restrict: 'EA',
      controller: ['$scope', '$attrs', function($scope, $attrs){
        //settings to gui service
        var settings = {};

        Gui.destroy();

        Object.keys($attrs).forEach(function(key){
          if(key.charAt(0) === '$' && $attrs[key]) { return; }

          if($routeParams[key]){
            $parse($attrs[key]).assign($scope, maybeJSON($routeParams[key]));
          }

          settings[key] = maybeJSON($parse($attrs[key])($scope)) || '';

          if($routeParams.action === 'gui'){
            Gui.folder(settings, key, function(obj, key, parentKey, parseKey){
              $parse(parseKey).assign(settings, obj[key]);
              $parse($attrs[parentKey]).assign($scope, settings[parentKey]);
              if(!$scope.$$phase){ $scope.$digest(); }
            });
          }

          $scope.$watch($attrs[key], function(newVal){
            if(newVal === undefined) { return; }

            settings[key] = maybeJSON(newVal);

            Gui.update();

            $location.search((function(){
              var key, obj = {};
              for(key in settings){
                if(settings[key]){
                  (obj[key] = angular.isObject(settings[key]) ? JSON.stringify(settings[key]) : settings[key]);
                }
              }
              return obj;
            }()));
          }, true);
        });

        $scope.$watch(function() { return $location.search(); }, function(newVal, oldVal){
          if(newVal && newVal !== oldVal){
            Object.keys(newVal).forEach(function(key){
              newVal[key] = maybeJSON(newVal[key]);

              $parse($attrs[key]).assign($scope, newVal[key]);
              if(!$scope.$$phase){ $scope.$digest(); }
            });
          }
        });

        $scope.$on('$routeChangeStart', function() {
          Gui.destroy();
        });
      }]
    };
  }]);
