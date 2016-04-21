/**
 * Created by Nina on 08.04.16.
 */

(function() {

    "use strict";

    // "opptur" will be the name of the app
    // Adds libraries to angular
    angular.module('opptur')

        .run(['$rootScope', '$http',
            function($rootScope, $http) {
                var sessLoggedIn = sessionStorage.loggedIn;
                $rootScope.loggedIn = (sessLoggedIn !== undefined ? (sessLoggedIn === 'true' ? true : false) : false);
                $rootScope.isAuthorized = function() {
                    return $rootScope.loggedIn;
                }
                $rootScope.logOut = function() {
                    $rootScope.loggedIn = false;
                    sessionStorage.loggedIn = false;
                }
                $rootScope.getUsername = function() {
                    return sessionStorage.username;
                }
                $rootScope.currentTrip = null;
                $rootScope.trips = [];
                $rootScope.message = "";
                $rootScope.tripSearchParams = {
                    maxDuration: 0,
                    maxDistance: 0,
                    maxDifficulty: 0,
                    latitude: 0,
                    longitude: 0,
                }
                $rootScope.findTrip = function() {
                    $http.post('/findTrip',
                    {
                      'difficulty': $rootScope.tripSearchParams.maxDifficulty,
                      'duration': $rootScope.tripSearchParams.maxDuration,
                      'lat': $rootScope.tripSearchParams.latitude,
                      'long': $rootScope.tripSearchParams.longitude,
                      'distance': $rootScope.tripSearchParams.maxDistance
                    })
                    .then(
                        function(res) {
                            $rootScope.trips = res.data.trips;
                            //sessionStorage.currentTripName = res.data.tripName;
                        },
                        function(err) {
                            console.error(err);
                            //sessionStorage.message = err.data.message;
                        }
                    );
                }
                $rootScope.getMessageTrip = function() {
                    return sessionStorage.message;
                }
                $rootScope.selectTrip = function(trip) {
                    $rootScope.currentTrip = trip;
                    sessionStorage.currentTrip = JSON.stringify(trip);
                    sessionStorage.path = trip.path;
                }

                function init() {
                    $rootScope.currentTrip = sessionStorage.currentTrip === undefined ? { } : JSON.parse(sessionStorage.currentTrip);
                }
                init();
            }
        ]);

})();