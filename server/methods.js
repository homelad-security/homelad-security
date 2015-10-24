Meteor.methods({
  addSquad: function (squad) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Squads.insert({
      name: squad.name,
      creator: Meteor.userId()
    });
  },
  removeSquad: function (squadId) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Squads.remove(squadId);
  },
  removeAllSquads: function () {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Squads.remove({});
  }
});