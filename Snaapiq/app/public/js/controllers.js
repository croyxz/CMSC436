pushNotify.controller('InfoTools', function ($scope, $http) {

    $scope.formData = {

    };

    $scope.returnData = {

    };

    $scope.postForm = function () {
        $http.post('*', {"recipient": $scope.formData.recipient, "badge": $scope.formData.badge,
            "k": $scope.formData.k, "field": $scope.formData.field}).success(function (data) {
                console.log("OK", data)
            }).error(function (err) {
                "ERR", console.log(err)
            });
    }

    $scope.getForm = function () {
        $http.get('http://echo.jsontest.com/erik/koebke/ryo/hang').then(function(response) {
            $scope.returnData = response.data;
        })
    }

    $scope.putForm = function () {
        $http.put('', {"recipient": $scope.formData.recipient, "badge": $scope.formData.badge,
            "key": $scope.formData.key, "field": $scope.formData.field}).success(function (data) {
                console.log("OK", data)
            }).error(function (err) {
                "ERR", console.log(err)
            });
    }

});

