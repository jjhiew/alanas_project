(function() {

  'use strict';

  angular
    .module('testPortfolio')
    .service('ProjectService', ProjectService);

  // Dependency Injection
  ProjectService.$inject = ['$http'];

  // Service Definition
  function ProjectService($http) {

    // What we're making public
    var Service = {
      getData: getData
    }

    // Get data from 'server' and returns a promise;
    function getData() {
      return $http.get('/assets/data.json');
    }

    // Export the service
    return Service;

  }

})();
