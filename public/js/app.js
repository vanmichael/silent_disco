var silentDiscoApp = angular.module('silentDiscoApp', [
	'ngRoute',
	'appControllers'
]);

silentDiscoApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'HomeController'
			}).
			when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'AboutController'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);


