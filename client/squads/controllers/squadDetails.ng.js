angular.module('homeladsecurity').controller('SquadDetailsCtrl', function ($scope, $stateParams, $meteor) {
  $scope.squad = $meteor.object(Squads, $stateParams.squadId);
  
  console.log($scope.squad);
  
  $scope.enlistedOrMember = ($scope.squad.enlistings || []).some(function (ele) {
    return ele.userid === $scope.currentUser._id;
  }) || ($scope.squad.members || []).some(function (ele) {
    return ele.userid === $scope.currentUser._id;
  });
  
  console.log('enlistedOrMember = ' + $scope.enlistedOrMember);
  
  $scope.enlistToSquad = function () {
    console.log('Client: Enlisting user to squad ' + $scope.squad._id);
    $meteor.call('enlistToSquad', $scope.squad._id);
  };
  
  $scope.leaveSquad = function () {
    console.log('Client: Leaving squad ' + $scope.squad._id);
    $meteor.call('leaveSquad', $scope.squad._id);
  };
});
