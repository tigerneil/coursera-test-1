(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.inputs = "";
    $scope.message = "";

    $scope.lunchCheck = function () {
        if ($scope.inputs == "") {
            $scope.message = "Please enter data first!";
            return;
        }
        var totalNum = 0;
        totalNum = $scope.inputs.split(',').length;
        if (totalNum < 4 ) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
    };

    $scope.getMessage = function() {
        return $scope.message;
    }
}

})();
