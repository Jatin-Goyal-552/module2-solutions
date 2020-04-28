(function () {
'use strict'

angular.module('FoodCheck', [])

.controller('FoodCheckController', FoodCheckController);

FoodCheckController.$injector = ['$scope'];

function FoodCheckController ($scope) {
	$scope.message = "";
	$scope.items = "";

	$scope.foodCheck = function () {
		var items = $scope.items.split(',');
			$scope.colorClass = "text-success";

		 if (items == "") {
		 	$scope.colorClass = "text-danger"
			$scope.message = "Please enter data first!"; 
		 } else if (items.length <= 3 && items.length > 0) {
		 	$scope.message = "Enjoy!";
		 } else if (items.length > 3) {
		 	$scope.message = "Too much!";
		 };	
	};


};
})();