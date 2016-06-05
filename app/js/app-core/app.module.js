/**
 * Created by nmtuan on 05-Jun-16.
 */
var app = angular.module('app', ['ngRoute', 'appControllers', 'appBackend']);

app.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/landing', {
                templateUrl: 'view/landing.html'
            })
            .when('/sign-in', {
                template: '<sign-in></sign-in>'
            })
            .when('/sign-up', {
                template: '<sign-up></sign-up>'
            })
            .when('/profile', {
                template: '<profile></profile>'
            })
            .when('/profile/:profileId', {
                template: '<profile></profile>'
            })
            .otherwise({
                redirectTo: '/landing'
            });
    }]);

app.run(['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
    authService.onAuthStateChanged(function (user) {
        if (user)
            $location.path('/profile');
        else
            $location.path('/sign-in');

        $rootScope.$apply();
    });
}]);

//Load Components
$.loadScript('js/app-core/app.components.js');