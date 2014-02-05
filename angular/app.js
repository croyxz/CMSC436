var pushNotify = angular.module('pushNotify', []);

pushNotify.controller('submitInfo', function ($scope, $http) {
    $scope.formData = {};

    $scope.sendForm = function () {
        /*$http.post('*', $scope.formData);*/

        /*$http.post('*', {"recipient": $scope.formData.recipient, "badge": $scope.formData.badge,
            "key": $scope.formData.key, "field": $scope.formData.field});*/

        console.log("submitInfo");
    }
});