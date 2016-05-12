
//defining module

var app = angular.module('app', ['ui.router','ui.bootstrap']);

//the run function acts as a main method for the angular app.
app.run(function ($rootScope) {
});



app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url:'/about',
            templateUrl: 'templates/about/about.html',
            controller: 'AboutController'
        })
        .state('contact', {
            url:'/contact',
            templateUrl: 'templates/contact/contact.html',
            controller: 'ContactController'
        });

}]);




