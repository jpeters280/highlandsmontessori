app.controller('contactNewController', ['$scope','contactsFactory', '$location', function($scope, contactsFactory, $location) {

    $scope.create = function(){
        contactsFactory.createContact($scope.contact, function(){
            alert('your message has been sent');
            $location.url("/");
        });
    }
}]);