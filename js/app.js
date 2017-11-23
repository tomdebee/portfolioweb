// https://thinkster.io/tutorials/mean-stack/jumping-in-with-angular

var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world!';
}]);

app.controller("myCtrl", function($scope) {
    $scope.records = [
        "Alfreds Futterkiste",
        "Berglunds snabbköp",
        "Centro comercial Moctezuma",
        "Ernst Handel",
    ]
});