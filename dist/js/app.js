var blocItOff = angular.module('BlocItOff', ['ui.router', 'firebase']);

blocItOff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$locationProvider.html5Mode({enabled: true, requireBase: false});
	$stateProvider.state('current', {
		url: '/current',
		controller: 'Current.controller',
		templateUrl: 'templates/current.html'
	})
	$stateProvider.state('add', {
		url: 'add/',
		controller: 'Add.controller',
		templateUrl: 'templates/add.html'
	})
	$stateProvider.state('history', {
		url: '/history',
		controller: 'History.controller',
		templateUrl: 'templates/history.html'
	})
	$stateProvider.state('home', {
		url: '/',
		controller: 'Home.controller',
		templateUrl: 'templates/home.html'
	})
}])

blocItOff.controller('Home.controller', ['$scope', function($scope) {
	
}])

blocItOff.controller('Current.controller', ['$scope', function($scope) {

}])

blocItOff.controller('Add.controller', ['$scope', function($scope) {

}])

blocItOff.controller('History.controller', ['$scope', function($scope) {

}])
