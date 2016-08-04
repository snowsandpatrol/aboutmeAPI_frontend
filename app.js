var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/profile', {
        templateUrl: 'pages/profile.html',
        controller: 'profileController'
    })
    
    .when('/links', {
        templateUrl: 'pages/links.html',
        controller: 'linksController'
    })
    
    
    .when('/projects', {
        templateUrl: 'pages/projects.html',
        controller: 'projectsController'
    })
    
    .when('/project/:num', {
        templateUrl: 'pages/projects.html',
        controller: 'projectsController'
    })
    
    .when('/skills', {
        templateUrl: 'pages/skills.html',
        controller: 'skillsController'
    })
    
        
    .when('/education', {
        templateUrl: 'pages/education.html',
        controller: 'educationController'
    })
    
    .when('/education/:num', {
        templateUrl: 'pages/education.html',
        controller: 'educationController'
    })
    
            
    .when('/work', {
        templateUrl: 'pages/work.html',
        controller: 'workController'
    })
    
    .when('/work/:num', {
        templateUrl: 'pages/work.html',
        controller: 'workController'
    });
    
    
});


