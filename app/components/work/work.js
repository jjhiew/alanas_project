(function() {

  'use strict';

  angular
    .module('testPortfolio')
    .controller('workController', WorkController);

  WorkController.$inject = ['$state', '$stateParams', '$filter', 'ProjectService'];

  function WorkController($state, $stateParams, $filter, ProjectService) {
    var vm = this;

    vm.workId = $stateParams.workId;
    console.log($stateParams.workId);

    // Get the Projects data
    ProjectService.getData().then(function(response) {
      vm.workObj = response.data;
      var filter = $filter('filter')(vm.workObj, {id: vm.workId})[0];
      console.log(filter);

      // initialize template variables
      vm.title = filter.title;
      vm.subTitle = filter.subTitle;
      vm.mainPictureUrl = filter.mainPictureUrl;
      vm.demoPictureUrl = filter.demoPictureUrl;
      vm.logoPictureUrl = filter.logoPictureUrl;
      vm.conceptPictureUrl = filter.conceptPictureUrl;
      vm.extraPictureUrl = filter.extraPictureUrl;
      vm.url = filter.url;
      vm.about = filter.about;
      vm.summaryOne = filter.summaryOne;
      vm.summaryTwo = filter.summaryTwo;
      vm.contribution = filter.contribution;
      vm.deliverables = filter.deliverables;
      vm.languages = filter.languages;

      console.log(vm.title);

    }).catch(function(err) {
      console.error('There was an error', err);
    });

  }

})();
