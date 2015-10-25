angular.module('homeladsecurity').filter('enlistedOrMember', function () {
  return function (squad, userid) {
    if (!userid)
      return false;
 
    return (squad.enlistings && squad.enlistings.some(function (ele) { return ele.userid === userid; })) ||
           (squad.members && squad.members.some(function (ele) { return ele.userid === userid; }));
  }
});

angular.module('homeladsecurity').filter('member', function () {
  return function (squad, userid) {
    if (!userid)
      return false;
 
    return squad.members && squad.members.some(function (ele) { return ele.userid === userid; });
  }
});

angular.module('homeladsecurity').filter('enlisted', function () {
  return function (squad, userid) {
    if (!userid)
      return false;
 
    return squad.enlistings && squad.enlistings.some(function (ele) { return ele.userid === userid; });
  }
});