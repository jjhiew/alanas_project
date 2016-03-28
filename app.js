(function() {
  'use strict';

  angular
    .module('testPortfolio', ['ui.router'])
    .config(Router);

  Router.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

  // Define the Router here
  function Router($urlRouterProvider, $locationProvider, $stateProvider) {

      // Default Route
      $urlRouterProvider.otherwise('/');

      // Set up Routes
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/components/main/main.html',
          controller: 'mainController',
          controllerAs: 'vm'
        })

        // You'll need to add these routes,
        .state('about', {
          url: '/about',
          templateUrl: '/components/about/about.html',
          controller: 'aboutController',
          controllerAs: 'vm'
        })

        .state('contact', {
          url: '/contact',
          templateUrl: '/components/contact/contact.html',
          controller: 'contactController',
          controllerAs: 'vm'
        })

        .state('work', {
          url: '/work/:workId',
          templateUrl: '/components/work/work.html',
          controller: 'workController',
          controllerAs: '$ctrl',
          params: { workId: null, title: null, mainPictureUrl: null, 
            demoPictureUrl: null, logoPictureUrl: null,
            conceptPictureUrl: null, extraPictureUrl: null,
            url: null, about: null,
            summaryOne: null, summaryTwo: null,
            contribution: null, deliverables: null,
            languages: null }
        });

  }

})();
