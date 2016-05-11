
//defining module

var app = angular.module('demo', ['ui.router']);

//the run function acts as a main method for the angular app.
app.run(function ($rootScope) {
});



app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url:'/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        });

}]);






app.controller('HomeController', ['$scope','$rootScope', function($scope, $rootScope) {

    //Setting the page properties
    $rootScope.page = {
        heading: 'Home'
    };

}]);


app.controller('AboutController', ['$scope','$rootScope', function($scope, $rootScope) {

    //Setting the page properties
    $rootScope.page = {
        heading: 'About'
    };


}]);






