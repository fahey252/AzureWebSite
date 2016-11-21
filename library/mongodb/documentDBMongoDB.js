// Based on: http://mongodb.github.io/node-mongodb-native/2.2/quick-start

var mongodb = require('mongodb'),
	MongoClient = mongodb.MongoClient,
	assert = require('assert'),
	Promise = require('promise'),
	dbEndpoint = process.env.DB_ENDPOINT,
	collectionName = 'users',
	database = {};

var findDocuments = function (db, callback) {
	var collection = db.collection(collectionName);

	collection.find({}).toArray(function (err, docs) {
		assert.equal(err, null);
		callback(docs);
	});
};

var addItem = function (db, item, callback) {
	var collection = db.collection(collectionName);

	collection.insertMany([item], function (err, result) {
		console.log("Inserted items into the collection.");
		callback(result);
	});
};

var removeDocumentById = function (db, id, callback) {
	var collection = db.collection(collectionName),
		payload = {
			_id: new mongodb.ObjectId(id)
		};

	collection.deleteOne(payload, function (err, result) {
		console.log("Removed an item from the collection.");
		callback(result);
	});
};

database.getItems = function () {
	return new Promise(function (fulfill, reject) {
		MongoClient.connect(dbEndpoint, function (err, db) {
			assert.equal(null, err);

			findDocuments(db, function (items) {
				db.close();

				fulfill(items);
			});
		});
	});

};

database.addItem = function (item) {
	return new Promise(function (fulfill, reject) {
		MongoClient.connect(dbEndpoint, function (err, db) {
			assert.equal(null, err);

			addItem(db, item, function (itemAdded) {
				db.close();

				fulfill(itemAdded);
			});
		});
	});
};

database.deleteItemById = function (id) {
	return new Promise(function (fulfill, reject) {
		MongoClient.connect(dbEndpoint, function (err, db) {
			assert.equal(null, err);

			removeDocumentById(db, id, function (itemAdded) {
				db.close();

				fulfill(itemAdded);
			});
		});
	});
};

module.exports = database;
