//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

//CONSTANTS
angular.module('weatherApp')
 .constant('REST_END_POINT', 'http://api.openweathermap.org/data/2.5/forecast?');
angular.module('weatherApp')
 .constant('API_KEY', 'APPID=e65c444451bfd3b26ef7982251e0181b');

//ROUTES
weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/formPage.html',
        controller: 'formController'
    })
    .when('/forecastPage', {
        templateUrl: 'views/forecastPage.html',
        controller: 'forecastController'
    })
    .when('/formPage', {
        templateUrl: 'views/formPage.html',
        controller: 'formController'
    })
});

//CONTROLLERS
weatherApp.controller('formController', ['$scope','cityForecast', function($scope, cityForecast) {
    $scope.name = "Form Page";
    $scope.getForecast = function() {
        cityForecast.set($scope.cityName);
    }
}]);

weatherApp.controller('forecastController', ['$scope', 'cityForecast','getForecast', function($scope, cityForecast, getForecast) {
    $scope.name = cityForecast.get();
    getForecast.fetchForecast($scope.name).then(function (data) {
        $scope.forecast = data;
    })
}]);

//SERVICES
weatherApp.factory('cityForecast', function() {
    var cityName = "New York, NY";
    function set(data) {
        cityName = data;
    }
    function get() {
        return cityName;
    }
    return {
        set: set,
        get: get
    }
});

weatherApp.factory('getForecast', ['$http', '$q', 'REST_END_POINT','API_KEY', function($http, $q, REST_END_POINT, API_KEY) {
    var forecastFactory = {};
    var _fetchForecast = function(city) {
        var _serviceURL = REST_END_POINT + 'q=' + city + '&' + API_KEY;
        var deferred = $q.defer();
        $http.get(_serviceURL)
                .success(function (data,status, headers, config) {
                    deferred.resolve(data);
        })
                .error(function (data, status, headers, config) {
                    deferred.reject(status);
        });
        return deferred.promise;  
    };
    forecastFactory.fetchForecast = _fetchForecast;
    return forecastFactory;
}]);