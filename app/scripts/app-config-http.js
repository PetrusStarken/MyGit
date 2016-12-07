(function (angular) {
  'use strict';
  
  angular.module('myGithubApp').factory('editHttpInterceptors', EditHttpInterceptors);
  angular.module('myGithubApp').config(ConfigHttpInterceptors);

  EditHttpInterceptors.$inject = ['$q', '$rootScope'];
  ConfigHttpInterceptors.$inject = ['$httpProvider'];

  function EditHttpInterceptors($q, $rootScope) {
    return {
      'request': function(config) {
        $rootScope.carregando = true;
        return config || $q.when(config);
      },
      'response': function(response) {
        $rootScope.carregando = false;
        return response || $q.when(response);
      },
      'responseError': function(response) {
        $rootScope.carregando = false;
        return $q.reject(response);
      }
    };
  }

  function ConfigHttpInterceptors($httpProvider) {
    $httpProvider.interceptors.push('editHttpInterceptors');
  }
})(angular);
