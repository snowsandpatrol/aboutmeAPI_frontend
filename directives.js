//DIRECTIVES
myApp.directive("template", function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/myApp.html',
        replace: true,
        scope: {
            date: "="
        }
    }
    
})
