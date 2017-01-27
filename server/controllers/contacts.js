console.log("entering contacts controller");
var nodemailer      = require('nodemailer');
var transporter     = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: 'translucentduck@hotmail.com', // Your email id
            pass: '21' // Your password
        }
    });

module.exports = {
    create: function(req, res) {
        var newcontact = req.body;
        transporter.sendMail(
        	{ 	from: 'translucentduck@hotmail.com',
                replyTo: newcontact.email,
                to: 'jpeters280@gmail.com',
                subject: newcontact.subject,
                text: 'from: ' + newcontact.firstName + ' ' + newcontact.lastName + "\r\n" + 'email: ' + newcontact.email + "\r\n" + 'Phone Number: ' + newcontact.phoneNumber + "\r\n\r\n" + newcontact.message
            },
            function(err){
                if(err)
                    console.log(err);
            });
            res.json({ success: "update success" }); // change later to simple success message
    }
    
}


// function contactsController(){
//   this.index = function(req,res){
//   	console.log("index method backend");

//     //your code here
//     res.json({placeholder:'index'});
//   };
//   this.create = function(req,res){
//   	console.log("create method backend");
//     //your code here
//     res.json({placeholder:'create'});
//   };
//   this.update = function(req,res){
//   	console.log("update method backend");
//     //your code here
//     res.json({placeholder:'update'});
//   };
//   this.delete = function(req,res){
//   	console.log("delete method backend");
//     //your code here
//     res.json({placeholder:'delete'});
//   };
//   this.show = function(req,res){
//   	console.log("show method backend");
//     //your code here
//     res.json({placeholder:'show'});
//   };
// }
// module.exports = new contactsController(); // this exports an object
