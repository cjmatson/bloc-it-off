var blocItOff = angular.module('BlocItOff', ['ui.router', 'firebase']);

blocItOff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
	$locationProvider.html5Mode({enabled: true, requireBase: false});
	$stateProvider.state('current', {
		url: '/current',
		controller: 'Current.controller',
		templateUrl: 'templates/current.html'
	})
	$stateProvider.state('add', {
		url: '/add',
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

blocItOff.controller('Current.controller', ['$scope', function($scope) {

}])

blocItOff.controller('Add.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
var ref = new Firebase('https://torching-sun-5361.firebaseio.com/');
$scope.tasks = $firebaseArray(ref.child('tasks'));
$scope.addTask = function() {
	if ($scope.newTask && $scope.setPriority) {
		$scope.task = {task: $scope.newTask, priority: $scope.setPriority, status: 'Active'};
		$scope.tasks.$add($scope.task);
		$scope.clearTask();
	}
}
$scope.clearTask = function() {
	$scope.newTask = "";
	$scope.setPriority = "";
}

$scope.completeTask = function(task) {
	task.status = 'Inactive';
}

}])

blocItOff.controller('History.controller', ['$scope', function($scope) {

}])

blocItOff.controller('Home.controller', ['$scope', function($scope) {

}])


