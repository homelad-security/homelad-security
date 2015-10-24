var Squads = new Mongo.Collection('squads');

if (Meteor.isClient) {
  var hls = angular.module('hls', ['angular-meteor', 'ui.router']);
  
  hls.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('squads', {
      url: '/squads',
      templateUrl: 'squads-list.ng.html',
      controller: 'SquadsListCtrl'
    }).state('squadDetails', {
      url: '/squads/:squadId',
      templateUrl: 'squad-details.ng.html',
      controller: 'SquadDetailsCtrl'
    });

    $urlRouterProvider.otherwise("/squads");
  });
  
  hls.controller('SquadsListCtrl', function ($scope, $meteor) {
    $scope.squads = $meteor.collection(Squads);
    
    $scope.add = function (squad) {
      $scope.squads.save(squad);
    };
  
    $scope.remove = function (squad){
      $scope.squads.remove(squad);
    };
  
    $scope.removeAll = function () {
      $scope.squads.remove();
    };
  });
  
  hls.controller("SquadDetailsCtrl", function ($scope, $stateParams) {
    $scope.squadId = $stateParams.squadId;
  });
}