(function (angular) {
  'use strict';

  angular.module('myGithubApp').directive('stkOwner', OwnerDirective);

  function OwnerDirective() {
    return {
      restrict: 'E',
      templateUrl: 'views/owner-directive.html',
      scope: {
        owner: '='
      }
    };
  }
})(angular);
