(function (angular) {
  'use strict';

  angular.module('myGithubApp').controller('repoController', RepositoryController);

  RepositoryController.$inject = ['repoService', 'userService', '$routeParams'];

  function RepositoryController(repoService, userService, $routeParams) {
    var vm = this;

    setOwnerDetails($routeParams.owner);
    setUserRepo($routeParams.owner, $routeParams.repo);
    setRepoLanguages($routeParams.owner, $routeParams.repo);
    setRepoContributors($routeParams.owner, $routeParams.repo);

    function setOwnerDetails(userName) {
      userService.getUser(userName).success(onSuccess).error(onError);

      function onSuccess(res) {
        vm.owner = res;
      }

      function onError(res) {
        console.log('Erro: ' + res);
      }
    }

    function setUserRepo(userName, repoName) {
      repoService.getRepo(userName, repoName).success(onSuccess).error(onError);

      function onSuccess(res) {
        vm.details = res;
      }

      function onError(res) {
        console.log('Erro: ' + res);
      }
    }

    function setRepoLanguages(owner, repo) {
      repoService.getRepoLanguages(owner, repo).success(onSuccess).error(onError);

      function onSuccess(res) {
        vm.languages = res;
      }

      function onError(res) {
        console.log('Erro: ' + res);
      }
    }

    function setRepoContributors(owner, repo) {
      repoService.getRepoContributors(owner, repo).success(onSuccess).error(onError);

      function onSuccess(res) {
        vm.contributors = res;
      }

      function onError(res) {
        console.log('Erro: ' + res);
      }
    }
  }
})(angular);
