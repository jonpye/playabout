angular.module('CoffeeDemo.CoffeeController', [])
    .controller('CoffeeCtrl', ['$scope', '$http', function ($scope, $http) {
        // Initialise objects we know we are working with so that we are aware of there existance when DOM loaded
        $scope.model = {};
        $scope.mCompany = {};
        $scope.ListName = "";

        $scope.states = { showCoffeeForm: false, isCoffeeFormVisible: true };


        $scope.showCoffeeForm = function (isVisible) {
            $scope.states.showCoffeeForm = isVisible;
        };

        // Hide the add coffee button when the panel is displayed, else show
        $scope.isCoffeeFormVisible = function() {
            return !$scope.states.showCoffeeForm;
        };

        $scope.new = {
            Coffee: undefined //{}
        };

        $scope.ListName = "Coffee List";

        // Get our json data of coffees, and set our list name
        $http.get('/Coffees/IndexVM')
            .success(function (data) {
            $scope.model = data;
        });

        // Get our json data of companies to load into ddl for adding a coffee
        $http.get('/Companies/IndexVM').success(function (data) {
            $scope.mCompany = data;
        });
    }]);

