var blocItOff = angular.module('BlocItOff', ['ui.router', 'firebase']);
blocItOff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$locationProvider.html5Mode({enabled: true, requireBase: false});
	$stateProvider.state('home', {
		url: '/',
		controller: 'Home.controller',
		templateUrl: 'templates/home.html'
	})
}])

blocItOff.controller('Home.controller', ['$scope', function($scope) {
	
}])