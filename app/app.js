
//defining module
var app = angular.module('app', []);



//the run function acts as a main method for the angular app.
//the run function acts as a main method for the angular app.
app.run(function ($rootScope) {
    $rootScope.site = "interviewgully.com";
    $rootScope.name = "Brajesh Kumar";
    console.log('$rootScope:',$rootScope);
});

app.controller("myController", function ($scope, $rootScope) {
    $scope.name = "Sujeet Srivastava";
    $scope.welcome = "Welcome to " + $rootScope.site;
});

app.controller("testController", function ($scope, $rootScope) {
    $scope.welcome = "Welcome to " + $rootScope.site;
});




