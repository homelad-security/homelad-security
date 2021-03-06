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
      'members': [{ 'userid': Meteor.userId(), 'username': Meteor.user().profile.name, 'xp': 0 }]
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
    
    var foundSquad = Squads.findOne({
      '_id': squadId
    });
    
    if (!foundSquad.members || foundSquad.members.length === 0) {
      Squads.update({ '_id': squadId }, {
        $addToSet: {
          'members': {
            'userid': Meteor.userId(),
            'username': Meteor.user().profile.name,
            'xp': 0
          }
        }
      });
    } else {
      Squads.update({ '_id': squadId }, {
        $addToSet: {
          'enlistings': {
            'userid': Meteor.userId(),
            'username': Meteor.user().profile.name
          }
        }
      });
    }
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
      'creator': { userid: Meteor.userId(), username: Meteor.user().profile.name },
      'created': (new Date).getTime()
    });
  },
  acceptWork: function (work, squad) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Works.update({
      '_id': work._id
    },{
      $set: {
        'squad': {
          '_id': squad._id,
          'name': squad.name
        }
      }
    });
    
    Squads.update({
      '_id': squad._id
    },{
      $addToSet: {
        'works': {
          '_id': work._id,
          'title': work.title
        }
      }
    });
  },
  completeWork: function (work, squadid) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    var foundWork = Works.findOne({
      '_id': work._id
    });
    
    var foundSquad = Squads.findOne({
      '_id': squadid
    });
    
    foundSquad.xp += foundWork.bounty;
    if (foundSquad.members) {
      var bountyShare = Math.floor(foundWork.bounty / foundSquad.members.length);
      console.log(bountyShare);
      foundSquad.members.forEach(function (member) {
        member.xp += bountyShare;
      });
    }
    
    Squads.update({
      '_id': squadid
    }, foundSquad);
    
    Works.remove({ '_id': work._id });
  }
});