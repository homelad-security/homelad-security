angular.module("homeladsecurity").controller("SquadDetailsCtrl", function ($scope, $stateParams, $meteor) {
  $scope.squad = $meteor.object(Squads, $stateParams.squadId);
});
