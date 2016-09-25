window.angular.module('Fahey').service('MiddlewareService', ['$http', function ($http) {
	var service = {};

	service.sendEmail = function () {
		var endpoint = '/email/send';

		return $http.post(endpoint);
	};

	service.getItems = function () {
		var endpoint = '/items';

		return $http.get(endpoint);
	};

	service.addItem = function (item) {
		var endpoint = '/items/add';

		return $http.post(endpoint, item);
	};

	service.deleteItemById = function (id) {
		var endpoint = '/items/delete/' + id;

		return $http.delete(endpoint);
	};

	return service;
}]);
