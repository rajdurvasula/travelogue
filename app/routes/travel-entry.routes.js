module.exports = app => {
	const controller = require('./../controllers/travel-entry.controller.js');
	var router = require('express').Router();
	// create travel entry
	router.post('/', controller.create);
  // find by id
  router.get('/:id', controller.findOne);
  // find by country
  router.get('/:country', controller.findByCountry);	
  // find all
  router.get('/', controller.findAll);
  app.use('/api/travelogue', router);
};
