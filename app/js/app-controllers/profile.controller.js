/**
 * Created by nmtuan on 06-Jun-16.
 */
appControllers.controller('profileController', ['$scope', '$location', '$routeParams', 'authService', 'dataService',
    function ($scope, $location, $routeParams, authService, dataService) {

        var listenerRef;
        var hasParam = ($routeParams.profileId)? true : false;
        var userId = (hasParam)? $routeParams.profileId : authService.getCurrentUser().uid;

        listenerRef = dataService.bind('users/' + userId, function (snapshot) {
            if (snapshot.exists()) {

                var data = snapshot.val();
                $scope.name = data.name;
                $scope.industry = data.industry;
                $scope.$apply();
            }
            else if (hasParam) {
                dataService.unbind('users/' + userId, listenerRef);
                $location.path('/profile');
                $scope.$apply();
            }
        })
        
    }]);