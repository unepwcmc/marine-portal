var module = angular.module("MarineApp", ['directives.map', 'resources.mapSearch']);

module.controller('SearchCtrl', ['$scope', 'MapSearch', function($scope, MapSearch) {
  $scope.layers = [];

  MapSearch.query({sort_by: 'creation_date'}).then(function(result) {
    $scope.layers = result;
  });

  $scope.$watch('layers', function(layers) {
    for (var i=0; i < $scope.layers.length ; ++i) {
      var layer = $scope.layers[i];
      $scope.$emit('layerLoaded', layer.title, layer);
    }
  });

  $scope.toggleLayerVisibility = function(title) {
    $scope.$emit('toggleLayer', title);
  };
}]);
