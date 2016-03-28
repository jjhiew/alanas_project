(function() {

  'use strict';

  angular
    .module('testPortfolio')
    .component('projectList', {
      templateUrl: '/components/projectList/projectList.html',
      controller: ProjectListController
    });

  // Dependency Injection
  ProjectListController.$inject = ['ProjectService'];

  // Controller Definition
  // @NOTE: We're definining it in this file because it's a small. If
  // it had a lot of code, then we'd split it into it's own file.
  function ProjectListController(ProjectService) {
    var vm = this;

    // It's good practice to define the accessible members at the top
    vm.projects = [];

    // Get the Projects data
    ProjectService.getData().then(function(response) {
      console.log(response.data);
      vm.projects = response.data;
    }).catch(function(err) {
      console.error('There was an error', err);
    });
  }

})();
