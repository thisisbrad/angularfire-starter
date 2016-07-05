angular.module('fireApp')
.controller('HomeCtrl', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
	var ref = firebase.database().ref();
	var postsRef = ref.child("posts");
  var posts = $firebaseArray(postsRef);

  // add an item
  $scope.submitPost = function () {
  	posts.$add($scope.newPost).then(
  		console.log("added to Firebase")
  	);
  }
  // remove an item
  // list.$remove(2).then(...);

  // make the list available in the DOM
  $scope.posts = posts;
	console.log($scope.posts)
}])