app.controller('ContactController', ['$scope','$rootScope', function($scope, $rootScope) {


    console.log("About controller");

    //Setting the page properties
    $rootScope.page = {
        heading: 'Contact'
    };

}]);