describe('training', function() {
  beforeEach(module('myApp'));

    it('......', inject(function($rootScope, $controller) {
        var $scope = $rootScope.$new();
        var $controller = $controller('TrainingController', {
                $scope: $scope
            });
        expect($scope.fizzbuzz('1')).toEqual('1');
    }));

    it('......', inject(function($rootScope, $controller) {
        var $scope = $rootScope.$new();
        var $controller = $controller('TrainingController', {
                $scope: $scope
            });
        expect($scope.fizzbuzz('2')).toEqual('2');
    }));

    it('......', inject(function($rootScope, $controller) {
        var $scope = $rootScope.$new();
        var $controller = $controller('TrainingController', {
                $scope: $scope
            });
        expect($scope.fizzbuzz('3')).toEqual('fizz');
    }));
});
