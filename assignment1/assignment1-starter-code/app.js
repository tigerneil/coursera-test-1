(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.inputs = "";
    $scope.message = "";
    $scope.colorFont = "";

    $scope.lunchCheck = function () {
        if ($scope.inputs == "") {
            $scope.message = "Please enter data first!";
            $scope.colorFont = "red";
            document.getElementById("lunch-menu").style.borderColor = "red";
            return;
        }
        var totalNum = 0;
        var totalItems = [];
        totalItems = $scope.inputs.split(',');
        for (var i = 0; i < totalItems.length; i++) {
            if (totalItems[i] != "") {
                totalNum += 1;
            } else {
                $scope.message = "Please try again without empty lunch name!";
                $scope.colorFont = "pink";
                document.getElementById("lunch-menu").style.borderColor = "pink";
                return;
            }
        }

        if (totalNum < 4 ) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
        $scope.colorFont = "green";
        document.getElementById("lunch-menu").style.borderColor = "green";
    };

    $scope.getMessage = function() {
        return $scope.message;
    }
}

})();
