(function (angular) {
  'use strict';

  angular.module('myGithubApp').controller('searchController', SearchController);

  SearchController.inject = ['repoService'];

  function SearchController(repoService) {
    var vm = this;

    vm.findRepos = findRepository;

    function findRepository(searchString) {
      if (searchString === '') {
        vm.resultFound = false;
        return;
      }
      if (searchString.length < 3) {
        return;
      }

      repoService.getReposByName(searchString).success(onSuccess).error(onError);

      function onSuccess(res) {
        vm.resultFound = !res.incomplete_results;
        vm.searchResult = res.items;
      }

      function onError(res) {
        console.log('Erro: ' + res);
      }
    }
  }
})(angular);
