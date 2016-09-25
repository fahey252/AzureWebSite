var express = require('express'),
	router = express.Router(),
	database = require('./documentDBMongoDB');

router.get('/items', function (req, res) {
	database.getItems().then(function (items) {
		res.send(items);
	});
});

router.post('/items/add', function (req, res) {
	database.addItem(req.body).then(function (item) {
		res.send(item);
	});
});

router.delete('/items/delete/:id', function (req, res) {
	var id = req.params.id;

	database.deleteItemById(id).then(function (data) {
		res.send(data);
	});
});

module.exports = router;
