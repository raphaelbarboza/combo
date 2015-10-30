angular.module('combo.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Venues', function() {

  var venues = [];

  venues = queryVenues();
  // var PlaceObject = Parse.Object.extend("Place");
  // var query = new Parse.Query(PlaceObject);
  // query.find().then(function(results) {
  //   if(results.length>0){
  //     for (var i = 0; i < results.length; i++)
  //       venues.push(results[i].toJSON())
  //   }else{
  //     venues = null;
  //   }
  // }, function(error) {
  //   console.error("Error " + error.code + ": " + error.message)
  //   venues = null;
  // })

  return {

    all: function() {
      return venues;
    },

    refresh: function() {
      venues = queryVenues()
      return venues;
    },

    remove: function(venue) {
      venues.splice(venues.indexOf(venue), 1);
    },

    get: function(venueId) {
      for (var i = 0; i < venues.length; i++) {
        if (venues[i].objectId === venueId) {
          return venues[i];
        }
      }
      return null;
    }

  }
});


/**
 * Utilitary to wait miliseconds
 */
function waitTimer(miliseconds) {
  var iMilliSeconds = miliseconds;
  var counter = 0
  var start = new Date().getTime()
  while (counter < iMilliSeconds) {
    counter = (new Date().getTime()) - start
  }
  return
}

function queryVenues() {
  console.log('Init queryVenues');
  var venues = [];
  var PlaceObject = Parse.Object.extend("Place");
  var query = new Parse.Query(PlaceObject);
  query.find().then(function(results) {
    if (results.length > 0) {
      for (var i = 0; i < results.length; i++)
        venues.push(results[i].toJSON())
    } else {
      venues = null;
    }
  }, function(error) {
    console.error("Error " + error.code + ": " + error.message)
    venues = null;
  });
  console.log('Finish queryVenues');
  return venues;
}
