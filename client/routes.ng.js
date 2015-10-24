angular.module("homeladsecurity").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'client/views/home.ng.html',
      controller: 'HomeCtrl'
    })
    .state('squads', {
      url: '/squads',
      templateUrl: 'client/squads/views/squads-list.ng.html',
      controller: 'SquadsListCtrl'
    })
    .state('squadDetails', {
      url: '/squads/:squadId',
      templateUrl: 'client/squads/views/squad-details.ng.html',
      controller: 'SquadDetailsCtrl'
    });

  $urlRouterProvider.otherwise("/squads");
});