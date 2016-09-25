// Tutorial From: https://scotch.io/tutorials/angularjs-multi-step-form-using-ui-router

window.angular.module('Fahey').controller('WizardController', ['$scope', function ($scope) {
	$scope.formData = {};

	$scope.processForm = function () {
		alert('awesome!');
	};
}]);
