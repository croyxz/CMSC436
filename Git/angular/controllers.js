pushNotify.controller('pushCtrl',['$scope', function (scope_var) {
    scope_var.fields = [{id: 'field1'}];

    scope_var.addNewField = function () {
        var newFieldNum = $scope.fields.length + 1;
        scope_var.fields.push({'id':'field'+newFieldNum});
    }

    scope_var.showAddButton = function (field) {
        return field.id = scope_var.fields[scope_var.fields.length - 1].id;
    }
}]);