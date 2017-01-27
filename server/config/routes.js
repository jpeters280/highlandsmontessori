var friendsController = require('../controllers/friends.js');
var contactsController = require('../controllers/contacts.js')

console.log("future routes loading");

module.exports = function(app){
	app.get("/friends", friendsController.index); // show all friends
	app.get("/friends/:id", friendsController.show); // show one friend
	app.post("/friends", friendsController.create); // create a new friend
	app.put("/friends/:id", friendsController.update); // update a friend info
	app.delete("/friends/:id", friendsController.delete); // delete a friend

	// app.get("/contacts", contactsController.index); // show all contacts
	// app.get("/contacts/:id", contactsController.show); // show one contact
	app.post("/contacts", contactsController.create); // create a new contact
	// app.put("/contacts/:id", contactsController.update); // update a contact info
	// app.delete("/contacts/:id", contactsController.delete); // delete a contact


}