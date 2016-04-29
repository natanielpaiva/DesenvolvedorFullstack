'use strict';

// Declare app level module which depends on views, and components
angular.module('StudioAngularJS', [
  'ngRoute',
  'StudioAngularJS.home',
  'StudioAngularJS.outraPagina'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
