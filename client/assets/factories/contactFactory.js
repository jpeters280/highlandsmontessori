app.factory('contactsFactory', ['$http', function($http){
    var factory = {};
    var contacts = [];
    var contact = [];

    factory.createContact = function(newContact, callback){
        $http.post("/contacts", newContact).then(function(returned_data){
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    };
    
    return factory;
}]);