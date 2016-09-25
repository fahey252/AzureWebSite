window.angular.module('Fahey').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
				//controller: 'adminController'
		})
		// https://scotch.io/tutorials/angularjs-multi-step-form-using-ui-router
		.state('wizard', {
			url: '/wizard',
			templateUrl: 'views/wizard/wizard.html',
			controller: 'WizardController'
		})
		.state('wizard.step1', {
            url: '/step1',
            templateUrl: 'views/wizard/step1.html'
        })
        .state('wizard.step2', {
            url: '/step2',
            templateUrl: 'views/wizard/step2.html'
        })
        .state('wizard.step3', {
            url: '/step3',
            templateUrl: 'views/wizard/step3.html'
        });
}]);
