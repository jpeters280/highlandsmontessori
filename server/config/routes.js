var contactsController = require('../controllers/contacts.js')

module.exports = function(app){
	// app.get("/contacts", contactsController.index); // show all contacts
	// app.get("/contacts/:id", contactsController.show); // show one contact
	app.post("/contacts", contactsController.create); // create a new contact
	// app.put("/contacts/:id", contactsController.update); // update a contact info
	// app.delete("/contacts/:id", contactsController.delete); // delete a contact


}