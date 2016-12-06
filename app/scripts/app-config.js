(function (angular) {
  'use strict';

  var config = {
    githubApiUrl: 'https://api.github.com/',
  };

  angular.module('myGitApp').constant('config', config);
})(angular);
