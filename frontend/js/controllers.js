var _ = require('underscore');
module.exports = function (app) {
    app.controller('mainPage', function ($scope,$http) {
        $scope.sidevar_class = 'sidevar';
        $scope.sidevar_bar = '';
        $scope.sidevar = function () {
            if($scope.sidevar_class == 'sidevar-open'){
                $scope.sidevar_class = 'sidevar-close';
            }
            else{
                $scope.sidevar_class = 'sidevar-open';
            }
            console.log($scope.sidevar_class);
            if($scope.sidevar_bar == 'sidevar-bar-open'){
                $scope.sidevar_bar = 'sidevar-bar-close';
            }
            else{
                $scope.sidevar_bar = 'sidevar-bar-open';
            }
        }
    });
    app.controller('mainCtrl', function ($scope,$http) {

    })
};
