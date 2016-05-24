    /**
 * Created by Nina on 08.04.16.
 */

(function() {

    "use strict";

    angular.module('opptur')

        .config(['$locationProvider', '$httpProvider', '$logProvider',
            function($locationProvider, $httpProvider, $logProvider) {
                $logProvider.debugEnabled(true);

                $locationProvider.html5Mode(true);

            }]
        )

        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                // If path/state does not exist
                $urlRouterProvider.otherwise('/404');

                $stateProvider

                    .state('home', {
                        url: '/',
                        templateUrl: '/app/components/home/home.html',
                        controller: 'HomeController'
                    })
                    .state('trip', {
                        url: '/trip',
                        templateUrl: '/app/components/trip/trip.html'
                    })
                    .state('maketrip', {
                        url: '/maketrip',
                        templateUrl: '/app/components/maketrip/maketrip.html',
                        controller: 'drawMapController'
                    })
                    .state('tripview', {
                        url: '/tripview',
                        templateUrl: '/app/components/tripview/tripview.html'
                    })
            }]
        );

}());