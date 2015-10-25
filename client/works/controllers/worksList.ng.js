angular.module('homeladsecurity').controller('WorksListCtrl', function ($scope, $meteor) {
  
  $scope.works = $meteor.collection(Works);
  
  $scope.workTypes = [{
    id: 1,
    label: 'Painting'
  },{
    id: 2,
    label: 'Cleaning'
  },{
    id: 3,
    label: 'Gardening'
  },{
    id: 4,
    label: 'Company'
  }];
  
  $scope.newWork = { 'type': { name: 'Painting', id: 1 } };
  
  $scope.addWork = function (newWork) {
    newWork.bounty = newWork.type.id * 10;
    $meteor.call('addWork', newWork);
  };

});