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
            $rootScope.isAuthorized = function() {
                return true;
            }

        }
    ]);

})();