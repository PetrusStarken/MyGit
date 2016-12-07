(function (angular) {
  'use strict';

  angular.module('myGithubApp').factory('repoService', RepoService);

  RepoService.$inject = ['$http', 'config'];

  function RepoService($http, config) {
    var service = {
      getRepo: GetRepo,
      getReposByOwner: GetReposByOwner,
      getReposByName: GetReposByName,
      getRepoLanguages: GetRepoLanguages,
      getRepoContributors: GetRepoContributors
    };

    return service;

    function GetRepo(owner, repo) {
      return $http.get(config.githubApiUrl + 'repos/' + owner + '/' + repo);
    }

    function GetReposByOwner(owner) {
      return $http.get(config.githubApiUrl + 'users/' + owner + '/repos?sort=updated_at');
    }

    function GetReposByName(name) {
      return $http.get(config.githubApiUrl + 'search/repositories?q=' + name + '&sort=stars&order=desc');
    }

    function GetRepoLanguages(owner, repo) {
      return $http.get(config.githubApiUrl + 'repos/' + owner + '/' + repo + '/languages');
    }

    function GetRepoContributors(owner, repo) {
      return $http.get(config.githubApiUrl + 'repos/' + owner + '/' + repo + '/contributors');
    }
  }
})(angular);
