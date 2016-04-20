
(function() {

    "use strict";

    angular.module('opptur')

        .controller('TripController', ['$rootScope', '$http',
            function($rootScope, $http) {
                var vm = this;

                vm.credentials = {
                    'difficulty' : '',
                    'duration' : ''
                };
                vm.findTrip = findTrip;

                function findTrip(credentials) {
                    $http.post('/findTrip', credentials)
                        .then(
                            function(res) {
                                //sessionStorage.[navn på variabel som printes i 'tripView' og 'Mulige turer'] = res.data.[JSON element]
                                sessionStorage.tripName = res.data.tripName;
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