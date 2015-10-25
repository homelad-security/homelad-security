angular.module('homeladsecurity').filter('userSquads', function () {
  return function (squads, userid) {
    if (!userid)
      return false;
 
    return squads.filter(function (squad) {
      return squad.creator === userid || squad.members.some(function (member) {
        return member.userid === userid;
      });
    });
  }
});