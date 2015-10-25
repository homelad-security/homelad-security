angular.module('homeladsecurity').filter('squadWork', function () {
  return function (works, squadid) {
    return works.filter(function (work) {
      return work.squad._id === squadid;
    });
  }
});