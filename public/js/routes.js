angular.module('fireApp')
.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true)
	$routeProvider
	.when('/', {
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/sign-in', {
		templateUrl: '/views/sign-in.html',
		controller: 'HomeCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
}])