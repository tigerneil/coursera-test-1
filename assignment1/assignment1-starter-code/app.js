(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.inputs = "";
    $scope.message = "";
    $scope.colorFont = "green";

    $scope.lunchCheck = function () {
        if ($scope.inputs == "") {
            $scope.message = "Please enter data first!";
            $scope.colorFont = "red";
            document.getElementById("lunch-menu").style.borderColor = "red";
            return;
        }
        var totalNum = 0;
        totalItems = $scope.inputs.split(',');
        for (var i = 0; i < totalItems.length; i++) {
            if (totalItems[i] != "") {
                totalNum += 1;
            }
        }

        if (totalNum < 4 ) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
        document.getElementById("lunch-menu").style.borderColor = "green";
    };

    $scope.getMessage = function() {
        return $scope.message;
    }
}

})();
