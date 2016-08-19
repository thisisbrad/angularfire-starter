angular.module('fireApp')
.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true)
	$routeProvider
	.when('/', {
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/sign-in', {
		templateUrl: '/views/sign-in.html',
		controller: 'AuthCtrl'
	})
	.when('/dashboard', {
		templateUrl: '/views/dashboard.html',
		controller: 'DashCtrl',
		resolve: {
      		"currentAuth": ["Auth", function(Auth) {
        		return Auth.$requireSignIn();
      		}]
    	}
	})
	.otherwise({
		redirectTo: '/'
	})
})