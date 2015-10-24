Squads = new Mongo.Collection("squads");

Squads.allow({
  insert: function (userId, squad) {
    return userId && squad.owner === userId;
  },
  update: function (userId, squad, fields, modifier) {
    return userId && squad.owner === userId;
  },
  remove: function (userId, squad) {
    return userId && squad.owner === userId;
  }
});