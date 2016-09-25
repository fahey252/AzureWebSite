window.angular.module('Fahey').controller('SendGridController', ['$scope', 'MiddlewareService', function ($scope, MiddlewareService) {

	function sendEmail() {
		// TODO: show spinners
		MiddlewareService.sendEmail().catch(function () {
			// TODO: handle errors
		});
	}

	$scope.handleSendEmail = function () {
		sendEmail();
	};
}]);
