
var controllers = angular.module('homeController.controllers', [])
    .controller('homeController', function ($scope, UserdataService) {

        UserdataService.getFirstUsername().then(function(firstUsername) {
            $scope.firstUsername = firstUsername;
        });

    });