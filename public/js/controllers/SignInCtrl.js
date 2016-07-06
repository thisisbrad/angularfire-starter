angular.module('fireApp')
.controller('SignInCtrl', ["$scope", "$rootScope", "$firebaseAuth", function($scope, $rootScope, $firebaseAuth) {
	$scope.authObj = $firebaseAuth()

  // login with Facebook
  $scope.registerUserByEmail = function() {
  	console.log('Data in ', $scope.newUser)
  	$scope.authObj.$createUserWithEmailAndPassword($scope.newUser.email, $scope.newUser.password)
	  .then(function(firebaseUser) {
	  	$scope.error = null
	    console.log("User " + firebaseUser.uid + " created successfully!")

	    //once registered auth user into app
	    $scope.authObj.$signInWithEmailAndPassword($scope.newUser.email, $scope.newUser.password).then(function(firebaseUser) {
				console.log("Signed in as:", firebaseUser.uid)
				$rootScope.currentUser = firebaseUser
				console.log('Current User: ', $rootScope.currentUser)
				console.log('Auth Object: ', $scope.authObj)
			}).catch(function(error) {
				console.error("Authentication failed:", error)
			})
	  }).catch(function(error) {
	    console.error("Error: ", error)
	    $scope.error = error.message
	  })
  }	
}])