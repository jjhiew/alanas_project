(function() {

  'use strict';

  angular
    .module('testPortfolio')
    .component('projectListItem', {
      bindings: {
        // This indicates 'one-way' binding
        projectData: '<'
      },
      templateUrl: '/components/projectList/projectListItem/projectListItem.html',
      controller: ProjectListItemController
    });

    function ProjectListItemController() {
      var vm = this;
      console.log(vm.projectData);
    }

})();
