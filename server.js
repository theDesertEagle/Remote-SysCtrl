// Module Imports
const express = require('express');
const hbs = require('hbs');

// Creating Express App
var app = express();

// Setting Handlebars as View Engine 
app.set('view engine', 'hbs');

// Serving Static Content in Public Dircetory
app.use(express.static(__dirname + '/public'));

// GET Route-Requests
app.get('/', (req, res) => {
	res.sendFile('views/index.html', {root: __dirname}, (err) => {
		if (err){
			console.log('<ERROR> \'index.html\' file error detected')
		}
	});
});

app.listen(3000, () => {
	console.log('|SUCCESS| Server running on port 3000');
});