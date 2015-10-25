angular.module("homeladsecurity").run(["$rootScope", "$state", function ($rootScope, $state) {
  
  Accounts.onLogin(function () {
    if ($state.is('login')) {
      $state.go('home');
    }
  });

  Accounts.onLoginFailure(function () {
    $state.go('login');
  });
  
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });
}]);

angular.module("homeladsecurity").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'client/home/views/home.ng.html',
    controller: 'HomeCtrl'
  }).state('login', {
    url: '/login',
    templateUrl: 'client/home/views/login.ng.html',
    controller: 'LoginCtrl'
  }).state('squads', {
    url: '/squads',
    templateUrl: 'client/squads/views/squads-list.ng.html',
    controller: 'SquadsListCtrl',
    resolve: {
      "currentUser": function ($meteor) {
        return $meteor.waitForUser();
      }
    }
  }).state('squadDetails', {
    url: '/squads/:squadId',
    templateUrl: 'client/squads/views/squad-details.ng.html',
    controller: 'SquadDetailsCtrl'
  }).state('user', {
    url: '/user',
    templateUrl: 'client/user/views/user-profile.ng.html',
    controller: 'UserProfileCtrl',
    resolve: {
      "currentUser": function ($meteor) {
        return $meteor.requireUser();
      }
    }
  });

  $urlRouterProvider.otherwise("/");
});