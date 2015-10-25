Meteor.methods({
  addSquad: function (newSquad) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    console.log('addSquad: ' + newSquad);
 
    Squads.insert({
      'name': newSquad.name,
      'description': newSquad.description,
      'creator': Meteor.userId(),
      'members': [{ 'userid': Meteor.userId(), 'username': Meteor.user().profile.name }]
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
  },
  enlistToSquad: function (squadId){
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Squads.update({ '_id': squadId }, {
      $addToSet: {
        'enlistings': {
          'userid': Meteor.userId(),
          'username': Meteor.user().username
        }
      }
    });
  },
  leaveSquad: function (squadId) {
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Squads.update({ '_id': squadId }, {
      $pull: {
        'enlistings': {
          'userid': Meteor.userId()
        },
        'members': {
          'userid': Meteor.userId()
        }
      }
    });
  },
  addWork: function (newWork) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Works.insert({
      'title': newWork.title,
      'description': newWork.description,
      'type': newWork.type,
      'bounty': newWork.bounty,
      'creator': Meteor.userId(),
      'created': (new Date).getTime()
    });
  },
});