(function (angular) {
  'use strict';

  angular.module('myGithubApp').run(MyGithubAppRun);

  MyGithubAppRun.$inject = ['$rootScope', '$location'];

  function MyGithubAppRun($rootScope, $location) {
    $rootScope.openRepo = function (repo) {
      var pathToRepo = 'repo/' + repo.full_name;
      $location.path(pathToRepo);
    };
  }
})(angular);
