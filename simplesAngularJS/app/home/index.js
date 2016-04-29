'use strict';

angular.module('StudioAngularJS.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/index.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', [function() {

}]);