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

blocItOff.controller('Current.controller', ['$scope', 'ActiveTasks', function($scope, ActiveTasks) {
	$scope.tasks = ActiveTasks.all;
}])

blocItOff.controller('Add.controller', ['$scope', 'ActiveTasks', function($scope, ActiveTasks) {
	$scope.addTask = function() {
		if ($scope.newTask && $scope.setPriority) {
			$scope.task = {task: $scope.newTask, priority: $scope.setPriority, status: 'Active'};
			ActiveTasks.submit($scope.task);
			$scope.clearInputs();
		}
	}
	$scope.clearInputs = function() {
		$scope.newTask = "";
		$scope.setPriority = "";
	}
}])

blocItOff.controller('History.controller', ['$scope', 'ActiveTasks', function($scope, ActiveTasks) {

}])

blocItOff.controller('Home.controller', ['$scope', 'ActiveTasks', function($scope, ActiveTasks) {

}])

blocItOff.filter('findActiveTasks', function() {
	return function(tasks) {
		var activeTasks = [];
		for (var i = 0; i < tasks.length; i++) {
			if (tasks[i].status = 'Active') {
				activeTasks.push(tasks[i]);
			}
		}
		return activeTasks;
	}
})

blocItOff.factory('ActiveTasks', ['$firebaseArray', function($firebaseArray) {
	var ref = new Firebase('https://torching-sun-5361.firebaseio.com/');
	var tasks = $firebaseArray(ref.child('active tasks'));
	return {
		all: tasks,
		submit: function(newActiveTask) {
			tasks.$add(newActiveTask);
		}
	}

}])


