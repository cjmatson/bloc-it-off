var blocItOff = angular.module('BlocItOff', ['ui.router', 'firebase']);
blocItOff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$locationProvider.html5Mode({enabled: true, requireBase: false});
	$stateProvider.state('home', {
		url: '/',
		controller: 'Home.controller',
		templateUrl: 'templates/home.html'
	})
}])

blocItOff.controller('Home.controller', ['$scope', 'List', function($scope, List) {
	$scope.listItems = { items: [{task: "Wake up"}, {task: "Do stuff"}, {task: "Go to bed"}] };
}])

blocItOff.factory('List', ['$firebaseArray', function($firebaseArray) {
	var ref = new Firebase('https://torching-sun-5361.firebaseio.com/');
	var listItems = $firebaseArray(ref.child('list items'));
	return {
		all: listItems,
		submit: function(newItem) {
			listItems.$add(newItem);
		}
	}
}])