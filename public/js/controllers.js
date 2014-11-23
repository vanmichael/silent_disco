var appControllers = angular.module('appControllers', ['ngRoute']);

//Make new Controller below
appControllers.controller('MainController', function($scope, $route, $routeParams, $location) {
	$scope.route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
});

appControllers.controller('HomeController', function($scope, $route, $routeParams, $location) {
	$scope.name = "HomeController";
	$scope.params = $routeParams;
});

appControllers.controller('AboutController', function($scope, $route, $routeParams, $location) {
	$scope.name = "AboutController";
	$scope.params = $routeParams;
});
