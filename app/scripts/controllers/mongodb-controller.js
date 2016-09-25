window.angular.module('Fahey').controller('MongoDBController', ['$scope', 'MiddlewareService', function ($scope, MiddlewareService) {
	$scope.items = [];

	function getItems() {
		MiddlewareService.getItems().success(function (items) {
			$scope.items = items;
		});
	}

	function refreshItems() {
		getItems();
	}

	function addItem() {
		var item = {
			title: new Date().toLocaleTimeString()
		};

		MiddlewareService.addItem(item).success(function () {
			refreshItems();
		});
	}

	function deleteItemById(id) {
		MiddlewareService.deleteItemById(id).success(function () {
			refreshItems();
		});
	}

	$scope.handleAddItem = function () {
		addItem();
	};

	$scope.handleRemoveItemById = function (id) {
		deleteItemById(id);
	};

	getItems();
}]);
