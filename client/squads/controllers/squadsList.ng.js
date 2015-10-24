angular.module('homeladsecurity').controller('SquadsListCtrl', function ($scope, $meteor) {
  $scope.squads = $meteor.collection(Squads);
  
  $scope.addSquad = function (newSquad) {
    $meteor.call('addSquad', newSquad);
  };

  $scope.removeSquad = function (squad) {
    $meteor.call('removeSquad', squad._id);
  };

  $scope.removeAllSquads = function () {
    $meteor.call('removeAllSquads');
  };
});