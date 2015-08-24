var myApp = angular.module('myApp',[]);

myApp.controller("MainCtrl", function($scope){
  $scope.student_name = "Mickey";
  $scope.fruits = ["apple","pear","peach","pomegranate"];
});
