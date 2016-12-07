(function (angular) {
  'use strict';

  angular.module('myGithubApp').factory('userService', ReposService);

  ReposService.$inject = ['$http', 'config'];

  function ReposService($http, config) {
    var service = {
      getUser: GetUser
    };

    return service;

    function GetUser(name) {
      return $http.get(config.githubApiUrl + 'users/' + name);
    }
  }
})(angular);
