(function() {

    "use strict";

    angular.module('opptur')

    .controller('LoginController', ['$rootScope', '$http',
        function($rootScope, $http) {
            var vm = this;

            vm.credentials = {
                'email': '',
                'password': ''
            }
            vm.login = login;

            function login(credentials) {
                $http.post('/logIn', credentials)
                .then(
                    function(res) {
                        $rootScope.loggedIn = res.data.success;
                        sessionStorage.loggedIn = true;
                        sessionStorage.username = res.data.username;
                    },
                    function(err) {

                    }
                );
            }
        }
    ])
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