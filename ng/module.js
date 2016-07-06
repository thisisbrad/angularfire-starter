angular.module('fireApp', ['ngRoute', 'firebase'])
.config(function() {
  var config = {
    apiKey: "AIzaSyDrVZ7F8K6qXIdPGdO8mQQRZad5VBcnCXo",               // Your Firebase API key
    authDomain: "fireapp-3c92b.firebaseapp.com",       // Your Firebase Auth domain ("*.firebaseapp.com")
    databaseURL: "https://fireapp-3c92b.firebaseio.com",     // Your Firebase Database URL ("https://*.firebaseio.com")
    storageBucket: "fireapp-3c92b.appspot.com"  // Your Firebase Storage bucket ("*.appspot.com")
  };
  firebase.initializeApp(config);
});