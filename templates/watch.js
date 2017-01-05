var app = angular.module('plunker', []);

app.config(['$routeProvider',function($routeProvider){
  
  $routeProvider.
    when('/', {
      templateUrl: '/partials/order/manage.html',
      controller: 'ManageOrderCtrl'
    });
}]);

app.factory('Search',function(){
  return {text:''};
});

app.controller('ManageOrderCtrl', function($scope,Search) {
  $scope.searchFromService=Search;
  
});

app.controller('MainCtrl',function($scope,Search){
  $scope.search = Search;
  $scope.$watch('search.text', function (newValue, oldValue) {
    console.log('fire', "new",newValue,'old', oldValue);
  });
  
})