const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( error, client ) =>  {

	if (error) {
		return console.log('Unable to find server');
	}

	console.log('connected to server');

	var db = client.db('TodoApp');

	// db.collection('Todos').find({
	// 		_id: new ObjectID('5bf18a44f398fd101bb71f2d')
	// 	}).toArray().then( ( docs ) => {

	// 	console.log("todos");
	// 	console.log( JSON.stringify(docs, undefined, 4) );

	// }, (err) => {

	// 	console.log('unable to fetch todos');

	// });

	db.collection('users').find().count().then( ( count ) => {

		console.log("todos count: ", count );
		// console.log( JSON.stringify(docs, undefined, 4) );

	}, (err) => {

		console.log('unable to fetch todos');

	});



	// client.close();
});