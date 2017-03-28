
(function() {

    "use strict";

    angular.module('opptur')

        .controller('TripController', ['$rootScope', '$http',
            function($rootScope, $http) {
                var vm = this;

                vm.credentials = {
                    'difficulty' : '',
                    'duration' : '',
                    'lat': 63.446827,
                    'long': 10.421906
                };
                vm.findTrip = findTrip;
                vm.tripName = 'N/A';

                function findTrip(credentials) {
                    $http.post('/findTrip', credentials)
                        .then(
                            function(res) {
                                //sessionStorage.[navn på variabel som printes i 'tripView' og 'Mulige turer'] = res.data.[JSON element]
                                vm.tripName = res.data.tripName;
                                //sessionStorage.tripName = res.data.tripName;
                                console.log(res.data.tripName);
                            },
                            function(err) {

                            }
                        );
                }
            }
        ])
        .directive('trippopup', [
                function() {
                    return {
                        restrict: 'E',
                        replace: false,
                        templateUrl: '/app/components/trip/directives/trippopup/trip.html'
                    };
                }
            ]
        );

}());
