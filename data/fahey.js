'use strict';
var Mockgen = require('./mockgen.js'),
	mongo = require('../library/mongodb/documentDBMongoDB');
/**
 * Operations on /fahey
 */
module.exports = {
    /**
     * summary:
     * description:
     * parameters:
     * produces: application/json, text/json
     * responses: 200
     * operationId: fahey_get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */

			//test
			/*
            Mockgen().responses({
                path: '/fahey',
                operation: 'get',
                response: '200'
            }, callback); */

			mongo.getItems().then((data) => {
				res.json(data);
				callback();
			}).catch((fail) => {
				res.json(fail);
			});
        }
    }
};
