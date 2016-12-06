(function (angular) {
  'use strict';

  angular.module('myGithubApp').config(AppRoutes);

  AppRoutes.$inject = ['$routeProvider'];

  function AppRoutes($routeProvider) {
    $routeProvider
    .when('/myRepositories', {
      templateUrl: 'views/repositories.html',
      controller: 'repositoriesCtrl',
      controllerAs: 'repositories'
    })
    .when('/repo/:owner', {
      templateUrl: 'views/repositories.html',
      controller: 'repositoriesCtrl',
      controllerAs: 'repositories'
    })
    .when('/repo/:owner/:repo', {
      templateUrl: 'views/repository.html',
      controller: 'repositoryCtrl',
      controllerAs: 'repository'
    })
    .when('/error', {
      templateUrl: 'views/error.html',
      controller: 'errorCtrl',
      controllerAs: 'error'
    })
    .otherwise({redirectTo: '/error'});
  }

})(angular);
