Meteor.startup(function () {
  if (Squads.find().count() === 0) {
    var squads = [
      {'name': 'Alpha', 'description': 'East End LADs', xp: 0},
      {'name': 'Beta', 'description': 'The safety LADS', xp: 0},
      {'name': 'Gamma', 'description': 'LADp', xp: 0}
    ];
    for (var i = 0; i < squads.length; i++)
      Squads.insert(squads[i]);
  }
});
