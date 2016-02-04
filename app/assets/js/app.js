/*
 * app.js
 *
 * Definition der Web Applikation und ihrer Abhängigkeiten, sowie Konfiguration (Routing).
 */
var studysearchApp = angular.module('studysearchApp', ['ngMaterial', 'ngRoute', 'leaflet-directive', 'angular-loading-bar', 'ngAnimate']);

studysearchApp.constant("studysearchConfig", {
    //"sparqlEndpoint": "http://fbwsvcdev.fh-brandenburg.de:8080/fuseki/biseAPITestData/query"
    "sparqlEndpoint": "http://fbwsvcdev.fh-brandenburg.de:8080/fuseki/EduGraph/query",
    "cacheSPARQLQueries": true
});

/*
 * Konfiguration des Log Provider
 */
studysearchApp.config(function($logProvider){
    $logProvider.debugEnabled(false);
});

/*
 * Konfiguration des Routing.
 */
studysearchApp.config(function ($routeProvider, $locationProvider) {
    // HTML Mode
    $locationProvider.html5Mode(true);

    // Route Provider
    $routeProvider
        .when('/', {
            templateUrl: 'templates/map.tpl.html',
            controller: 'MapCtrl'
        })
        .when('/university/:universityUri', {
            templateUrl: 'templates/university.tpl.html',
            controller: 'UniversityCtrl'
        })
        .when('/search/:query', {
            templateUrl: 'templates/searchResults.tpl.html',
            controller: 'SearchCtrl'
        })
        .when('/map', {
            templateUrl: 'templates/map.tpl.html',
            controller: 'MapCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

/*
 * Konfiguration des Angular Material Themes.
 */
studysearchApp.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default');
    /*    .primaryPalette('deep-orange')
        .accentPalette('deep-orange')
        .warnPalette('deep-orange')
        .backgroundPalette('deep-orange');*/
});

/*
 * Konfiguration des Ladebalkens.
 */
studysearchApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);