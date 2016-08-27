angular.module('fireApp')
.controller('DashCtrl', ["$scope", "$firebaseArray", "currentAuth", function($scope, $firebaseArray, currentAuth) {
	var ref = firebase.database().ref()
	var postsRef = ref.child('users/'+ currentAuth.uid + '/posts')
  var posts = $firebaseArray(postsRef)

  // adds a post
  $scope.submitPost = function () {
    posts.$add($scope.newPost).then(
      $scope.newPost = {}
      // console.log('Added to Firebase')
    )
  }

  // removes the post
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
  	var index = posts.$indexFor($scope.newPost.$id)
  	posts[index] = $scope.newPost
		posts.$save(index).then(function(ref) {
		  ref.key === posts[index].$id // true
		  $scope.editing = !$scope.editing
		  $scope.newPost = {}
		})
  }

  // make the list available in the DOM
  $scope.posts = posts
}])