// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( error, client ) =>  {

	if (error) {
		return console.log('unable to connect to server');
	}

	console.log('connected to mongo db server');

	// console.log(JSON.stringify(db, undefined, 4));

	// console.log(client.db);

	var db = client.db('TodoApp');

	// console.log(db);

	// db.collection('Todos').insertOne({
	// 	text:'something to do',
	// 	completed: false

	// }, (error, result) => {

	// 	if (error) {
	// 		return console.log('unable to insert todo');
	// 	}

	// 	console.log( JSON.stringify( result.ops, undefined, 4) );
	// });

	// db.collection('users').insertOne({
	// 	name: "andrew",
	// 	age: 25,
	// 	location: 'SF'
	// }, (err, result) => {

	// 	if (err) {
	// 		return console.log('unable to insert user ', err);
	// 	}

	// 	console.log(result.ops);
	// });

	// Close connection
	client.close()
});