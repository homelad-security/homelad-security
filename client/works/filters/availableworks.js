angular.module('homeladsecurity').filter('availableWork', function () {
  return function (works) {
    return works.filter(function (work) {
      return work.squad === undefined;
    });
  }
});