window.angular.module('Fahey').service('MiddlewareService', ['$http', function ($http) {
  var service = {};

  service.sendEmail = function () {
    var endpoint = '/send-email';

    return $http.post(endpoint);
  };

  return service;
}]);
