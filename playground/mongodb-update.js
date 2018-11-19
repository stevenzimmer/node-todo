const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect( 'mongodb://localhost:27017/TodoApp', ( error, client ) =>  {

	if (error) {
		return console.log('Unable to find server');
	}

	console.log('connected to server');

	var db = client.db('TodoApp');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5bf18a2f3ed9ec101632f5c4')
	}, {
		$set: {
			completed: true
		}
	},  {
		returnOriginal: false
	}).then( (result) => {
		console.log(result);
	});

	// client.close();
});