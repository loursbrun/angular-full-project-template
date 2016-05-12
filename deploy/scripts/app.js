
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






app.controller('AboutController', ['$scope','$rootScope', function($scope, $rootScope) {

    //console.log("About controller");

    //Setting the page properties
    $rootScope.page = {
        heading: 'About'
    };


}]);

app.controller('ContactController', ['$scope','$rootScope', function($scope, $rootScope) {
    
    //console.log("About controller");

    //Setting the page properties
    $rootScope.page = {
        heading: 'Contact'
    };

}]);
app.controller('HomeController', ['$scope','$rootScope', function($scope, $rootScope) {

    //console.log("Home controller");



    var titlehome = document.getElementById("title-home");
    TweenMax.to(titlehome, 2, {x:"100"});




    //Setting the page properties
    $rootScope.page = {
        heading: 'Home'
    };

}]);