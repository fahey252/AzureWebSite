// Based on: http://mongodb.github.io/node-mongodb-native/2.2/quick-start/

var MongoClient = require('mongodb').MongoClient,
    express = require('express'),
    assert = require('assert'),
    configs = require('dotenv').config(), // loads process.env
    port = process.env.port || 3000,
    app = express(),
    collectionName = 'users'

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection(collectionName);
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
};

var insertDocuments = function(db, callback) {
    // Get the users collection
    var collection = db.collection(collectionName);
    // Insert some users
    collection.insertMany([
        { a: 1 }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);
        console.log("Inserted 1 users into the collection");
        callback(result);
    });
};

app.get('/addItem', function(request, response) {
    // Use connect method to connect to the server
    MongoClient.connect(process.env.DB_ENDPOINT, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        // more operations can be found at: http://mongodb.github.io/node-mongodb-native/2.2/quick-start
        insertDocuments(db, function() {
            findDocuments(db, function() {
                db.close();

                response.json('Added Document to DocumentDB');
            });
        });
    });
});

var server = app.listen(port, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log('App running at //%s:%s', host, port);
});
