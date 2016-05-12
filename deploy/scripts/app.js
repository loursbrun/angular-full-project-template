
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


    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://lorempixel.com/' + newWidth + '/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }




    var titlehome = document.getElementById("title-home");
    TweenMax.to(titlehome, 2, {x:"100"});




    //Setting the page properties
    $rootScope.page = {
        heading: 'Home'
    };

}]);



