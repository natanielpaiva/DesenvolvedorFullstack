'use strict';

angular.module('StudioAngularJS.outraPagina', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/outra-pagina', {
    templateUrl: 'outra-pagina/index.html',
    controller: 'OutraController'
  });
}])

.controller('OutraController', [function() {

}]);