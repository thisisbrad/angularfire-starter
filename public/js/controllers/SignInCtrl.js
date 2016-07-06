angular.module('fireApp')
.controller('SignInCtrl', ["$scope", "$rootScope", "$firebaseAuth", function($scope, $rootScope, $firebaseAuth) {
	$rootScope.authObj = $firebaseAuth()

	$scope.authObj.$onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    $rootScope.currentUser = user
	    console.log('in here', user)
	  } else {
	    // No user is signed in.
	    $rootScope.currentUser = null
	    console.log('outta here')
	  }
	})

  // login with Facebook
  $scope.registerUserByEmail = function() {
  	console.log('Data in ', $scope.newUser)
  	$scope.authObj.$createUserWithEmailAndPassword($scope.newUser.email, $scope.newUser.password)
	  .then(function(firebaseUser) {
	  	$scope.error = null
	    console.log("User " + firebaseUser.uid + " created successfully!")

	    //once registered auth user into app
	    $scope.authObj.$signInWithEmailAndPassword($scope.newUser.email, $scope.newUser.password)
	    .then(function(firebaseUser) {
				console.log("Signed in as:", firebaseUser.uid)
				$rootScope.currentUser = firebaseUser
				// console.log('Current User: ', $rootScope.currentUser)
				// console.log('Auth Object: ', $scope.authObj)
			}).catch(function(error) {
				console.error("Authentication failed:", error)
				$scope.error = error.message
			})
	  }).catch(function(error) {
	    console.error("Error: ", error)
	    $scope.error = error.message
	  })
  } // ENDS registerUserByEmail

  $scope.loginUser = function() {
  	console.log('HOLLA')
  	$scope.authObj.$signInWithEmailAndPassword($scope.newUser.email, $scope.newUser.password)
    .then(function(firebaseUser) {
			console.log("Signed in as:", firebaseUser.uid)
			$rootScope.currentUser = firebaseUser
			// console.log('Current User: ', $rootScope.currentUser)
			// console.log('Auth Object: ', $scope.authObj)
		}).catch(function(error) {
			console.error("Authentication failed:", error)
			$scope.error = error.message
		})
  }
}])