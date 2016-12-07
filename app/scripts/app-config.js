(function (angular) {
  'use strict';

  var config = {
    githubApiUrl: 'https://api.github.com/',
  };

  angular.module('myGithubApp').constant('config', config);
})(angular);
