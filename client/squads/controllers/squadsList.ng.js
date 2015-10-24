angular.module("homeladsecurity").controller("SquadsListCtrl", function ($scope, $meteor) {
  $scope.squads = $meteor.collection(Squads);

  $scope.remove = function (squad) {
    $scope.squads.splice($scope.squads.indexOf(squad), 1);
  };

  $scope.removeAll = function () {
    $scope.squads.remove();
  };
});