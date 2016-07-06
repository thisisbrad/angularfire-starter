angular.module('fireApp')
.controller('HomeCtrl', function($scope, $firebaseArray) {
	var ref = firebase.database().ref()
	var postsRef = ref.child("posts")
  var posts = $firebaseArray(postsRef)

  // add an item
  $scope.submitPost = function () {
  	posts.$add($scope.newPost).then(
  		console.log("added to Firebase")
  	)
  }

  // remove an item
  $scope.removePost = function (post) {
		posts.$remove(post).then(function(ref) {
		  ref.key === post.$id // true
		  console.log("removed " + ref.key + " from Firebase")
		})
  }

  // populate post data into form to edit
  $scope.editPost = function (post) {
  	$scope.newPost = angular.copy(post)
  	$scope.editing = !$scope.editing
  }

  //updates the post value in Firebase
  $scope.updatePost = function () {
  	var node = posts.$indexFor($scope.newPost.$id)
  	posts[node] = $scope.newPost
		posts.$save(node).then(function(ref) {
		  ref.key === posts[node].$id // true
		  $scope.editing = !$scope.editing
		  $scope.newPost = {}
		})
  }

  // make the list available in the DOM
  $scope.posts = posts
})