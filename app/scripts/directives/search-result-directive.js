(function (angular) {
  'use strict';

  angular.module('myGithubApp').directive('stkSearchResult', SearchResultDirective);

  SearchResultDirective.$inject = ['$location'];

  function SearchResultDirective($location) {
    return {
      restrict: 'E',
      templateUrl: 'views/search-result-directive.html',
      scope: {
        repos: '='
      },
      link: function ($scope) {
        $scope.openRepo = OpenRepo;

        function OpenRepo(repo) {
          var pathToRepo = 'repo/' + repo.full_name;
          $location.path(pathToRepo);
        }
      }
    };
  }
})(angular);
