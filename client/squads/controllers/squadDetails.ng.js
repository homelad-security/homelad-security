angular.module('homeladsecurity').controller('SquadDetailsCtrl', function ($scope, $stateParams, $meteor) {
  $scope.squad = $meteor.object(Squads, $stateParams.squadId);
  $scope.works = $meteor.collection(Works);
  
  $scope.enlistedOrMember = ($scope.squad.enlistings || []).some(function (ele) {
    return ele.userid === $scope.currentUser._id;
  }) || ($scope.squad.members || []).some(function (ele) {
    return ele.userid === $scope.currentUser._id;
  });
  
  $scope.enlistToSquad = function () {
    $meteor.call('enlistToSquad', $scope.squad._id);
  };
  
  $scope.leaveSquad = function () {
    $meteor.call('leaveSquad', $scope.squad._id);
  };
  
  $scope.completeWork = function (work) {
    $meteor.call('completeWork', work, $scope.squad._id);
  };
});
