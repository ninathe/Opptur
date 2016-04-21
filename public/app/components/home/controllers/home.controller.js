/**
 * Created by Nina on 08.04.16.
 */

(function() {

    "use strict";

    angular.module('opptur')

    .controller('HomeController', ['$scope', HomeController]);

    function HomeController($scope) {
        disableTripsPopup();


    }

})();