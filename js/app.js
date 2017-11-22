// https://thinkster.io/tutorials/mean-stack/jumping-in-with-angular

var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world!';
}]);