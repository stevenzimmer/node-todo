const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( error, client ) =>  {

	if (error) {
		return console.log('Unable to find server');
	}

	console.log('connected to server');

	var db = client.db('TodoApp');

	// db.collection('Todos').deleteMany({
	// 	text: 'eat lunch'
	// }).then( (result) => {

	// 	console.log(result);

	// });

	// db.collection('Todos').deleteOne({

	// 	text: 'eat lunch'

	// }).then( (result) => {

	// 	console.log(result);

	// });

	db.collection('Todos').findOneAndDelete({
		completed: false
	}).then( (result) => {
		console.log(result);
	});



	// client.close();
});