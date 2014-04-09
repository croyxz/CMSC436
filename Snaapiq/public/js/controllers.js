pushNotify.controller('PutOrPostOrGet', function ($scope, $http) {

    $scope.formData = {
        
    };
    
    $scope.postForm = function () {
        $http.post('/recipient', {"recipient": $scope.formData.recipient, "badge": $scope.formData.badge,
            "k": $scope.formData.k, "field": $scope.formData.field}).success(function (data) {
                console.log("OK", data)
            }).error(function (err) {
                "ERR", console.log(err)
            });
    }

    $scope.putForm = function () {
        $http.put('/recipient', {"recipient": $scope.formData.recipient, "badge": $scope.formData.badge,
            "key": $scope.formData.key, "field": $scope.formData.field}).success(function (data) {
                console.log("OK", data)
            }).error(function (err) {
                "ERR", console.log(err)
            });
    }
    
    $scope.getForm = function () {
        $http.get('/user').then(function(response) {
            $scope.returnData = response.data;
        })
    }

});

