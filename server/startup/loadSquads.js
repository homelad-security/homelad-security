Meteor.startup(function () {
  if (Squads.find().count() === 0) {
    var squads = [
      {'name': 'Alpha'},
      {'name': 'Beta'},
      {'name': 'Gamma'}
    ];
    for (var i = 0; i < squads.length; i++)
      Squads.insert({name: squads[i].name, description: squads[i].description});
  }
});
