var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use( bodyParser.json() );

app.post('/todos', ( request, response ) => {

	var todo = new Todo({
		text: request.body.text
	});

	todo.save().then( (doc) => {

		response.send(doc)

	}, (e) => {
		response.send(e);
	});

	console.log(request.body);

});

app.listen(3000, () => {
	console.log('started on port 3000');
});