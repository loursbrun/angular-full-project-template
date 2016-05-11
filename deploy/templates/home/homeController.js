app.controller('HomeController', ['$scope','$rootScope', function($scope, $rootScope) {

    console.log("Home controller");


    //Setting the page properties
    $rootScope.page = {
        heading: 'Home'
    };

}]);