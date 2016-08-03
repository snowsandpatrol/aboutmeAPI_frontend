
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    $log.log($scope);
    
}]);

myApp.controller('profileController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    
    $scope.name = 'Profile';
//    $log.log($scope);
    console.log('Hello');
    
        $http({
            method : 'GET',            
            url : 'https://quiet-headland-89346.herokuapp.com/profile'
        }).then(function successCallback(response) {
            $scope.profile = response.data;
            console.log(response.data)
        }, function errorCallback(response) {
            console.log('dont work')

        });

    
}]);

myApp.controller('linksController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    
    $scope.name = 'Links';
//    $log.log($scope);
    console.log('Hello');

            $http({
            method : 'GET',            
            url : 'https://quiet-headland-89346.herokuapp.com/links'
        }).then(function successCallback(response) {
            $scope.links = response.data;
            console.log(response.data)
        }, function errorCallback(response) {
            console.log('dont work')

        });

}]);

myApp.controller('projectsController', ['$scope', '$log', '$routeParams', '$http', function($scope, $log, $routeParams, $http) {
    
    $scope.num = $routeParams.num || 1;
//    $log.log($scope);
    console.log('Projects');

                                        
            $http({
            method : 'GET',            
            url : 'https://quiet-headland-89346.herokuapp.com/project'
        }).then(function successCallback(response) {
            $scope.project = response.data;
            console.log(response.data)
        }, function errorCallback(response) {
            console.log('dont work')

        });

    
}]);

myApp.controller('educationController', ['$scope', '$log', '$routeParams', '$http', function($scope, $log, $routeParams, $http) {
    
    $scope.num = $routeParams.num || 1;
//    $log.log($scope);
    console.log('Education');

            $http({
            method : 'GET',            
            url : 'https://quiet-headland-89346.herokuapp.com/education'
        }).then(function successCallback(response) {
            $scope.education = response.data;
            console.log(response.data)
        }, function errorCallback(response) {
            console.log('dont work')

        });
    
    
}]);


myApp.controller('skillsController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    
    $scope.name = 'Skills';
//    $log.log($scope);
    console.log('Skills');
    

            $http({
            method : 'GET',            
            url : 'https://quiet-headland-89346.herokuapp.com/skills'
        }).then(function successCallback(response) {
            $scope.skills = response.data;
            console.log(response.data)
        }, function errorCallback(response) {
            console.log('dont work')

        });

    
}]);


myApp.controller('workController', ['$scope', '$log', '$routeParams', '$http', function($scope, $log, $routeParams, $http) {
    
    $scope.num = $routeParams.num || 1;
//    $log.log($scope);
    console.log('Work');
    
            $http({
            method : 'GET',            
            url : 'https://quiet-headland-89346.herokuapp.com/work'
        }).then(function successCallback(response) {
            $scope.work = response.data;
            console.log(response.data)
        }, function errorCallback(response) {
            console.log('dont work')

        });

    
}]);