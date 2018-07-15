// Module Imports
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// Environment Variables
var PORT = process.env.PORT || 3000;

// Creating Express App and Port Var
var app = express();

// Setting Handlebars as View Engine 
app.set('view engine', 'hbs');

// Enabling Handlebars Partials
hbs.registerPartials(__dirname + '/views/partials'); 

// Middleware Serving Static Content in Public Dircetory
app.use(express.static(__dirname + '/public'));

// Middleware Logging User Requests on Server End
app.use((req, res, next) => {
	var dateTime = new Date().toString();
	var logMsg = `${dateTime} :: ${req.method} :: ${req.url}`; 
	console.log(logMsg);
	fs.appendFile('server.log', logMsg + '\n', (err) => {
		if (err){
			console.log('<ERROR> \'server.log\' could not be updated');
		}
	});
	next();
});

// GET, POST Route-Requests Handling
app.get('/', (req, res) => {
	res.sendFile('views/index.html', {root: __dirname}, (err) => {
		if (err){
			console.log('<ERROR> \'index.html\' could not be sent')
		}
	});
});

app.post('/dashboard', (req, res) => {
	// res.send('|SUCCESS| Form received with basic validation');
	res.render('dashboard.hbs', {});
});

// Listening for Requests on Port 3000 
app.listen(PORT, () => {
	console.log('|SUCCESS| Server running on port 3000');
});