angular.module('fireApp')
.controller('HomeCtrl', ["$scope", function($scope) {
	$scope.user = 'Bob'
	console.log($scope.user)
}])