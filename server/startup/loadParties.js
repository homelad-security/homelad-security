Meteor.startup(function () {
  if (Squads.find().count() === 0) {
    var squads = [
      {'name': 'Dubstep-Free Zone'},
      {'name': 'All dubstep all the time'},
      {'name': 'Savage lounging'}
    ];
    for (var i = 0; i < squads.length; i++)
      Squads.insert({name: squads[i].name, description: squads[i].description});
  }
});
