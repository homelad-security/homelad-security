angular.module('homeladsecurity').controller('HomeCtrl', function ($scope, $stateParams, $meteor) {
  $scope.isHome = true;
  $scope.userId = function(){
    return $meteor.userId();
  };
  $scope.squads = $meteor.collection(Squads, {
        'members.userid': $scope.userId
  });
});
