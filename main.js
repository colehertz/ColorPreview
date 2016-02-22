'use strict';

var app = angular.module('colorApp', []);

app.controller('colorFinder', function($scope) {

	$scope.rgbToHex = function() {
		var hex= componentToHex('#ffffff');
		return $scope.hex;
	}

	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	function hextToRgb(hex) {
		var shorthandReg = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandReg, function(m, r, g, b) {
			return r+r+g+g+b+b;
		});

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

		$scope.redRGB = parseInt(result[1], 16);
		$scope.greenRGB = parseInt(result[2], 16);
		$scope.blueRGB = parseInt(result[3], 16);
	}
});