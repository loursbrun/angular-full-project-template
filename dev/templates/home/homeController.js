app.controller('HomeController', ['$scope','$rootScope', function($scope, $rootScope) {

    //console.log("Home controller");



    var titlehome = document.getElementById("title-home");
    TweenMax.to(titlehome, 2, {x:"100"});




    //Setting the page properties
    $rootScope.page = {
        heading: 'Home'
    };

}]);