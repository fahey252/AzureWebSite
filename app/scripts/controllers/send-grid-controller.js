window.angular.module('Fahey').controller('SendGridController', ['$scope', 'MiddlewareService', function ($scope, MiddlewareService) {

	function sendEmail() {
		MiddlewareService.sendEmail();	// fire and forget
	}

	$scope.handleSendEmail = function () {
		sendEmail();
	};
}]);
