var module = angular.module('directives.multiSelector', []);

module.directive('multiSelector', ['$compile', '$rootScope', function($compile, $rootScope) {
  return {
    restrict: 'E',
    template: '<div class="multi-selector-widget">\
               <div ng-click="visible=!visible" ng-class="[\'filter-select\', selected.length >=1 && \'active\' ]">\
                  <span ng-bind="titleLabel"></span>\
                  <i ng-class="visible ? \'icon-angle-up\' : \'icon-angle-down\'"></i>\
               </div>\
                  <div ng-show="visible" class="options" ng-transclude></div>\
               </div>',
    replace: false,
    transclude: true,
    scope: {
      bind: '=',
      model: '='
    },
    link: function($scope, $element) {
      $scope.selected = [];
      $scope.visible = false;
      $scope.$watchCollection('model', function(newValue) {
          $scope.selected = selectedValues(newValue);
          if ($scope.selected.length == 1) {
              $scope.titleLabel = "1 category";
          } else if ($scope.selected.length > 1) {
              $scope.titleLabel = $scope.selected.length + " categories";
          } else {
              $scope.titleLabel = "Any";
          };
      });
    }
  };
}]);

module.directive('checkOption', ['$compile', '$rootScope', function($compile, $rootScope) {
  return {
    restrict: 'E',
      template: '<div class="check-option">\
          <input id="{{value}}-id" type="checkbox" name="{{name}}" value="{{value}}" ng-model="model" />\
          <label for="{{value}}-id" ng-transclude></label></div>',
    replace: true,
    transclude: true,
    scope: {
      model: '=',
      value: '@'
    }
  };
}]);
