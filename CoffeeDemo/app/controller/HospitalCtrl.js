angular.module('CoffeeDemo.HomeController', [])
    .controller('HospitalCtrl', ['$scope', '$http', 'HospitalStream', function ($scope, $http, HospitalStream) {
        $scope.hospitals = {};
       
        $scope.ListName = "";
        $scope.ListName = "Hospitals";

        // Get our json data of coffees, and set our list name
        $http.get('../../Scripts/json/hospitals.json').success(function (data) {
            $scope.hospitals = data.hospitals;
        });

        //signalr related
        HospitalStream.on('redisHospData', function () {
        //    $http.get('../../Scripts/json/hospitals.json').success(function (data) {
        //        $scope.hospitals = data.hospitals;
        //    });
        });

    }]) //;

    .factory('HospitalStream', ['$rootScope', function ($rootScope) {
        'use strict';

        return {
            on: function (eventName, callback) {
                var connection = $.hubConnection();
                var hospitalHubProxy = connection.createHubProxy('HospitalDataHub');    //HubName attribute from class

                hospitalHubProxy.on(eventName, function (hospital) {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(hospitalHubProxy, args);
                    });
                });
                connection.start().done(function () { });
            }
        };

}]);

