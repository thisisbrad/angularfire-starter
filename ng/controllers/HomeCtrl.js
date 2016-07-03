angular.module('fireApp')
.controller('HomeCtrl', function($scope) {
	$scope.user = 'Bob'
	console.log($scope.user)
})