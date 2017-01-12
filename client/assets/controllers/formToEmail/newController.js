function formNewController($scope, $http) {
// create a blank object to hold our form information
// $scope will allow this to pass between controller and view
$scope.formData = {};
// process the form
$scope.processForm = function() {
$http({
       method  : 'POST',
           data    : $.param($scope.formData),  // pass in data as strings
       headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
   })
       .success(function(data) {
           console.log(data);
           if (!data.success) {
            // if not successful, bind errors to error variables
               $scope.errorName = data.errors.name;
               $scope.errorEmail = data.errors.email;
               $scope.errorPhone = data.errors.phone;
               $scope.errorSubject = data.errors.sub;
               $scope.errorMessage = data.errors.msg;
           } else {
            // if successful, bind success message to message
               $scope.message = data.message;
           }
       });
};
}