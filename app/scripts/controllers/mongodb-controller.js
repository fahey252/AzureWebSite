window.angular.module('Fahey').controller('MongoDBController', ['$scope', 'MiddlewareService', function ($scope, MiddlewareService) {
	$scope.items = [];

	function getItems() {
		MiddlewareService.getItems().success(function (items) {
			$scope.items = items;
		}).catch(function () {
			// TODO: handle errors
		});
	}

	function refreshItems() {
		getItems();
	}

	function addItem() {
		// TODO: show spinners
		var item = {
			title: new Date().toLocaleTimeString()
		};

		MiddlewareService.addItem(item).success(function () {
			refreshItems();
		}).catch(function () {
			// TODO: handle errors
		});
	}

	function deleteItemById(id) {
		MiddlewareService.deleteItemById(id).success(function () {
			refreshItems();
		}).catch(function () {
			// TODO: handle errors
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
