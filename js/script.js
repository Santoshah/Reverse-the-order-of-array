var myApp = angular.module("myModule", []);

myApp.controller('myController', ['$scope', function($scope){
	var fruits = ["mangu", "banana", "apple", "guava", "orange", "pine apple"];

	$scope.fruits = fruits;


}])