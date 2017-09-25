angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tKRCET', {
    url: '/page1',
    templateUrl: 'templates/tKRCET.html',
    controller: 'tKRCETCtrl'
  })

  .state('departments', {
    url: '/page2',
    templateUrl: 'templates/departments.html',
    controller: 'departmentsCtrl'
  })

  .state('examBranch', {
    url: '/page3',
    templateUrl: 'templates/examBranch.html',
    controller: 'examBranchCtrl'
  })

  .state('aboutOurCollege', {
    url: '/page4',
    templateUrl: 'templates/aboutOurCollege.html',
    controller: 'aboutOurCollegeCtrl'
  })

  .state('news', {
    url: '/page5',
    templateUrl: 'templates/news.html',
    controller: 'newsCtrl'
  })

  .state('aboutTheApp', {
    url: '/page6',
    templateUrl: 'templates/aboutTheApp.html',
    controller: 'aboutTheAppCtrl'
  })

  .state('spreadAWord', {
    url: '/page7',
    templateUrl: 'templates/spreadAWord.html',
    controller: 'spreadAWordCtrl'
  })

  .state('gallery', {
    url: '/page8',
    templateUrl: 'templates/gallery.html',
    controller: 'galleryCtrl'
  })

  .state('events', {
    url: '/page9',
    templateUrl: 'templates/events.html',
    controller: 'eventsCtrl'
  })

  .state('cSE', {
    url: '/page10',
    templateUrl: 'templates/cSE.html',
    controller: 'cSECtrl'
  })

  .state('civil', {
    url: '/page11',
    templateUrl: 'templates/civil.html',
    controller: 'civilCtrl'
  })

  .state('eCE', {
    url: '/page12',
    templateUrl: 'templates/eCE.html',
    controller: 'eCECtrl'
  })

  .state('eEE', {
    url: '/page13',
    templateUrl: 'templates/eEE.html',
    controller: 'eEECtrl'
  })

  .state('iT', {
    url: '/page14',
    templateUrl: 'templates/iT.html',
    controller: 'iTCtrl'
  })

  .state('mECH', {
    url: '/page15',
    templateUrl: 'templates/mECH.html',
    controller: 'mECHCtrl'
  })

  .state('contactUs', {
    url: '/page16',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('reachUs', {
    url: '/page17',
    templateUrl: 'templates/reachUs.html',
    controller: 'reachUsCtrl'
  })

  .state('sports', {
    url: '/page18',
    templateUrl: 'templates/sports.html',
    controller: 'sportsCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});