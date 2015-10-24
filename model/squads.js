Squads = new Mongo.Collection("squads");

// Squads.allow({
//   insert: function (userId, squad) {
//     console.log('insert?');
//     return userId && squad.owner === userId;
//   },
//   update: function (userId, squad, fields, modifier) {
//     console.log('update?');
//     return userId && squad.owner === userId;
//   },
//   remove: function (userId, squad) {
//     console.log('REMOVE?');
//     return userId && squad.owner === userId;
//   }
// });