

# module config
angular.module('boom', []).config ['$routeProvider', ($routeProvider) ->
    $routeProvider.
    	when('/', {templateUrl: 'templates/home.html', controller: TestCtl}).
        when('/a', {templateUrl: 'templates/test.html', controller: TestCtl}).
        when('/b', {templateUrl: 'templates/test.html', controller: TestCtl}).
        when('/c', {templateUrl: 'templates/test.html', controller: TestCtl}).
        otherwise {redirectTo: '/'}
]

# controller
this.TestCtl = ($scope) ->
	$scope.name = 'knife'