(function() {

    "use strict";

    angular.module('opptur')

    .directive('loginpopup', [
            function() {
                return {
                    restrict: 'E',
                    replace: false,
                    templateUrl: '/app/components/login/directives/loginpopup/loginpopup.html'
                };
            }
        ]
    );

}());