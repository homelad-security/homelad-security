Meteor.startup(function () {
  if (Squads.find().count() === 0) {
    var squads = [
      {'name': 'Alpha', 'description': 'East End LADs'},
      {'name': 'Beta', 'description': 'The safety LADS'},
      {'name': 'Gamma', 'description': 'LADp'}
    ];
    for (var i = 0; i < squads.length; i++)
      Squads.insert(squads[i]);
  }
});
