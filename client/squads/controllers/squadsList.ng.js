angular.module('homeladsecurity').controller('SquadsListCtrl', function ($scope, $meteor) {
  
  var squadNames = ["Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliet",
                    "Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor",
                    "Whisky","X-ray","Yankee","Zulu"];
  
  $scope.squads = $meteor.collection(Squads);
  
  $scope.availableSquadName = squadNames.filter(function (name) {
    return !$scope.squads.some(function (squad) {
      return squad.name === name;
    });
  })[0];
  
  $scope.newSquad = { name: $scope.availableSquadName };
  
  $scope.addSquad = function (newSquad) {
    console.log(newSquad);
    $meteor.call('addSquad', newSquad);
  };

  $scope.removeSquad = function (squad) {
    $meteor.call('removeSquad', squad._id);
  };

  $scope.removeAllSquads = function () {
    $meteor.call('removeAllSquads');
  };
});