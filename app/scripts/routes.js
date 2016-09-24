window.angular.module('Fahey').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/home');
	//
	// Now set up the states
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
				//controller: 'adminController'
		});
}]);
