/**
 * Created by Nina on 08.04.16.
 */

(function() {

    "use strict";

    angular.module('opptur')

    .config(['$locationProvider', '$httpProvider',
        function($locationProvider, $httpProvider) {

            $locationProvider.html5Mode(true);

        }]
    )

    .config(['$stateProvider', '$urlRouteProvider',
        function($stateProvider, $urlRouteProvider) {

            // If path/state does not exist
            $urlRouteProvider.otherwise('/404');

            $stateProvider

            .state('home', {
                url: '/',
                templateUrl: '/app/components/home/home.html',
                controller: 'HomeController'
            })
        }]
    );

})();