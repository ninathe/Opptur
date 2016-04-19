/**
 * Created by Nina on 08.04.16.
 */

(function() {

    "use strict";

    // "opptur" will be the name of the app
    // Adds libraries to angular
    angular.module('opptur')

        .run(['$rootScope',
            function($rootScope) {
                console.log("heihoooo");
                var sessLoggedIn = sessionStorage.loggedIn;
                $rootScope.loggedIn = (sessLoggedIn !== undefined ? (sessLoggedIn === 'true' ? true : false) : false);
                $rootScope.isAuthorized = function() {
                    return $rootScope.loggedIn;
                }
                $rootScope.logOut = function() {
                    $rootScope.loggedIn = false;
                    sessionStorage.loggedIn = false;
                }

            }
        ]);

})();