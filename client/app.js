var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
    
// ------------------Views

    .when('/', {
        templateUrl: '/partials/views/home.html'
    })
    .when('/philosophy', {
        templateUrl: '/partials/views/philosophy.html'
    })
    .when('/ourStaff', {
        templateUrl: '/partials/views/ourStaff.html'
    })
    .when('/dailySchedule', {
        templateUrl: '/partials/views/dailySchedule.html'
    })
    .when('/developmentalreadiness', {
        templateUrl: '/partials/views/developmentalReadiness.html'
    })
    .when('/admissionsprocess', {
        templateUrl: '/partials/views/admissionsProcess.html'
    })
    .when('/photos', {
        templateUrl: '/partials/views/photos.html'
    })
    .when('/calendar', {
        templateUrl: '/partials/views/calendar.html'
    })
    .when('/formsresources', {
        templateUrl: '/partials/views/formsResources.html'
    })
    .when('/curriculum', {
        templateUrl: '/partials/views/curriculum.html'
    })
    .when('/contactus', {
        templateUrl: '/partials/views/contactUs.html',
        controller: 'contactNewController'
    })

// ------------------End Views

    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
    
});

    
