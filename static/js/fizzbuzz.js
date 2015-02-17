var myApp = angular.module('myApp',[]);

myApp.controller('TrainingController', function($scope) {
  $scope.greeting = 'Hola!';

  $scope.fizzbuzz = function(number) {
    if(number === '3') {
      return 'fizz';
    }
    return number;
  }
});
