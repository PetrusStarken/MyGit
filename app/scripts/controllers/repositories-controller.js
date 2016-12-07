(function (angular) {
  'use strict';

  angular.module('myGithubApp').controller('reposController', RepositoriesController);

  RepositoriesController.$inject = ['repoService', 'userService', '$routeParams'];

  function RepositoriesController(repoService, userService, $routeParams) {
    var vm = this;

    vm.title = getPageTitle($routeParams.owner);

    setOwner($routeParams.owner);
    setRepos($routeParams.owner);

    function getPageTitle(userName) {
      if (userName === 'PetrusStarken') {
        return 'Meus repositórios';
      }
      return userName + ' repositórios';
    }

    function setOwner(ownerName) {
      userService.getUser(ownerName).success(onSuccess).error(onError);

      function onSuccess(res) {
        vm.owner = res;
      }

      function onError(res) {
        console.log('Erro: ' + res);
      }
    }

    function setRepos(ownerName) {
      repoService.getReposByOwner(ownerName).success(onSuccess).error(onError);

      function onSuccess(res) {
        vm.list = res;
      }
      function onError(res) {
        console.log('Erro: ' + res);
      }
    }
  }

})(angular);
