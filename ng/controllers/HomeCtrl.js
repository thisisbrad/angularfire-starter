angular.module('fireApp')
.controller('HomeCtrl', function($scope, $firebaseArray) {
	var ref = firebase.database().ref()
	var postRef = ref.child('posts')
	var posts = $firebaseArray(postRef)

	$scope.submitPost = function() {
		posts.$add($scope.newPost).then(
			console.log('Added to Firebase')
		)
	}

	$scope.removePost = function(post) {
		posts.$remove(post).then(function(ref) {
			console.log('Removed item key ',  ref.key)
		})
	}

	$scope.editPost = function(post) {
		$scope.newPost = angular.copy(post)
		$scope.editing = !$scope.editing
	}

	$scope.updatePost = function() {
		var index = posts.$indexFor($scope.newPost.$id)
		posts[index] = $scope.newPost
		posts.$save(index).then(function(ref) {
			console.log('updated!')
			$scope.newPost = {}
			$scope.editing = false
		})
	}

	$scope.posts = posts
})