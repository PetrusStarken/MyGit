(function (angular) {
  'use strict';

  angular.module('myGithubApp').config(AppRoutes);

  AppRoutes.$inject = ['$routeProvider'];

  function AppRoutes($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/search/:term?', {
      templateUrl: 'views/search.html',
      controller: 'searchController',
      controllerAs: 'search'
    })
    .when('/repo/:owner', {
      templateUrl: 'views/repositories.html',
      controller: 'reposController',
      controllerAs: 'repos'
    })
    .when('/repo/:owner/:repo', {
      templateUrl: 'views/repository.html',
      controller: 'repoController',
      controllerAs: 'repo'
    })
    .when('/not-found', {
      templateUrl: 'views/404.html'
    })
    .otherwise({redirectTo: '/not-found'});
  }

})(angular);
