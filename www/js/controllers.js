angular.module('combo.controllers', [])

.controller('DashCtrl', function($scope) {

  //Parse Promo ----------------
  $scope.getPromo = function(location, withinKilometers) {

    console.log(Parse);
    console.log(Parse.Cloud);
    var promos = Parse.Cloud.run('Promo', {}, {
      success: function(result) {
        alert('Success!');
        console.log('Sucesss!!!!!');
        console.log(result);
      },
      error: function(error) {
        alert('Erroraaa: ' + error.code + ' - ' + error.message);
        console.log('Erroraaa: ' + error.code + ' - ' + error.message);
        console.log(error);
      }
    });

  };

  //Save Person ----------------
  $scope.savePerson = function(firstname, lastname) {
    var PeopleObject = Parse.Object.extend("PeopleObject");
    var person = new PeopleObject();
    person.set("firstname", firstname);
    person.set("lastname", lastname);
    person.save(null, {});
  };

  //Get People -------------
  $scope.getPeople = function(params) {
    var PeopleObject = Parse.Object.extend("PeopleObject");
    var query = new Parse.Query(PeopleObject);
    if (params !== undefined) {
      if (params.lastname !== undefined) {
        query.equalTo("lastname", params.lastname);
      }
      if (params.firstname !== undefined) {
        query.equalTo("firstname", params.lastname);
      }
    }
    query.find({
      success: function(results) {
        alert("Successfully retrieved " + results.length + " people!");
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id + ' - ' + object.get("firstname") + " " + object.get("lastname"));
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

/**************************
 * Venues Controller
 *************************/
.controller('VenuesCtrl', function($scope, $timeout, Venues) {
  console.log('VenuesCtrl init');
  console.log($scope);

  // $scope.$on('$ionicView.enter', function(e) {
  console.log('Init Venues.all()');
  $scope.venues = Venues.all();
  // });

  $scope.remove = function(venue) {
    Venues.remove(venue);
  };

  $scope.doRefresh = function() {
    console.log('Refreshing!');
    $timeout(function() {
      $scope.venues = Venues.refresh();
      $scope.$broadcast('scroll.refreshComplete');
    }, 100);

  };

  console.log('VenuesCtrl finish');
})

/**************************
 * Venue Detail Controller
 *************************/
.controller('VenueDetailCtrl', function($scope, $stateParams, Venues) {
  $scope.venue = Venues.get($stateParams.venueId)
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


function waitTimer(miliseconds) {
  console.log('INIT waitTimer(' + miliseconds + ')...' + new Date());
  var iMilliSeconds = miliseconds;
  var counter = 0
  var start = new Date().getTime()
  while (counter < iMilliSeconds) {
    counter = (new Date().getTime()) - start
  }
  console.log('FINISH waitTimer(' + miliseconds + ')...' + new Date());
  return
}
