(function() {

    angular.module('opptur')

    .directive('googleplace', ['$rootScope', function($rootScope) {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, model) {
                var options = {
                    types: [],
                    componentRestrictions: {}
                };
                scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

                google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                    scope.$apply(function() {
                        model.$setViewValue(element.val());
                        var latitude = scope.gPlace.gm_accessors_.place.Rd.place.geometry.location.lat();
                        var longitude = scope.gPlace.gm_accessors_.place.Rd.place.geometry.location.lng();
                        $rootScope.tripSearchParams.latitude = latitude;
                        $rootScope.tripSearchParams.longitude = longitude;
                        map.setView([latitude, longitude], 8);
                    });
                });
            }
        };
    }])

    //$rootScope.tripSearchParams.latitude

    .controller('GooglePlaceController', ['$scope', GooglePlaceController]);

    function GooglePlaceController($scope) {
        $scope.gPlace;
    }

}());