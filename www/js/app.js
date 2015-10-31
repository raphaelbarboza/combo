// Ionic Combo App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'combo' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'combo.services' is found in services.js
// 'combo.controllers' is found in controllers.js
angular.module('combo', ['ionic', 'combo.controllers', 'combo.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    // Parse init
    Parse.initialize("lKOp7Pj43Qtj4OIsWjWLC8lFBGoNfGdyaDASCS5b", "CqcKwC9IyQPGtfD70dCcGBmxmr2cBULVEHo5WnSo");

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.venues', {
      url: '/venues',
      views: {
        'tab-venues': {
          templateUrl: 'templates/tab-venues.html',
          controller: 'VenuesCtrl'
        }
      }
    })
    .state('tab.venue-detail', {
      url: '/venues/:venueId',
      views: {
        'tab-venues': {
          templateUrl: 'templates/venue-detail.html',
          controller: 'VenueDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })


  .state('tab.signup', {
    url: '/signup',
    views: {
      'tab-home': {
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
