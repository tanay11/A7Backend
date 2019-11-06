const express = require('express')
// import cors from "cors";
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const smtpTransport = require('nodemailer-smtp-transport');
const sendgrid = require('sendgrid')("tanaymainkar25", "tannu#209141")
const fs = require('fs')
const http = require('http')
const path = require('path')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
};

app.use([express.json(), cors, bodyParser.urlencoded({ extended: false })]);


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
	console.log(process.env.USERNAME)
	return res.status(200).send({
		message: "YAY! Congratulations! Your first endpoint is working"
	});
});


// app.post("/api/form", (req, res) => {
// 	//res.send(bodyParser(req));
// 	//console.log(bodyParser(req));
// 	console.log("Alag sa identify", req.body.email)
// 	sendgrid.send({
// 		to:"tanaymainker25@gmail.com",
// 		from:"tanaymainkar25@gmail.com",
// 		subject:"Hello World",
// 		text:"Try karte hai"
// 	},function(err,res){
// 		if(err){
// 			console.log("ab kaise hoga",err)
// 		}
// 		else{
// 			console.log("chal k dikha de",res)
// 		}
// 	})
// });

app.post("/api/form", (req, res) => {
	//res.send(bodyParser(req));
	//console.log(bodyParser(req));
	console.log("Alag sa identify", req.body.email)
	res.setHeader("Content-Type", "application/json");
	res.write("you posted:\n");
	res.end(JSON.stringify(req.body, null, 2));
	var transporter = nodemailer.createTransport(sgTransport({
		pool: true,
		host: "smtp.sendgrid.net",
		port: 587,
		secure: false,
		auth: {
			api_user: process.env.api_user,
			api_key: process.env.api_key
		}
	}));
	const mailOptions = {
		from: "a7.nasik@gmail.com", // sender address
		to: req.body.email,
		cc: "tanaymainker25@gmail.com",
		subject: "Registration successful", // Subject line
		html: `<div><h2>Lucian Paints Welcomes You..</h2> <br/>Details -  ${JSON.stringify(req.body)}</div>`

		// plain text body
	};
	transporter.sendMail(mailOptions, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});
	// verify connection configuration
	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log("Server is ready to take our messages", success);
		}
	});
});


// var helper = require('sendgrid').mail;
// var from_email = new helper.Email('tanaymainkar25@gmail.com');
// var to_email = new helper.Email('tanaymainker25@gmail.com');
// var subject = 'Hello World from the SendGrid Node.js Library!';
// var content = new helper.Content('text/plain', 'Hello, Email!');
// var mail = new helper.Mail(from_email, subject, to_email, content);

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/api/form',
//   body: mail.toJSON(),
// });

// sg.API(request, function(error, response) {
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// });

if (process.env.NODE_ENV === "production") {
	// app.use(express.static('Frontend/build'));
	// app.get('*', (req, res) => {
	// 	res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"))
	// })
}

const port = process.env.PORT || 5000;
app.listen(port);
console.log("app running on port ", port);
